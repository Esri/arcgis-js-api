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

define(["require","exports","../../../../core/PooledArray","../../lib/gl-matrix","./Util"],function(i,t,e,s,r){var n=function(){function i(i,t,e,n){r.assert(i.length>=1),r.assert(e.length%t==0),r.assert(e.length>=i.length*t),r.assert(3===n.size||4===n.size),this.primitiveIndices=i,this.indices=e,this._position=n,this._numIndexPerPrimitive=t;var a=n.data,b=n.offsetIdx,o=n.strideIdx,d=0,c=i.length,u=b+o*e[t*i[d]];for(h.clear(),h.push(u),this.bbMin=s.vec3d.createFrom(a[u],a[u+1],a[u+2]),this.bbMax=s.vec3d.create(this.bbMin);d<c;++d)for(var M=t*i[d],v=0;v<t;++v){u=b+o*e[M+v],h.push(u);var f=a[u];this.bbMin[0]=Math.min(f,this.bbMin[0]),this.bbMax[0]=Math.max(f,this.bbMax[0]),f=a[u+1],this.bbMin[1]=Math.min(f,this.bbMin[1]),this.bbMax[1]=Math.max(f,this.bbMax[1]),f=a[u+2],this.bbMin[2]=Math.min(f,this.bbMin[2]),this.bbMax[2]=Math.max(f,this.bbMax[2])}this.center=s.vec3d.create(),s.vec3d.lerp(this.bbMin,this.bbMax,.5,this.center),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);var p=this.bsRadius*this.bsRadius;for(d=0;d<h.length;++d){u=h.data[d];var x=a[u]-this.center[0],m=a[u+1]-this.center[1],l=a[u+2]-this.center[2],g=x*x+m*m+l*l;if(!(g<=p)){var I=Math.sqrt(g),y=.5*(I-this.bsRadius);this.bsRadius=this.bsRadius+y,p=this.bsRadius*this.bsRadius;var P=y/I;this.center[0]+=x*P,this.center[1]+=m*P,this.center[2]+=l*P}}h.clear()}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this.children)return this.children;if(s.vec3d.dist2(this.bbMin,this.bbMax)>1){for(var t=s.vec3d.lerp(this.bbMin,this.bbMax,.5,s.vec3d.create()),e=this.primitiveIndices.length,r=new Uint8Array(e),n=new Array(8),h=0;h<8;++h)n[h]=0;for(var a=this._position,b=a.data,o=a.offsetIdx,d=a.strideIdx,h=0;h<e;++h){for(var c=0,u=this._numIndexPerPrimitive*this.primitiveIndices[h],M=o+d*this.indices[u],v=b[M],f=b[M+1],p=b[M+2],x=1;x<this._numIndexPerPrimitive;++x){M=o+d*this.indices[u+x];var m=b[M],l=b[M+1],g=b[M+2];m<v&&(v=m),l<f&&(f=l),g<p&&(p=g)}v<t[0]&&(c|=1),f<t[1]&&(c|=2),p<t[2]&&(c|=4),r[h]=c,++n[c]}for(var I=0,h=0;h<8;++h)n[h]>0&&++I;if(I<2)return;for(var y=new Array(8),h=0;h<8;++h)y[h]=n[h]>0?new Uint32Array(n[h]):void 0;for(var h=0;h<8;++h)n[h]=0;for(var h=0;h<e;++h){var c=r[h];y[c][n[c]++]=this.primitiveIndices[h]}this.children=new Array(8);for(var h=0;h<8;++h)void 0!==y[h]&&(this.children[h]=new i(y[h],this._numIndexPerPrimitive,this.indices,this._position))}return this.children},i}(),h=new e;return n});