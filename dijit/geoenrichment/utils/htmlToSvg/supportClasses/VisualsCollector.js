// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/Color","dojo/dom-style","./TextMeasurer","./TransformUtil","./VisibilityChecker"],function(e,t,o,r,i){var a={SPAN:1,A:1,B:1,I:1,U:1,FONT:1},n={_MAP:{"font-weight":"fontWeight","font-style":"fontStyle","white-space":"whiteSpace","word-wrap":"wordWrap","word-break":"wordBreak","overflow-wrap":"overflowWrap","text-decoration":"textDecoration"},buildTextStyle:function(e,o,r,i){var a="";for(var n in this._MAP){var l=t.get(e,this._MAP[n]);l&&(a+=n+":"+l+";")}var g=t.get(e,"fontFamily").replace(/"/g,"'");return g&&(a+="font-family:"+g+";"),o&&(a+="font-size:"+o+"px;"),r&&(a+="text-align:"+r+";"),i&&"normal"!=i&&(a+="line-height:"+i+"px;"),a}},l={getNodeVisuals:function(l,g){function d(o,r){var i=new e(t.get(l,"border"+r+"Color"));x[o]={color:i.toHex(),opacity:i.a*s,width:t.get(l,"border"+r+"Width"),style:t.get(l,"border"+r+"Style")}}if(!i.checkNode(l))return null;var s=g?g.style.opacity:1,f=g&&g.isLink,p=t.get(l,"width"),c=t.get(l,"height"),u={l:t.get(l,"paddingLeft"),r:t.get(l,"paddingRight"),t:t.get(l,"paddingTop"),b:t.get(l,"paddingBottom")},w=p+u.l+u.r,b=c+u.t+u.b,h=new e(t.get(l,"backgroundColor")),y={color:h.toHex(),opacity:h.a*s,image:t.get(l,"backgroundImage"),size:t.get(l,"backgroundSize"),positionX:t.get(l,"backgroundPositionX"),positionY:t.get(l,"backgroundPositionY")},x={};d("l","Left"),d("r","Right"),d("t","Top"),d("b","Bottom");var v=t.toPixelValue(l,t.get(l,"fontSize")),m=t.get(l,"textAlign"),k=t.get(l,"lineHeight"),S=r.measureNode(l),A=t.get(l,"position"),P=a[l.nodeName],T={box:S.box,style:{cw:p,ch:c,pw:w,ph:b,paddings:u,border:x,borderRadius:t.toPixelValue(l,t.get(l,"borderBottomLeftRadius")),background:y,color:new e(t.get(l,"color")).toHex(),fontSize:v,textAlign:m,getTextStyle:function(e,o){if(e)return t.get(l,e);var r=n.buildTextStyle(l,v,m,k);if(o)for(var i in o)r=r.replace(new RegExp("(^|;)"+i+":.*?(;|$)"),"$1"+i+":"+o[i]+"$2");return r},opacity:t.get(l,"opacity")*s,overflow:t.get(l,"overflow"),spanFlowStartOffset:0,spanFlowEndOffset:0,display:t.get(l,"display"),isMiddle:"middle"==t.get(l,"verticalAlign"),transform:S.transform,isRelAbs:"relative"==A||"absolute"==A},isSpanLike:P,isLink:"A"===l.nodeName||f};if(P){var F=o.getSpanFlowOffsets(l,T);T.style.spanFlowStartOffset=F.start,T.style.spanFlowEndOffset=F.end}return T.isLink&&(T.href=l.href||g.href,T.target=l.target||g.target),T}};return l});