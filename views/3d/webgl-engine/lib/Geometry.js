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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","./BoundingInfo","./ComponentUtils","./geometryDataUtils","./IdGen","./Util","./Util"],function(t,n,e,o,i,r,a,u){return function(){function t(n,e,o){this.singleUse=!1,this._boundingInfo=null,this._componentAABB=null,this.id=t.__idGen.gen(e),this._data=n,this._boundingInfo=o}return Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentCount",{get:function(){return o.componentCount(this.data.componentOffsets)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boundingInfo",{get:function(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo},enumerable:!0,configurable:!0}),t.prototype.invalidateBoundingInfo=function(){this._boundingInfo=null},t.prototype.getComponentAABB=function(t,n){null==this._componentAABB&&(this._componentAABB=this._computeComponentAABB());for(var e=0;e<6;e++)n[e]=this._componentAABB[6*t+e];return n},t.prototype._computeComponentAABB=function(){for(var t=this.componentCount,n=new Float32Array(6*t),e=0;e<t;e++)this._calculateAABB(e,n,6*e);return n},t.prototype._calculateAABB=function(t,n,e){void 0===e&&(e=0);for(var o=this.data.getIndices(u.VertexAttrConstants.POSITION),i=this.data.getAttribute(u.VertexAttrConstants.POSITION),r=this.data.componentOffsets,a=r.length?r[t]:0,s=r.length?r[t+1]:o.length,f=1/0,d=1/0,c=1/0,l=-1/0,p=-1/0,h=-1/0,g=i.offsetIdx,A=i.strideIdx,m=a;m<s;m++){var I=g+A*o[m],B=i.data[I],_=i.data[I+1],b=i.data[I+2];f=Math.min(f,B),d=Math.min(d,_),c=Math.min(c,b),l=Math.max(l,B),p=Math.max(p,_),h=Math.max(h,b)}return n?(n[e]=f,n[e+1]=d,n[e+2]=c,n[e+3]=l,n[e+4]=p,n[e+5]=h):n=[f,d,c,l,p,h],n},t.prototype._calculateBoundingInfo=function(){var t=this.data.getIndices(u.VertexAttrConstants.POSITION),n=this.data.getAttribute(u.VertexAttrConstants.POSITION),o="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(o);for(var r=0;r<o;++r)t[r]=r}var s=t.length;a.assert(s%o==0);var f=i.generateDefaultIndexArray(s/o);return new e(f,o,t,n)},t.__idGen=new r,t}()});