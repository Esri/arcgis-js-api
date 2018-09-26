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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/Color","./dom-style","./TransformUtil","./VisibilityChecker","./text/TextMeasurer","./text/TextStyleBuilder"],function(e,t,o,i,r,n){var a={SPAN:1,A:1,B:1,I:1,U:1,FONT:1};return{getNodeVisuals:function(s,d){if(!i.checkNode(s))return null;var l=t.cacheComputedStyle(s),g=d?d.style.opacity:1,c=d&&d.isLink,u=d&&d.isB,p=d&&d.isI,h=d&&d.isU,b=t.get(s,"width"),f=t.get(s,"height"),y=t.toPixelValue(s,t.get(s,"fontSize")),x=t.get(s,"textAlign"),m=t.get(s,"lineHeight"),w=o.measureNode(s,d),S=t.get(s,"position"),k=a[s.nodeName],v={node:s,parentVs:d,box:w.box,style:{cw:b,ch:f,boxSizing:t.get(s,"boxSizing"),_paddings:null,getPaddings:function(){if(this._paddings)return this._paddings;t.setComputedStyleCache(s,l);var e={l:t.get(s,"paddingLeft"),r:t.get(s,"paddingRight"),t:t.get(s,"paddingTop"),b:t.get(s,"paddingBottom")};return e.ew=e.l+e.r,e.eh=e.t+e.b,e.bw=this.cw+e.l+e.r,e.bh=this.ch+e.t+e.b,t.clearCache(s),this._paddings=e},_border:null,getBorder:function(){function o(o,r){var n=new e(t.get(s,"border"+r+"Color"));i[o]={color:n.toHex(),opacity:n.a*g,width:t.get(s,"border"+r+"Width"),style:t.get(s,"border"+r+"Style")}}if(this._border)return this._border;t.setComputedStyleCache(s,l);var i={radius:t.toPixelValue(s,t.get(s,"borderBottomLeftRadius"))};return o("l","Left"),o("r","Right"),o("t","Top"),o("b","Bottom"),i.ew=i.l.width+i.r.width,i.eh=i.t.width+i.b.width,t.clearCache(s),this._border=i},_background:null,getBackground:function(){if(this._background)return this._background;t.setComputedStyleCache(s,l);var o=new e(t.get(s,"backgroundColor")),i=t.get(s,"backgroundRepeat"),r=t.get(s,"backgroundSize"),n={color:o.toHex(),opacity:o.a*g,image:t.get(s,"backgroundImage"),size:r,positionX:t.get(s,"backgroundPositionX"),positionY:t.get(s,"backgroundPositionY"),repeatX:"cover"!==r&&("repeat"===i||"repeat-x"===i),repeatY:"cover"!==r&&("repeat"===i||"repeat-y"===i)};return n.sizePx=t.toPixelValue(document.body,n.size),n.positionXPx=t.toPixelValue(document.body,n.positionX),n.positionYPx=t.toPixelValue(document.body,n.positionY),t.clearCache(s),this._background=n},color:new e(t.get(s,"color")).toHex(),fontSize:y,textAlign:x,vAlign:t.get(s,"verticalAlign"),getTextStyle:function(e,o){if(e)return t.get(s,e);var i=n.buildTextStyleString(s,v,y,x,m,l);if(o)for(var r in o)i=i.replace(new RegExp("(^|;)"+r+":.*?(;|$)"),"$1"+r+":"+o[r]+"$2");return i},getTextStyleObject:function(){return n.buildTextStyleObject(s,v,y,x,m,l)},opacity:t.get(s,"opacity")*g,overflow:t.get(s,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:t.get(s,"display"),transform:w.transform,parentHasTransform:!(!d||!d.style.transform),isRelAbs:"relative"===S||"absolute"===S},isSpanLike:k,isLink:"A"===s.nodeName||c,isB:"B"===s.nodeName||"H"===s.nodeName.charAt(0)||u,isI:"I"===s.nodeName||p,isU:"U"===s.nodeName||h};if("border-box"===v.style.boxSizing&&(v.style.cw-=v.style.getBorder().ew+v.style.getPaddings().ew,v.style.ch-=v.style.getBorder().eh+v.style.getPaddings().eh,v.style._paddings=null),k){var C=r.getSpanFlowOffsets(s,v);v.style.spanFlowStartOffset=C.start,v.style.spanFlowEndOffset=C.end}return v.isLink&&(v.href=s.href||d.href,v.target=s.target||d.target),t.clearCache(s),v}}});