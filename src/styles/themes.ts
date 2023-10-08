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
            seriesFontColor: ColorBase.black999,
            hoveredSeriesFontColor: ColorBase.red200,
        },
        postList: {
            postListItemSummaryFontColor: ColorBase.gray150,
            postItemBorderColor: ColorBase.red150,
            postItemBackgroundColor: ColorBase.white,
            postItemTitleColor: ColorBase.blue300,
            postItemTitleHoveredColor: ColorBase.red250,
            postItemSeriesFontColor: ColorBase.black999,
            postItemSeriesFontColorHovered: ColorBase.red250,
            postItemShadowColorHovered: ColorBase.red50,
        },
        seriesList: {
            itemBorderColor: ColorBase.red150,
            itemBackgroundColor: ColorBase.white,
            itemTitleColor: ColorBase.blue300,
            itemTitleColorHovered: ColorBase.red250,
            itemShadowColorHovered: ColorBase.red50,
        },
        seriesDetail: {
            postItemBackgroundColor: ColorBase.white,
            postItemBackgroundColorHovered: ColorBase.red25,
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
