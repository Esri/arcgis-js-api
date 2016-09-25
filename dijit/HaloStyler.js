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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/on","../kernel","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/ColorPalette","dijit/form/Select","dijit/form/CheckBox","dojo/text!./HaloStyler/templates/HaloStyler.html","dojo/i18n!../nls/jsapi"],function(e,t,o,l,h,a,i,s,n,r,c,C,_,d){var g=t([i,s,n],{declaredClass:"esri.dijit.HaloStyler",templateString:_,widgetsInTemplate:!0,i18n:d,haloColor:null,haloEnabled:!1,haloSize:0,value:{},_defaultPaletteSize:"7x10",_defaultHaloColor:"#ffffff",_css:{container:"esri-halo-styler",topContainer:"esri-halo-styler-top-container",haloSelect:"esri-halo-styler-select"},postCreate:function(){this.inherited(arguments),this._setupDijits()},_setValueAttr:function(e){this._haloColorPalette&&(this.set("haloSize",e.haloSize||1),this._haloSizeSelect.set("value",this.get("haloSize")),this.set("haloColor",e.haloColor),this._haloColorPalette.set("value",this.get("haloColor")),this.set("haloEnabled",e.haloSize>0?!0:!1),this._haloCheckBox.set("checked",this.get("haloEnabled")))},_setupDijits:function(){this._haloCheckBox.set("checked",this.get("haloEnabled")),this._haloSizeSelect.set("value",this.get("haloSize")),this._createHaloColorPicker(),this.own(h(this._haloCheckBox,"change",o.hitch(this,this._onHaloCheckboxChange)),h(this._haloSizeSelect,"change",o.hitch(this,this._onHaloSizeChange)))},_createHaloColorPicker:function(){this._haloColorPalette=new r({palette:this._defaultPaletteSize,value:this.get("haloColor")},this._haloColorPaletteNode),this._haloColorPalette.startup(),this.own(h(this._haloColorPalette,"change",o.hitch(this,this._onHaloColorChange)))},_onHaloCheckboxChange:function(e){this.set("haloEnabled",this._haloCheckBox.checked),this._haloCheckBox.checked&&this.get("haloSize")>0&&null===this.get("haloColor")&&(this._haloColorPalette.set("value",this._defaultHaloColor),this.set("haloColor",this._defaultHaloColor)),this._onChange()},_onHaloSizeChange:function(e){this.set("haloSize",this._haloSizeSelect.value),this._onChange()},_onHaloColorChange:function(e){var t=this._haloColorPalette?this._haloColorPalette.value:e;t!==this.get("haloColor")&&(this.set("haloColor",t),this._onChange())},_onChange:function(){this.emit("change",{enabled:this.get("haloEnabled"),size:this.get("haloSize"),color:this.get("haloColor")})}});return l("extend-esri")&&o.setObject("dijit.HaloStyler",g,a),g});