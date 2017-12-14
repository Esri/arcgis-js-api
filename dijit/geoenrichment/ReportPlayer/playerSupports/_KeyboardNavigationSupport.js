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

define(["dojo/_base/declare","dojo/on","dojo/when","dojo/keys","../PlayerResizeModes"],function(e,i,o,n,d){return e(null,{_windowSlideNavigationKeyboardHandle:null,resize:function(){var e=this;return o(this.inherited(arguments),function(){e._updateSlideNavigationKeyboardListeners()})},_updateSlideNavigationKeyboardListeners:function(){var e=this;this._windowSlideNavigationKeyboardHandle&&this._windowSlideNavigationKeyboardHandle.remove(),this.isSlidesView&&this.allowKeyboardNavigation&&this.resizeMode===d.FIT_WINDOW&&(this._windowSlideNavigationKeyboardHandle=i(window,"keyup",function(i){i.keyCode===n.RIGHT_ARROW?e.getCurrentReportContainer().showNextSlide():i.keyCode===n.LEFT_ARROW&&e.getCurrentReportContainer().showPreviousSlide()}),this.own(this._windowSlideNavigationKeyboardHandle))}})});