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

define(["require","exports","../../../../core/SetPool"],function(t,i,e){return function(){function t(t,i,e,h,r,a,n,o){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=r,this._hAnchor=a,this._vAnchor=n,this._justify=o}return t.prototype.getShaping=function(t,i){for(var h=this._letterSpacing,r=this._offset[0],a=this._offset[1],n=[],o=e.acquire(),s=t.length,f=0;f<s;f++){var c=t.charCodeAt(f);if(10!==c){for(var v=void 0,l=0,y=this._glyphItems;l<y.length;l++){if(v=y[l][c])break}v&&(n.push({codePoint:c,x:r,y:a,glyphMosaicItem:v}),r+=v.metrics.advance+h)}else o.add(n.length)}if(n.length>0){var g=this._maxWidth,_=this._lineHeight,p=this._justify,x=n.length,u=0,d=0,m=0;if(0!==g||o.size>0)for(var M=0,A=0,f=0;f<x;f++){var I=n[f];I.x-=A,i?I.y-=_*u:I.y+=_*u;var P=o.has(f);if(g&&I.x>g&&M>0||P){var W=P?f:M+1,S=n[W].x;m=Math.max(S,m);for(var j=W;j<=f;j++)i?n[j].y-=_:n[j].y+=_,n[j].x-=S;if(p){var J=P?f-1:M-1;J>=0&&this._applyJustification(n,d,J)}d=W,M=0,A+=S,u++}32===I.codePoint&&(M=f)}var b=n[x-1],k=b.x+b.glyphMosaicItem.metrics.advance;m=Math.max(m,k),p&&this._applyJustification(n,d,x-1);var q=(p-this._hAnchor)*m,H=(-this._vAnchor*(u+1)+.5)*_;i&&u&&(H+=u*_);for(var w=0,z=n;w<z.length;w++){var B=z[w];B.x+=q,B.y+=H}}return e.release(o),n},t.getBox=function(t,i){var e=t.length;if(0!==e){for(var h=t[0].x,r=h,a=t[0].y,n=a,o=a,s=1;s<e;s++){var f=t[s],c=f.x;c<h&&(h=c),c>r&&(r=c);var v=f.y;if(v<a&&(a=v),v>n&&(n=v),v!==o){var l=t[s-1].codePoint,y=this._glyphWidth(l,i);r=Math.max(r,t[s-1].x+y),o=v}}var g=t[e-1].codePoint,_=this._glyphWidth(g,i);return r=Math.max(r,t[e-1].x+_),a+=17,n+=7,{x:h,y:a,width:r-h,height:n-a}}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],r=h.glyphMosaicItem.metrics.advance,a=(h.x+r)*this._justify,n=i;n<=e;n++)t[n].x-=a},t._glyphWidth=function(t,i){for(var e,h=0,r=i;h<r.length;h++){if(e=r[h][t])break}return e?e.metrics.advance:0},t}()});