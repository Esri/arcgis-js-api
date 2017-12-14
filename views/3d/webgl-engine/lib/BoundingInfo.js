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

define(["require","exports","./Util","./gl-matrix"],function(i,t,r,e){var s=e.vec3d,n=function(){function i(i,t,e,n){r.assert(i.length>=1),r.assert(e.length%t===0),r.assert(e.length>=i.length*t),r.assert(3===n.size||4===n.size),this.primitiveIndices=i,this.indices=e,this._position=n,this._numIndexPerPrimitive=t;var h=n.data,o=n.offsetIdx,a=n.strideIdx,d=0,c=i.length,b=o+a*e[t*i[d]];this.bbMin=s.createFrom(h[b],h[b+1],h[b+2]),this.bbMax=s.create(this.bbMin);for(var u=d;c>u;++u)for(var f=t*i[u],v=0;t>v;++v){b=o+a*e[f+v];for(var p=0;3>p;++p){var x=h[b+p];x<this.bbMin[p]?this.bbMin[p]=x:x>this.bbMax[p]&&(this.bbMax[p]=x)}}this.center=s.create(),s.lerp(this.bbMin,this.bbMax,.5,this.center),this.bsRadius=0;for(var u=d;c>u;++u)for(var f=t*i[u],v=0;t>v;++v){b=o+a*e[f+v];var M=h[b]-this.center[0],l=h[b+1]-this.center[1],m=h[b+2]-this.center[2],g=M*M+l*l+m*m;g>this.bsRadius&&(this.bsRadius=g)}this.bsRadius=Math.sqrt(this.bsRadius)}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this._position},i.prototype.getChildren=function(){if(this.children)return this.children;if(s.dist2(this.bbMin,this.bbMax)>1){for(var t=s.lerp(this.bbMin,this.bbMax,.5,s.create()),r=this.primitiveIndices.length,e=new Uint8Array(r),n=new Array(8),h=0;8>h;++h)n[h]=0;for(var o=this._position,a=o.data,d=o.offsetIdx,c=o.strideIdx,h=0;r>h;++h){for(var b=0,u=this._numIndexPerPrimitive*this.primitiveIndices[h],f=d+c*this.indices[u],v=a[f],p=a[f+1],x=a[f+2],M=1;M<this._numIndexPerPrimitive;++M){f=d+c*this.indices[u+M];var l=a[f],m=a[f+1],g=a[f+2];v>l&&(v=l),p>m&&(p=m),x>g&&(x=g)}v<t[0]&&(b|=1),p<t[1]&&(b|=2),x<t[2]&&(b|=4),e[h]=b,++n[b]}for(var I=0,h=0;8>h;++h)n[h]>0&&++I;if(2>I)return;for(var y=new Array(8),h=0;8>h;++h)y[h]=n[h]>0?new Uint32Array(n[h]):void 0;for(var h=0;8>h;++h)n[h]=0;for(var h=0;r>h;++h){var b=e[h];y[b][n[b]++]=this.primitiveIndices[h]}this.children=new Array(8);for(var h=0;8>h;++h)void 0!==y[h]&&(this.children[h]=new i(y[h],this._numIndexPerPrimitive,this.indices,this._position))}return this.children},i}();return n});