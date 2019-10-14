// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./Rect"],function(t,i,c){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t,i,e,h,a,s,r,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=a,this._hAnchor=s,this._vAnchor=r,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,h=this._lineHeight,a=this._justify,s=this._maxWidth,r=[],n=0,o=0,c=0,f=0,l=-1,p=0,g=-1,m=t.length,y=0;y<m;y++){var v=t.charCodeAt(y);if(10!==v){for(var d=void 0,u=0,x=this._glyphItems;u<x.length;u++){if(d=x[u][v])break}if(d){if(r.push({codePoint:v,x:n,y:o,glyphMosaicItem:d}),n+=d.metrics.advance+e,0<s&&s<n&&0<=g){var _=g+1;I=r[_].x;p=Math.max(I,p);for(var M=_;M<r.length;M++)i?r[M].y-=h:r[M].y+=h,r[M].x-=I;a&&this._applyJustification(r,f,g),i?o-=h:o+=h,n-=I,++c,f=_,g=-1}++l,32===v&&(g=r.length-1)}}else{if(y===m-1)continue;if(f<=l){var I=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(I,p),a&&this._applyJustification(r,f,l),f=r.length}i?o-=h:o+=h,n=0,++c}}if(f<=l){var w,A=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(p,A),a&&this._applyJustification(r,f,l)}if(0<r.length){var j=(a-this._hAnchor)*p,J=(-this._vAnchor*(c+1)+.5)*h;i&&c&&(J+=c*h),j+=this._offset[0],J+=this._offset[1];for(var P=0,S=r;P<S.length;P++){var b=S[P];b.x+=j,b.y+=J}}return r},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,h=0,a=0,s=0,r=t;s<r.length;s++){var n=r[s],o=n.glyphMosaicItem.metrics,c=o.height,f=o.left,l=o.top,p=o.width,g=n.x,m=n.y-(c-Math.abs(l)),y=g+p+f,v=m+c;i=Math.min(i,g),h=Math.max(h,y),e=Math.min(e,m),a=Math.max(a,v)}return{x:i,y:e,width:h-i,height:a-e}},t.addDecoration=function(t,i){var e=t.length;if(0!==e){for(var h=t[0].x+t[0].glyphMosaicItem.metrics.left,a=t[0].y,s=1;s<e;s++){var r=t[s];if(r.y!==a){var n=t[s-1].x+t[s-1].glyphMosaicItem.metrics.left+t[s-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a+i-3,glyphMosaicItem:{sdf:!0,rect:new c.default(4,0,4,8),metrics:{width:n-h,height:8,left:0,top:0,advance:0},page:0}}),a=r.y,h=r.x+r.glyphMosaicItem.metrics.left}}var o=t[e-1].x+t[e-1].glyphMosaicItem.metrics.left+t[e-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a+i-3,glyphMosaicItem:{sdf:!0,rect:new c.default(4,0,4,8),metrics:{width:o-h,height:8,left:0,top:0,advance:0},page:0}})}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],a=h.glyphMosaicItem.metrics.advance,s=(h.x+a)*this._justify,r=i;r<=e;r++)t[r].x-=s},t}();i.TextShaping=e});