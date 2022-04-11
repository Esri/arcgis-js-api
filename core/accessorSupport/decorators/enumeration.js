/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../jsonMap","./property"],(function(e,n,o){"use strict";function r(e,r={}){var l;const a=e instanceof n.JSONMap?e:new n.JSONMap(e,r),t={type:null==(l=null==r?void 0:r.ignoreUnknown)||l?a.apiValues:String,json:{type:a.jsonValues,read:(null==r||!r.readOnly)&&{reader:a.read},write:{writer:a.write}}};return void 0!==(null==r?void 0:r.readOnly)&&(t.readOnly=!!r.readOnly),void 0!==(null==r?void 0:r.default)&&(t.json.default=r.default),void 0!==(null==r?void 0:r.name)&&(t.json.name=r.name),o.property(t)}e.enumeration=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
