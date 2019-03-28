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

define(["require","exports","../../../../core/PooledArray","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./Util"],function(i,t,e,s,r,n){var h=function(){function i(t,e,h,a){n.assert(t.length>=1),n.assert(h.length%e==0),n.assert(h.length>=t.length*e),n.assert(3===a.size||4===a.size),this.primitiveIndices=t,this.indices=h,this._position=a,this._numIndexPerPrimitive=e;var b=a.data,c=a.offsetIdx,o=a.strideIdx,d=0,u=t.length,M=c+o*h[e*t[d]];for(i.tmpIndices.clear(),i.tmpIndices.push(M),this.bbMin=r.vec3f64.fromValues(b[M],b[M+1],b[M+2]),this.bbMax=r.vec3f64.clone(this.bbMin);d<u;++d)for(var v=e*t[d],f=0;f<e;++f){M=c+o*h[v+f],i.tmpIndices.push(M);var p=b[M];this.bbMin[0]=Math.min(p,this.bbMin[0]),this.bbMax[0]=Math.max(p,this.bbMax[0]),p=b[M+1],this.bbMin[1]=Math.min(p,this.bbMin[1]),this.bbMax[1]=Math.max(p,this.bbMax[1]),p=b[M+2],this.bbMin[2]=Math.min(p,this.bbMin[2]),this.bbMax[2]=Math.max(p,this.bbMax[2])}this.center=r.vec3f64.create(),s.vec3.lerp(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);var m=this.bsRadius*this.bsRadius;for(d=0;d<i.tmpIndices.length;++d){M=i.tmpIndices.data[d];var x=b[M]-this.center[0],l=b[M+1]-this.center[1],I=b[M+2]-this.center[2],g=x*x+l*l+I*I;if(!(g<=m)){var y=Math.sqrt(g),P=.5*(y-this.bsRadius);this.bsRadius=this.bsRadius+P,m=this.bsRadius*this.bsRadius;var R=P/y;this.center[0]+=x*R,this.center[1]+=l*R,this.center[2]+=I*R}}i.tmpIndices.clear()}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this.children)return this.children;if(s.vec3.squaredDistance(this.bbMin,this.bbMax)>1){for(var t=s.vec3.lerp(r.vec3f64.create(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),h=new Array(8),a=0;a<8;++a)h[a]=0;for(var b=this._position,c=b.data,o=b.offsetIdx,d=b.strideIdx,a=0;a<e;++a){for(var u=0,M=this._numIndexPerPrimitive*this.primitiveIndices[a],v=o+d*this.indices[M],f=c[v],p=c[v+1],m=c[v+2],x=1;x<this._numIndexPerPrimitive;++x){v=o+d*this.indices[M+x];var l=c[v],I=c[v+1],g=c[v+2];l<f&&(f=l),I<p&&(p=I),g<m&&(m=g)}f<t[0]&&(u|=1),p<t[1]&&(u|=2),m<t[2]&&(u|=4),n[a]=u,++h[u]}for(var y=0,a=0;a<8;++a)h[a]>0&&++y;if(y<2)return;for(var P=new Array(8),a=0;a<8;++a)P[a]=h[a]>0?new Uint32Array(h[a]):void 0;for(var a=0;a<8;++a)h[a]=0;for(var a=0;a<e;++a){var u=n[a];P[u][h[u]++]=this.primitiveIndices[a]}this.children=new Array(8);for(var a=0;a<8;++a)void 0!==P[a]&&(this.children[a]=new i(P[a],this._numIndexPerPrimitive,this.indices,this._position))}return this.children},i}();return function(i){i.tmpIndices=new e({deallocator:null})}(h||(h={})),h});