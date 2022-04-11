/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../multiOriginJSONSupportUtils"],(function(i,e){"use strict";function t(i){i&&i.writtenProperties&&i.writtenProperties.forEach((i=>{const t=i.target;i.newOrigin&&i.oldOrigin!==i.newOrigin&&e.isMultiOriginJSONMixin(t)&&t.updateOrigin(i.propName,i.newOrigin)}))}i.updateOrigins=t,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
