import ColorBase from '@/styles/colors';
import {types} from 'sass';
import Color = types.Color;

export const LightThemes = {
    global: {
        backgroundColor: ColorBase.white,
        fontColor: ColorBase.black100,

        themeButton: {
            backgroundColor: ColorBase.white,
            iconColor: ColorBase.black100,
        }
    },
    main: {
        navbar: {
            backgroundColor: ColorBase.white,
            fontColor: ColorBase.black100,
            borderBottomColor: ColorBase.black100,
            itemColorHovered: ColorBase.red250,
            shadowColor: ColorBase.gray50,
            menuIconColor: ColorBase.black100,
        },
        sidebar: {
            backgroundColor: ColorBase.white,
            borderColor: ColorBase.gray150,
            itemColor: ColorBase.black999,
            hoveredItemColor: ColorBase.red200,
            buttonBackgroundColor: ColorBase.red300,
            buttonFontColor: ColorBase.white,
            buttonHoveredBackgroundColor: ColorBase.red350,
            postSearchBackgroundColor: ColorBase.white,
            postSearchFontColor: ColorBase.black999,
        },
        postDetail: {
            titleBackgroundColor: ColorBase.black100,
            titleFontColor: ColorBase.white,
            seriesFontColor: ColorBase.black999,
            hoveredSeriesFontColor: ColorBase.red200,
            pageMovingButtonBackgroundColor: ColorBase.white,
            pageMovingButtonBorderColor: ColorBase.black100,
            pageMovingButtonHoveredBackgroundColor: ColorBase.gray12,
            pageMovingButtonIconColor: ColorBase.black100,
            pageMovingButtonFontColor: ColorBase.black100,
            pageMovingButtonTitleFontColor: ColorBase.black50,
            readingProgressBarBackgroundColor: ColorBase.red300,
        },
        postList: {
            postListItemSummaryFontColor: ColorBase.gray150,
            postItemBorderColor: ColorBase.red300,
            postItemBackgroundColor: ColorBase.white,
            postItemTitleColor: ColorBase.black100,
            postItemTitleHoveredColor: ColorBase.red250,
            postItemSeriesFontColor: ColorBase.black999,
            postItemSeriesFontColorHovered: ColorBase.red250,
            postItemShadowColorHovered: ColorBase.red50,
            postItemShadowColor: 'rgba(99, 99, 99, 0.2)',
        },
        seriesList: {
            itemBorderColor: ColorBase.red300,
            itemBackgroundColor: ColorBase.white,
            itemTitleColor: ColorBase.black100,
            itemTitleColorHovered: ColorBase.red250,
            itemShadowColorHovered: ColorBase.red50,
        },
        seriesDetail: {
            postItemBackgroundColor: ColorBase.white,
            postItemBackgroundColorHovered: ColorBase.red25,
            postItemFontColor: ColorBase.blue250,
        },
        tagDetail: {
            headerTitleBackgroundColor: ColorBase.black50,
            headerTitleFontColor: ColorBase.white,
            headerTagnameFontColor: ColorBase.black50,
            postItemFontColor: ColorBase.black50,
        }
    },
    markdown: {
        h1: {
            backgroundColor: ColorBase.white,
            fontColor: ColorBase.black100,
            borderLineColor: ColorBase.red300,
        },
        blockquote: {
            normalBackgroundColor: ColorBase.red25,
            hoveredBackgroundColor: ColorBase.red50,
            borderColor: ColorBase.red300,
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
            backgroundColor: ColorBase.gray12,
            fontColor: ColorBase.black999,
        },
        thead: {
            backgroundColor: ColorBase.black999,
            fontColor: ColorBase.white,
        },
        code: {
            backgroundColor: ColorBase.navajowhite,
            fontColor: ColorBase.orange200,
        },
        pre: {
            backgroundColor: '#3f3f3f',
            borderColor: '#AFD2F066',
            boxShadowColor: 'rgba(0, 0, 0, 0.15)',
        },
    },
    footer: {
        backgroundColor: ColorBase.black100,
        fontColor: ColorBase.white,
    },
    tag: {
        normalBackgroundColor: ColorBase.red25,
        normalFontColor: ColorBase.red300,
        hoveredBackgroundColor: ColorBase.red350,
        hoveredFontColor: ColorBase.white,
    },
    scrollBar: {
        commonBackgroundColor: ColorBase.gray12,
        commonColor: ColorBase.black100,
    }
}

