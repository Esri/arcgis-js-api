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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./IdGen","./Util","./BoundingInfo","./ComponentUtils"],function(t,n,o,e,i,r){var a=function(){function t(n,o,i){this.singleUse=!1,this.componentAABB=null,this.id=t.__idGen.gen(o),this.data=n,this.boundingInfos=i||[],e.assert(n.faces.length>=1)}return t.prototype.getId=function(){return this.id},t.prototype.getData=function(){return this.data},Object.defineProperty(t.prototype,"numGroups",{get:function(){return this.data.faces.length},enumerable:!0,configurable:!0}),t.prototype.getNumGroups=function(){return this.numGroups},t.prototype.getComponentCount=function(){return r.componentCount(this.data.componentOffsets)},t.prototype.getComponentAABB=function(t,n){null==this.componentAABB&&(this.componentAABB=this._computeComponentAABB());for(var o=0;6>o;o++)n[o]=this.componentAABB[6*t+o];return n},t.prototype._computeComponentAABB=function(){for(var t=this.getComponentCount(),n=new Float32Array(6*t),o=0;t>o;o++)this._calculateAABB(0,o,n,6*o);return n},t.prototype._calculateAABB=function(t,n,o,e){void 0===e&&(e=0);for(var i=this.data.faces[t],r=i.indices[i.positionKey],a=this.data.vertexAttributes[i.positionKey].data,u=this.data.componentOffsets,s=u.length?u[n]:0,p=u.length?u[n+1]:r.length,f=1/0,c=1/0,h=1/0,d=-(1/0),l=-(1/0),g=-(1/0),m=s;p>m;m++){var A=3*r[m],B=a[A],y=a[A+1],v=a[A+2];f=Math.min(f,B),c=Math.min(c,y),h=Math.min(h,v),d=Math.max(d,B),l=Math.max(l,y),g=Math.max(g,v)}return o?(o[e]=f,o[e+1]=c,o[e+2]=h,o[e+3]=d,o[e+4]=l,o[e+5]=g):o=[f,c,h,d,l,g],o},t.prototype.calculateBoundingInfo=function(t,n){var o=this.data.faces[t],r="triangle"===o.type?3:1,a=o.indices[o.positionKey];if(0===a.length){a=new Uint32Array(r);for(var u=0;r>u;++u)a[u]=u}var s=a.length;e.assert(s%r===0);for(var p=s/r,f=new Uint32Array(p),u=0;p>u;++u)f[u]=u;return new i(f,r,a,this.data.vertexAttributes[o.positionKey],n)},t.prototype.getBoundingInfo=function(t){var n=this.boundingInfos[t];return null==n&&(n=this.calculateBoundingInfo(t),this.boundingInfos[t]=n),n},t.prototype.invalidateBoundingInfo=function(){this.boundingInfos=[]},t.__idGen=new o,t}();return a});