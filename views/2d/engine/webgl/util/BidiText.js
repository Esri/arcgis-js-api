/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/BidiEngine"],(function(e,i){"use strict";const t=new i;function n(e){if(!t.hasBidiChar(e))return[e,!1];let i;return i="rtl"===t.checkContextual(e)?"IDNNN":"ICNNN",[t.bidiTransform(e,i,"VLYSN"),!0]}e.bidiText=n,Object.defineProperty(e,"__esModule",{value:!0})}));
