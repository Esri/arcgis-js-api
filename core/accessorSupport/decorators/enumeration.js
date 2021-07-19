/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../jsonMap","./property"],(function(e,n,r){"use strict";function o(e,o={}){var a;const l=e instanceof n.JSONMap?e:new n.JSONMap(e,o),t={type:null==(a=null==o?void 0:o.ignoreUnknown)||a?l.apiValues:String,readOnly:null==o?void 0:o.readOnly,json:{type:l.jsonValues,read:(null==o||!o.readOnly)&&{reader:l.read},write:{writer:l.write}}};return void 0!==(null==o?void 0:o.default)&&(t.json.default=o.default),void 0!==(null==o?void 0:o.name)&&(t.json.name=o.name),r.property(t)}e.enumeration=o,Object.defineProperty(e,"__esModule",{value:!0})}));
