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

define(["require","exports","./Placement"],function(t,i,h){var e=function(){function t(t,i,h,e,r,a,n,s){this._glyphItems=t,this._maxWidth=i,this._lineHeight=h,this._letterSpacing=e,this._offset=r,this._hAnchor=a,this._vAnchor=n,this._justify=s}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,r=this._offset[0],a=this._offset[1],n=[],s=t.length,f=0;s>f;f++){for(var o=t.charCodeAt(f),c=void 0,p=0,_=this._glyphItems;p<_.length;p++){var v=_[p];if(c=v[o])break}c&&(n.push(new h.ShapedGlyph(o,r,a,c)),r+=c.metrics.advance+e)}if(n.length>0){var l=this._maxWidth,y=this._lineHeight,g=this._justify,u=n.length,x=0,m=0,d=0;if(0!==l)for(var A=0,I=0,f=0;u>f;f++){var S=n[f];if(S.x-=I,i?S.y-=y*x:S.y+=y*x,S.x>l&&A>0){var j=n[A+1].x;d=Math.max(j,d);for(var J=A+1;f>=J;J++)i?n[J].y-=y:n[J].y+=y,n[J].x-=j;g&&this._applyJustification(n,m,A-1),m=A+1,A=0,I+=j,x++}32===S.glyph&&(A=f)}var H=n[u-1],M=H.x+H.glyphItem.metrics.advance;d=Math.max(d,M),g&&this._applyJustification(n,m,u-1);var W=(g-this._hAnchor)*d,b=(-this._vAnchor*(x+1)+.5)*y;i&&x&&(b+=x*y);for(var k=0,q=n;k<q.length;k++){var w=q[k];w.x+=W,w.y+=b}}return n},t.prototype._applyJustification=function(t,i,h){for(var e=t[h],r=e.glyphItem.metrics.advance,a=(e.x+r)*this._justify,n=i;h>=n;n++)t[n].x-=a},t}();return e});