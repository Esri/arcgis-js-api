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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/on","dojo/sniff","./DomUtil"],function(o,e,t){function n(o,e){kC=o.keyCode,(c||d)&&(91===kC||93===kC)||y&&224===kC?r.cmdKey=e:16===kC?r.shiftKey=e:17===kC?r.ctrlKey=e:18===kC&&(r.altKey=e)}var i={};i.listenToKeyboardCombinationOverNode=function(e){return o(document.body,"keyup",function(o){if((!e.isCtrl||i.isCtrl(o))&&(!e.isShift||o.shiftKey)&&(!e.isAlt||o.altKey)){String.fromCharCode(o.keyCode).toLowerCase()===e.char&&t.isNodeInLayout(e.node)&&e.callback()}})},i.isCtrl=function(o){return o.ctrlKey||r.ctrlKey||r.cmdKey};var r={};if(e("mac")){var c=e("webkit"),d=e("opera"),y=e("mozilla");o(document.body,"keydown",function(o){n(o,!0)}),o(document.body,"keyup",function(o){n(o,!1)})}return i});