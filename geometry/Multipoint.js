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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/lang","../core/accessorSupport/decorators","./Extent","./Geometry","./Point","./support/zmUtils"],function(t,e,n,r,i,s,o,a,p,l){function h(t){return function(e,n){return null==e?n:null==n?e:t(e,n)}}function u(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}var c=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=t.call(this)||this;return r.points=[],r.type="multipoint",r}n(e,t),a=e,e.prototype.normalizeCtorArgs=function(t,e){if(!t&&!e)return null;var n={};Array.isArray(t)?(n.points=t,n.spatialReference=e):u(t)?n.spatialReference=t:(t.points&&(n.points=t.points),t.spatialReference&&(n.spatialReference=t.spatialReference),t.hasZ&&(n.hasZ=t.hasZ),t.hasM&&(n.hasM=t.hasM));var r=n.points&&n.points[0];return r&&(void 0===n.hasZ&&void 0===n.hasM?(n.hasZ=r.length>2,n.hasM=!1):void 0===n.hasZ?n.hasZ=r.length>3:void 0===n.hasM&&(n.hasM=r.length>3)),n},Object.defineProperty(e.prototype,"extent",{get:function(){var t=this.points;if(!t.length)return null;for(var e,n,r,i,s=new o,a=this.hasZ,p=this.hasM,l=a?3:2,u=t[0],c=h(Math.min),f=h(Math.max),y=u[0],d=u[1],m=u[0],v=u[1],g=0,x=t.length;g<x;g++){var M=t[g],R=M[0],Z=M[1];if(y=c(y,R),d=c(d,Z),m=f(m,R),v=f(v,Z),a&&M.length>2){var w=M[2];e=c(e,w),r=f(r,w)}if(p&&M.length>l){var P=M[l];n=c(n,P),i=f(i,P)}}return s.xmin=y,s.ymin=d,s.xmax=m,s.ymax=v,s.spatialReference=this.spatialReference,a?(s.zmin=e,s.zmax=r):(s.zmin=null,s.zmax=null),p?(s.mmin=n,s.mmax=i):(s.mmin=null,s.mmax=null),s},enumerable:!0,configurable:!0}),e.prototype.writePoints=function(t,e,n,r){e.points=i.clone(this.points)},e.prototype.addPoint=function(t){return this.clearCache(),l.updateSupportFromPoint(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this},e.prototype.clone=function(){var t={points:i.clone(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new a(t)},e.prototype.getPoint=function(t){if(!this._validateInputs(t))return null;var e=this.points[t],n={x:e[0],y:e[1],spatialReference:this.spatialReference},r=2;return this.hasZ&&(n.z=e[2],r=3),this.hasM&&(n.m=e[r]),new p(n)},e.prototype.removePoint=function(t){return this._validateInputs(t)?(this.clearCache(),new p(this.points.splice(t,1)[0],this.spatialReference)):null},e.prototype.setPoint=function(t,e){return this._validateInputs(t)?(this.clearCache(),l.updateSupportFromPoint(e),this.points[t]=e.toArray(),this):this},e.prototype.toJSON=function(t){return this.write(null,t)},e.prototype._validateInputs=function(t){return null!=t&&t>=0&&t<this.points.length};var a;return r([s.property({dependsOn:["points","hasZ","hasM","spatialReference"]})],e.prototype,"cache",void 0),r([s.property({dependsOn:["cache"]})],e.prototype,"extent",null),r([s.property({type:[[Number]],json:{write:{isRequired:!0}}})],e.prototype,"points",void 0),r([s.writer("points")],e.prototype,"writePoints",null),e=a=r([s.subclass("esri.geometry.Multipoint")],e)}(s.declared(a));return c.prototype.toJSON.isDefaultToJSON=!0,c});