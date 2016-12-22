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

define(["dojo/_base/lang","../core/lang","./SpatialReference","./Geometry","./Point","./Extent","./support/zmUtils"],function(t,e,a,i,s,n,h){var r="number",p=i.createSubclass({declaredClass:"esri.geometry.Polyline",type:"polyline",getDefaults:function(t){return{paths:[]}},normalizeCtorArgs:function(t,e){var i,s,n=null,h=null;return t&&!Array.isArray(t)?(n=t.paths?t.paths:null,e||(t.spatialReference?e=t.spatialReference:t.paths||(e=t)),i=t.hasZ,s=t.hasM):n=t,n=n||[],e=e||a.WGS84,n.length&&n[0]&&null!=n[0][0]&&typeof n[0][0]==r&&(n=[n]),h=n[0]&&n[0][0],h&&(void 0===i&&void 0===s?(i=h.length>2,s=!1):void 0===i?i=!s&&h.length>3:void 0===s&&(s=!i&&h.length>3)),{paths:n,spatialReference:e,hasZ:i,hasM:s}},_path:0,properties:{cache:{dependsOn:["hasM","hasZ","paths"]},extent:{dependsOn:["cache"],readOnly:!0,get:function(){function t(t){return function(e,a){return void 0===e?a:void 0===a?e:t(e,a)}}var e=this.paths,a=e.length;if(!a||!e[0].length)return null;var i,s,h,r,p,l,o,u,c,f,d,m,v,y,g,_,R,P,A,x,M,w,S,Z=o=e[0][0][0],C=u=e[0][0][1],z=t(Math.min),I=t(Math.max),O=this.spatialReference,F=[],b=this.hasZ,E=this.hasM,J=b?3:2;for(d=0;a>d;d++){for(i=e[d],_=R=i[0]&&i[0][0],P=A=i[0]&&i[0][1],v=i.length,x=M=void 0,w=S=void 0,m=0;v>m;m++)s=i[m],h=s[0],r=s[1],Z=z(Z,h),C=z(C,r),o=I(o,h),u=I(u,r),_=z(_,h),P=z(P,r),R=I(R,h),A=I(A,r),b&&s.length>2&&(p=s[2],y=z(y,p),c=I(c,p),x=z(x,p),M=I(M,p)),E&&s.length>J&&(l=s[J],g=z(g,p),f=I(f,p),w=z(w,l),S=I(S,l));F.push(new n({xmin:_,ymin:P,zmin:x,mmin:w,xmax:R,ymax:A,zmax:M,mmax:S,spatialReference:O?O.clone():null}))}var N=new n({xmin:Z,ymin:C,xmax:o,ymax:u,spatialReference:O?O.toJSON():null});return b&&(N.zmin=y,N.zmax=c),E&&(N.mmin=g,N.mmax=f),N.cache._partwise=F.length>1?F:null,N}},paths:null},addPath:function(t){return this.clearCache(),this._path=this.paths.length,this.paths[this._path]=[],t.forEach(this._addPoint,this),this},clone:function(){var e=new p;return e.spatialReference=this.spatialReference,e.paths=t.clone(this.paths),e.hasZ=this.hasZ,e.hasM=this.hasM,e},getPoint:function(t,e){if(this._validateInputs(t,e)){var a=this.paths[t][e],i=this.hasZ,n=this.hasM;return i&&n?new s(a[0],a[1],a[2],a[3],this.spatialReference):i?new s(a[0],a[1],a[2],void 0,this.spatialReference):n?new s(a[0],a[1],void 0,a[2],this.spatialReference):new s(a[0],a[1],this.spatialReference)}},insertPoint:function(t,a,i){return this._validateInputs(t)&&e.isDefined(a)&&a>=0&&a<=this.paths[t].length?(this.clearCache(),h.updateSupportFromPoint(this,i),Array.isArray(i)||(i=i.toArray()),this.paths[t].splice(a,0,i),this):void 0},removePath:function(t){if(this._validateInputs(t,null)){this.clearCache();var e,a=this.paths.splice(t,1)[0],i=a.length,n=this.spatialReference;for(e=0;i>e;e++)a[e]=new s(a[e],n);return a}},removePoint:function(t,e){return this._validateInputs(t,e)?(this.clearCache(),new s(this.paths[t].splice(e,1)[0],this.spatialReference)):void 0},setPoint:function(t,e,a){return this._validateInputs(t,e)?(this.clearCache(),h.updateSupportFromPoint(this,a),Array.isArray(a)||(a=a.toArray()),this.paths[t][e]=a,this):void 0},toJSON:function(){var t=this.spatialReference,e={paths:this.paths,spatialReference:t&&t.toJSON()};return this.hasZ&&(e.hasZ=!0),this.hasM&&(e.hasM=!0),e},_initPathPointsToArray:function(t){for(var e=0;e<t.paths.length;e++)t.paths[e]=t.paths[e].map(function(e){return h.updateSupportFromPoint(t,e,!0),Array.isArray(e)||(t.spatialReference||(t.spatialReference=e.spatialReference),e=e.toArray()),e});return t},_addPoint:function(t){Array.isArray(t)?this.paths[this._path].push(t):this.paths[this._path].push(t.toArray()),h.updateSupportFromPoint(this,t)},_insertPoints:function(t,e){this.clearCache(),this._path=e,this.paths[this._path]||(this.paths[this._path]=[]),t.forEach(this._addPoint,this)},_validateInputs:function(t,e){return null!==t&&void 0!==t&&(0>t||t>=this.paths.length)?!1:null!==e&&void 0!==t&&(0>e||e>=this.paths[t].length)?!1:!0}});return p});