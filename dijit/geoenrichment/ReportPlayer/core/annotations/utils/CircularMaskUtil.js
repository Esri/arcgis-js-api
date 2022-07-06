// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,t,o,r,a){var d={setCircularMask:function(d,i,s,c){function _(){i&&i.__maskNode&&(e.destroy(i.__maskNode),delete i.__maskNode)}if(c=c||0,d&&i){var n=(l=t.get(i,"width"),f=t.get(i,"height"),{w:l,h:f,l:t.get(i,"left"),t:t.get(i,"top"),cr:Math.min(l,f)/2,cx:l/2,cy:f/2}),m=function(e){return[e.w,e.h,e.l,e.t,s,c].join("_")}(n);(!i.__maskNode||i.__maskNode.__renderKey!==m)&&(_(),i.__maskNode=e.create("div"),t.set(i.__maskNode,{position:"absolute",left:n.l+"px",top:n.t+"px"}),function(e){var t=o.createSurface(i.__maskNode,e.w,e.h).createImage({x:0,y:0,width:e.w,height:e.h,src:s});t.setClip({cx:e.cx,cy:e.cy,rx:e.cr,ry:e.cr}).applyTransform(r.rotategAt(c,e.cx,e.cy)),t.rawNode.setAttribute("preserveAspectRatio","xMidYMid meet")}(n),i.__maskNode.__renderKey=m),e.place(i.__maskNode,i,"after"),a.hide(i)}else _(),a.show(i);var l,f;return i&&i.__maskNode}};return d}));