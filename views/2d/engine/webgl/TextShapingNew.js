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

define(["require","exports","./Rect"],function(t,i,o){return function(){function t(t,i,e,h,a,r,s,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=a,this._hAnchor=r,this._vAnchor=s,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,h=this._lineHeight,a=this._justify,r=this._maxWidth,s=[],n=0,c=0,o=0,f=0,l=-1,p=0,g=-1,m=t.length,y=0;y<m;y++){var v=t.charCodeAt(y);if(10!==v){for(var u=void 0,x=0,d=this._glyphItems;x<d.length;x++){if(u=d[x][v])break}if(u){if(s.push({codePoint:v,x:n,y:c,glyphMosaicItem:u}),n+=u.metrics.advance+e,0<r&&r<n&&0<=g){var _=g+1;I=s[_].x;p=Math.max(I,p);for(var M=_;M<s.length;M++)i?s[M].y-=h:s[M].y+=h,s[M].x-=I;a&&this._applyJustification(s,f,g),i?c-=h:c+=h,n-=I,++o,f=_,g=-1}++l,32===v&&(g=s.length-1)}}else{if(y===m-1)continue;if(f<=l){var I=(w=s[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(I,p),a&&this._applyJustification(s,f,l),f=s.length}i?c-=h:c+=h,n=0,++o}}if(f<=l){var w,A=(w=s[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(p,A),a&&this._applyJustification(s,f,l)}if(0<s.length){var J=(a-this._hAnchor)*p,j=(-this._vAnchor*(o+1)+.5)*h;i&&o&&(j+=o*h),J+=this._offset[0],j+=this._offset[1];for(var P=0,S=s;P<S.length;P++){var H=S[P];H.x+=J,H.y+=j}}return s},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,h=-1/0,a=-1/0,r=0,s=t;r<s.length;r++){var n=s[r],c=n.glyphMosaicItem.metrics,o=c.height,f=c.left,l=c.top,p=c.width,g=n.x+f,m=n.y-l,y=g+p,v=m+o;i=Math.min(i,g),h=Math.max(h,y),e=Math.min(e,m),a=Math.max(a,v)}return{x:i,y:e,width:h-i,height:a-e}},t.addDecoration=function(t,i){var e=t.length;if(0!==e){for(var h=t[0].x+t[0].glyphMosaicItem.metrics.left,a=t[0].y,r=1;r<e;r++){var s=t[r];if(s.y!==a){var n=t[r-1].x+t[r-1].glyphMosaicItem.metrics.left+t[r-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a,glyphMosaicItem:{rect:new o(4,0,4,8),metrics:{width:n-h,height:2,left:0,top:i,advance:0},page:0}}),a=s.y,h=s.x+s.glyphMosaicItem.metrics.left}}var c=t[e-1].x+t[e-1].glyphMosaicItem.metrics.left+t[e-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a,glyphMosaicItem:{rect:new o(4,0,4,8),metrics:{width:c-h,height:2,left:0,top:i,advance:0},page:0}})}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],a=h.glyphMosaicItem.metrics.advance,r=(h.x+a)*this._justify,s=i;s<=e;s++)t[s].x-=r},t}()});