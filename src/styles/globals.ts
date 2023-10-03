import {createGlobalStyle} from 'styled-components';
import {defaultLayoutPadding, footerPadding} from '@/styles/constants';

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Hahmlet', serif;
        font-size: 1.2em;
        font-weight: 300;
    }
    
    body {
        margin-top: 70px;
        margin-left: 0;
        margin-right: 0;
    }
    
    h1 {
        width: 100%;
        background-color: ${(props) => props.theme.markdown.h1.backgroundColor};
        color: ${(props) => props.theme.markdown.h1.fontColor};
        border-bottom: 1px solid ${(props) => props.theme.markdown.h1.borderLineColor};
        border-left: 10px solid ${(props) => props.theme.markdown.h1.borderLineColor};
        padding-left: 10px;
        padding-bottom: 10px;
    }
    
    code {
        font-family: 'Nanum Gothic Coding', cursive;
        background-color: navajowhite;
        border-radius: 3px;
        padding: 5px;
        white-space: pre-wrap;
        font-size: 0.8em;
        line-height: 70%;
        color: orangered;
    }
    
    pre {
        background-color: #3f3f3f;
        padding: 15px;
        border: 10px solid #AFD2F066;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

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
    }
    thead tr {
        background-color: ${(props) => props.theme.markdown.thead.backgroundColor};
        color: ${(props) => props.theme.markdown.thead.fontColor};
    }
    td, th {
        padding: 5px 20px 5px 20px;
    }
    
    .default-layout {
        padding: ${defaultLayoutPadding};
    }
    
    .footer {
        height: 150px;
        background-color: ${(props) => props.theme.footer.backgroundColor};
        padding: ${footerPadding};
      
        p {
          color: ${(props) => props.theme.footer.fontColor};
          font-size: 0.7em;
          text-decoration: none;
        }
    }
`;