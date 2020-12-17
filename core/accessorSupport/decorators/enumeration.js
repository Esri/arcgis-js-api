/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./property","../../jsonMap"],(function(e,n,r){"use strict";e.enumeration=function(e,t={ignoreUnknown:!0}){const o=e instanceof r.JSONMap?e:new r.JSONMap(e,t),a={type:null!=t&&t.ignoreUnknown?o.apiValues:String,readOnly:null==t?void 0:t.readOnly,json:{type:o.jsonValues,read:(null==t||!t.readOnly)&&{reader:o.read},write:{writer:o.write}}};return void 0!==(null==t?void 0:t.default)&&(a.json.default=t.default),n.property(a)},Object.defineProperty(e,"__esModule",{value:!0})}));
