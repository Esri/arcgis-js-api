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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../webgl/Rect"],(function(t,i,e){Object.defineProperty(i,"__esModule",{value:!0});var h=function(){function t(t,i,e,h,a,s,r,o){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=a,this._hAnchor=s,this._vAnchor=r,this._justify=o}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,h=this._lineHeight,a=this._justify,s=this._maxWidth,r=[],o=0,c=0,n=0,f=0,l=-1,p=0,g=-1,m=t.length,y=0;y<m;y++){var d=t.charCodeAt(y);if(10!==d){for(var v=void 0,u=0,x=this._glyphItems;u<x.length;u++){if(v=x[u][d])break}if(v){if(r.push({codePoint:d,x:o,y:c,glyphMosaicItem:v}),o+=v.metrics.advance+e,s>0&&o>s&&g>=0){var _=g+1;I=r[_].x;p=Math.max(I,p);for(var M=_;M<r.length;M++)i?r[M].y-=h:r[M].y+=h,r[M].x-=I;a&&this._applyJustification(r,f,g),i?c-=h:c+=h,o-=I,++n,f=_,g=-1}++l,32===d&&(g=r.length-1)}}else{if(y===m-1)continue;if(l>=f){var I=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(I,p),a&&this._applyJustification(r,f,l),f=r.length}i?c-=h:c+=h,o=0,++n}}if(l>=f){var w,A=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(p,A),a&&this._applyJustification(r,f,l)}if(r.length>0){var b=(a-this._hAnchor)*p,j=(-this._vAnchor*(n+1)+.5)*h;i&&n&&(j+=n*h),b+=this._offset[0],j+=this._offset[1];for(var J=0,P=r;J<P.length;J++){var S=P[J];S.x+=b,S.y+=j}}return r},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,h=0,a=0,s=0,r=t;s<r.length;s++){var o=r[s],c=o.glyphMosaicItem.metrics,n=c.height,f=c.left,l=c.top,p=c.width,g=o.x,m=o.y-(n-Math.abs(l)),y=g+p+f,d=m+n;i=Math.min(i,g),h=Math.max(h,y),e=Math.min(e,m),a=Math.max(a,d)}return{x:i,y:e,width:h-i,height:a-e}},t.addDecoration=function(t,i){var h=t.length;if(0!==h){for(var a=t[0].x+t[0].glyphMosaicItem.metrics.left,s=t[0].y,r=1;r<h;r++){var o=t[r];if(o.y!==s){var c=t[r-1].x+t[r-1].glyphMosaicItem.metrics.left+t[r-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:a,y:s+i-3,glyphMosaicItem:{sdf:!0,rect:new e.default(4,0,4,8),metrics:{width:c-a,height:8,left:0,top:0,advance:0},page:0,code:0}}),s=o.y,a=o.x+o.glyphMosaicItem.metrics.left}}var n=t[h-1].x+t[h-1].glyphMosaicItem.metrics.left+t[h-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:a,y:s+i-3,glyphMosaicItem:{sdf:!0,rect:new e.default(4,0,4,8),metrics:{width:n-a,height:8,left:0,top:0,advance:0},page:0,code:0}})}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],a=h.glyphMosaicItem.metrics.advance,s=(h.x+a)*this._justify,r=i;r<=e;r++)t[r].x-=s},t}();i.TextShaping=h}));