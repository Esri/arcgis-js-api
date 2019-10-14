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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["./kernel","dojo/_base/connect","dojo/_base/lang","dojo/dom-style","dojo/has"],function(e,t,n,o,c){var i={show:function(e){(e=i.getNode(e))&&(e.style.display="block")},getNode:function(e){return e&&e.domNode||e},hide:function(e){(e=i.getNode(e))&&(e.style.display="none")},toggle:function(e){(e=i.getNode(e))&&(e.style.display="none"===e.style.display?"block":"none")},documentBox:c("ie")<=8?{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}:{w:window.innerWidth,h:window.innerHeight},setScrollable:function(e){if(e=this.getNode(e)){var n=0,c=0,i=0,r=0,s=0,d=0;return[t.connect(e,"ontouchstart",function(t){n=t.touches[0].screenX,c=t.touches[0].screenY,i=e.scrollWidth,r=e.scrollHeight,s=e.clientWidth,d=e.clientHeight}),t.connect(e,"ontouchmove",function(t){t.preventDefault();var l=e.firstChild;l instanceof Text&&(l=e.childNodes[1]);var u=l._currentX||0,h=l._currentY||0;u+=t.touches[0].screenX-n,u>0?u=0:u<0&&Math.abs(u)+s>i&&(u=-1*(i-s)),l._currentX=u,h+=t.touches[0].screenY-c,h>0?h=0:h<0&&Math.abs(h)+d>r&&(h=-1*(r-d)),l._currentY=h,o.set(l,{"-webkit-transition-property":"-webkit-transform","-webkit-transform":"translate("+u+"px, "+h+"px)"}),n=t.touches[0].screenX,c=t.touches[0].screenY})]}}};return c("extend-esri")&&n.mixin(e,i),i});