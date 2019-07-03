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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","dojo/dom-construct","../../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/form/TextBox","dojo/i18n!../../nls/jsapi","./RFxRasterInput","./utils"],function(t,e,s,r,i,a,n,l,o,u,d,h){var c=t([n,l],{templateString:"<div class='esriRFxRasterInputs'></div>",declaredClass:"esri.dijit.RasterFunctionEditor.RFxRasterInputs",allowScalar:!1,honorIsPublic:!0,_rasterInputs:[],constructor:function(t){this.inherited(arguments),e.mixin(this,t),this._i18n=u.widgets.rasterFunctionEditor.rfxArgsEditor},startup:function(){this.inherited(arguments),this._readRasterElements(),this._initRasterInputs()},_readRasterElements:function(){this.rasterElements=[];var t=this.value;t&&(t&&t.elements&&t.elements.length&&(this.rasterElements=t.elements),t&&t.length&&(this.rasterElements=t))},_initRasterInputs:function(){this.schemaElementInfos&&this.schemaElementInfos.length&&(this._rasterInputs=s.map(this.schemaElementInfos,function(t,e){var s=this.rasterElements[e];if(s){if(!(h.isReferencedObject(s)||!this.isShown(s))){var r,a=t.displayName,n=i.toDom("<div class='arg-name-row'>"+a+"</div>"),l=i.create("div",{class:"widget-row"});h.getArgRFT(s);i.place(n,this.domNode),i.place(l,this.domNode);var o=h.RFX_VARIABLE_TYPE;return r=new d({browseProperties:this.browseProperties,allowScalar:this.allowScalar,inputLayers:this.inputLayers,selectDefault:!0,rfxVariable:s,value:s&&s.type===o?s.value:s},l),this._rasterInputs.push(r),r.startup(),r}}},this))},_getValueAttr:function(){if(this.rasterElements&&this._rasterInputs&&Array.isArray(this._rasterInputs))return this.rasterElements.map(function(t,e){var s=h.getArgRFT(t);if(s)return t.type===h.RFX_VARIABLE_TYPE?(t.value=this.getRFT(s),t):this.getRFT(s);var r=this._rasterInputs[e];if(!r)return t;if(r.declaredClass&&r.declaredClass.indexOf("RFxRasterInput")>=0){var i=r.get("value");return t?(t.value=i,t):i}},this)}});return r("extend-esri")&&e.setObject("dijit.RasterFunctionEditor.RFxRasterInputs",c,a),c});