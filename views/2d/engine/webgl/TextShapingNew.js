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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./Rect"],function(t,i,c){Object.defineProperty(i,"__esModule",{value:!0});var e=function(){function t(t,i,e,a,h,s,r,n){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=a,this._offset=h,this._hAnchor=s,this._vAnchor=r,this._justify=n}return t.prototype.getShaping=function(t,i){for(var e=this._letterSpacing,a=this._lineHeight,h=this._justify,s=this._maxWidth,r=[],n=0,o=0,c=0,f=0,l=-1,p=0,g=-1,m=t.length,y=0;y<m;y++){var v=t.charCodeAt(y);if(10!==v){for(var u=void 0,x=0,d=this._glyphItems;x<d.length;x++){if(u=d[x][v])break}if(u){if(r.push({codePoint:v,x:n,y:o,glyphMosaicItem:u}),n+=u.metrics.advance+e,0<s&&s<n&&0<=g){var _=g+1;I=r[_].x;p=Math.max(I,p);for(var M=_;M<r.length;M++)i?r[M].y-=a:r[M].y+=a,r[M].x-=I;h&&this._applyJustification(r,f,g),i?o-=a:o+=a,n-=I,++c,f=_,g=-1}++l,32===v&&(g=r.length-1)}}else{if(y===m-1)continue;if(f<=l){var I=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(I,p),h&&this._applyJustification(r,f,l),f=r.length}i?o-=a:o+=a,n=0,++c}}if(f<=l){var w,A=(w=r[l]).x+w.glyphMosaicItem.metrics.advance;p=Math.max(p,A),h&&this._applyJustification(r,f,l)}if(0<r.length){var J=(h-this._hAnchor)*p,S=(-this._vAnchor*(c+1)+.5)*a;i&&c&&(S+=c*a),J+=this._offset[0],S+=this._offset[1];for(var j=0,P=r;j<P.length;j++){var H=P[j];H.x+=J,H.y+=S}}return r},t.prototype.getEstimatedShaping=function(t,i,e){for(var a=this._letterSpacing,h=this._lineHeight,s=this._justify,r=this._maxWidth,n=[],o=0,c=0,f=0,l=0,p=-1,g=0,m=-1,y=t.length,v=0;v<y;v++){var u=t.charCodeAt(v);if(10!==u){var x=e;if(n.push({codePoint:u,x:o,y:c,glyphMosaicItem:x}),o+=x.metrics.advance+a,0<r&&r<o&&0<=m){var d=m+1;M=n[d].x;g=Math.max(M,g);for(var _=d;_<n.length;_++)i?n[_].y-=h:n[_].y+=h,n[_].x-=M;s&&this._applyJustification(n,l,m),i?c-=h:c+=h,o-=M,++f,l=d,m=-1}++p,32===u&&(m=n.length-1)}else{if(v===y-1)continue;if(l<=p){var M=(I=n[p]).x+I.glyphMosaicItem.metrics.advance;g=Math.max(M,g),s&&this._applyJustification(n,l,p),l=n.length}i?c-=h:c+=h,o=0,++f}}if(l<=p){var I,w=(I=n[p]).x+I.glyphMosaicItem.metrics.advance;g=Math.max(g,w),s&&this._applyJustification(n,l,p)}if(0<n.length){var A=(s-this._hAnchor)*g,J=(-this._vAnchor*(f+1)+.5)*h;i&&f&&(J+=f*h),A+=this._offset[0],J+=this._offset[1];for(var S=0,j=n;S<j.length;S++){var P=j[S];P.x+=A,P.y+=J}}return n},t.getBox=function(t){if(!t.length)return null;for(var i=1/0,e=1/0,a=-1/0,h=-1/0,s=0,r=t;s<r.length;s++){var n=r[s],o=n.glyphMosaicItem.metrics,c=o.height,f=o.left,l=o.top,p=o.width,g=n.x+f,m=n.y-l,y=g+p,v=m+c;i=Math.min(i,g),a=Math.max(a,y),e=Math.min(e,m),h=Math.max(h,v)}return{x:i,y:e,width:a-i,height:h-e}},t.addDecoration=function(t,i){var e=t.length;if(0!==e){for(var a=t[0].x+t[0].glyphMosaicItem.metrics.left,h=t[0].y,s=1;s<e;s++){var r=t[s];if(r.y!==h){var n=t[s-1].x+t[s-1].glyphMosaicItem.metrics.left+t[s-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:a,y:h,glyphMosaicItem:{sdf:!0,rect:new c.default(4,0,4,8),metrics:{width:n-a,height:2,left:0,top:i,advance:0},page:0}}),h=r.y,a=r.x+r.glyphMosaicItem.metrics.left}}var o=t[e-1].x+t[e-1].glyphMosaicItem.metrics.left+t[e-1].glyphMosaicItem.metrics.width;t.push({codePoint:0,x:a,y:h,glyphMosaicItem:{sdf:!0,rect:new c.default(4,0,4,8),metrics:{width:o-a,height:2,left:0,top:i,advance:0},page:0}})}},t.prototype._applyJustification=function(t,i,e){for(var a=t[e],h=a.glyphMosaicItem.metrics.advance,s=(a.x+h)*this._justify,r=i;r<=e;r++)t[r].x-=s},t}();i.TextShaping=e});