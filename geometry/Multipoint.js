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

define(["dojo/_base/lang","./SpatialReference","./Geometry","./Point","./Extent","./support/zmUtils"],function(t,n,e,i,s,a){var r=e.createSubclass({declaredClass:"esri.geometry.Multipoint",type:"multipoint",getDefaults:function(t){return{points:[]}},normalizeCtorArgs:function(t,e){var i,s,a=null,r=null;return t&&!Array.isArray(t)?t.wkid?e=t:(a=t.points||null,e=t.spatialReference||null,i=t.hasZ,s=t.hasM):a=t,a=a||[],e=e||n.WGS84,r=a[0],r&&(void 0===i&&void 0===s?(i=r.length>2,s=!1):void 0===i?i=r.length>3:void 0===s&&(s=r.length>3)),{points:a,spatialReference:e,hasZ:i,hasM:s}},properties:{cache:{dependsOn:["points","hasZ","hasM"]},extent:{dependsOn:["cache"],get:function(t){function n(t){return function(n,e){return null==n?e:null==e?n:t(n,e)}}if(!this.points.length)return null;var e,i,a,r,o,l,h,p,u,c,f,m,d=t||new s,v=this.points,y=this.hasZ,g=this.hasM,R=v[0],x=n(Math.min),M=n(Math.max),A=a=R[0],Z=r=R[1],P=y?3:2;for(f=0,m=v.length;m>f;f++)R=v[f],h=R[0],p=R[1],A=x(A,h),Z=x(Z,p),a=M(a,h),r=M(r,p),y&&R.length>2&&(u=R[2],e=x(e,u),o=M(o,u)),g&&R.length>P&&(c=R[P],i=x(i,c),l=M(l,c));return d.xmin=A,d.ymin=Z,d.xmax=a,d.ymax=r,d.spatialReference=this.spatialReference,y?(d.zmin=e,d.zmax=o):(d.zmin=null,d.zmax=null),g?(d.mmin=i,d.mmax=l):(d.mmin=null,d.mmax=null),d}},points:null},addPoint:function(t){return this.clearCache(),a.updateSupportFromPoint(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this},clone:function(){var n={points:t.clone(this.points),spatialReference:this.spatialReference};return this.hasZ&&(n.hasZ=!0),this.hasM&&(n.hasM=!0),new r(n)},getPoint:function(t){if(this._validateInputs(t)){var n,e,s=this.points[t],a=2;return this.hasZ&&(n=s[2],a=3),this.hasM&&(e=s[a]),new i({x:s[0],y:s[1],z:n,m:e,spatialReference:this.spatialReference})}},removePoint:function(t){return this._validateInputs(t)?(this.clearCache(),new i(this.points.splice(t,1)[0],this.spatialReference)):void 0},setPoint:function(t,n){return this._validateInputs(t)?(this.clearCache(),a.updateSupportFromPoint(n),this.points[t]=n.toArray(),this):void 0},toJSON:function(){var n=this.spatialReference,e={points:t.clone(this.points),spatialReference:n&&n.toJSON()};return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),e},_pointsToArrays:function(t){for(var n=0;n<t.points.length;n++){var e=t.points[n];a.updateSupportFromPoint(t,e,!0),Array.isArray(e)||(t.spatialReference||(t.spatialReference=e.spatialReference),t.points[n]=e.toArray())}return t},_validateInputs:function(t){return null!=t&&t>=0&&t<this.points.length}});return r});