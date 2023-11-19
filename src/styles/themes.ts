import ColorBase from '@/styles/colors';
import {types} from 'sass';
import Color = types.Color;

export const LightThemes = {
    global: {
        backgroundColor: ColorBase.white,
        fontColor: ColorBase.black100,

        themeButton: {
            backgroundColor: ColorBase.white,
            iconColor: ColorBase.blue300,
        }
    },
    main: {
        navbar: {
            backgroundColor: ColorBase.white,
            fontColor: ColorBase.blue300,
            borderBottomColor: ColorBase.blue300,
            itemColorHovered: ColorBase.blue150,
            shadowColor: ColorBase.blue50,
        },
        sidebar: {
            backgroundColor: ColorBase.white,
            borderColor: ColorBase.blue250,
            itemColor: ColorBase.black999,
            hoveredItemColor: ColorBase.red200,
            buttonBackgroundColor: ColorBase.blue250,
            buttonFontColor: ColorBase.white,
            buttonHoveredBackgroundColor: ColorBase.blue350,
            postSearchBackgroundColor: ColorBase.white,
            postSearchFontColor: ColorBase.black999,
        },
        postDetail: {
            titleBackgroundColor: ColorBase.blue350,
            titleFontColor: ColorBase.white,
            seriesFontColor: ColorBase.black999,
            hoveredSeriesFontColor: ColorBase.red200,
            pageMovingButtonBackgroundColor: ColorBase.white,
            pageMovingButtonBorderColor: ColorBase.blue12,
            pageMovingButtonHoveredBackgroundColor: ColorBase.blue12,
            pageMovingButtonIconColor: ColorBase.blue250,
            pageMovingButtonFontColor: ColorBase.blue200,
            pageMovingButtonTitleFontColor: ColorBase.black50,
            readingProgressBarBackgroundColor: ColorBase.red350,
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
            postItemShadowColor: 'rgba(99, 99, 99, 0.2)',
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
            postItemFontColor: ColorBase.blue250,
        },
        tagDetail: {
            headerTitleBackgroundColor: ColorBase.blue300,
            headerTitleFontColor: ColorBase.white,
            headerTagnameFontColor: ColorBase.blue300,
            postItemFontColor: ColorBase.blue250,
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
        backgroundColor: ColorBase.blue300,
        fontColor: ColorBase.white,
    },
    tag: {
        normalBackgroundColor: ColorBase.blue12,
        normalFontColor: ColorBase.blue300,
        hoveredBackgroundColor: ColorBase.blue350,
        hoveredFontColor: ColorBase.white,
    },
    scrollBar: {
        commonBackgroundColor: ColorBase.blue12,
        commonColor: ColorBase.blue200,
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
