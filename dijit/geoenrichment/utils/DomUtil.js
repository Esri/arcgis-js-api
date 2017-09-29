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

define(["dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dojo/string","dojo/domReady!"],function(e,t,n,o,r,i){var a={};return a.isHidden=function(e){return e&&t.contains(e,"esriGEHidden")},a.hide=function(e){return a.addTag(e,"esriGEHidden")},a.show=function(e){return a.removeTag(e,"esriGEHidden")},a.addTag=function(e,n){return a.applyCallback(e,function(e){e&&t.add(e,n)})},a.removeTag=function(e,n){return a.applyCallback(e,function(e){e&&t.remove(e,n)})},a.applyCallback=function(t,n,o){return o&&(n=e.hitch(o,n)),Array.isArray(t)?t.forEach(n):n(t),t},a.enableContent=function(e,i,a){if(e){a=a||{};var d=e.children.length-1;if(!(0>d)){var u=e.children[d];if(t.contains(u,"esriGEDisabledContent")||(u=null),i)u&&e.removeChild(u);else if(u=u||n.create("div",{"class":"esriGEDisabledContent"+(a.overlayClass?" "+a.overlayClass:"")},e),a.fitParent!==!1){var l=o[a.marginBox?"getMarginBox":"getContentBox"](e).h;l&&(l=l.toString()+"px",r.set(u,{height:l,marginTop:"-"+l}))}return u}}},a.enableContentAbsolute=function(e,t,n){if(e){n=n||{};var o=r.get(e,"position");return"relative"!=o&&"absolute"!=o&&r.set(e,"position","relative"),a.enableContent(e,t,{overlayClass:"esriGEAbsoluteStretched "+(n.overlayClass||""),fitParent:!1})}},a.isChildOf=function(e,t,n){var o=!1,r=function(e){return n&&!n(e)?!1:void(e.parentNode===t?o=!0:e.parentNode&&r(e.parentNode))};return e&&r(e),o},a.isNodeInLayout=function(e){return a.isChildOf(e,document.body,function(e){return!a.isHidden(e)&&"none"!=r.get(e,"display")})},a.hideNodeInBackground=function(e){if(e){a.showNodeFromBackground(e);var t=n.create("div",null,e,"after"),o=n.create("div",{style:"z-index: -1000; position: absolute; left: 0px; top: 0px; opacity: 0.01;"},document.body);n.place(e,o);var r={undo:function(){t&&(n.place(e,t,"replace"),n.destroy(t),n.destroy(o),t=null,delete e._hideNodeInBackgroundUndoController)}};return e._hideNodeInBackgroundUndoController=r,r}},a.showNodeFromBackground=function(e){e&&e._hideNodeInBackgroundUndoController&&e._hideNodeInBackgroundUndoController.undo()},a.position=function(e){function t(e){for(var t={x:0,y:0},n=e;n.offsetParent;)t.x+=n.offsetLeft,t.y+=n.offsetTop,n=n.offsetParent;return t}if(e){var n;if(e instanceof SVGElement&&e.getAttribute){var o=e.ownerSVGElement&&e.ownerSVGElement.parentNode;return n=o&&t(o),{x:(Number(e.getAttribute("x"))||0)+n.x,y:(Number(e.getAttribute("y"))||0)+n.y,w:Number(e.getAttribute("width"))||0,h:Number(e.getAttribute("height"))||0}}return n=t(e),{x:n.x,y:n.y,w:r.get(e,"width")+r.get(e,"paddingLeft")+r.get(e,"paddingRight"),h:r.get(e,"height")+r.get(e,"paddingTop")+r.get(e,"paddingBottom")}}},a.intersectNodeBoxes=function(e,t){var n=1e6,o=1e6,r=-1e6,i=-1e6;e.forEach(function(e){var t=a.position(e);n=Math.min(n,t.x),o=Math.min(o,t.y),r=Math.max(r,t.x+t.w),i=Math.max(i,t.y+t.h)});var d={x:n,y:o,w:r-n,h:i-o};if(t){var u=a.position(t);d.x-=u.x,d.y-=u.y}return d},a});