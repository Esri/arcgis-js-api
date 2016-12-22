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

define(["require","exports","./Placement"],function(t,i,h){var e=function(){function t(t,i,h,e,s,r,a,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=h,this._letterSpacing=e,this._offset=s,this._hAnchor=r,this._vAnchor=a,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._glyphItems,s=this._letterSpacing,r=this._offset[0],a=this._offset[1],n=[],f=0,o=t.length;o>f;f++){var p=t.charCodeAt(f),_=e[p];_&&(n.push(new h.ShapedGlyph(p,r,a)),r+=_.metrics.advance+s)}if(n.length>0){var c=this._maxWidth,y=this._lineHeight,l=this._justify,o=n.length,v=0,g=0,u=0;if(0!==c)for(var x=0,m=0,f=0;o>f;f++){var d=n[f];if(d.x-=m,i?d.y-=y*v:d.y+=y*v,d.x>c&&x>0){var A=n[x+1].x;u=Math.max(A,u);for(var I=x+1;f>=I;I++)i?n[I].y-=y:n[I].y+=y,n[I].x-=A;l&&this._applyJustification(n,g,x-1),g=x+1,x=0,m+=A,v++}32===d.glyph&&(x=f)}var S=n[o-1],j=S.x+this._glyphItems[S.glyph].metrics.advance;u=Math.max(u,j),l&&this._applyJustification(n,g,o-1);var J=(l-this._hAnchor)*u,H=(-this._vAnchor*(v+1)+.5)*y;i&&v&&(H+=v*y);for(var M=0,W=n;M<W.length;M++){var q=W[M];q.x+=J,q.y+=H}}return n},t.prototype._applyJustification=function(t,i,h){for(var e=t[h],s=this._glyphItems[e.glyph].metrics.advance,r=(e.x+s)*this._justify,a=i;h>=a;a++)t[a].x-=r},t}();return e});