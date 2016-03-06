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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../Evented"],function(e,o,i,a,s){var r=e([s],{declaredClass:"esri.toolbars._Toolbar",constructor:function(e){this.map=e},_cursors:{move:"pointer","move-v":"pointer","move-gv":"pointer",box0:"nw-resize",box1:"n-resize",box2:"ne-resize",box3:"e-resize",box4:"se-resize",box5:"s-resize",box6:"sw-resize",box7:"w-resize",box8:"pointer"},_deactivateMapTools:function(e,o,i,a){var s=this.map;e&&(this._mapNavState={isDoubleClickZoom:s.isDoubleClickZoom,isClickRecenter:s.isClickRecenter,isPan:s.isPan,isRubberBandZoom:s.isRubberBandZoom,isKeyboardNavigation:s.isKeyboardNavigation,isScrollWheelZoom:s.isScrollWheelZoom},s.disableDoubleClickZoom(),s.disableClickRecenter(),s.disablePan(),s.disableRubberBandZoom(),s.disableKeyboardNavigation()),o&&s.hideZoomSlider(),i&&s.hidePanArrows(),a&&s.graphics.disableMouseEvents()},_activateMapTools:function(e,o,i,a){var s=this.map,r=this._mapNavState;e&&r&&(r.isDoubleClickZoom&&s.enableDoubleClickZoom(),r.isClickRecenter&&s.enableClickRecenter(),r.isPan&&s.enablePan(),r.isRubberBandZoom&&s.enableRubberBandZoom(),r.isKeyboardNavigation&&s.enableKeyboardNavigation(),r.isScrollWheelZoom&&s.enableScrollWheelZoom()),o&&s.showZoomSlider(),i&&s.showPanArrows(),a&&s.graphics.enableMouseEvents()}});return i("extend-esri")&&o.setObject("toolbars._Toolbar",r,a),r});