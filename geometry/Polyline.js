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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/lang","../core/accessorSupport/decorators","./Extent","./Geometry","./Point","./SpatialReference","./support/extentUtils","./support/zmUtils"],(function(t,e,r,n,i,a,s,o,p,h,l){"use strict";var u=function(t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=t.apply(this,e)||this;return n.paths=[],n.type="polyline",n}var s;return r.__extends(e,t),s=e,e.prototype.normalizeCtorArgs=function(t,e){var r,n,i,a=null;return t&&!Array.isArray(t)?(a=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),r=t.hasZ,n=t.hasM):a=t,a=a||[],e=e||p.WGS84,a.length&&a[0]&&null!=a[0][0]&&"number"==typeof a[0][0]&&(a=[a]),(i=a[0]&&a[0][0])&&(void 0===r&&void 0===n?(r=i.length>2,n=!1):void 0===r?r=!n&&i.length>3:void 0===n&&(n=!r&&i.length>3)),{paths:a,spatialReference:e,hasZ:r,hasM:n}},Object.defineProperty(e.prototype,"extent",{get:function(){var t=this.spatialReference,e=h.getPolylineExtent(this);if(!e)return null;var r=new a(e);return r.spatialReference=t,r},enumerable:!1,configurable:!0}),e.prototype.writePaths=function(t,e){e.paths=n.clone(this.paths)},e.prototype.addPath=function(t){if(t){this.clearCache();var e=this.paths,r=e.length;if(function(t){return!Array.isArray(t[0])}(t)){for(var n=[],i=0,a=t.length;i<a;i++)n[i]=t[i].toArray();e[r]=n}else e[r]=t.concat();return this}},e.prototype.clone=function(){var t=new s;return t.spatialReference=this.spatialReference,t.paths=n.clone(this.paths),t.hasZ=this.hasZ,t.hasM=this.hasM,t},e.prototype.getPoint=function(t,e){if(!this._validateInputs(t,e))return null;var r=this.paths[t][e],n=this.hasZ,i=this.hasM;return n&&!i?new o(r[0],r[1],r[2],void 0,this.spatialReference):i&&!n?new o(r[0],r[1],void 0,r[2],this.spatialReference):n&&i?new o(r[0],r[1],r[2],r[3],this.spatialReference):new o(r[0],r[1],this.spatialReference)},e.prototype.insertPoint=function(t,e,r){return this._validateInputs(t,e,!0)?(this.clearCache(),l.updateSupportFromPoint(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t].splice(e,0,r),this):this},e.prototype.removePath=function(t){if(!this._validateInputs(t,null))return null;this.clearCache();var e=this.paths.splice(t,1)[0],r=this.spatialReference;return e.map((function(t){return new o(t,r)}))},e.prototype.removePoint=function(t,e){return this._validateInputs(t,e)?(this.clearCache(),new o(this.paths[t].splice(e,1)[0],this.spatialReference)):null},e.prototype.setPoint=function(t,e,r){return this._validateInputs(t,e)?(this.clearCache(),l.updateSupportFromPoint(this,r),Array.isArray(r)||(r=r.toArray()),this.paths[t][e]=r,this):this},e.prototype._validateInputs=function(t,e,r){if(void 0===r&&(r=!1),null==t||t<0||t>=this.paths.length)return!1;if(null!=e){var n=this.paths[t];if(r&&(e<0||e>n.length))return!1;if(!r&&(e<0||e>=n.length))return!1}return!0},e.prototype.toJSON=function(t){return this.write(null,t)},r.__decorate([i.property({dependsOn:["hasM","hasZ","paths"]})],e.prototype,"cache",void 0),r.__decorate([i.property({dependsOn:["cache"],readOnly:!0})],e.prototype,"extent",null),r.__decorate([i.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],e.prototype,"paths",void 0),r.__decorate([i.writer("paths")],e.prototype,"writePaths",null),e=s=r.__decorate([i.subclass("esri.geometry.Polyline")],e)}(s);return u.prototype.toJSON.isDefaultToJSON=!0,u}));