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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/promise/all","dojo/when","./WebMapAttachmentStore"],function(t,e,n,r){return t(null,{_context:null,_currentAreaIndex:-1,_webMapStores:null,constructor:function(t){this._context=t},initialize:function(){var t=this;return this._webMapStores={},e(this._context.analysisAreas.map(function(e,n){var i=e.feature||e.additionalFeatures&&e.additionalFeatures[0];if(i){return(t._webMapStores[n]=new r(i)).initialize()}})).then(function(){return t})},_callStoreMethod:function(t){var e=this._webMapStores[this._currentAreaIndex];return e?n(e[t](),function(t){return t?t.slice():[]}):[]},getAttachments:function(){return this._callStoreMethod("getAttachments")},getAttributes:function(){return this._callStoreMethod("getAttributes")},getNotes:function(){return this._callStoreMethod("getNotes")},setCurrentAnalysisAreaIndex:function(t){this._currentAreaIndex=t}})});