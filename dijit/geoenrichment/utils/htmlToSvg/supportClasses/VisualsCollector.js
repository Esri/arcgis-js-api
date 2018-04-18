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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/Color","./dom-style","./TransformUtil","./VisibilityChecker","./text/TextMeasurer","./text/TextStyleBuilder"],function(e,t,o,i,r,n){var a={SPAN:1,A:1,B:1,I:1,U:1,FONT:1};return{getNodeVisuals:function(l,s){function d(o,i){var r=new e(t.get(l,"border"+i+"Color"));k[o]={color:r.toHex(),opacity:r.a*g,width:t.get(l,"border"+i+"Width"),style:t.get(l,"border"+i+"Style")}}if(!i.checkNode(l))return null;t.cacheComputedStyle(l);var g=s?s.style.opacity:1,c=s&&s.isLink,f=s&&s.isB,u=s&&s.isI,p=s&&s.isU,b=t.get(l,"width"),y=t.get(l,"height"),x={l:t.get(l,"paddingLeft"),r:t.get(l,"paddingRight"),t:t.get(l,"paddingTop"),b:t.get(l,"paddingBottom")},m=b+x.l+x.r,h=y+x.t+x.b,S=new e(t.get(l,"backgroundColor")),w={color:S.toHex(),opacity:S.a*g,image:t.get(l,"backgroundImage"),size:t.get(l,"backgroundSize"),positionX:t.get(l,"backgroundPositionX"),positionY:t.get(l,"backgroundPositionY")};w.sizePx=t.toPixelValue(document.body,w.size),w.positionXPx=t.toPixelValue(document.body,w.positionX),w.positionYPx=t.toPixelValue(document.body,w.positionY);var k={};d("l","Left"),d("r","Right"),d("t","Top"),d("b","Bottom");var v=t.toPixelValue(l,t.get(l,"fontSize")),N=t.get(l,"textAlign"),P=t.get(l,"lineHeight"),T=o.measureNode(l,s),A=t.get(l,"position"),B=a[l.nodeName],O={node:l,parentVs:s,box:T.box,style:{cw:b,ch:y,pw:m,ph:h,paddings:x,border:k,borderRadius:t.toPixelValue(l,t.get(l,"borderBottomLeftRadius")),background:w,color:new e(t.get(l,"color")).toHex(),fontSize:v,textAlign:N,getTextStyle:function(e,o){if(e)return t.get(l,e);var i=n.buildTextStyleString(l,O,v,N,P);if(o)for(var r in o)i=i.replace(new RegExp("(^|;)"+r+":.*?(;|$)"),"$1"+r+":"+o[r]+"$2");return i},getTextStyleObject:function(){return n.buildTextStyleObject(l,O,v,N,P)},opacity:t.get(l,"opacity")*g,overflow:t.get(l,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:t.get(l,"display"),isMiddle:"middle"===t.get(l,"verticalAlign"),transform:T.transform,parentHasTransform:!(!s||!s.style.transform),isRelAbs:"relative"===A||"absolute"===A},isSpanLike:B,isLink:"A"===l.nodeName||c,isB:"B"===l.nodeName||"H"===l.nodeName.charAt(0)||f,isI:"I"===l.nodeName||u,isU:"U"===l.nodeName||p};if(B){var V=r.getSpanFlowOffsets(l,O);O.style.spanFlowStartOffset=V.start,O.style.spanFlowEndOffset=V.end}return O.isLink&&(O.href=l.href||s.href,O.target=l.target||s.target),t.clearCache(l),O}}});