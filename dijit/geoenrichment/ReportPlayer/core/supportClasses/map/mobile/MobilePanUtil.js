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

define(["dojo/on","dojo/dom-class","dojo/dom-construct"],function(n,o,t){var c={};return c.setUpMapPan=function(o,t){function e(n){i=n,i?o.disableMapNavigation():o.enableMapNavigation()}if(o.__container){var a,i=!0;n(o.__container,"touchstart",function(c){if(i){var e=c.clientX,u=c.clientY;a=n(o.__container,"touchmove",function(n){var o=n.clientX,c=n.clientY;t(e-o,u-c),e=o,u=c}),n.once(o.__container,"touchend, touchcancel",function(n){a.remove()})}});c._createLockButton(o.__container,e)}},c._createLockButton=function(c,e){function a(n,t){i=n,o.remove(u,"locked unlocked"),o.add(u,i?"locked":"unlocked"),t&&e(i)}var i=!0,u=t.create("div",{class:"mapNavigationLockButton locked"},c);return n(u,"touchstart",function(){a(!i,!0)}),{setLocked:function(n){a(n)}}},c});