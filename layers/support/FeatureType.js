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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","./domains","./FeatureTemplate","../../core/lang"],function(e,r,t,o,n,a,p,i,s){var l=function(e){function r(r){var t=e.call(this,r)||this;return t.id=null,t.name=null,t.domains=null,t.templates=null,t}return t(r,e),r.prototype.readDomains=function(e){var r={};for(var t in e)if(e.hasOwnProperty(t)){var o=e[t];switch(o.type){case"range":r[t]=p.RangeDomain.fromJSON(o);break;case"codedValue":r[t]=p.CodedValueDomain.fromJSON(o);break;case"inherited":r[t]=p.InheritedDomain.fromJSON(o)}}return r},r.prototype.writeDomains=function(e,r){var t={};for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]&&e[o].toJSON());s.fixJson(t),r.domains=t},r.prototype.readTemplates=function(e){return e&&e.map(function(e){return new i(e)})},r.prototype.writeTemplates=function(e,r){r.templates=e&&e.map(function(e){return e.toJSON()})},o([n.property({json:{write:!0}})],r.prototype,"id",void 0),o([n.property({json:{write:!0}})],r.prototype,"name",void 0),o([n.property({json:{write:!0}})],r.prototype,"domains",void 0),o([n.reader("domains")],r.prototype,"readDomains",null),o([n.writer("domains")],r.prototype,"writeDomains",null),o([n.property({json:{write:!0}})],r.prototype,"templates",void 0),o([n.reader("templates")],r.prototype,"readTemplates",null),o([n.writer("templates")],r.prototype,"writeTemplates",null),r=o([n.subclass("esri.layers.support.FeatureType")],r)}(n.declared(a));return l});