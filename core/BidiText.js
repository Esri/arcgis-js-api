/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"./BidiEngine.js";const i=new r;function n(r){if(!i.hasBidiChar(r))return[r,!1];let n;return n="rtl"===i.checkContextual(r)?"IDNNN":"ICNNN",[i.bidiTransform(r,n,"VLYSN"),!0]}export{n as bidiText};
