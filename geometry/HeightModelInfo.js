// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../core/arrayUtils","../core/jsonMap","../core/JSONSupport","../core/unitUtils","../core/Warning","../core/accessorSupport/decorators"],(function(e,t,r,i,o,n,s,a,l){var d=o.strict()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),h=d.jsonValues.slice();i.removeUnordered(h,"orthometric");var c=o.strict()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});function u(e,t){return new a("height-unit:unsupported","Height unit of value '"+e+"' is not supported",t)}return function(e){function t(t){var r=e.call(this,t)||this;return r.heightModel="gravity-related-height",r.heightUnit="meters",r.vertCRS=null,r}var i;return r.__extends(t,e),i=t,t.prototype.writeHeightModel=function(e,t,r){return d.write(e,t,r)},t.prototype.readHeightModel=function(e,t,r){var i=d.read(e);return i||(r&&r.messages&&r.messages.push(function(e,t){return new a("height-model:unsupported","Height model of value '"+e+"' is not supported",t)}(e,{context:r})),null)},t.prototype.readHeightUnit=function(e,t,r){var i=c.read(e);return i||(r&&r.messages&&r.messages.push(u(e,{context:r})),null)},t.prototype.readHeightUnitService=function(e,t,r){var i=s.unitFromRESTJSON(e)||c.read(e);return i||(r&&r.messages&&r.messages.push(u(e,{context:r})),null)},t.prototype.readVertCRS=function(e,t){return t.vertCRS||t.ellipsoid||t.geoid},t.prototype.clone=function(){return new i({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})},t.prototype.equals=function(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)},t.deriveUnitFromSR=function(e,t){var r=s.getVerticalUnitStringForSR(t);return new i({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})},t.prototype.write=function(t,i){return i=r.__assign({origin:"web-scene"},i),e.prototype.write.call(this,t,i)},t.fromJSON=function(e){if(!e)return null;var t=new i;return t.read(e,{origin:"web-scene"}),t},r.__decorate([l.property({type:d.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:h,default:"ellipsoidal"}}}})],t.prototype,"heightModel",void 0),r.__decorate([l.writer("web-scene","heightModel")],t.prototype,"writeHeightModel",null),r.__decorate([l.reader(["web-scene","service"],"heightModel")],t.prototype,"readHeightModel",null),r.__decorate([l.property({type:c.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:c.jsonValues,write:c.write}}}})],t.prototype,"heightUnit",void 0),r.__decorate([l.reader("web-scene","heightUnit")],t.prototype,"readHeightUnit",null),r.__decorate([l.reader("service","heightUnit")],t.prototype,"readHeightUnitService",null),r.__decorate([l.property({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],t.prototype,"vertCRS",void 0),r.__decorate([l.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],t.prototype,"readVertCRS",null),t=i=r.__decorate([l.subclass("esri.geometry.HeightModelInfo")],t)}(n.JSONSupport)}));