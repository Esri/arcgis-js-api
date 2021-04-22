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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","../ColorPicker","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/popup","dojo/_base/lang","dojo/dom-attr","dojo/on","dojo/i18n!../../nls/jsapi"],(function(o,t,i,r,e,c,s,n,l,a,h,d){var p=o([e,c,s],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxColorInput",templateString:'<div class= "esriRFxColorInput" data-dojo-attach-point = "colorInput"></div>',colorObject:{},COLOR_INPUT_GRID_PREFIX:"ColorInput",postCreate:function(){this.inherited(arguments),this.setAttributes(),this.colorInput.onclick=l.hitch(this,this._openColorPickerPopup)},setAttributes:function(){if(this.colorObject){var o={background:"rgba("+this.colorObject.r+", "+this.colorObject.g+", "+this.colorObject.b+","+255*this.colorObject.a+")"};a.set(this.colorInput,"style",o),a.set(this.colorInput,"id",this.COLOR_INPUT_GRID_PREFIX+this.colorObject.id)}},_openColorPickerPopup:function(o){if(!this._colorPickerOpen){o.stopPropagation(),this._colorPicker||(this._colorPicker=new r({showTransparencySlider:!0}),this._colorPicker.startup());var t,i,e=o.target;this._colorPicker.set("color",e.style.backgroundColor,!1),n.open({popup:this._colorPicker,around:e,orient:["below","above"]}),this._colorPickerOpen=!0,t=h(document.body,"click",l.hitch(this,(function(o){this._colorPicker.domNode.contains(o.target)||o.target===this._colorPicker.domNode||(i.remove(),t.remove(),n.close(this._colorPicker),this._colorPickerOpen=!1)}))),i=h(this._colorPicker,"color-change",l.hitch(this,(function(o){t.remove(),i.remove();var r=o.color,c=parseInt(e.id.replace(this.COLOR_INPUT_GRID_PREFIX,""),10);n.close(this._colorPicker),this._colorPickerOpen=!1,this._changeBackGround(r,e),this.colorObject={r:r.r,g:r.g,b:r.b,a:r.a,id:c},this.emit("change-color",this.colorObject)})))}},_changeBackGround:function(o,t){if("no-color"===o)t.style.background="rgba(0,0,0,0)";else{var i=o.a||1;i<=1&&(o.a=Math.round(255*i)),t.style.background="rgba("+o.r+", "+o.g+","+o.b+", 255)"}}});return t("extend-esri")&&l.setObject("dijit.RasterFunctionEditor.RFxColorInput",p,i),p}));