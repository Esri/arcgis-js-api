/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{WGLVVFlag as t}from"../enums.js";import{getTypeOfSizeVisualVariable as o}from"../visualVariablesUtils.js";function e(e){if(!e)return t.NONE;let r=0;for(const i of e)if("size"===i.type){const t=o(i);r|=t,"outline"===i.target&&(r|=t<<4)}else"color"===i.type?r|=t.COLOR:"opacity"===i.type?r|=t.OPACITY:"rotation"===i.type&&(r|=t.ROTATION);return r}export{e as getVVFlags};
