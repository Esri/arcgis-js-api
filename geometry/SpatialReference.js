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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/assignHelper","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./support/spatialReferenceUtils"],(function(e,t,r,i,o,n,s,p,a){var l=function(e){function t(t){var r=e.call(this,t)||this;return r.latestWkid=null,r.wkid=null,r.wkt=null,r.imageCoordinateSystem=null,r}var r;return i(t,e),r=t,t.fromJSON=function(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return r.WebMercator;if(4326===e.wkid)return r.WGS84}var t=new r;return t.read(e),t},t.prototype.normalizeCtorArgs=function(e){var t;return e&&"object"==typeof e?e:((t={})["string"==typeof e?"wkt":"wkid"]=e,t)},Object.defineProperty(t.prototype,"isWGS84",{get:function(){return a.isWGS84(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWebMercator",{get:function(){return a.isWebMercator(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isGeographic",{get:function(){return a.isGeographic(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWrappable",{get:function(){return a.isWrappable(this)},enumerable:!0,configurable:!0}),t.prototype.writeWkt=function(e,t){this.wkid||(t.wkt=e)},t.prototype.clone=function(){if(this===r.WGS84)return r.WGS84;if(this===r.WebMercator)return r.WebMercator;var e=new r;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),this.imageCoordinateSystem&&(e.imageCoordinateSystem=s.clone(this.imageCoordinateSystem)),e},t.prototype.equals=function(e){if(null==e)return!1;if(this.imageCoordinateSystem||e.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==e.imageCoordinateSystem)return!1;var t=e.imageCoordinateSystem,r=t.id,i=t.referenceServiceName,o=e.imageCoordinateSystem.geodataXform,n=this.imageCoordinateSystem;return null==r||o?JSON.stringify(n)===JSON.stringify(e.imageCoordinateSystem):i?n.id===r&&n.referenceServiceName===i:n.id===r}return a.equals(this,e)},t.prototype.toJSON=function(e){return this.write(null,e)},t.GCS_NAD_1927=null,t.WGS84=null,t.WebMercator=null,o([p.property({dependsOn:["wkid"],readOnly:!0})],t.prototype,"isWGS84",null),o([p.property({dependsOn:["wkid"],readOnly:!0})],t.prototype,"isWebMercator",null),o([p.property({dependsOn:["wkid","wkt"],readOnly:!0})],t.prototype,"isGeographic",null),o([p.property({dependsOn:["wkid"],readOnly:!0})],t.prototype,"isWrappable",null),o([p.property({type:Number,json:{write:!0}})],t.prototype,"latestWkid",void 0),o([p.property({type:Number,json:{write:!0,origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkt}}}}}}})],t.prototype,"wkid",void 0),o([p.property({type:String,json:{origins:{"web-scene":{write:{overridePolicy:function(){return{isRequired:null===this.wkid}}}}}}})],t.prototype,"wkt",void 0),o([p.writer("wkt"),p.writer("web-scene","wkt")],t.prototype,"writeWkt",null),o([p.property({type:Number,json:{write:!0}})],t.prototype,"vcsWkid",void 0),o([p.property({type:Number,json:{write:!0}})],t.prototype,"latestVcsWkid",void 0),o([p.property()],t.prototype,"imageCoordinateSystem",void 0),t=r=o([p.subclass("esri.geometry.SpatialReference")],t)}(p.declared(n.JSONSupport));return l.prototype.toJSON.isDefaultToJSON=!0,l.GCS_NAD_1927=new l({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),l.WGS84=new l(a.WGS84),l.WebMercator=new l(a.WebMercator),Object.freeze&&(Object.freeze(l.GCS_NAD_1927),Object.freeze(l.WGS84),Object.freeze(l.WebMercator)),l}));