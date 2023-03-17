/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../jsonMap","./property"],(function(e,n,a){"use strict";function o(e,o={}){const r=e instanceof n.JSONMap?e:new n.JSONMap(e,o),t={type:o?.ignoreUnknown??1?r.apiValues:String,json:{type:r.jsonValues,read:!o?.readOnly&&{reader:r.read},write:{writer:r.write}}};return void 0!==o?.readOnly&&(t.readOnly=!!o.readOnly),void 0!==o?.default&&(t.json.default=o.default),void 0!==o?.name&&(t.json.name=o.name),void 0!==o?.nonNullable&&(t.nonNullable=o.nonNullable),a.property(t)}e.enumeration=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
