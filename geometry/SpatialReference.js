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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators","./support/spatialReferenceUtils"],function(e,t,r,i,o,n,p){var s=l=function(e){function t(t){var r=e.call(this)||this;return r.latestWkid=null,r.wkid=null,r.wkt=null,r}return r(t,e),t.prototype.normalizeCtorArgs=function(e){if(e&&"object"==typeof e)return e;var t="string"==typeof e?"wkt":"wkid";return r={},r[t]=e,r;var r},Object.defineProperty(t.prototype,"isWGS84",{get:function(){return 4326===this.wkid},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWebMercator",{get:function(){return-1!==d.indexOf(this.wkid)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isGeographic",{get:function(){return p.isGeographic(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isWrappable",{get:function(){return-1!==u.indexOf(this.wkid)},enumerable:!0,configurable:!0}),t.prototype.writeWkt=function(e,t){this.wkid||(t.wkt=e)},t.prototype.clone=function(){if(this===l.WGS84)return l.WGS84;if(this===l.WebMercator)return l.WebMercator;var e=new l;return null!=this.wkid?(e.wkid=this.wkid,null!=this.latestWkid&&(e.latestWkid=this.latestWkid),null!=this.vcsWkid&&(e.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(e.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(e.wkt=this.wkt),e},t.prototype.equals=function(e){if(e){if(this===e)return!0;if(null!=this.wkid||null!=e.wkid)return this.wkid===e.wkid||this.isWebMercator&&e.isWebMercator||null!=e.latestWkid&&this.wkid===e.latestWkid||null!=this.latestWkid&&e.wkid===this.latestWkid;if(this.wkt&&e.wkt)return this.wkt.toUpperCase()===e.wkt.toUpperCase()}return!1},t.fromJSON=function(e){if(!e)return null;if(e.wkid){if(102100===e.wkid)return l.WebMercator;if(4326===e.wkid)return l.WGS84}var t=new l;return t.read(e),t},t}(n.declared(o));s.WGS84=null,s.WebMercator=null,i([n.property({dependsOn:["wkid"],readOnly:!0})],s.prototype,"isWGS84",null),i([n.property({dependsOn:["wkid"],readOnly:!0})],s.prototype,"isWebMercator",null),i([n.property({dependsOn:["wkid","wkt"],readOnly:!0})],s.prototype,"isGeographic",null),i([n.property({dependsOn:["wkid"],readOnly:!0})],s.prototype,"isWrappable",null),i([n.property({json:{write:!0}})],s.prototype,"latestWkid",void 0),i([n.property({json:{write:!0}})],s.prototype,"wkid",void 0),i([n.property()],s.prototype,"wkt",void 0),i([n.writer("wkt")],s.prototype,"writeWkt",null),i([n.property({json:{write:!0}})],s.prototype,"vcsWkid",void 0),i([n.property({json:{write:!0}})],s.prototype,"latestVcsWkid",void 0),s=l=i([n.subclass("esri.SpatialReference")],s),s.WGS84=new s(4326),s.WebMercator=new s({wkid:102100,latestWkid:3857}),Object.freeze&&(Object.freeze(s.WGS84),Object.freeze(s.WebMercator));var l,d=[102113,102100,3857,3785],u=[102113,102100,3857,3785,4326];return s});