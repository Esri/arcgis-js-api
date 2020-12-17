/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../enums","../visualVariablesUtils"],(function(e,t,i){"use strict";e.getVVFlags=function(e){if(!e)return t.WGLVVFlag.NONE;let l=0;for(const a of e)if("size"===a.type){const e=i.getTypeOfSizeVisualVariable(a);l|=e,"outline"===a.target&&(l|=e<<4)}else"color"===a.type?l|=t.WGLVVFlag.COLOR:"opacity"===a.type?l|=t.WGLVVFlag.OPACITY:"rotation"===a.type&&(l|=t.WGLVVFlag.ROTATION);return l},Object.defineProperty(e,"__esModule",{value:!0})}));
