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
        },
        postList: {
            postItemBackgroundColor: ColorBase.white,
            postItemHoveredBackgroundColor: ColorBase.blue12,
            postItemTitleColor: ColorBase.blue300,
            postItemSeriesBackgroundColor: ColorBase.blue250,
            postItemSeriesFontColor: ColorBase.white,
        },
        seriesList: {
            itemBackgroundColor: ColorBase.white,
            hoveredItemBackgroundColor: ColorBase.blue12,
            itemTitleColor: ColorBase.blue300,
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
        },
        table: {
            backgroundColor: ColorBase.blue12,
            fontColor: ColorBase.black999,
        },
        thead: {
            backgroundColor: ColorBase.blue250,
            fontColor: ColorBase.white,
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
    }
}

export const DarkThemes = {
}
