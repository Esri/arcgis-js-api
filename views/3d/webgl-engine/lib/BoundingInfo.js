// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Util","./gl-matrix"],function(i,t,r,e){var n=e.vec3d,s=function(){function i(i,t,e,s,h){r.assert(i.length>=1),r.assert(e.length%t===0),r.assert(e.length>=i.length*t),r.assert(3===s.size||4===s.size),this.primitiveIndices=i,this.indices=e,this.position=s,this._numIndexPerPrimitive=t,this._faceRange=h;var a=s.data,o=s.size,c=0,b=i.length;null!=h&&(c=h[0],b=h[1]+1);var d=o*e[t*i[c]];this.bbMin=n.createFrom(a[d],a[d+1],a[d+2]),this.bbMax=n.create(this.bbMin);for(var u=c;b>u;++u)for(var v=t*i[u],f=0;t>f;++f){d=o*e[v+f];for(var p=0;3>p;++p){var l=a[d+p];l<this.bbMin[p]?this.bbMin[p]=l:l>this.bbMax[p]&&(this.bbMax[p]=l)}}this.center=n.create(),n.lerp(this.bbMin,this.bbMax,.5,this.center),this.bsRadius=0;for(var u=c;b>u;++u)for(var v=t*i[u],f=0;t>f;++f){d=o*e[v+f];var M=a[d]-this.center[0],g=a[d+1]-this.center[1],m=a[d+2]-this.center[2],x=M*M+g*g+m*m;x>this.bsRadius&&(this.bsRadius=x)}this.bsRadius=Math.sqrt(this.bsRadius)}return i.prototype.getCenter=function(){return this.center},i.prototype.getBSRadius=function(){return this.bsRadius},i.prototype.getBBMin=function(){return this.bbMin},i.prototype.getBBMax=function(){return this.bbMax},i.prototype.getPrimitiveIndices=function(){return this.primitiveIndices},i.prototype.getIndices=function(){return this.indices},i.prototype.getPosition=function(){return this.position},i.prototype.getChildren=function(){if(this.children)return this.children;if(n.dist2(this.bbMin,this.bbMax)>1){for(var t=n.lerp(this.bbMin,this.bbMax,.5,n.create()),r=this.primitiveIndices.length,e=new Uint8Array(r),s=new Array(8),h=0;8>h;++h)s[h]=0;for(var a=this.position.size,h=0;r>h;++h){for(var o=0,c=this._numIndexPerPrimitive*this.primitiveIndices[h],b=this.position.data,d=a*this.indices[c],u=b[d],v=b[d+1],f=b[d+2],p=1;p<this._numIndexPerPrimitive;++p){d=a*this.indices[c+p];var l=b[d],M=b[d+1],g=b[d+2];u>l&&(u=l),v>M&&(v=M),f>g&&(f=g)}u<t[0]&&(o|=1),v<t[1]&&(o|=2),f<t[2]&&(o|=4),e[h]=o,++s[o]}for(var m=0,h=0;8>h;++h)s[h]>0&&++m;if(2>m)return;for(var x=new Array(8),h=0;8>h;++h)x[h]=s[h]>0?new Uint32Array(s[h]):void 0;for(var h=0;8>h;++h)s[h]=0;for(var h=0;r>h;++h){var o=e[h];x[o][s[o]++]=this.primitiveIndices[h]}this.children=new Array(8);for(var h=0;8>h;++h)void 0!==x[h]&&(this.children[h]=new i(x[h],this._numIndexPerPrimitive,this.indices,this.position))}return this.children},i}();return s});