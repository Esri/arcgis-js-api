// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dijit/form/Select","dojo/dom-class"],function(t,e){var n=t.createSubclass({baseClass:"esri-icon-select dijitSelect dijitValidationTextBox",declaredClass:"esri.dijit.SymbolStyler.IconSelect",_extraIconClass:null,_setValueAttr:function(t){this.inherited(arguments);var n=this.containerNode;e.remove(n,this._getAllIconClasses()),e.add(n,this.get("selectedOptions").iconClass)},addIconOptions:function(t,e){e=e||"",t=t||[];var n=t.map(function(t){return{value:t,iconClass:e+" "+t}});this.addOption(n)},_getMenuItemForOption:function(t){var e=this.inherited(arguments);return e.set("iconClass",t.iconClass),e},_getAllIconClasses:function(){return this.options.map(function(t){return t.iconClass})}});return n});