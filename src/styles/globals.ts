import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Hahmlet', serif;
        font-weight: 300;
        background-color: ${(props) => props.theme.global.backgroundColor};
        color: ${(props) => props.theme.global.fontColor};
        font-size: 1.1em;
        line-height: 1.6;
        
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    
    body {
        margin-top: 70px;
        margin-left: 0;
        margin-right: 0;
    }
    ::-webkit-scrollbar {
        width: 16px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.scrollBar.commonColor};
        border-radius: 12px;
        background-clip: padding-box;
        border: 4px solid transparent;
    }
    ::-webkit-scrollbar-track {
        background-color: ${(props) => props.theme.scrollBar.commonBackgroundColor};
        border-radius: 12px;
    }
    
    h1 h2 h3 h4 h5 {
        background-color: ${(props) => props.theme.markdown.h1.backgroundColor};
        color: ${(props) => props.theme.markdown.h1.fontColor};
    }
    
    h1 {
        border-bottom: 1px solid ${(props) => props.theme.markdown.h1.borderLineColor};
        border-left: 10px solid ${(props) => props.theme.markdown.h1.borderLineColor};
        padding-left: 10px;
        padding-bottom: 10px;
        font-size: 1.7em;
      
        transition: border-left-color 0.5s ease, border-bottom-color 0.5s ease;
      
    }
    
    h2 {
        font-size: 1.5em;
    }
    h3 {
        font-size: 1.2em;
    }
    h4 {
        font-size: 1em;
    }
    h5 {
        font-size: 1em;
    }
    
    code {
        font-family: 'Nanum Gothic Coding', cursive;
        background-color: ${(props) => props.theme.markdown.code.backgroundColor};
        color: ${(props) => props.theme.markdown.code.fontColor};
        border-radius: 3px;
        padding: 5px;
        white-space: pre-wrap;
        font-size: 0.8em;
        line-height: 70%;
      
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    
    pre {
        background-color: ${(props) => props.theme.markdown.pre.backgroundColor};
        padding: 15px;
        border: 10px solid ${(props) => props.theme.markdown.pre.borderColor};
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        word-break:break-all;
      
        transition: border 0.5s ease;

        code {
          border-radius: 0;
          background-color: #3f3f3f;
          color: white;
          font-size: 0.9em;
          padding: 0;
          line-height: 140%;
        }
    }
    
    strong {
        color: ${(props) => props.theme.markdown.strong.fontColor};
    }
    
    blockquote {
        padding: 0 20px 0 20px;
        margin-left: 0;
        border-left: 7px solid ${(props) => props.theme.markdown.blockquote.borderColor};
        background-color: ${(props) => props.theme.markdown.blockquote.normalBackgroundColor};
        white-space: pre-wrap;
        transition: background-color 0.2s;
      
        &:hover {
            background-color: ${(props) => props.theme.markdown.blockquote.hoveredBackgroundColor};
        }
    }
    
    del {
      text-decoration-color: ${(props) => props.theme.markdown.del.lineColor};
    }
    
    a {
        color: ${(props) => props.theme.markdown.a.normalFontColor};
        transition: color 0.3s;
        &:hover {
            color: ${(props) => props.theme.markdown.a.hoveredFontColor};
        }
    }
    
    table {
        background-color: ${(props) => props.theme.markdown.table.backgroundColor};
        color: ${(props) => props.theme.markdown.table.fontColor};
        text-align: center;
      
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    thead tr {
        background-color: ${(props) => props.theme.markdown.thead.backgroundColor};
        color: ${(props) => props.theme.markdown.thead.fontColor};
      
        transition: background-color 0.5s ease, color 0.5s ease;
    }
    td, th {
        padding: 5px 20px 5px 20px;
    }
    
    .default-layout {
    }

    .footer {
      height: 150px;
      background-color: ${(props) => props.theme.footer.backgroundColor};

      transition: background-color 0.5s ease;

      p {
        color: ${(props) => props.theme.footer.fontColor};
        font-size: 0.7em;
        text-decoration: none;
      }
    }
`;