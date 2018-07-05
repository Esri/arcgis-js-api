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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./gl-matrix","./Util"],function(i,t,s,e){var r=s.vec3d;return function(){function i(i,t,s,n){e.assert(i.length>=1),e.assert(s.length%t==0),e.assert(s.length>=i.length*t),e.assert(3===n.size||4===n.size),this.primitiveIndices=i,this.indices=s,this._position=n,this._numIndexPerPrimitive=t;var h=n.data,a=n.offsetIdx,b=n.strideIdx,o=i.length,d=a+b*s[t*i[0]];this.bbMin=r.createFrom(h[d],h[d+1],h[d+2]),this.bbMax=r.create(this.bbMin);for(var c=0;c<o;++c)for(var M=t*i[c],u=0;u<t;++u){var v=a+b*s[M+u];this.bbMin[0]=Math.min(h[v],this.bbMin[0]),this.bbMax[0]=Math.max(h[v],this.bbMax[0]),++v,this.bbMin[1]=Math.min(h[v],this.bbMin[1]),this.bbMax[1]=Math.max(h[v],this.bbMax[1]),++v,this.bbMin[2]=Math.min(h[v],this.bbMin[2]),this.bbMax[2]=Math.max(h[v],this.bbMax[2])}this.center=r.create(),r.lerp(this.bbMin,this.bbMax,.5,this.center),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);for(var f=this.bsRadius*this.bsRadius,c=0;c<o;++c)for(var M=t*i[c],u=0;u<t;++u){var v=a+b*s[M+u],x=h[v]-this.center[0],p=h[v+1]-this.center[1],m=h[v+2]-this.center[2],l=x*x+p*p+m*m;if(!(l<=f)){var g=Math.sqrt(l),I=.5*(g-this.bsRadius);this.bsRadius=this.bsRadius+I,f=this.bsRadius*this.bsRadius;var y=I/g;this.center[0]+=x*y,this.center[1]+=p*y,this.center[2]+=m*y}}}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this.children)return this.children;if(r.dist2(this.bbMin,this.bbMax)>1){for(var t=r.lerp(this.bbMin,this.bbMax,.5,r.create()),s=this.primitiveIndices.length,e=new Uint8Array(s),n=new Array(8),h=0;h<8;++h)n[h]=0;for(var a=this._position,b=a.data,o=a.offsetIdx,d=a.strideIdx,h=0;h<s;++h){for(var c=0,M=this._numIndexPerPrimitive*this.primitiveIndices[h],u=o+d*this.indices[M],v=b[u],f=b[u+1],x=b[u+2],p=1;p<this._numIndexPerPrimitive;++p){u=o+d*this.indices[M+p];var m=b[u],l=b[u+1],g=b[u+2];m<v&&(v=m),l<f&&(f=l),g<x&&(x=g)}v<t[0]&&(c|=1),f<t[1]&&(c|=2),x<t[2]&&(c|=4),e[h]=c,++n[c]}for(var I=0,h=0;h<8;++h)n[h]>0&&++I;if(I<2)return;for(var y=new Array(8),h=0;h<8;++h)y[h]=n[h]>0?new Uint32Array(n[h]):void 0;for(var h=0;h<8;++h)n[h]=0;for(var h=0;h<s;++h){var c=e[h];y[c][n[c]++]=this.primitiveIndices[h]}this.children=new Array(8);for(var h=0;h<8;++h)void 0!==y[h]&&(this.children[h]=new i(y[h],this._numIndexPerPrimitive,this.indices,this._position))}return this.children},i}()});