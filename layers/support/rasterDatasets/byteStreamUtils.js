/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.bytesToUTF8=function(e,t){let n=0,o="",r=0,f=0;const i=e.length;for(;n<i;)f=e[n++],r=f>>4,r<8?r=1:15===r?(r=4,f=(7&f)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++]):14===r?(r=3,f=(15&f)<<12|(63&e[n++])<<6|63&e[n++]):(r=2,f=(31&f)<<6|63&e[n++]),(0!==f||t)&&(o+=String.fromCharCode(f));return o},Object.defineProperty(e,"__esModule",{value:!0})}));
