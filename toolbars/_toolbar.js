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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../Evented"],function(e,o,l,i,a){var s=e([a],{declaredClass:"esri.toolbars._Toolbar",constructor:function(e){this.map=e},_cursors:{move:"pointer","move-v":"pointer","move-gv":"pointer",box0:"nw-resize",box1:"n-resize",box2:"ne-resize",box3:"e-resize",box4:"se-resize",box5:"s-resize",box6:"sw-resize",box7:"w-resize",box8:"pointer"},_deactivateMapTools:function(e,o,l,i){var a=this.map;e&&(this._mapNavState={isDoubleClickZoom:a.isDoubleClickZoom,isClickRecenter:a.isClickRecenter,isPan:a.isPan,isRubberBandZoom:a.isRubberBandZoom,isKeyboardNavigation:a.isKeyboardNavigation,isScrollWheelZoom:a.isScrollWheelZoom},a.disableDoubleClickZoom(),a.disableClickRecenter(),a.disablePan(),a.disableRubberBandZoom(),a.disableKeyboardNavigation()),o&&a.hideZoomSlider(),l&&a.hidePanArrows(),i&&a.graphics.disableMouseEvents()},_activateMapTools:function(e,o,l,i){var a=this.map,s=this._mapNavState;e&&s&&(s.isDoubleClickZoom&&a.enableDoubleClickZoom(),s.isClickRecenter&&a.enableClickRecenter(),s.isPan&&a.enablePan(),s.isRubberBandZoom&&a.enableRubberBandZoom(),s.isKeyboardNavigation&&a.enableKeyboardNavigation(),s.isScrollWheelZoom&&a.enableScrollWheelZoom()),o&&a.showZoomSlider(),l&&a.showPanArrows(),i&&a.graphics.enableMouseEvents()},_deactivateScrollWheel:function(){var e=this.map;this._scrollWheelState={isScrollWheelZoom:e.isScrollWheelZoom,isScrollWheelPan:e.isScrollWheelPan},e.disableScrollWheelZoom(),e.disableScrollWheelPan()},_activateScrollWheel:function(){var e=this.map,o=this._scrollWheelState;o&&(o.isScrollWheelZoom&&e.enableScrollWheelZoom(),o.isScrollWheelPan&&e.enableScrollWheelPan())}});return l("extend-esri")&&o.setObject("toolbars._Toolbar",s,i),s});