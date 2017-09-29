// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","../core/JSONSupport","../core/kebabDictionary","../core/Warning","../core/accessorSupport/decorators","./support/scaleUtils"],function(e,t,r,i,n,o,s,a,h,l){function d(e,t){return new a("height-unit:unsupported","Height unit of value '"+e+"' is not supported",t)}function u(e,t){return new a("height-model:unsupported","Height model of value '"+e+"' is not supported",t)}var c=s({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"},{ignoreUnknown:!0}),p=s({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"},{ignoreUnknown:!0}),g=function(e){function t(t){var r=e.call(this)||this;return r.heightModel="gravity-related-height",r.heightUnit="meters",r.vertCRS=null,r}return r(t,e),o=t,t.prototype.writeHeightModel=function(e,t,r){return c.write(e,t,r)},t.prototype.readHeightModel=function(e,t,r){var i=c.read(e);return i?i:(r&&r.messages&&r.messages.push(u(e,{context:r})),null)},t.prototype.writeHeightUnit=function(e,t,r){return p.write(e,t,r)},t.prototype.readHeightUnit=function(e,t,r){var i=p.read(e);return i?i:(r&&r.messages&&r.messages.push(d(e,{context:r})),null)},t.prototype.readHeightUnitService=function(e,t,r){var i=l.unitFromRESTJSON(e)||p.read(e);return i?i:(r&&r.messages&&r.messages.push(d(e,{context:r})),null)},t.prototype.readVertCRS=function(e,t){return t.vertCRS||t.ellipsoid||t.geoid},t.prototype.clone=function(){return new o({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})},t.prototype.equals=function(e){return e?this===e?!0:this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS:!1},t.deriveUnitFromSR=function(e,t){var r=l.getVerticalUnitStringForSR(t);return new o({heightModel:e.heightModel,heightUnit:r,vertCRS:e.vertCRS})},t.prototype.write=function(e,t){return t=n.mixin({},{origin:"web-scene"},t),this.inherited(arguments,[e,t])},t.fromJSON=function(e){if(!e)return null;var t=new o;return t.read(e,{origin:"web-scene"}),t},i([h.property({constructOnly:!0})],t.prototype,"heightModel",void 0),i([h.writer("web-scene","heightModel")],t.prototype,"writeHeightModel",null),i([h.reader(["web-scene","service"],"heightModel")],t.prototype,"readHeightModel",null),i([h.property({constructOnly:!0})],t.prototype,"heightUnit",void 0),i([h.writer("web-scene","heightUnit")],t.prototype,"writeHeightUnit",null),i([h.reader("web-scene","heightUnit")],t.prototype,"readHeightUnit",null),i([h.reader("service","heightUnit")],t.prototype,"readHeightUnitService",null),i([h.property({constructOnly:!0,json:{origins:{webScene:{write:!0}}}})],t.prototype,"vertCRS",void 0),i([h.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],t.prototype,"readVertCRS",null),t=o=i([h.subclass("esri.HeightModelInfo")],t);var o}(h.declared(o));return g});