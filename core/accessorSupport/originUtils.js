/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../multiOriginJSONSupportUtils"],(function(i,e){"use strict";function t(i){i&&i.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:r})=>{e.isMultiOriginJSONMixin(i)&&r&&i.originOf(t)!==r&&i.updateOrigin(t,r)}))}i.updateOrigins=t,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
