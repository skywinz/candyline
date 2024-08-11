export const getSocials = async () => {
    const res = await fetch('/api/socials');
    if (res.ok) {
        const data = await res.json();
        const socials: object[] = data.socials;
        return socials.map((value: any): Social => {
            return {
                name: value.name,
                url: value.url,
            }
        });
    }
}