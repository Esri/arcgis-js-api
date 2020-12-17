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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style","dojo/sniff","./Animator","esri/dijit/geoenrichment/utils/DomUtil"],(function(t,e,o,n,r){var i={};return i.animateResize=function(i){var a=i.fromBox||(i.domFrom||i.domNode)&&r.noTransformPosition(i.domFrom||i.domNode);i.animateGhost&&function(o){i.domNode=t.create("div",{class:i.ghostClass},document.body),e.set(i.domNode,{width:o.w+"px",height:o.h+"px"})}(a);var s=i.toBox||r.noTransformPosition(i.domTo);if(a&&s){var d=function(t,e){var o={x:i.startScaleX,y:i.startScaleY},n=0;return"fit"===o.x&&(t.w?n=o.x=t.w/e.w:o.x=0),"fit"===o.y&&(t.h?n=Math.max(o.y=t.h/e.h,n):o.y=0),o.x=o.x||n||1,o.y=o.y||n||1,o}(a,s),f=function(t,e){var o={x:i.endScaleX,y:i.endScaleY},n=0;return"fit"===o.x&&(e.w?n=o.x=e.w/t.w:o.x=0),"fit"===o.y&&(e.h?n=Math.max(o.y=e.h/t.h,n):o.y=0),o.x=o.x||n||1,o.y=o.y||n||1,o}(a,s);i.fromOffset&&(a=function(t,e,o){var n,r=i.fromOffset.x,a=i.fromOffset.y;if("number"!=typeof r)switch(n=e.w*o.x,r){case"l":r=0;break;case"r":r=(t.w||0)-n;break;default:r=((t.w||0)-n)/2}if("number"!=typeof a)switch(n=e.h*o.y,a){case"t":a=0;break;case"b":a=(t.h||0)-n;break;default:a=((t.h||0)-n)/2}return{x:t.x+r,y:t.y+a}}(a,s,d)),i.toOffset&&(s=function(t,e,o){var n,r=i.toOffset.x,a=i.toOffset.y;if("number"!=typeof r)switch(n=t.w*o.x,r){case"l":r=0;break;case"r":r=(e.w||0)-n;break;default:r=((e.w||0)-n)/2}if("number"!=typeof a)switch(n=t.h*o.y,a){case"t":a=0;break;case"b":a=(e.h||0)-n;break;default:a=((e.h||0)-n)/2}return{x:e.x+r,y:e.y+a}}(a,s,f));var u=o("webkit")?"webkitTransformOrigin":"transformOrigin";return i.domNode.style[u]="0% 0%",n.animateProperty({obj:i.domNode,duration:i.duration||250,properties:{__x:{start:a.x,end:s.x},__y:{start:a.y,end:s.y},__scaleX:{start:d.x||1,end:f.x},__scaleY:{start:d.y||1,end:f.y}},endFunction:function(){i.animateGhost&&t.destroy(i.domNode),i.onEnd&&i.onEnd()},progressFunction:function(t,e){var n=o("webkit")?"webkitTransform":"transform";"__x"==t?i.domNode.style.left=e+"px":"__y"==t?i.domNode.style.top=e+"px":"__scaleX"==t?i.domNode.style[n]="scaleX("+e+") scaleY("+(i.domNode.__scaleY||1)+")":"__scaleY"==t&&(i.domNode.style[n]="scaleX("+(i.domNode.__scaleX||1)+") scaleY("+e+")")}}).promise}i.onEnd&&i.onEnd()},i.animateShrinkResize=function(t){return t.endScaleX=t.endScaleX||.1,t.endScaleY=t.endScaleY||.05,i.animateResize(t)},i.animateFadeIn=function(t){return n.animateProperty({obj:t.domNode.style,duration:t.duration||250,properties:{opacity:{start:0,end:1}},endFunction:function(){t.onEnd&&t.onEnd()}}).promise},i.animateFadeOut=function(t){return n.animateProperty({obj:t.domNode.style,duration:t.duration||250,properties:{opacity:{start:1,end:0}},endFunction:function(){t.onEnd&&t.onEnd()}}).promise},i.animateSlide=function(t,e,o){var r=o.width;return n.animateProperty({obj:t.style,duration:o.duration||250,properties:{left:{start:o.leftToRight?0:-r,end:o.leftToRight?-r:0,units:"px"},right:{start:o.leftToRight?0:r,end:o.leftToRight?r:0,units:"px"}},endFunction:function(){o.onEnd&&o.onEnd()}}),n.animateProperty({obj:e.style,duration:o.duration||250,properties:{left:{start:o.leftToRight?r:0,end:o.leftToRight?0:r,units:"px"},right:{start:o.leftToRight?-r:0,end:o.leftToRight?0:-r,units:"px"}}}).promise},i.animateExpand=function(t,o,i){i=i||{},t.style.overflow="hidden",o&&r.show(t);var a=e.get(t,"height");return n.animateProperty({obj:t.style,duration:i.duration,properties:{height:{start:o?0:a,end:o?a:0,units:"px"}},progressFunction:i.progressFunction,endFunction:function(){!o&&r.hide(t),e.set(t,"height",""),e.set(t,"overflow","")}}).promise},i}));