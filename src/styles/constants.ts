


const dpc = {
    top: '10px',
    right: '600px',
    bottom: '100px',
    left: '600px',
}

const DPC = {
    OVER_QHD: {
        top: '10px',
        right: '600px',
        bottom: '100px',
        left: '600px',
    },
    FHD: {
        top: '10px',
        right: '400px',
        bottom: '100px',
        left: '400px',
    },
    MOBILE: {
        top: '10px',
        right: '40px',
        bottom: '100px',
        left: '40px',
    }
}

export const LENGTH_FHD = 1920;
export const LENGTH_MOBILE = 768;

export const DEFAULT_PADDING = {
    OVER_QHD: `${DPC.OVER_QHD.top} ${DPC.OVER_QHD.right} ${DPC.OVER_QHD.bottom} ${DPC.OVER_QHD.left}`,
    FHD: `${DPC.FHD.top} ${DPC.FHD.right} ${DPC.FHD.bottom} ${DPC.FHD.left}`,
    MOBILE: `${DPC.MOBILE.top} ${DPC.MOBILE.right} ${DPC.MOBILE.bottom} ${DPC.MOBILE.left}`,
}

export const NAVBAR_PADDING = {
    OVER_QHD: `0 ${DPC.OVER_QHD.right} 0 ${DPC.OVER_QHD.left}`,
    FHD: `0 ${DPC.FHD.right} 0 ${DPC.FHD.left}`,
    MOBILE: `0 ${DPC.MOBILE.right} 0 ${DPC.MOBILE.left}`,
}

export const FOOTER_PADDING = {
    OVER_QHD: `20px ${DPC.OVER_QHD.right} 0 ${DPC.OVER_QHD.left}`,
    FHD: `20px ${DPC.FHD.right} 0 ${DPC.FHD.left}`,
    MOBILE: `20px ${DPC.MOBILE.right} 0 ${DPC.MOBILE.left}`,
}

export const SIDEBAR_MOVE_TIME = 0.8;
