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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./BoundingInfo","./ComponentUtils","./geometryDataUtils","./IdGen","./Util","./Util"],function(t,n,e,o,i,a,r,s){return function(){function t(n,e,o){this.singleUse=!1,this.componentAABB=null,this.id=t.__idGen.gen(e),this.data=n,this.boundingInfo=o}return t.prototype.getData=function(){return this.data},t.prototype.getComponentCount=function(){return o.componentCount(this.data.componentOffsets)},t.prototype.getComponentAABB=function(t,n){null==this.componentAABB&&(this.componentAABB=this._computeComponentAABB());for(var e=0;e<6;e++)n[e]=this.componentAABB[6*t+e];return n},t.prototype._computeComponentAABB=function(){for(var t=this.getComponentCount(),n=new Float32Array(6*t),e=0;e<t;e++)this._calculateAABB(e,n,6*e);return n},t.prototype._calculateAABB=function(t,n,e){void 0===e&&(e=0);for(var o=this.data.getIndices(s.VertexAttrConstants.POSITION),i=this.data.getAttribute(s.VertexAttrConstants.POSITION),a=this.data.componentOffsets,r=a.length?a[t]:0,u=a.length?a[t+1]:o.length,d=1/0,h=1/0,f=1/0,p=-1/0,c=-1/0,l=-1/0,g=i.offsetIdx,A=i.strideIdx,I=r;I<u;I++){var m=g+A*o[I],B=i.data[m],y=i.data[m+1],C=i.data[m+2];d=Math.min(d,B),h=Math.min(h,y),f=Math.min(f,C),p=Math.max(p,B),c=Math.max(c,y),l=Math.max(l,C)}return n?(n[e]=d,n[e+1]=h,n[e+2]=f,n[e+3]=p,n[e+4]=c,n[e+5]=l):n=[d,h,f,p,c,l],n},t.prototype.calculateBoundingInfo=function(){var t=this.data.getIndices(s.VertexAttrConstants.POSITION),n=this.data.getAttribute(s.VertexAttrConstants.POSITION),o="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(o);for(var a=0;a<o;++a)t[a]=a}var u=t.length;r.assert(u%o==0);var d=i.generateDefaultIndexArray(u/o);return new e(d,o,t,n)},t.prototype.getBoundingInfo=function(){return null==this.boundingInfo&&(this.boundingInfo=this.calculateBoundingInfo()),this.boundingInfo},t.prototype.invalidateBoundingInfo=function(){this.boundingInfo=null},t.__idGen=new a,t}()});