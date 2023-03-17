/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./BidiEngine"],(function(e,t){"use strict";const i=new t;function n(e){if(null==e)return["",!1];if(!i.hasBidiChar(e))return[e,!1];let t;return t="rtl"===i.checkContextual(e)?"IDNNN":"ICNNN",[i.bidiTransform(e,t,"VLYSN"),!0]}e.bidiText=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
