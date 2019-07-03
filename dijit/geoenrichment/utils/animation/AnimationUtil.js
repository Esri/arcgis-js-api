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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style","dojo/sniff","./Animator","esri/dijit/geoenrichment/utils/DomUtil"],function(t,e,o,n,r){var a={};return a.animateResize=function(a){var i=function(){return a.fromBox||(a.domFrom||a.domNode)&&r.noTransformPosition(a.domFrom||a.domNode)}();a.animateGhost&&function(o){a.domNode=t.create("div",{class:a.ghostClass},document.body),e.set(a.domNode,{width:o.w+"px",height:o.h+"px"})}(i);var d=function(){return a.toBox||r.noTransformPosition(a.domTo)}();if(!i||!d)return void(a.onEnd&&a.onEnd());var s=function(t,e){var o={x:a.startScaleX,y:a.startScaleY},n=0;return"fit"===o.x&&(t.w?n=o.x=t.w/e.w:o.x=0),"fit"===o.y&&(t.h?n=Math.max(o.y=t.h/e.h,n):o.y=0),o.x=o.x||n||1,o.y=o.y||n||1,o}(i,d),f=function(t,e){var o={x:a.endScaleX,y:a.endScaleY},n=0;return"fit"===o.x&&(e.w?n=o.x=e.w/t.w:o.x=0),"fit"===o.y&&(e.h?n=Math.max(o.y=e.h/t.h,n):o.y=0),o.x=o.x||n||1,o.y=o.y||n||1,o}(i,d);a.fromOffset&&(i=function(t,e,o){var n,r=a.fromOffset.x,i=a.fromOffset.y;if("number"!=typeof r)switch(n=e.w*o.x,r){case"l":r=0;break;case"r":r=(t.w||0)-n;break;default:r=((t.w||0)-n)/2}if("number"!=typeof i)switch(n=e.h*o.y,i){case"t":i=0;break;case"b":i=(t.h||0)-n;break;default:i=((t.h||0)-n)/2}return{x:t.x+r,y:t.y+i}}(i,d,s)),a.toOffset&&(d=function(t,e,o){var n,r=a.toOffset.x,i=a.toOffset.y;if("number"!=typeof r)switch(n=t.w*o.x,r){case"l":r=0;break;case"r":r=(e.w||0)-n;break;default:r=((e.w||0)-n)/2}if("number"!=typeof i)switch(n=t.h*o.y,i){case"t":i=0;break;case"b":i=(e.h||0)-n;break;default:i=((e.h||0)-n)/2}return{x:e.x+r,y:e.y+i}}(i,d,f));var c=o("webkit")?"webkitTransformOrigin":"transformOrigin";return a.domNode.style[c]="0% 0%",n.animateProperty({obj:a.domNode,duration:a.duration||250,properties:{__x:{start:i.x,end:d.x},__y:{start:i.y,end:d.y},__scaleX:{start:s.x||1,end:f.x},__scaleY:{start:s.y||1,end:f.y}},endFunction:function(){a.animateGhost&&t.destroy(a.domNode),a.onEnd&&a.onEnd()},progressFunction:function(t,e){var n=o("webkit")?"webkitTransform":"transform";"__x"==t?a.domNode.style.left=e+"px":"__y"==t?a.domNode.style.top=e+"px":"__scaleX"==t?a.domNode.style[n]="scaleX("+e+") scaleY("+(a.domNode.__scaleY||1)+")":"__scaleY"==t&&(a.domNode.style[n]="scaleX("+(a.domNode.__scaleX||1)+") scaleY("+e+")")}}).promise},a.animateShrinkResize=function(t){return t.endScaleX=t.endScaleX||.1,t.endScaleY=t.endScaleY||.05,a.animateResize(t)},a.animateFadeIn=function(t){return n.animateProperty({obj:t.domNode.style,duration:t.duration||250,properties:{opacity:{start:0,end:1}},endFunction:function(){t.onEnd&&t.onEnd()}}).promise},a.animateFadeOut=function(t){return n.animateProperty({obj:t.domNode.style,duration:t.duration||250,properties:{opacity:{start:1,end:0}},endFunction:function(){t.onEnd&&t.onEnd()}}).promise},a.animateSlide=function(t,e,o){var r=o.width;return n.animateProperty({obj:t.style,duration:o.duration||250,properties:{left:{start:o.leftToRight?0:-r,end:o.leftToRight?-r:0,addPx:!0},right:{start:o.leftToRight?0:r,end:o.leftToRight?r:0,addPx:!0}},endFunction:function(){o.onEnd&&o.onEnd()}}),n.animateProperty({obj:e.style,duration:o.duration||250,properties:{left:{start:o.leftToRight?r:0,end:o.leftToRight?0:r,addPx:!0},right:{start:o.leftToRight?-r:0,end:o.leftToRight?0:-r,addPx:!0}}}).promise},a.animateExpand=function(t,o,a){a=a||{},t.style.overflow="hidden",o&&r.show(t);var i=e.get(t,"height");return n.animateProperty({obj:t.style,duration:a.duration,properties:{height:{start:o?0:i,end:o?i:0,addPx:!0}},progressFunction:a.progressFunction,endFunction:function(){!o&&r.hide(t),e.set(t,"height",""),e.set(t,"overflow","")}}).promise},a});