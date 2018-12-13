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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["dijit/form/Select","dojo/dom-class"],function(t,e){return t.createSubclass({baseClass:"esri-icon-select dijitSelect dijitValidationTextBox",declaredClass:"esri.widgets.SymbolStyler.IconSelect",_extraIconClass:null,_setValueAttr:function(t){this.inherited(arguments);var s=this.containerNode;e.remove(s,this._getAllIconClasses()),e.add(s,this.get("selectedOptions").iconClass)},addIconOptions:function(t,e){e=e||"",t=t||[];var s=t.map(function(t){return{value:t,iconClass:e+" "+t}});this.addOption(s)},_getMenuItemForOption:function(t){var e=this.inherited(arguments);return e.set("iconClass",t.iconClass),e},_getAllIconClasses:function(){return this.options.map(function(t){return t.iconClass})}})});