/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../multiOriginJSONSupportUtils"],(function(i,e){"use strict";function r(i){i&&i.writtenProperties&&i.writtenProperties.forEach((i=>{const r=i.target;i.newOrigin&&i.oldOrigin!==i.newOrigin&&e.isMultiOriginJSONMixin(r)&&r.updateOrigin(i.propName,i.newOrigin)}))}i.updateOrigins=r,Object.defineProperty(i,"__esModule",{value:!0})}));
