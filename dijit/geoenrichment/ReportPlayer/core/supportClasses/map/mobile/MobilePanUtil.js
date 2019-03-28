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

define(["dojo/on","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil","dojo/i18n!esri/nls/jsapi"],function(o,t,i,e,n,c){var l={};c=c.geoenrichment.dijit.ReportPlayer.ReportPlayer;var s={_tooltips:[],_canShowTooltip:!0,tryShowTooltip:function(o){if(this._canShowTooltip){var t=n.showClosableTooltip({node:o,message:c.mapLockTooltip,position:"left",onClosed:function(){s.userDismissedTooltip()}});this._tooltips.push(t)}},userDismissedTooltip:function(){this._canShowTooltip=!1,this._tooltips.forEach(function(o){n.removeClosableTooltip(o)}),this._tooltips.length=0}};return l.setUpMapPan=function(t,i){function e(o){c=o,c?t.disableMapNavigation():t.enableMapNavigation()}if(t.root){var n,c=!0;o(t.root,"touchstart",function(e){if(c){var l=e.clientX,s=e.clientY;n=o(t.root,"touchmove",function(o){var t=o.clientX,e=o.clientY;i(l-t,s-e),l=t,s=e}),o.once(t.root,"touchend, touchcancel",function(o){n.remove()})}});l._createLockButton(t.root,e)}},l._createLockButton=function(n,c){function l(o,i){r=o,t.remove(a,"locked unlocked"),t.add(a,r?"locked":"unlocked"),i&&c(r)}var r=!0,a=i.create("div",{class:"mapNavigationLockButton locked"},n);return s.tryShowTooltip(a),o(a,e.click,function(){s.userDismissedTooltip(),l(!r,!0)}),{setLocked:function(o){l(o)}}},l});