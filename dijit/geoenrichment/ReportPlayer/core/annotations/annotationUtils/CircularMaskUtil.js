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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,o,r,a){var i={};return i.setCircularMask=function(i,d,s,c){function _(){d&&d.__maskNode&&(e.destroy(d.__maskNode),delete d.__maskNode)}function n(){var e=t.get(d,"width"),o=t.get(d,"height"),r=t.get(d,"left"),a=t.get(d,"top");return{w:e,h:o,l:r,t:a,cr:Math.min(e,o)/2,cx:e/2,cy:o/2}}function m(e){var t=o.createSurface(d.__maskNode,e.w,e.h),a=t.createImage({x:0,y:0,width:e.w,height:e.h,src:s});a.setClip({cx:e.cx,cy:e.cy,rx:e.cr,ry:e.cr}).applyTransform(r.rotategAt(c,e.cx,e.cy)),a.rawNode.setAttribute("preserveAspectRatio","xMidYMid meet")}function u(e){return[e.w,e.h,e.l,e.t,s,c].join("_")}if(c=c||0,i&&d){var f=n(),l=u(f),h=!d.__maskNode||d.__maskNode.__renderKey!==l;h&&(_(),d.__maskNode=e.create("div"),t.set(d.__maskNode,{position:"absolute",left:f.l+"px",top:f.t+"px"}),m(f),d.__maskNode.__renderKey=l),e.place(d.__maskNode,d,"after"),a.hide(d)}else _(),a.show(d);return d&&d.__maskNode},i});