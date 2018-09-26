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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../kernel","dojo/i18n!../../../nls/jsapi"],function(t,i,e,o,s){var a=t(null,{declaredClass:"esri.dijit.editing.tools.ToolBase",_enabled:!0,showLabel:!1,constructor:function(t,e){t=t||{},i.mixin(this,t),this.label=this._label?s.widgets.editor.tools[this._label]:"",this._settings=t.settings,this._toolbar=t.settings.drawToolbar,this._editToolbar=t.settings.editToolbar,this._initializeTool()},onFinished:function(){},onDrawEnd:function(){},onApplyEdits:function(){},postCreate:function(){this.deactivate(),this.inherited(arguments)},destroy:function(){},activate:function(t){this._toolbar&&this._toolbar.deactivate(),this._editToolbar&&this._editToolbar.deactivate(),this._enabled&&(this._checked=!0,this._layer=t,this._toolbar&&this._drawType&&this._toolbar.activate(this._drawType))},deactivate:function(){this._toolbar&&this._toolbar.deactivate(),this._editToolbar&&this._editToolbar.deactivate(),this.setChecked(!1),this._updateUI()},setEnabled:function(t){this._enabled=t,this._updateUI()},setChecked:function(t){this._checked=t},enable:function(t){this._updateUI()},isEnabled:function(){return this._enabled},getToolName:function(){return this._toolName},_initializeTool:function(){},_updateUI:function(){this.disabled=!this._enabled,this.attr("iconClass",this._enabled?this._enabledIcon:this._disabledIcon)}});return e("extend-esri")&&i.setObject("dijit.editing.tools.ToolBase",a,o),a});