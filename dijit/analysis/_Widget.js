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

define(["dijit/_WidgetBase","dojo/_base/lang","dojo/dom-class"],function(e,i,t){var s={hidden:"esri-hidden"};return e.createSubclass({declaredClass:"esri.dijit.analysis.Widget",create:function(e,t){e=i.mixin({viewModel:{}},e),e.viewModel=this._ensureViewModelInstance(e.viewModel),this.inherited(arguments,[e,t])},destroy:function(){this.inherited(arguments),this.viewModel.destroy&&this.viewModel.destroy(),this.viewModel=null},viewModel:null,_setViewModelAttr:function(e){this._set("viewModel",this._ensureViewModelInstance(e))},viewModelType:null,visible:!0,_setVisibleAttr:function(e){this._set("visible",e),t.toggle(this.domNode,s.hidden,!e)},_ensureViewModelInstance:function(e){return e&&!e.declaredClass&&this.viewModelType?new this.viewModelType(e):e}})});