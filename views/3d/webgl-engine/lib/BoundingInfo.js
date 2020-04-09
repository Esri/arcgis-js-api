// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","./Util"],(function(i,t,e,s,n,r){var h=function(){function i(t,e,h,a){this.primitiveIndices=t,this._numIndexPerPrimitive=e,this.indices=h,this._position=a,this.center=n.vec3f64.create(),r.assert(t.length>=1),r.assert(h.length%this._numIndexPerPrimitive==0),r.assert(h.length>=t.length*this._numIndexPerPrimitive),r.assert(3===this._position.size||4===this._position.size);var b=this._position,o=b.data,c=b.offsetIdx,d=b.strideIdx,u=0,m=t.length,p=c+d*h[this._numIndexPerPrimitive*t[u]];for(i.tmpIndices.clear(),i.tmpIndices.push(p),this.bbMin=n.vec3f64.fromValues(o[p],o[p+1],o[p+2]),this.bbMax=n.vec3f64.clone(this.bbMin);u<m;++u)for(var v=this._numIndexPerPrimitive*t[u],M=0;M<this._numIndexPerPrimitive;++M){p=c+d*h[v+M],i.tmpIndices.push(p);var f=o[p];this.bbMin[0]=Math.min(f,this.bbMin[0]),this.bbMax[0]=Math.max(f,this.bbMax[0]),f=o[p+1],this.bbMin[1]=Math.min(f,this.bbMin[1]),this.bbMax[1]=Math.max(f,this.bbMax[1]),f=o[p+2],this.bbMin[2]=Math.min(f,this.bbMin[2]),this.bbMax[2]=Math.max(f,this.bbMax[2])}s.vec3.lerp(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);var x=this.bsRadius*this.bsRadius;for(u=0;u<i.tmpIndices.length;++u){var l=o[p=i.tmpIndices.data[u]]-this.center[0],I=o[p+1]-this.center[1],P=o[p+2]-this.center[2],_=l*l+I*I+P*P;if(!(_<=x)){var g=Math.sqrt(_),y=.5*(g-this.bsRadius);this.bsRadius=this.bsRadius+y,x=this.bsRadius*this.bsRadius;var R=y/g;this.center[0]+=l*R,this.center[1]+=I*R,this.center[2]+=P*R}}i.tmpIndices.clear()}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this._children)return this._children;if(s.vec3.squaredDistance(this.bbMin,this.bbMax)>1){for(var t=s.vec3.lerp(n.vec3f64.create(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,r=new Uint8Array(e),h=new Array(8),a=0;a<8;++a)h[a]=0;var b=this._position,o=b.data,c=b.offsetIdx,d=b.strideIdx;for(a=0;a<e;++a){for(var u=0,m=this._numIndexPerPrimitive*this.primitiveIndices[a],p=c+d*this.indices[m],v=o[p],M=o[p+1],f=o[p+2],x=1;x<this._numIndexPerPrimitive;++x){var l=o[p=c+d*this.indices[m+x]],I=o[p+1],P=o[p+2];l<v&&(v=l),I<M&&(M=I),P<f&&(f=P)}v<t[0]&&(u|=1),M<t[1]&&(u|=2),f<t[2]&&(u|=4),r[a]=u,++h[u]}var _=0;for(a=0;a<8;++a)h[a]>0&&++_;if(_<2)return;var g=new Array(8);for(a=0;a<8;++a)g[a]=h[a]>0?new Uint32Array(h[a]):void 0;for(a=0;a<8;++a)h[a]=0;for(a=0;a<e;++a){g[u=r[a]][h[u]++]=this.primitiveIndices[a]}this._children=new Array(8);for(a=0;a<8;++a)void 0!==g[a]&&(this._children[a]=new i(g[a],this._numIndexPerPrimitive,this.indices,this._position))}return this._children},i}();return function(i){i.tmpIndices=new e({deallocator:null})}(h||(h={})),h}));