// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../../kernel","dijit/form/Select","dojo/_base/array","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has"],(function(e,t,n,i,o,s,a){var l=i("esri.dijit.SymbolStyler.IconSelect",[t],{baseClass:"esriIconSelect dijitSelect dijitValidationTextBox",_extraIconClass:null,addIconOptions:function(e,t){t=t||"";var i=n.map(e,(function(e){return{value:e,iconClass:t+" "+e}}));this.addOption(i)},_getMenuItemForOption:function(e){var t=this.inherited(arguments);return t.set("iconClass",e.iconClass),t},_setValueAttr:function(e){this.inherited(arguments);var t=this.containerNode;s.remove(t,this._getAllIconClasses()),s.add(t,this.get("selectedOptions").iconClass)},_getAllIconClasses:function(){return n.map(this.options,(function(e){return e.iconClass}))}});return a("extend-esri")&&o.setObject("dijit.SymbolStyler.IconSelect",l,e),l}));