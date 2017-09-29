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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","./Placement"],function(t,i,h){var e=function(){function t(t,i,h,e,s,r,a,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=h,this._letterSpacing=e,this._offset=s,this._hAnchor=r,this._vAnchor=a,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._glyphItems,s=this._letterSpacing,r=this._offset[0],a=this._offset[1],n=[],f=t.length,o=0;f>o;o++){var p=t.charCodeAt(o),_=e[p];_&&(n.push(new h.ShapedGlyph(p,r,a)),r+=_.metrics.advance+s)}if(n.length>0){var c=this._maxWidth,y=this._lineHeight,l=this._justify,v=n.length,g=0,u=0,x=0;if(0!==c)for(var m=0,d=0,o=0;v>o;o++){var A=n[o];if(A.x-=d,i?A.y-=y*g:A.y+=y*g,A.x>c&&m>0){var I=n[m+1].x;x=Math.max(I,x);for(var S=m+1;o>=S;S++)i?n[S].y-=y:n[S].y+=y,n[S].x-=I;l&&this._applyJustification(n,u,m-1),u=m+1,m=0,d+=I,g++}32===A.glyph&&(m=o)}var j=n[v-1],J=j.x+this._glyphItems[j.glyph].metrics.advance;x=Math.max(x,J),l&&this._applyJustification(n,u,v-1);var H=(l-this._hAnchor)*x,M=(-this._vAnchor*(g+1)+.5)*y;i&&g&&(M+=g*y);for(var W=0,q=n;W<q.length;W++){var w=q[W];w.x+=H,w.y+=M}}return n},t.prototype._applyJustification=function(t,i,h){for(var e=t[h],s=this._glyphItems[e.glyph].metrics.advance,r=(e.x+s)*this._justify,a=i;h>=a;a++)t[a].x-=r},t}();return e});