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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./IdGen","./Util","./BoundingInfo","./ComponentUtils","./Util"],function(t,n,o,e,i,r,a){var u=function(){function t(n,o,e){this.singleUse=!1,this.componentAABB=null,this.id=t.__idGen.gen(o),this.data=n,this.boundingInfo=e}return t.prototype.getId=function(){return this.id},t.prototype.getData=function(){return this.data},t.prototype.getComponentCount=function(){return r.componentCount(this.data.componentOffsets)},t.prototype.getComponentAABB=function(t,n){null==this.componentAABB&&(this.componentAABB=this._computeComponentAABB());for(var o=0;6>o;o++)n[o]=this.componentAABB[6*t+o];return n},t.prototype._computeComponentAABB=function(){for(var t=this.getComponentCount(),n=new Float32Array(6*t),o=0;t>o;o++)this._calculateAABB(o,n,6*o);return n},t.prototype._calculateAABB=function(t,n,o){void 0===o&&(o=0);for(var e=this.data.getIndices(a.VertexAttrConstants.POSITION),i=this.data.getAttribute(a.VertexAttrConstants.POSITION),r=this.data.componentOffsets,u=r.length?r[t]:0,s=r.length?r[t+1]:e.length,d=1/0,h=1/0,p=1/0,f=-(1/0),c=-(1/0),g=-(1/0),l=i.offsetIdx,A=i.strideIdx,I=u;s>I;I++){var B=l+A*e[I],m=i.data[B],y=i.data[B+1],C=i.data[B+2];d=Math.min(d,m),h=Math.min(h,y),p=Math.min(p,C),f=Math.max(f,m),c=Math.max(c,y),g=Math.max(g,C)}return n?(n[o]=d,n[o+1]=h,n[o+2]=p,n[o+3]=f,n[o+4]=c,n[o+5]=g):n=[d,h,p,f,c,g],n},t.prototype.calculateBoundingInfo=function(){var t=this.data.getIndices(a.VertexAttrConstants.POSITION),n=this.data.getAttribute(a.VertexAttrConstants.POSITION),o="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(o);for(var r=0;o>r;++r)t[r]=r}var u=t.length;e.assert(u%o===0);for(var s=u/o,d=new Uint32Array(s),r=0;s>r;++r)d[r]=r;return new i(d,o,t,n)},t.prototype.getBoundingInfo=function(){return null==this.boundingInfo&&(this.boundingInfo=this.calculateBoundingInfo()),this.boundingInfo},t.prototype.invalidateBoundingInfo=function(){this.boundingInfo=null},t.__idGen=new o,t}();return u});