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

define(["../../kernel","dijit/_TemplatedMixin","dijit/_WidgetBase","dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ScalePreview.html"],function(e,i,s,t,a,o,l,n,r){var d=t([s,i],{declaredClass:"esri.dijit.VisibleScaleRangeSlider.ScalePreview",baseClass:"esriScalePreview",templateString:r,labels:n.widgets.visibleScaleRangeSlider,css:{header:"esriHeader",thumbnail:"esriThumbnail"},source:null,_setSourceAttr:function(e){this.source!==e&&(this._set("source",e),o.set(this.dap_scalePreviewThumbnail,"backgroundImage",e))},backgroundPosition:null,_setBackgroundPositionAttr:function(e){this.backgroundPosition!==e&&(this._set("backgroundPosition",e),o.set(this.dap_scalePreviewThumbnail,"backgroundPosition",e))}});return l("extend-esri")&&a.setObject("dijit.ScalePreview",d,e),d});