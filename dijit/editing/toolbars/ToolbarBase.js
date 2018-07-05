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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/has","dijit/Toolbar","dijit/ToolbarSeparator","../../../kernel","../../../lang"],function(t,i,o,e,s,n,a,l,c){var r=t([n],{declaredClass:"esri.dijit.editing.toolbars.ToolbarBase",_enabled:!0,graphicsAdded:function(){},drawEnd:function(){},onApplyEdits:function(){},onDelete:function(){},constructor:function(t,i){t&&t.settings&&(this._tools=[],this._tbConnects=[],this._initialize(t.settings))},postCreate:function(){this._createTools(),this.deactivate()},destroy:function(){var t,i=this._tools;for(t in i)i.hasOwnProperty(t)&&c.isDefined(this._tools[t])&&this._tools[t].destroy();o.forEach(this._tbConnects,e.disconnect),this.inherited(arguments)},activate:function(t){this._enabled=!0},deactivate:function(){var t;this._enabled=!1,this._layer=null,this._geometryType=null;var i=this._tools;for(t in i)i.hasOwnProperty(t)&&(this._tools[t].deactivate(),this._tools[t].setChecked(!1))},isEnabled:function(){return this._enabled},setActiveSymbol:function(t){this._activeSymbol=t},_getSymbol:function(){},_createTools:function(){},_initialize:function(t){this._settings=t,this._toolbar=t.drawToolbar,this._editToolbar=t.editToolbar,this._initializeToolbar()},_activateTool:function(t,i){this._activeTool&&this._activeTool.deactivate(),!0===i&&this._activeTool==this._tools[t]?(this._activeTool.setChecked(!1),this._activeTool=null):(this._activeTool=this._tools[t],this._activeTool.setChecked(!0),this._activeTool.activate(null))},_createSeparator:function(){this.addChild(new a)}});return s("extend-esri")&&i.setObject("dijit.editing.toolbars.ToolbarBase",r,l),r});