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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./ScriptUtils","../webgl/Rect"],(function(t,i,e,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.TextShaping=i.SDF_GLYPH_BASELINE=i.SDF_GLYPH_SIZE=void 0,i.SDF_GLYPH_SIZE=24,i.SDF_GLYPH_BASELINE=17;var h=function(){function t(t,i,e,a,h,r,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=a,this._hAnchor=h,this._vAnchor=r,this._justify=n}return t.prototype.getShaping=function(t,i,a){for(var h=this._letterSpacing,r=this._lineHeight,n=this._justify,c=this._maxWidth,s=[],o=0,l=0,f=0,g=0,p=-1,m=0,y=-1,v=t.length,d=0;d<v;d++){var u=t.charCodeAt(d),x=a&&e.hasVerticalOrientation(u);if(10!==u){for(var _=void 0,M=0,I=this._glyphItems;M<I.length;M++){if(_=I[M][u])break}if(_){if(s.push({codePoint:u,x:o,y:l,vertical:x,glyphMosaicItem:_}),o+=_.metrics.advance+h,c>0&&o>c&&y>=0){var S=y+1;P=s[S].x;m=Math.max(P,m);for(var w=S;w<s.length;w++)i?s[w].y-=r:s[w].y+=r,s[w].x-=P;n&&this._applyJustification(s,g,y),i?l-=r:l+=r,o-=P,++f,g=S,y=-1}++p,32===u&&(y=s.length-1)}}else{if(d===v-1)continue;if(p>=g){var P=(E=s[p]).x+E.glyphMosaicItem.metrics.advance;m=Math.max(P,m),n&&this._applyJustification(s,g,p),g=s.length}i?l-=r:l+=r,o=0,++f}}if(p>=g){var E,L=(E=s[p]).x+E.glyphMosaicItem.metrics.advance;m=Math.max(m,L),n&&this._applyJustification(s,g,p)}if(s.length>0){var A=(n-this._hAnchor)*m,H=(-this._vAnchor*(f+1)+.5)*r;i&&f&&(H+=f*r);for(var D=0,F=s;D<F.length;D++){var G=F[D];G.x+=A,G.y+=H}}return s},t.getTextBox=function(t,e){if(!t.length)return null;for(var a=1/0,h=1/0,r=0,n=0,c=0,s=t;c<s.length;c++){var o=s[c],l=o.glyphMosaicItem.metrics.advance,f=o.x,g=o.y-i.SDF_GLYPH_BASELINE,p=f+l,m=g+e;a=Math.min(a,f),r=Math.max(r,p),h=Math.min(h,g),n=Math.max(n,m)}return{x:a,y:h,width:r-a,height:n-h}},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,a=0,h=0,r=0,n=t;r<n.length;r++){var c=n[r],s=c.glyphMosaicItem.metrics,o=s.height,l=s.left,f=s.top,g=s.width,p=c.x,m=c.y-(o-Math.abs(f)),y=p+g+l,v=m+o;i=Math.min(i,p),a=Math.max(a,y),e=Math.min(e,m),h=Math.max(h,v)}return{x:i,y:e,width:a-i,height:h-e}},t.addDecoration=function(t,i){var e=t.length;if(0!==e){for(var h=t[0].x+t[0].glyphMosaicItem.metrics.left,r=t[0].y,n=1;n<e;n++){var c=t[n];if(c.y!==r){var s=t[n-1].x+t[n-1].glyphMosaicItem.metrics.left+t[n-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:r+i-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new a.default(4,0,4,8),metrics:{width:s-h,height:8,left:0,top:0,advance:0},page:0,code:0}}),r=c.y,h=c.x+c.glyphMosaicItem.metrics.left}}var o=t[e-1].x+t[e-1].glyphMosaicItem.metrics.left+t[e-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:r+i-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new a.default(4,0,4,8),metrics:{width:o-h,height:8,left:0,top:0,advance:0},page:0,code:0}})}},t.prototype._applyJustification=function(t,e,a){for(var h=t[a],r=h.vertical?i.SDF_GLYPH_SIZE:h.glyphMosaicItem.metrics.advance,n=(h.x+r)*this._justify,c=e;c<=a;c++)t[c].x-=n},t}();i.TextShaping=h}));