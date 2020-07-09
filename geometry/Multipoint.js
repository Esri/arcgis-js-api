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

define(["require","exports","tslib","../core/lang","../core/accessorSupport/decorators","./Extent","./Geometry","./Point","./support/zmUtils"],(function(t,e,n,r,i,s,o,a,p){function l(t){return function(e,n){return null==e?n:null==n?e:t(e,n)}}var h=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.apply(this,e)||this;return r.points=[],r.type="multipoint",r}var o;return n.__extends(e,t),o=e,e.prototype.normalizeCtorArgs=function(t,e){if(!t&&!e)return null;var n,r={};Array.isArray(t)?(r.points=t,r.spatialReference=e):!(n=t)||"esri.geometry.SpatialReference"!==n.declaredClass&&null==n.wkid?(t.points&&(r.points=t.points),t.spatialReference&&(r.spatialReference=t.spatialReference),t.hasZ&&(r.hasZ=t.hasZ),t.hasM&&(r.hasM=t.hasM)):r.spatialReference=t;var i=r.points&&r.points[0];return i&&(void 0===r.hasZ&&void 0===r.hasM?(r.hasZ=i.length>2,r.hasM=!1):void 0===r.hasZ?r.hasZ=i.length>3:void 0===r.hasM&&(r.hasM=i.length>3)),r},Object.defineProperty(e.prototype,"extent",{get:function(){var t=this.points;if(!t.length)return null;for(var e,n,r,i,o=new s,a=this.hasZ,p=this.hasM,h=a?3:2,u=t[0],c=l(Math.min),f=l(Math.max),y=u[0],d=u[1],m=u[0],v=u[1],g=0,_=t.length;g<_;g++){var x=t[g],M=x[0],R=x[1];if(y=c(y,M),d=c(d,R),m=f(m,M),v=f(v,R),a&&x.length>2){var Z=x[2];e=c(e,Z),r=f(r,Z)}if(p&&x.length>h){var w=x[h];n=c(n,w),i=f(i,w)}}return o.xmin=y,o.ymin=d,o.xmax=m,o.ymax=v,o.spatialReference=this.spatialReference,a?(o.zmin=e,o.zmax=r):(o.zmin=null,o.zmax=null),p?(o.mmin=n,o.mmax=i):(o.mmin=null,o.mmax=null),o},enumerable:!0,configurable:!0}),e.prototype.writePoints=function(t,e){e.points=r.clone(this.points)},e.prototype.addPoint=function(t){return this.clearCache(),p.updateSupportFromPoint(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this},e.prototype.clone=function(){var t={points:r.clone(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new o(t)},e.prototype.getPoint=function(t){if(!this._validateInputs(t))return null;var e=this.points[t],n={x:e[0],y:e[1],spatialReference:this.spatialReference},r=2;return this.hasZ&&(n.z=e[2],r=3),this.hasM&&(n.m=e[r]),new a(n)},e.prototype.removePoint=function(t){return this._validateInputs(t)?(this.clearCache(),new a(this.points.splice(t,1)[0],this.spatialReference)):null},e.prototype.setPoint=function(t,e){return this._validateInputs(t)?(this.clearCache(),p.updateSupportFromPoint(this,e),Array.isArray(e)||(e=e.toArray()),this.points[t]=e,this):this},e.prototype.toJSON=function(t){return this.write(null,t)},e.prototype._validateInputs=function(t){return null!=t&&t>=0&&t<this.points.length},n.__decorate([i.property({dependsOn:["points","hasZ","hasM","spatialReference"]})],e.prototype,"cache",void 0),n.__decorate([i.property({dependsOn:["cache"]})],e.prototype,"extent",null),n.__decorate([i.property({type:[[Number]],json:{write:{isRequired:!0}}})],e.prototype,"points",void 0),n.__decorate([i.writer("points")],e.prototype,"writePoints",null),e=o=n.__decorate([i.subclass("esri.geometry.Multipoint")],e)}(o);return h.prototype.toJSON.isDefaultToJSON=!0,h}));