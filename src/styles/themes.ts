import ColorBase from '@/styles/colors';

export const LightThemes = {
    main: {
        navbar: {
            backgroundColor: ColorBase.white,
            fontColor: ColorBase.blue300,
            borderBottomColor: ColorBase.blue300,
            itemColorHovered: ColorBase.blue150,
        },
        postDetail: {
            titleBackgroundColor: ColorBase.blue350,
            titleFontColor: ColorBase.white,
        }
    },
    markdown: {
        h1: {
            backgroundColor: ColorBase.white,
            fontColor: ColorBase.black999,
            borderLineColor: ColorBase.blue300,
        },
        blockquote: {
            normalBackgroundColor: ColorBase.blue12,
            hoveredBackgroundColor: ColorBase.blue25,
            borderColor: ColorBase.blue300,
        },
        strong: {
            fontColor: ColorBase.red300,
        },
        del: {
            lineColor: ColorBase.red300,
        },
        a: {
            normalFontColor: ColorBase.blue200,
            hoveredFontColor: ColorBase.red250,
        }
    },
    footer: {
        backgroundColor: ColorBase.blue300,
        fontColor: ColorBase.white,
    },
    tag: {
        normalBackgroundColor: ColorBase.blue12,
        normalFontColor: ColorBase.blue300,
        hoveredBackgroundColor: ColorBase.blue350,
        hoveredFontColor: ColorBase.white,
        borderColor: ColorBase.blue300,
    }
}

export const DarkThemes = {
}
