/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../multiOriginJSONSupportUtils"],(function(i,t){"use strict";function e(i){i&&i.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:e,newOrigin:r})=>{t.isMultiOriginJSONMixin(i)&&r&&i.originOf(e)!==r&&i.updateOrigin(e,r)}))}i.updateOrigins=e,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})}));
