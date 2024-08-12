import {create} from 'zustand';
import {persist} from 'zustand/middleware';


type SocialStatus = {
    socials: Social[],
    expiredAt: Date | null;
    expiredLength: number;  // 분단위
    isExpired: () => boolean;
    calculateExpiredDate: () => Date;
    update: (socials: Social[]) => void;
}

const useSocialStatus = create(
    persist<SocialStatus>(
        (set, get) => ({
            socials: [],
            expiredAt: null,
            expiredLength: 60,
            isExpired: () => {
                let expiredAt = get().expiredAt;
                if (expiredAt !== null) {
                    expiredAt = new Date(expiredAt.toLocaleString("en-US", {timeZone: "Asia/Seoul"}));
                }
                return expiredAt === null || expiredAt < new Date();
            },
            update: (socials) => set((state) => ({
                ...state,
                expiredAt: get().calculateExpiredDate(),
                socials
            })),
            calculateExpiredDate: () => {
                const expiredAt = new Date();
                expiredAt.setMinutes(expiredAt.getMinutes() + get().expiredLength);
                return expiredAt;
            }
        }),
        {
            name: "socialStatus"
        }
    )
);

export default useSocialStatus;