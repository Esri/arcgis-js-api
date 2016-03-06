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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojo/dom-style","dijit/registry","dijit/Menu","dijit/form/ComboButton","./ToolBase","../../../kernel","../../../lang"],function(t,e,i,o,s,a,n,h,d,l){var c=t([n,h],{declaredClass:"esri.dijit.editing.tools.DropDownToolBase",_enabled:!1,_checked:!1,postCreate:function(){this._tools=[],this._createTools(),this.inherited(arguments),this._setShowLabelAttr&&this._setShowLabelAttr(!1)},destroy:function(){var t,e=this._tools;for(t in e)e.hasOwnProperty(t)&&l.isDefined(e[t])&&e[t].destroy();this.inherited(arguments)},_createTools:function(){var t,e=new a;this.dropDown=e;for(t in this._tools)this._tools.hasOwnProperty(t)&&e.addChild(this._tools[t]);this._activeTool=e.getChildren()[0],this._updateUI()},activate:function(){this.inherited(arguments),this._activeTool?this._activeTool.activate():this._activateDefaultTool()},deactivate:function(){this.inherited(arguments),this._activeTool&&this._activeTool.deactivate()},enable:function(t){var e;for(e in this._tools)this._tools.hasOwnProperty(e)&&this._tools[e].enable(t);this.setEnabled(!0),this.inherited(arguments)},setChecked:function(t){this._checked=t,this._updateUI()},_onDrawEnd:function(){},onLayerChange:function(t,e,i){this._activeTool=null,this._activeType=e,this._activeTemplate=i,this._activeLayer=t},onItemClicked:function(t){this._activeTool&&this._activeTool.deactivate(),this._activeTool=s.byId(t),this._checked===!1?this._onClick():(this._updateUI(),this._activeTool&&(this._activeTool.activate(),this._activeTool.setChecked(!0)))},_onClick:function(){this._enabled!==!1&&(this._checked=!this._checked,this.inherited(arguments))},_updateUI:function(){this.attr("disabled",!this._enabled),o.set(this.focusNode,{outline:"none"}),o.set(this.titleNode,{padding:"0px",border:"none"}),this._checked?o.set(this.titleNode,{backgroundColor:"#D4DFF2",border:"1px solid #316AC5"}):o.set(this.titleNode,{backgroundColor:"",border:""}),this._activeTool&&(this.attr("iconClass",this._checked?this._activeTool._enabledIcon:this._activeTool._disabledIcon),this.attr("label",this._activeTool.label))}});return i("extend-esri")&&e.setObject("dijit.editing.tools.DropDownToolBase",c,d),c});