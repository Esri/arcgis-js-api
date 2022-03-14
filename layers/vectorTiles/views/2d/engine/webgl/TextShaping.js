// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","exports","./Rect"],(function(t,i,e){return function(){function t(t,i,e,h,a,s,r,c){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=a,this._hAnchor=s,this._vAnchor=r,this._justify=c}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,h=this._lineHeight,a=this._justify,s=this._maxWidth,r=[],c=0,o=0,n=0,f=0,l=-1,m=0,p=-1,g=t.length,y=0;y<g;y++){var v=t.charCodeAt(y);if(10!==v){for(var x=void 0,d=0,u=this._glyphItems;d<u.length;d++){if(x=u[d][v])break}if(x){if(r.push({codePoint:v,x:c,y:o,glyphMosaicItem:x}),c+=x.metrics.advance+e,s>0&&c>s&&p>=0){var M=p+1;I=r[M].x;m=Math.max(I,m);for(var _=M;_<r.length;_++)i?r[_].y-=h:r[_].y+=h,r[_].x-=I;a&&this._applyJustification(r,f,p),i?o-=h:o+=h,c-=I,++n,f=M,p=-1}++l,32===v&&(p=r.length-1)}}else{if(y===g-1)continue;if(l>=f){var I=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;m=Math.max(I,m),a&&this._applyJustification(r,f,l),f=r.length}i?o-=h:o+=h,c=0,++n}}if(l>=f){var w,A=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;m=Math.max(m,A),a&&this._applyJustification(r,f,l)}if(r.length>0){var J=(a-this._hAnchor)*m,j=(-this._vAnchor*(n+1)+.5)*h;i&&n&&(j+=n*h),J+=this._offset[0],j+=this._offset[1];for(var P=0,S=r;P<S.length;P++){var H=S[P];H.x+=J,H.y+=j}}return r},t.getBox=function(t){var i=t.length;if(0!==i){for(var e=t[0].x+t[0].glyphMosaicItem.metrics.left,h=e,a=t[0].y,s=a,r=a,c=1;c<i;c++){var o=t[c],n=o.x+o.glyphMosaicItem.metrics.left;n<e&&(e=n),n>h&&(h=n);var f=o.y;if(f<a&&(a=f),f>s&&(s=f),f!==r){var l=t[c-1].glyphMosaicItem.metrics.width;h=Math.max(h,t[c-1].x+t[c-1].glyphMosaicItem.metrics.left+l),r=f}}var m=t[i-1].glyphMosaicItem.metrics.width;return{x:e,y:s+=12,width:(h=Math.max(h,t[i-1].x+t[i-1].glyphMosaicItem.metrics.left+m))-e,height:s-(a-=12)}}},t.addDecoration=function(t,i){var h=t.length;if(0!==h){for(var a=t[0].x+t[0].glyphMosaicItem.metrics.left,s=t[0].y,r=1;r<h;r++){var c=t[r];if(c.y!==s){var o=t[r-1].x+t[r-1].glyphMosaicItem.metrics.left+t[r-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:a,y:s+i-3,glyphMosaicItem:{rect:new e(4,0,4,8),metrics:{width:o-a,height:8,left:0,top:0,advance:0},page:0}}),s=c.y,a=c.x+c.glyphMosaicItem.metrics.left}}var n=t[h-1].x+t[h-1].glyphMosaicItem.metrics.left+t[h-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:a,y:s+i-3,glyphMosaicItem:{rect:new e(4,0,4,8),metrics:{width:n-a,height:8,left:0,top:0,advance:0},page:0}})}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],a=h.glyphMosaicItem.metrics.advance,s=(h.x+a)*this._justify,r=i;r<=e;r++)t[r].x-=s},t}()}));