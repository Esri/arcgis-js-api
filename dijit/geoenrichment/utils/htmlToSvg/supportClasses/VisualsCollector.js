// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/Color","./dom-style","./TransformUtil","./VisibilityChecker"],(function(e,t,o,i){var r=/.+(px|pt)$/;return{getNodeVisuals:function(a,n){if(!i.checkNode(a))return null;var s=t.cacheComputedStyle(a),d=n?n.style.opacity:1,g=n&&n.isLink,l=n&&n.isB,c=n&&n.isI,p=n&&n.isU,h=t.get(a,"width"),u=t.get(a,"height"),b=t.toPixelValue(a,t.get(a,"fontSize")),f=t.get(a,"textAlign"),y=t.get(a,"whiteSpace"),w=t.get(a,"letterSpacing"),m=t.get(a,"wordSpacing"),x=o.measureNode(a,n),S=t.get(a,"position"),k=new e(t.get(a,"color")),C={node:a,parentVs:n,box:x.box,style:{styleCache:s,cw:h,ch:u,boxSizing:t.get(a,"boxSizing"),_paddings:null,getPaddings:function(){if(this._paddings)return this._paddings;t.setComputedStyleCache(a,s);var e={l:t.get(a,"paddingLeft"),r:t.get(a,"paddingRight"),t:t.get(a,"paddingTop"),b:t.get(a,"paddingBottom")};return e.ew=e.l+e.r,e.eh=e.t+e.b,e.bw=this.cw+e.l+e.r,e.bh=this.ch+e.t+e.b,t.clearCache(a),this._paddings=e},_border:null,getBorder:function(){if(this._border)return this._border;t.setComputedStyleCache(a,s);var o={radius:t.toPixelValue(a,t.get(a,"borderBottomLeftRadius"))};function i(i,r){var n=new e(t.get(a,"border"+r+"Color"));o[i]={color:n.toHex(),opacity:n.a*d,width:t.get(a,"border"+r+"Width"),style:t.get(a,"border"+r+"Style")}}return i("l","Left"),i("r","Right"),i("t","Top"),i("b","Bottom"),o.ew=o.l.width+o.r.width,o.eh=o.t.width+o.b.width,t.clearCache(a),this._border=o},_background:null,getBackground:function(){if(this._background)return this._background;t.setComputedStyleCache(a,s);var o=new e(t.get(a,"backgroundColor")),i=t.get(a,"backgroundRepeat"),n=t.get(a,"backgroundSize"),g={color:o.toHex(),opacity:o.a*d,image:t.get(a,"backgroundImage"),size:n,positionX:t.get(a,"backgroundPositionX"),positionY:t.get(a,"backgroundPositionY"),repeatX:"cover"!==n&&("repeat"===i||"repeat-x"===i),repeatY:"cover"!==n&&("repeat"===i||"repeat-y"===i)};function l(e){return"string"==typeof e&&r.test(e)?t.toPixelValue(document.body,e):0}return g.sizePx=l(g.size),g.positionXPx=l(g.positionX),g.positionYPx=l(g.positionY),t.clearCache(a),this._background=g},color:k.toHex(),colorOpacity:k.a,fontSize:b,textAlign:f,whiteSpace:y,letterSpacing:w,wordSpacing:m,transform:x.transform,parentHasTransform:!(!n||!n.style.transform),opacity:t.get(a,"opacity")*d,overflow:t.get(a,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:t.get(a,"display"),isRelAbs:"relative"===S||"absolute"===S},isLink:"A"===a.nodeName||g,isB:"B"===a.nodeName||"H"===a.nodeName.charAt(0)||l,isI:"I"===a.nodeName||c,isU:"U"===a.nodeName||p};return"border-box"===C.style.boxSizing&&(C.style.cw-=C.style.getBorder().ew+C.style.getPaddings().ew,C.style.ch-=C.style.getBorder().eh+C.style.getPaddings().eh,C.style._paddings=null),C.isLink&&(C.href=a.href||n.href,C.target=a.target||n.target),t.clearCache(a),C}}}));