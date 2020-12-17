/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../multiOriginJSONSupportUtils"],(function(i,e){"use strict";i.updateOrigins=function(i){i&&i.writtenProperties&&i.writtenProperties.forEach((i=>{const r=i.target;i.newOrigin&&i.oldOrigin!==i.newOrigin&&e.isMultiOriginJSONMixin(r)&&r.updateOrigin(i.propName,i.newOrigin)}))},Object.defineProperty(i,"__esModule",{value:!0})}));
