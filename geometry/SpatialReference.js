// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators","./support/spatialReferenceUtils"],function(e,t,r,i,o,n,p){var s=function(e){function t(t){var r=e.call(this)||this;return r.latestWkid=null,r.wkid=null,r.wkt=null,r}r(t,e),o=t,t.fromJSON=function(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return o.WebMercator;if(4326===e.wkid)return o.WGS84}var t=new o;return t.read(e),t},t.prototype.normalizeCtorArgs=function(e){var t;if(e&&"object"==typeof e)return e;var r="string"==typeof e?"wkt":"wkid";return t={},t[r]=e,t},Object.defineProperty(t.prototype,"isWGS84",{get:function(){return p.isWGS84(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWebMercator",{get:function(){return p.isWebMercator(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isGeographic",{get:function(){return p.isGeographic(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWrappable",{get:function(){return p.isWrappable(this)},enumerable:!0,configurable:!0}),t.prototype.writeWkt=function(e,t){this.wkid||(t.wkt=e)},t.prototype.clone=function(){if(this===o.WGS84)return o.WGS84;if(this===o.WebMercator)return o.WebMercator;var e=new o;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),e},t.prototype.equals=function(e){return p.equals(this,e)},t.prototype.toJSON=function(e){return this.write(null,e)};var o;return t.GCS_NAD_1927=null,t.WGS84=null,t.WebMercator=null,i([n.property({dependsOn:["wkid"],readOnly:!0})],t.prototype,"isWGS84",null),i([n.property({dependsOn:["wkid"],readOnly:!0})],t.prototype,"isWebMercator",null),i([n.property({dependsOn:["wkid","wkt"],readOnly:!0})],t.prototype,"isGeographic",null),i([n.property({dependsOn:["wkid"],readOnly:!0})],t.prototype,"isWrappable",null),i([n.property({type:Number,json:{write:!0}})],t.prototype,"latestWkid",void 0),i([n.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkt}}}}}}})],t.prototype,"wkid",void 0),i([n.property({type:String,json:{origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkid}}}}}}})],t.prototype,"wkt",void 0),i([n.writer("wkt"),n.writer("web-scene","wkt")],t.prototype,"writeWkt",null),i([n.property({type:Number,json:{write:!0}})],t.prototype,"vcsWkid",void 0),i([n.property({type:Number,json:{write:!0}})],t.prototype,"latestVcsWkid",void 0),t=o=i([n.subclass("esri.geometry.SpatialReference")],t)}(n.declared(o));return s.prototype.toJSON.isDefaultToJSON=!0,s.GCS_NAD_1927=new s({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),s.WGS84=new s(p.WGS84),s.WebMercator=new s(p.WebMercator),Object.freeze&&(Object.freeze(s.GCS_NAD_1927),Object.freeze(s.WGS84),Object.freeze(s.WebMercator)),s});