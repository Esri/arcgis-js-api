/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/BidiEngine"],(function(e,i){"use strict";const t=new i;e.bidiText=function(e){if(!t.hasBidiChar(e))return[e,!1];let i;return i="rtl"===t.checkContextual(e)?"IDNNN":"ICNNN",[t.bidiTransform(e,i,"VLYSN"),!0]},Object.defineProperty(e,"__esModule",{value:!0})}));