export const DarkThemes = {
    global: {
        backgroundColor: ColorBase.black100,
        fontColor: ColorBase.gray25,

        themeButton: {
            backgroundColor: ColorBase.black50,
            iconColor: ColorBase.yellow50,
        }
    },
    main: {
        navbar: {
            backgroundColor: ColorBase.black50,
            fontColor: ColorBase.darkyellow50,
            borderBottomColor: ColorBase.yellow250,
            itemColorHovered: ColorBase.yellow100,
            shadowColor: ColorBase.yellow200,
            menuIconColor: ColorBase.yellow200,
        },
        sidebar: {
            backgroundColor: ColorBase.black50,
            borderColor: ColorBase.yellow250,
            itemColor: ColorBase.gray25,
            hoveredItemColor: ColorBase.blue50,
            buttonBackgroundColor: ColorBase.yellow100,
            buttonFontColor: ColorBase.black50,
            buttonHoveredBackgroundColor: ColorBase.yellow250,
            postSearchBackgroundColor: ColorBase.black50,
            postSearchFontColor: ColorBase.yellow50,
        },
        postDetail: {
            titleBackgroundColor: ColorBase.darkyellow50,
            titleFontColor: ColorBase.black100,
            seriesFontColor: ColorBase.darkyellow50,
            hoveredSeriesFontColor: ColorBase.blue50,
            pageMovingButtonBackgroundColor: ColorBase.black50,
            pageMovingButtonBorderColor: ColorBase.black50,
            pageMovingButtonHoveredBackgroundColor: ColorBase.black100,
            pageMovingButtonIconColor: ColorBase.yellow150,
            pageMovingButtonTitleFontColor: ColorBase.gray50,
            pageMovingButtonFontColor: ColorBase.yellow150,
            readingProgressBarBackgroundColor: ColorBase.yellow150,
        },
        postList: {
            postListItemSummaryFontColor: ColorBase.gray25,
            postItemBorderColor: ColorBase.yellow100,
            postItemBackgroundColor: ColorBase.black25,
            postItemTitleColor: ColorBase.yellow150,
            postItemTitleHoveredColor: ColorBase.red250,
            postItemSeriesFontColor: ColorBase.blue50,
            postItemSeriesFontColorHovered: ColorBase.red250,
            postItemShadowColorHovered: ColorBase.blue50,
            postItemShadowColor: ColorBase.gray25,
        },
        seriesList: {
            itemBorderColor: ColorBase.blue50,
            itemBackgroundColor: ColorBase.black25,
            itemTitleColor: ColorBase.yellow150,
            itemTitleColorHovered: ColorBase.blue150,
            itemShadowColorHovered: ColorBase.yellow50,
        },
        seriesDetail: {
            postItemBackgroundColor: ColorBase.black100,
            postItemBackgroundColorHovered: ColorBase.black25,
            postItemFontColor: ColorBase.yellow50,
        },
        tagDetail: {
            headerTitleBackgroundColor: ColorBase.yellow50,
            headerTitleFontColor: ColorBase.black100,
            headerTagnameFontColor: ColorBase.yellow50,
            postItemFontColor: ColorBase.yellow50,
        },
    },
    markdown: {
        h1: {
            backgroundColor: ColorBase.black100,
            fontColor: ColorBase.gray25,
            borderLineColor: ColorBase.yellow100,
        },
        blockquote: {
            normalBackgroundColor: ColorBase.black50,
            hoveredBackgroundColor: ColorBase.black999,
            borderColor: ColorBase.yellow250,
        },
        strong: {
            fontColor: ColorBase.yellow150,
        },
        del: {
            lineColor: ColorBase.yellow200,
        },
        a: {
            normalFontColor: ColorBase.blue200,
            hoveredFontColor: ColorBase.red250,
        },
        table: {
            backgroundColor: ColorBase.black50,
            fontColor: ColorBase.gray25,
        },
        thead: {
            backgroundColor: ColorBase.yellow100,
            fontColor: ColorBase.black999,
        },
        code: {
            backgroundColor: ColorBase.black50,
            fontColor: ColorBase.red50,
        },
        pre: {
            backgroundColor: '#3f3f3f',
            borderColor: ColorBase.darkyellow50,
            boxShadowColor: 'rgba(0, 0, 0, 0.15)',
        },
    },
    footer: {
        backgroundColor: ColorBase.black50,
        fontColor: ColorBase.white,
    },
    tag: {
        normalBackgroundColor: ColorBase.black50,
        normalFontColor: ColorBase.yellow50,
        hoveredBackgroundColor: ColorBase.yellow150,
        hoveredFontColor: ColorBase.black100,
    },
    scrollBar: {
        commonBackgroundColor: ColorBase.darkyellow50,
        commonColor: ColorBase.yellow150,
    }
}
