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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/on","dojo/sniff","./DomUtil"],function(e,o,t){function n(e,o){kC=e.keyCode,(d||c)&&(91===kC||93===kC)||y&&224===kC?r.cmdKey=o:16===kC?r.shiftKey=o:17===kC?r.ctrlKey=o:18===kC&&(r.altKey=o)}var i={};i.listenToKeyboardCombinationOverNode=function(o){return e(document.body,"keydown",function(e){if((!o.isCtrl||i.isCtrl(e))&&(!o.isShift||e.shiftKey)&&(!o.isAlt||e.altKey)){String.fromCharCode(e.keyCode).toLowerCase()!==o.char||o.node&&!t.isNodeInLayout(o.node)||o.callback(e)}})},i.isCtrl=function(e){return e.ctrlKey||r.ctrlKey||r.cmdKey||o("mac")&&e.metaKey};var r={};if(o("mac")){var d=o("webkit"),c=o("opera"),y=o("mozilla");e(document.body,"keydown",function(e){n(e,!0)}),e(document.body,"keyup",function(e){n(e,!1)})}return i});