/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../jsonMap","./property"],(function(e,n,r){"use strict";function a(e,a={}){const t=e instanceof n.JSONMap?e:new n.JSONMap(e,a),o={type:a?.ignoreUnknown??1?t.apiValues:String,json:{type:t.jsonValues,read:!a?.readOnly&&{reader:t.read},write:{writer:t.write}}};return void 0!==a?.readOnly&&(o.readOnly=!!a.readOnly),void 0!==a?.default&&(o.json.default=a.default),void 0!==a?.name&&(o.json.name=a.name),r.property(o)}e.enumeration=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
