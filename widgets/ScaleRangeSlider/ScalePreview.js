// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/dom-style","dojo/i18n!./nls/ScaleRangeSlider","dojo/text!./templates/ScalePreview.html"],function(e,i,s,t,a){return i.createSubclass([e],{declaredClass:"esri.dijit.ScaleRangeSlider.ScalePreview",baseClass:"esri-scale-preview",templateString:a,labels:t,css:{header:"esri-scale-preview__header",thumbnail:"esri-scale-preview__thumbnail"},source:null,_setSourceAttr:function(e){this.source!==e&&(this._set("source",e),s.set(this.dap_scalePreviewThumbnail,"backgroundImage",e))},backgroundPosition:null,_setBackgroundPositionAttr:function(e){this.backgroundPosition!==e&&(this._set("backgroundPosition",e),s.set(this.dap_scalePreviewThumbnail,"backgroundPosition",e))}})});