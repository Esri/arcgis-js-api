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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./Rect"],function(t,i,c){return function(){function t(t,i,e,h,a,s,r,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=h,this._offset=a,this._hAnchor=s,this._vAnchor=r,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,h=this._lineHeight,a=this._justify,s=this._maxWidth,r=[],n=0,o=0,c=0,f=0,l=-1,p=0,g=-1,m=t.length,y=0;y<m;y++){var v=t.charCodeAt(y);if(10!==v){for(var x=void 0,u=0,_=this._glyphItems;u<_.length;u++){if(x=_[u][v])break}if(x){if(r.push({codePoint:v,x:n,y:o,glyphMosaicItem:x}),n+=x.metrics.advance+e,0<s&&s<n&&0<=g){var d=g+1;I=r[d].x;p=Math.max(I,p);for(var M=d;M<r.length;M++)i?r[M].y-=h:r[M].y+=h,r[M].x-=I;a&&this._applyJustification(r,f,g),i?o-=h:o+=h,n-=I,++c,f=d,g=-1}++l,32===v&&(g=r.length-1)}}else{if(y===m-1)continue;if(f<=l){var I=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(I,p),a&&this._applyJustification(r,f,l),f=r.length}i?o-=h:o+=h,n=0,++c}}if(f<=l){var w,A=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(p,A),a&&this._applyJustification(r,f,l)}if(0<r.length){var J=(a-this._hAnchor)*p,S=(-this._vAnchor*(c+1)+.5)*h;i&&c&&(S+=c*h),J+=this._offset[0],S+=this._offset[1];for(var j=0,P=r;j<P.length;j++){var H=P[j];H.x+=J,H.y+=S}}return r},t.prototype.getEstimatedShaping=function(t,i,e){for(var h=this._letterSpacing,a=this._lineHeight,s=this._justify,r=this._maxWidth,n=[],o=0,c=0,f=0,l=0,p=-1,g=0,m=-1,y=t.length,v=0;v<y;v++){var x=t.charCodeAt(v);if(10!==x){var u=e;if(n.push({codePoint:x,x:o,y:c,glyphMosaicItem:u}),o+=u.metrics.advance+h,0<r&&r<o&&0<=m){var _=m+1;M=n[_].x;g=Math.max(M,g);for(var d=_;d<n.length;d++)i?n[d].y-=a:n[d].y+=a,n[d].x-=M;s&&this._applyJustification(n,l,m),i?c-=a:c+=a,o-=M,++f,l=_,m=-1}++p,32===x&&(m=n.length-1)}else{if(v===y-1)continue;if(l<=p){var M=(I=n[p]).x+I.glyphMosaicItem.metrics.advance;g=Math.max(M,g),s&&this._applyJustification(n,l,p),l=n.length}i?c-=a:c+=a,o=0,++f}}if(l<=p){var I,w=(I=n[p]).x+I.glyphMosaicItem.metrics.advance;g=Math.max(g,w),s&&this._applyJustification(n,l,p)}if(0<n.length){var A=(s-this._hAnchor)*g,J=(-this._vAnchor*(f+1)+.5)*a;i&&f&&(J+=f*a),A+=this._offset[0],J+=this._offset[1];for(var S=0,j=n;S<j.length;S++){var P=j[S];P.x+=A,P.y+=J}}return n},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,h=-1/0,a=-1/0,s=0,r=t;s<r.length;s++){var n=r[s],o=n.glyphMosaicItem.metrics,c=o.height,f=o.left,l=o.top,p=o.width,g=n.x+f,m=n.y-l,y=g+p,v=m+c;i=Math.min(i,g),h=Math.max(h,y),e=Math.min(e,m),a=Math.max(a,v)}return{x:i,y:e,width:h-i,height:a-e}},t.addDecoration=function(t,i){var e=t.length;if(0!==e){for(var h=t[0].x+t[0].glyphMosaicItem.metrics.left,a=t[0].y,s=1;s<e;s++){var r=t[s];if(r.y!==a){var n=t[s-1].x+t[s-1].glyphMosaicItem.metrics.left+t[s-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a,glyphMosaicItem:{sdf:!0,rect:new c(4,0,4,8),metrics:{width:n-h,height:2,left:0,top:i,advance:0},page:0}}),a=r.y,h=r.x+r.glyphMosaicItem.metrics.left}}var o=t[e-1].x+t[e-1].glyphMosaicItem.metrics.left+t[e-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:h,y:a,glyphMosaicItem:{sdf:!0,rect:new c(4,0,4,8),metrics:{width:o-h,height:2,left:0,top:i,advance:0},page:0}})}},t.prototype._applyJustification=function(t,i,e){for(var h=t[e],a=h.glyphMosaicItem.metrics.advance,s=(h.x+a)*this._justify,r=i;r<=e;r++)t[r].x-=s},t}()});