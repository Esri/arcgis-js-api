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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!./templates/RFxLinearUnit.html","dojo/_base/declare"],(function(t,e,i,s,n){return n([t,e,i],{declaredClass:"esri.widgets.ToolModeler.RasterFunctionEditor.ArgumentEditors.RFxLinearUnit",templateString:s,value:"0 Meters",constructor:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._populateControls(),this._setValues()},_populateControls:function(){this.unitType.set("store",this.enumStore),this.unitType.set("value","Meters"),this.unitValue.set("value","")},_setValues:function(t){var e=t||this.value;e&&(e=e.split(" "),this.unitValue.set("value",parseFloat(e[0])),this.unitType.set("value",e[1]))},_getValueAttr:function(){if(this.unitValue&&this.unitType&&!isNaN(this.unitValue.value))return this.unitValue.value+" "+this.unitType.value}})}));
