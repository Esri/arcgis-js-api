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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/lang","./SpatialReference","./Geometry","./Point","./Extent","./support/zmUtils"],function(t,e,n,i,s,a,r){var o=t(i,{declaredClass:"esri.geometry.Multipoint",classMetadata:{properties:{cache:{dependsOn:["points","hasZ","hasM"]},extent:{dependsOn:["cache"]}}},getDefaults:function(){return{points:[]}},normalizeCtorArgs:function(t,e){var i=null,s=void 0,a=void 0,r=null;return t&&!Array.isArray(t)?(i=t.points?t.points:null,e=e||(i?t.spatialReference:t),s=t.hasZ,a=t.hasM):i=t,i=i||[],e=e||n.WGS84,r=i[0],r&&(void 0===s&&void 0===a?(s=r.length>2,a=!1):void 0===s?s=r.length>3:void 0===a&&(a=r.length>3)),{points:i,spatialReference:e,hasZ:s,hasM:a}},type:"multipoint",_extentGetter:function(t){function e(t){return function(e,n){return null==e?n:null==n?e:t(e,n)}}if(!this.points.length)return null;var n,i,s,r,o,l,h,p,u,c,f,m,d=t||new a,v=this.points,y=this.hasZ,R=this.hasM,g=v[0],x=e(Math.min),M=e(Math.max),A=s=g[0],Z=r=g[1],P=y?3:2;for(f=0,m=v.length;m>f;f++)g=v[f],h=g[0],p=g[1],A=x(A,h),Z=x(Z,p),s=M(s,h),r=M(r,p),y&&g.length>2&&(u=g[2],n=x(n,u),o=M(o,u)),R&&g.length>P&&(c=g[P],i=x(i,c),l=M(l,c));return d.xmin=A,d.ymin=Z,d.xmax=s,d.ymax=r,d.spatialReference=this.spatialReference,y?(d.zmin=n,d.zmax=o):(d.zmin=null,d.zmax=null),R?(d.mmin=i,d.mmax=l):(d.mmin=null,d.mmax=null),d},points:null,addPoint:function(t){return this.clearCache(),r.updateSupportFromPoint(this,t),this.points.push(Array.isArray(t)?t:t.toArray()),this},clone:function(){var t={points:e.clone(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new o(t)},getPoint:function(t){if(this._validateInputs(t)){var e,n,i=this.points[t],a=2;return this.hasZ&&(e=i[2],a=3),this.hasM&&(n=i[a]),new s({x:i[0],y:i[1],z:e,m:n,spatialReference:this.spatialReference})}},removePoint:function(t){return this._validateInputs(t)?(this.clearCache(),new s(this.points.splice(t,1)[0],this.spatialReference)):void 0},setPoint:function(t,e){return this._validateInputs(t)?(this.clearCache(),r.updateSupportFromPoint(e),this.points[t]=e.toArray(),this):void 0},toJSON:function(){var t=this.spatialReference,n={points:e.clone(this.points),spatialReference:t&&t.toJSON()};return this.hasZ&&(n.hasZ=!0),this.hasM&&(n.hasM=!0),n},_pointsToArrays:function(t){for(var e=0;e<t.points.length;e++){var n=t.points[e];r.updateSupportFromPoint(t,n,!0),Array.isArray(n)||(t.spatialReference||(t.spatialReference=n.spatialReference),t.points[e]=n.toArray())}return t},_validateInputs:function(t){return null!=t&&t>=0&&t<this.points.length}});return o});