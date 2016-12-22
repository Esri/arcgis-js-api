// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators","./support/spatialReferenceUtils"],function(t,e,r,i,o,n,p){var s=function(t){function e(e){t.call(this),this.latestWkid=null,this.wkid=null,this.wkt=null}return r(e,t),e.prototype.normalizeCtorArgs=function(t){if(t&&"object"==typeof t)return t;var e="string"==typeof t?"wkt":"wkid";return r={},r[e]=t,r;var r},Object.defineProperty(e.prototype,"isWGS84",{get:function(){return 4326===this.wkid},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isWebMercator",{get:function(){return-1!==l.indexOf(this.wkid)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isGeographic",{get:function(){return p.isGeographic(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isWrappable",{get:function(){return-1!==d.indexOf(this.wkid)},enumerable:!0,configurable:!0}),e.prototype.writeWkt=function(t,e){this.wkid||(e.wkt=t)},e.prototype.clone=function(){if(this===e.WGS84)return e.WGS84;if(this===e.WebMercator)return e.WebMercator;var t=new e;return null!=this.wkid?(t.wkid=this.wkid,null!=this.latestWkid&&(t.latestWkid=this.latestWkid),null!=this.vcsWkid&&(t.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(t.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(t.wkt=this.wkt),t},e.prototype.equals=function(t){if(t){if(this===t)return!0;if(null!=this.wkid||null!=t.wkid)return this.wkid===t.wkid||this.isWebMercator&&t.isWebMercator||null!=t.latestWkid&&this.wkid===t.latestWkid||null!=this.latestWkid&&t.wkid===this.latestWkid;if(this.wkt&&t.wkt)return this.wkt.toUpperCase()===t.wkt.toUpperCase()}return!1},e.fromJSON=function(t){if(!t)return null;if(t.wkid){if(102100===t.wkid)return e.WebMercator;if(4326===t.wkid)return e.WGS84}var r=new e;return r.read(t),r},e.WGS84=null,e.WebMercator=null,i([n.property({dependsOn:["wkid"],readOnly:!0})],e.prototype,"isWGS84",null),i([n.property({dependsOn:["wkid"],readOnly:!0})],e.prototype,"isWebMercator",null),i([n.property({dependsOn:["wkid","wkt"],readOnly:!0})],e.prototype,"isGeographic",null),i([n.property({dependsOn:["wkid"],readOnly:!0})],e.prototype,"isWrappable",null),i([n.property({json:{writable:!0}})],e.prototype,"latestWkid",void 0),i([n.property({json:{writable:!0}})],e.prototype,"wkid",void 0),i([n.property()],e.prototype,"wkt",void 0),i([n.write("wkt")],e.prototype,"writeWkt",null),i([n.property({json:{writable:!0}})],e.prototype,"vcsWkid",void 0),i([n.property({json:{writable:!0}})],e.prototype,"latestVcsWkid",void 0),e=i([n.subclass("esri.SpatialReference")],e)}(n.declared(o));s.WGS84=new s(4326),s.WebMercator=new s({wkid:102100,latestWkid:3857}),Object.freeze&&(Object.freeze(s.WGS84),Object.freeze(s.WebMercator));var l=[102113,102100,3857,3785],d=[102113,102100,3857,3785,4326];return s});