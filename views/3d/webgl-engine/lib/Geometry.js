// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./BoundingInfo","./ComponentUtils","./geometryDataUtils","./IdGen","./Util","./Util"],function(t,e,n,o,i,r,a,u){return function(){function t(e,n,o){this.singleUse=!1,this._boundingInfo=null,this._componentAABBs=null,this._id=t.__idGen.gen(n),this._data=e,this._boundingInfo=o}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return this._data},enumerable:!0,configurable:!0}),t.prototype.getIndices=function(t){return this.data.getIndices(t)},Object.defineProperty(t.prototype,"indexCount",{get:function(){return this.data.indexCount},enumerable:!0,configurable:!0}),t.prototype.getAttribute=function(t){return this.data.getAttribute(t)},Object.defineProperty(t.prototype,"componentCount",{get:function(){return o.componentCount(this.data.componentOffsets)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"componentOffsets",{get:function(){return this.data.componentOffsets},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"vertexCount",{get:function(){return this.data.indexCount},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"faceCount",{get:function(){return this.data.indexCount/3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boundingInfo",{get:function(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo},enumerable:!0,configurable:!0}),t.prototype.invalidateBoundingInfo=function(){this._boundingInfo=null,this._componentAABBs=null},t.prototype.getComponentAABB=function(t,e){null==this._componentAABBs&&(this._componentAABBs=this._computeComponentAABBs());for(var n=0;n<6;n++)e[n]=this._componentAABBs[6*t+n];return e},t.prototype._computeComponentAABBs=function(){for(var t=this.componentCount,e=new Float32Array(6*t),n=0;n<t;n++)this._calculateAABB(n,e,6*n);return e},t.prototype._calculateAABB=function(t,e,n){for(var o=this.data.getIndices(u.VertexAttrConstants.POSITION),i=this.data.getAttribute(u.VertexAttrConstants.POSITION),r=this.data.componentOffsets,a=r.length?r[t]:0,s=r.length?r[t+1]:o.length,d=1/0,f=1/0,c=1/0,p=-1/0,l=-1/0,g=-1/0,h=i.offsetIdx,b=i.strideIdx,m=a;m<s;m++){var A=h+b*o[m],y=i.data[A],I=i.data[A+1],_=i.data[A+2];d=Math.min(d,y),f=Math.min(f,I),c=Math.min(c,_),p=Math.max(p,y),l=Math.max(l,I),g=Math.max(g,_)}e[n]=d,e[n+1]=f,e[n+2]=c,e[n+3]=p,e[n+4]=l,e[n+5]=g},t.prototype._calculateBoundingInfo=function(){var t=this.data.getIndices(u.VertexAttrConstants.POSITION),e=this.data.getAttribute(u.VertexAttrConstants.POSITION),o="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(o);for(var r=0;r<o;++r)t[r]=r}var s=t.length;a.assert(s%o==0,"Indexing error: "+s.toFixed(0)+" not divisible by "+o.toFixed(0));var d=i.generateDefaultIndexArray(s/o);return new n(d,o,t,e)},t.__idGen=new r.IdGen,t}()});