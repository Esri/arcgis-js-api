// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","../ReportPlayerState"],(function(n,e,i,t,r){function o(){var e=new i;return n(["../printing/PrintableContainer"],(function(n){e.resolve(n)})),e.promise}return e(null,{_getPrintableContainer:function(n){var e=this;return r.isAnimationSuspended=!0,e._showWaiting(o(),"loadPrintModules").then((function(i){var o=new i(e,e._viewModel);return n.onShowWaiting=function(n){e._showWaiting(n,"initPrintContainer")},t(o.initialize(n),(function(n){return r.isAnimationSuspended=!1,n||t(o.stop(),(function(){return null}))}))}))},_getPrintDialogSettings:function(){var n=this;return o().then((function(e){return new e(n,n._viewModel).getPrintDialogSettings()}))}})}));