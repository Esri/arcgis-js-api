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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./Util"],function(i,t,e,s,r,n){var h=function(){function i(t,e,h,a){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.indices=h,this._position=a,this.center=r.vec3f64.create(),n.assert(t.length>=1),n.assert(h.length%this._numIndexPerPrimitive==0),n.assert(h.length>=t.length*this._numIndexPerPrimitive),n.assert(3===this._position.size||4===this._position.size);var b=this._position,o=b.data,c=b.offsetIdx,d=b.strideIdx,u=0,v=t.length,m=c+d*h[this._numIndexPerPrimitive*t[u]];for(i.tmpIndices.clear(),i.tmpIndices.push(m),this.bbMin=r.vec3f64.fromValues(o[m],o[m+1],o[m+2]),this.bbMax=r.vec3f64.clone(this.bbMin);u<v;++u)for(var p=this._numIndexPerPrimitive*t[u],M=0;M<this._numIndexPerPrimitive;++M){m=c+d*h[p+M],i.tmpIndices.push(m);var f=o[m];this.bbMin[0]=Math.min(f,this.bbMin[0]),this.bbMax[0]=Math.max(f,this.bbMax[0]),f=o[m+1],this.bbMin[1]=Math.min(f,this.bbMin[1]),this.bbMax[1]=Math.max(f,this.bbMax[1]),f=o[m+2],this.bbMin[2]=Math.min(f,this.bbMin[2]),this.bbMax[2]=Math.max(f,this.bbMax[2])}s.vec3.lerp(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);var x=this.bsRadius*this.bsRadius;for(u=0;u<i.tmpIndices.length;++u){m=i.tmpIndices.data[u];var l=o[m]-this.center[0],I=o[m+1]-this.center[1],P=o[m+2]-this.center[2],_=l*l+I*I+P*P;if(!(_<=x)){var g=Math.sqrt(_),y=.5*(g-this.bsRadius);this.bsRadius=this.bsRadius+y,x=this.bsRadius*this.bsRadius;var R=y/g;this.center[0]+=l*R,this.center[1]+=I*R,this.center[2]+=P*R}}i.tmpIndices.clear()}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this._children)return this._children;if(s.vec3.squaredDistance(this.bbMin,this.bbMax)>1){for(var t=s.vec3.lerp(r.vec3f64.create(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,n=new Uint8Array(e),h=new Array(8),a=0;a<8;++a)h[a]=0;for(var b=this._position,o=b.data,c=b.offsetIdx,d=b.strideIdx,a=0;a<e;++a){for(var u=0,v=this._numIndexPerPrimitive*this.primitiveIndices[a],m=c+d*this.indices[v],p=o[m],M=o[m+1],f=o[m+2],x=1;x<this._numIndexPerPrimitive;++x){m=c+d*this.indices[v+x];var l=o[m],I=o[m+1],P=o[m+2];l<p&&(p=l),I<M&&(M=I),P<f&&(f=P)}p<t[0]&&(u|=1),M<t[1]&&(u|=2),f<t[2]&&(u|=4),n[a]=u,++h[u]}for(var _=0,a=0;a<8;++a)h[a]>0&&++_;if(_<2)return;for(var g=new Array(8),a=0;a<8;++a)g[a]=h[a]>0?new Uint32Array(h[a]):void 0;for(var a=0;a<8;++a)h[a]=0;for(var a=0;a<e;++a){var u=n[a];g[u][h[u]++]=this.primitiveIndices[a]}this._children=new Array(8);for(var a=0;a<8;++a)void 0!==g[a]&&(this._children[a]=new i(g[a],this._numIndexPerPrimitive,this.indices,this._position))}return this._children},i}();return function(i){i.tmpIndices=new e({deallocator:null})}(h||(h={})),h});