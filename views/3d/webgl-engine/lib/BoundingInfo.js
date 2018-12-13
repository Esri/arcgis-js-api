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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/PooledArray","../../../../core/libs/gl-matrix-2/gl-matrix","./Util"],function(i,t,e,s,r){var n=function(){function i(i,t,e,n){r.assert(i.length>=1),r.assert(e.length%t==0),r.assert(e.length>=i.length*t),r.assert(3===n.size||4===n.size),this.primitiveIndices=i,this.indices=e,this._position=n,this._numIndexPerPrimitive=t;var a=n.data,b=n.offsetIdx,o=n.strideIdx,c=0,d=i.length,u=b+o*e[t*i[c]];for(h.clear(),h.push(u),this.bbMin=s.vec3f64.fromValues(a[u],a[u+1],a[u+2]),this.bbMax=s.vec3f64.clone(this.bbMin);c<d;++c)for(var M=t*i[c],v=0;v<t;++v){u=b+o*e[M+v],h.push(u);var f=a[u];this.bbMin[0]=Math.min(f,this.bbMin[0]),this.bbMax[0]=Math.max(f,this.bbMax[0]),f=a[u+1],this.bbMin[1]=Math.min(f,this.bbMin[1]),this.bbMax[1]=Math.max(f,this.bbMax[1]),f=a[u+2],this.bbMin[2]=Math.min(f,this.bbMin[2]),this.bbMax[2]=Math.max(f,this.bbMax[2])}this.center=s.vec3f64.create(),s.vec3.lerp(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);var x=this.bsRadius*this.bsRadius;for(c=0;c<h.length;++c){u=h.data[c];var p=a[u]-this.center[0],l=a[u+1]-this.center[1],m=a[u+2]-this.center[2],g=p*p+l*l+m*m;if(!(g<=x)){var I=Math.sqrt(g),y=.5*(I-this.bsRadius);this.bsRadius=this.bsRadius+y,x=this.bsRadius*this.bsRadius;var P=y/I;this.center[0]+=p*P,this.center[1]+=l*P,this.center[2]+=m*P}}h.clear()}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this.children)return this.children;if(s.vec3.squaredDistance(this.bbMin,this.bbMax)>1){for(var t=s.vec3.lerp(s.vec3f64.create(),this.bbMin,this.bbMax,.5),e=this.primitiveIndices.length,r=new Uint8Array(e),n=new Array(8),h=0;h<8;++h)n[h]=0;for(var a=this._position,b=a.data,o=a.offsetIdx,c=a.strideIdx,h=0;h<e;++h){for(var d=0,u=this._numIndexPerPrimitive*this.primitiveIndices[h],M=o+c*this.indices[u],v=b[M],f=b[M+1],x=b[M+2],p=1;p<this._numIndexPerPrimitive;++p){M=o+c*this.indices[u+p];var l=b[M],m=b[M+1],g=b[M+2];l<v&&(v=l),m<f&&(f=m),g<x&&(x=g)}v<t[0]&&(d|=1),f<t[1]&&(d|=2),x<t[2]&&(d|=4),r[h]=d,++n[d]}for(var I=0,h=0;h<8;++h)n[h]>0&&++I;if(I<2)return;for(var y=new Array(8),h=0;h<8;++h)y[h]=n[h]>0?new Uint32Array(n[h]):void 0;for(var h=0;h<8;++h)n[h]=0;for(var h=0;h<e;++h){var d=r[h];y[d][n[d]++]=this.primitiveIndices[h]}this.children=new Array(8);for(var h=0;h<8;++h)void 0!==y[h]&&(this.children[h]=new i(y[h],this._numIndexPerPrimitive,this.indices,this._position))}return this.children},i}(),h=new e({deallocator:null});return n});