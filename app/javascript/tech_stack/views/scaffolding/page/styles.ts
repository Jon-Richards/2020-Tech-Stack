import { css } from '@emotion/core';
import { DESIGN_TOKEN } from '../../../config/design_token';

/**
 * Resets default browser styles, providing a clean slate with which to work.
 */
export const MEYER_WEB_RESET = css`
/* http://meyerweb.com/eric/tools/css/reset/ 
v2.0 | 20110126
License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
`;

/**
 * Base styles for the overall page.
 */
export const STYLES = css`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: ${DESIGN_TOKEN.colors.swatch_1[10]};
  
  font-family: ${DESIGN_TOKEN.fonts.font_1.family};
  font-weight: ${DESIGN_TOKEN.fonts.font_1.weight.regular};
  color: ${DESIGN_TOKEN.colors.swatch_1[100]};
`;