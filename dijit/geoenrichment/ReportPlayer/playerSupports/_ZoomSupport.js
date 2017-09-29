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

define(["dojo/_base/declare","dojo/aspect","dojo/on","dojo/dom-class","dojo/when","../PlayerSelect","../PlayerZoomBehaviors","esri/dijit/geoenrichment/utils/DomUtil","dojo/i18n!../../../../nls/jsapi"],function(e,o,t,i,n,a,r,l,s){function u(e){var o=[];return h.forEach(function(t){"number"==typeof t.value&&o.push({value:t.value,score:e<t.value?e/t.value:t.value/e})}),o.sort(function(e,o){return o.score-e.score}),o[0].value}s=s.geoenrichment.dijit.ReportPlayer.ReportPlayer;var h=[{value:"fitPage",label:s.fitPage},{value:"fitPageWidth",label:s.fitPageWidth},{value:150,label:"150%"},{value:100,label:"100%"},{value:80,label:"80%"},{value:75,label:"75%"},{value:60,label:"60%"},{value:50,label:"50%"}];return e(null,{_isFitPageFlag:!1,zoomSelect:null,postCreate:function(){this.inherited(arguments),this._initZoomControls(),l.hide(this.zoomSelectDiv)},_initZoomControls:function(){var e=this;this.zoomSelect=(new this._getZoomSelectClass)({onUserChange:function(o){"fitPage"===o?e.getCurrentReportContainer().zoomToFitPage():"fitPageWidth"===o?e.getCurrentReportContainer().zoomToFitPageWidth():e.getCurrentReportContainer().setZoomPercent(o)}}).placeAt(this.zoomSelectDiv),this.own(this.zoomSelect),this.zoomSelect.update(h,100)},_getZoomSelectClass:function(){return a},setBestZoom:function(){this.__callZoomMethod("setBestZoom")},zoomToFitPage:function(){this.__callZoomMethod("zoomToFitPage")},resetZoom:function(){this.__callZoomMethod("resetZoom")},_applyDefaultZoomBehavior:function(e){e&&this.defaultZoomBehavior==r.FIT_PAGE?this.zoomToFitPage():this.resetZoom()},__callZoomMethod:function(e){if(!this.isSlidesView){var o=this.getCurrentReportContainer();o&&o[e]&&o[e]()}},_reportContainerZoomChangedHandle:null,resize:function(){var e=this;return n(this.inherited(arguments),function(){var t=e.getCurrentReportContainer();e._reportContainerZoomChangedHandle&&e._reportContainerZoomChangedHandle.remove(),e._reportContainerZoomChangedHandle=t&&o.after(t,"onZoomChanged",e._onZoomChanged.bind(e));var i=!e.isSlidesView&&t&&!!t.zoomIn;l[i?"show":"hide"](e.zoomSelectDiv),e._applyDefaultZoomBehavior(i)})},_onZoomChanged:function(){var e=this.getCurrentReportContainer();if(e&&e.getZoomInfo){var o=this.getCurrentReportContainer().getZoomInfo(),t=o.isFitPageScale?"fitPage":o.isFitPageWidthScale?"fitPageWidth":u(100*o.scale);t!=this.zoomSelect.get("value")&&this.zoomSelect.update(void 0,t)}}})});