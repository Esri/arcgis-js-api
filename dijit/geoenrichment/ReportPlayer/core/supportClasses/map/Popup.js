// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/geometry/ScreenPoint","esri/dijit/Popup"],(function(i,e,t){return i(t,{visibleWhenEmpty:!1,popupLayerId:"popupLayer",enableHighlight:function(i){this.inherited(arguments),this._forceMoveGraphic(i)},updateHighlight:function(i,e){this.inherited(arguments),this._forceMoveGraphic(i)},disableHighlight:function(i){this._highlighted&&this._highlighted.getLayer()&&this._highlighted.getLayer().remove(this._highlighted),this.inherited(arguments)},_forceMoveGraphic:function(i){if(this._highlighted){var e=i.getLayer(this.popupLayerId);e&&(i.graphics.remove(this._highlighted),e.add(this._highlighted))}},_setPosition:function(i){var t=this.getPlayerZoomScale()||1,h=i.x/t,o=i.y/t;return this.inherited(arguments,[new e(h,o)])},_onExtentChange:function(i,e,t){t&&1!==this.getPlayerZoomScale()&&this.hide()},getPlayerZoomScale:function(){}})}));