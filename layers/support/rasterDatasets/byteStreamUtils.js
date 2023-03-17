/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e,t){let o=0,n="",r=0,i=0;const f=e.length;for(;o<f;)i=e[o++],r=i>>4,r<8?r=1:15===r?(r=4,i=(7&i)<<18|(63&e[o++])<<12|(63&e[o++])<<6|63&e[o++]):14===r?(r=3,i=(15&i)<<12|(63&e[o++])<<6|63&e[o++]):(r=2,i=(31&i)<<6|63&e[o++]),(0!==i||t)&&(n+=String.fromCharCode(i));return n}e.bytesToUTF8=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
