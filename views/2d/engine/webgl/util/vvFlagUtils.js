/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../enums","../visualVariablesUtils"],(function(e,t,i){"use strict";function l(e){if(!e)return t.WGLVVFlag.NONE;let l=0;for(const o of e)if("size"===o.type){const e=i.getTypeOfSizeVisualVariable(o);l|=e,"outline"===o.target&&(l|=e<<4)}else"color"===o.type?l|=t.WGLVVFlag.COLOR:"opacity"===o.type?l|=t.WGLVVFlag.OPACITY:"rotation"===o.type&&(l|=t.WGLVVFlag.ROTATION);return l}e.getVVFlags=l,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
