// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/arrayUtils","../core/jsonMap","../core/JSONSupport","../core/unitUtils","../core/Warning","../core/accessorSupport/decorators"],function(e,t,r,i,o,n,s,a,l,h,d){function p(e,t){return new h("height-unit:unsupported","Height unit of value '"+e+"' is not supported",t)}function c(e,t){return new h("height-model:unsupported","Height model of value '"+e+"' is not supported",t)}var u=s.strict()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),g=u.jsonValues.slice();n.removeUnordered(g,"orthometric");var y=s.strict()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});return function(e){function t(t){var r=e.call(this)||this;return r.heightModel="gravity-related-height",r.heightUnit="meters",r.vertCRS=null,r}i(t,e),n=t,t.prototype.writeHeightModel=function(e,t,r){return u.write(e,t,r)},t.prototype.readHeightModel=function(e,t,r){var i=u.read(e);return i||(r&&r.messages&&r.messages.push(c(e,{context:r})),null)},t.prototype.readHeightUnit=function(e,t,r){var i=y.read(e);return i||(r&&r.messages&&r.messages.push(p(e,{context:r})),null)},t.prototype.readHeightUnitService=function(e,t,r){var i=l.unitFromRESTJSON(e)||y.read(e);return i||(r&&r.messages&&r.messages.push(p(e,{context:r})),null)},t.prototype.readVertCRS=function(e,t){return t.vertCRS||t.ellipsoid||t.geoid},t.prototype.clone=function(){return new n({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})},t.prototype.equals=function(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)},t.deriveUnitFromSR=function(e,t){var r=l.getVerticalUnitStringForSR(t);return new n({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})},t.prototype.write=function(e,t){return t=r({origin:"web-scene"},t),this.inherited(arguments,[e,t])},t.fromJSON=function(e){if(!e)return null;var t=new n;return t.read(e,{origin:"web-scene"}),t};var n;return o([d.property({type:u.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g,default:"ellipsoidal"}}}})],t.prototype,"heightModel",void 0),o([d.writer("web-scene","heightModel")],t.prototype,"writeHeightModel",null),o([d.reader(["web-scene","service"],"heightModel")],t.prototype,"readHeightModel",null),o([d.property({type:y.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:y.jsonValues,write:y.write}}}})],t.prototype,"heightUnit",void 0),o([d.reader("web-scene","heightUnit")],t.prototype,"readHeightUnit",null),o([d.reader("service","heightUnit")],t.prototype,"readHeightUnitService",null),o([d.property({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],t.prototype,"vertCRS",void 0),o([d.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],t.prototype,"readVertCRS",null),t=n=o([d.subclass("esri.geometry.HeightModelInfo")],t)}(d.declared(a.JSONSupport))});