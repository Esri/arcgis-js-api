/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","./BidiEngine"],(function(e,i){"use strict";const t=new i;function n(e){if(!t.hasBidiChar(e))return[e,!1];let i;return i="rtl"===t.checkContextual(e)?"IDNNN":"ICNNN",[t.bidiTransform(e,i,"VLYSN"),!0]}e.bidiText=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
