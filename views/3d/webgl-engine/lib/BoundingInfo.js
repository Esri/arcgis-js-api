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

define(["require","exports","./gl-matrix","./Util"],function(i,t,e,r){var s=e.vec3d;return function(){function i(i,t,e,n){r.assert(i.length>=1),r.assert(e.length%t==0),r.assert(e.length>=i.length*t),r.assert(3===n.size||4===n.size),this.primitiveIndices=i,this.indices=e,this._position=n,this._numIndexPerPrimitive=t;var h=n.data,a=n.offsetIdx,o=n.strideIdx,b=i.length,d=a+o*e[t*i[0]];this.bbMin=s.createFrom(h[d],h[d+1],h[d+2]),this.bbMax=s.create(this.bbMin);for(var c=0;c<b;++c)for(var u=t*i[c],M=0;M<t;++M)d=a+o*e[u+M],this.bbMin[0]=Math.min(h[d],this.bbMin[0]),this.bbMax[0]=Math.max(h[d],this.bbMax[0]),++d,this.bbMin[1]=Math.min(h[d],this.bbMin[1]),this.bbMax[1]=Math.max(h[d],this.bbMax[1]),++d,this.bbMin[2]=Math.min(h[d],this.bbMin[2]),this.bbMax[2]=Math.max(h[d],this.bbMax[2]);this.center=s.create(),this.bsRadius=0,s.lerp(this.bbMin,this.bbMax,.5,this.center);for(var c=0;c<b;++c)for(var u=t*i[c],M=0;M<t;++M){d=a+o*e[u+M];var f=h[d]-this.center[0],v=h[d+1]-this.center[1],p=h[d+2]-this.center[2],x=f*f+v*v+p*p;this.bsRadius=Math.max(x,this.bsRadius)}this.bsRadius=Math.sqrt(this.bsRadius)}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this.children)return this.children;if(s.dist2(this.bbMin,this.bbMax)>1){for(var t=s.lerp(this.bbMin,this.bbMax,.5,s.create()),e=this.primitiveIndices.length,r=new Uint8Array(e),n=new Array(8),h=0;h<8;++h)n[h]=0;for(var a=this._position,o=a.data,b=a.offsetIdx,d=a.strideIdx,h=0;h<e;++h){for(var c=0,u=this._numIndexPerPrimitive*this.primitiveIndices[h],M=b+d*this.indices[u],f=o[M],v=o[M+1],p=o[M+2],x=1;x<this._numIndexPerPrimitive;++x){M=b+d*this.indices[u+x];var m=o[M],l=o[M+1],g=o[M+2];m<f&&(f=m),l<v&&(v=l),g<p&&(p=g)}f<t[0]&&(c|=1),v<t[1]&&(c|=2),p<t[2]&&(c|=4),r[h]=c,++n[c]}for(var I=0,h=0;h<8;++h)n[h]>0&&++I;if(I<2)return;for(var y=new Array(8),h=0;h<8;++h)y[h]=n[h]>0?new Uint32Array(n[h]):void 0;for(var h=0;h<8;++h)n[h]=0;for(var h=0;h<e;++h){var c=r[h];y[c][n[c]++]=this.primitiveIndices[h]}this.children=new Array(8);for(var h=0;h<8;++h)void 0!==y[h]&&(this.children[h]=new i(y[h],this._numIndexPerPrimitive,this.indices,this._position))}return this.children},i}()});