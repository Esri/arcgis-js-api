// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/on","dojo/dom-style","dojo/has"],function(e,t,n){var o={show:function(e){e=o.getNode(e),e&&(e.style.display="block")},getNode:function(e){return e&&e.domNode||e},hide:function(e){e=o.getNode(e),e&&(e.style.display="none")},toggle:function(e){e=o.getNode(e),e&&(e.style.display="none"===e.style.display?"block":"none")},documentBox:n("ie")<=8?{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}:{w:window.innerWidth,h:window.innerHeight},setScrollable:function(n){if(n=this.getNode(n)){var o=0,c=0,i=0,r=0,s=0,d=0;return[e(n,"touchstart",function(e){o=e.touches[0].screenX,c=e.touches[0].screenY,i=n.scrollWidth,r=n.scrollHeight,s=n.clientWidth,d=n.clientHeight}),e(n,"touchmove",function(e){e.preventDefault();var l=n.firstChild;l instanceof Text&&(l=n.childNodes[1]);var u=l._currentX||0,h=l._currentY||0;u+=e.touches[0].screenX-o,u>0?u=0:0>u&&Math.abs(u)+s>i&&(u=-1*(i-s)),l._currentX=u,h+=e.touches[0].screenY-c,h>0?h=0:0>h&&Math.abs(h)+d>r&&(h=-1*(r-d)),l._currentY=h,t.set(l,{"-webkit-transition-property":"-webkit-transform","-webkit-transform":"translate("+u+"px, "+h+"px)"}),o=e.touches[0].screenX,c=e.touches[0].screenY})]}}};return o});