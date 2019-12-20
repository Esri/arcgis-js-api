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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/Color","./dom-style","./TransformUtil","./VisibilityChecker","./text/TextMeasurer","./text/TextStyleBuilder"],function(e,t,o,i,r,n){var a={SPAN:1,A:1,B:1,I:1,U:1,FONT:1};return{getNodeVisuals:function(l,s){if(!i.checkNode(l))return null;var d=t.cacheComputedStyle(l),g=s?s.style.opacity:1,c=s&&s.isLink,u=s&&s.isB,p=s&&s.isI,h=s&&s.isU,b=t.get(l,"width"),f=t.get(l,"height"),y=t.toPixelValue(l,t.get(l,"fontSize")),x=t.get(l,"textAlign"),w=t.get(l,"letterSpacing"),S=t.get(l,"wordSpacing"),m=t.get(l,"lineHeight"),k=o.measureNode(l,s),v=t.get(l,"position"),C=a[l.nodeName],P=new e(t.get(l,"color")),_={node:l,parentVs:s,box:k.box,style:{cw:b,ch:f,boxSizing:t.get(l,"boxSizing"),_paddings:null,getPaddings:function(){if(this._paddings)return this._paddings;t.setComputedStyleCache(l,d);var e={l:t.get(l,"paddingLeft"),r:t.get(l,"paddingRight"),t:t.get(l,"paddingTop"),b:t.get(l,"paddingBottom")};return e.ew=e.l+e.r,e.eh=e.t+e.b,e.bw=this.cw+e.l+e.r,e.bh=this.ch+e.t+e.b,t.clearCache(l),this._paddings=e},_border:null,getBorder:function(){function o(o,r){var n=new e(t.get(l,"border"+r+"Color"));i[o]={color:n.toHex(),opacity:n.a*g,width:t.get(l,"border"+r+"Width"),style:t.get(l,"border"+r+"Style")}}if(this._border)return this._border;t.setComputedStyleCache(l,d);var i={radius:t.toPixelValue(l,t.get(l,"borderBottomLeftRadius"))};return o("l","Left"),o("r","Right"),o("t","Top"),o("b","Bottom"),i.ew=i.l.width+i.r.width,i.eh=i.t.width+i.b.width,t.clearCache(l),this._border=i},_background:null,getBackground:function(){if(this._background)return this._background;t.setComputedStyleCache(l,d);var o=new e(t.get(l,"backgroundColor")),i=t.get(l,"backgroundRepeat"),r=t.get(l,"backgroundSize"),n={color:o.toHex(),opacity:o.a*g,image:t.get(l,"backgroundImage"),size:r,positionX:t.get(l,"backgroundPositionX"),positionY:t.get(l,"backgroundPositionY"),repeatX:"cover"!==r&&("repeat"===i||"repeat-x"===i),repeatY:"cover"!==r&&("repeat"===i||"repeat-y"===i)};return n.sizePx=t.toPixelValue(document.body,n.size),n.positionXPx=t.toPixelValue(document.body,n.positionX),n.positionYPx=t.toPixelValue(document.body,n.positionY),t.clearCache(l),this._background=n},color:P.toHex(),colorOpacity:P.a,lineHeight:m,fontSize:y,textAlign:x,letterSpacing:w,wordSpacing:S,vAlign:t.get(l,"verticalAlign"),getTextStyle:function(e,o){if(e)return t.get(l,e);var i=n.buildTextStyleString(l,_,d);if(o)for(var r in o)i=i.replace(new RegExp("(^|;)"+r+":.*?(;|$)"),"$1"+r+":"+o[r]+"$2");return i},getTextStyleObject:function(){return n.buildTextStyleObject(l,_,d)},transform:k.transform,parentHasTransform:!(!s||!s.style.transform),opacity:t.get(l,"opacity")*g,overflow:t.get(l,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:t.get(l,"display"),isRelAbs:"relative"===v||"absolute"===v},isSpanLike:C,isLink:"A"===l.nodeName||c,isB:"B"===l.nodeName||"H"===l.nodeName.charAt(0)||u,isI:"I"===l.nodeName||p,isU:"U"===l.nodeName||h};if("border-box"===_.style.boxSizing&&(_.style.cw-=_.style.getBorder().ew+_.style.getPaddings().ew,_.style.ch-=_.style.getBorder().eh+_.style.getPaddings().eh,_.style._paddings=null),C){var B=r.getSpanFlowOffsets(l,_);_.style.spanFlowStartOffset=B.start,_.style.spanFlowEndOffset=B.end}return _.isLink&&(_.href=l.href||s.href,_.target=l.target||s.target),t.clearCache(l),_}}});