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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","./WebMapAttachmentStore"],(function(e,t,n,r){return e(null,{supportsMultipleAreas:!0,_analysisAreas:null,_currentAreaIndex:-1,_webMapStores:null,constructor:function(e){this._analysisAreas=e},initialize:function(){var e=this;return this._webMapStores={},t(this._analysisAreas.map((function(t,n){var i=t.feature||t.location||t.additionalFeatures&&t.additionalFeatures[0];if(i)return(e._webMapStores[n]=new r(i)).initialize()}))).then((function(){return e}))},_callStoreMethod:function(e){var t=this._webMapStores[this._currentAreaIndex];return t?n(t[e](),(function(e){return e?e.slice():[]})):[]},getImages:function(){return this._callStoreMethod("getImages")},getAttributes:function(){return this._callStoreMethod("getAttributes")},getNotes:function(){return this._callStoreMethod("getNotes")},setCurrentAnalysisAreaIndex:function(e){this._currentAreaIndex=e}})}));