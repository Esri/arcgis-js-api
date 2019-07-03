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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./RenderMode"],function(e,r,t,a,n){var s=e([n],{declaredClass:"esri.layers._SelectionMode",constructor:function(e){this.featureLayer=e,this._featureMap={}},propertyChangeHandler:function(e){this._init&&0===e&&this._applyTimeFilter()},resume:function(){this.propertyChangeHandler(0)},hasAllFeatures:function(){return!this.featureLayer._hasPartialSelectedFeatures},hasUpdateError:function(){return this.featureLayer._hasSelectionError}});return t("extend-esri")&&r.setObject("layers._SelectionMode",s,a),s});