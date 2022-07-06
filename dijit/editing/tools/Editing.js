// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../layers/FeatureTemplate","./Edit","./EditingTools","./DropDownToolBase","../../../kernel","../../../lang"],(function(t,e,i,o,s,n,l,a,r,h){var _=t([a],{declaredClass:"esri.dijit.editing.tools.Editing",_enabled:!1,deactivate:function(){this._enabled&&(this._enabled=!1,this.inherited(arguments),this._settings.templatePicker.clearSelection())},onItemClicked:function(t,e){this.inherited(arguments),this._activeTool===this._tools.AUTOCOMPLETE&&(this._settings.editor._drawingTool=s.TOOL_AUTO_COMPLETE_POLYGON)},_activateTool:function(t,e){var i;for(i in this.enable(e),this._tools)this._tools.hasOwnProperty(i)&&(this.dropDown.removeChild(this._tools[i]),!0===this._tools[i]._enabled&&this.dropDown.addChild(this._tools[i]));this._geometryType===e&&!1!==this._activeTool._enabled||(this._activeTool=this._tools[t.toUpperCase()]),this._geometryType=e,this._activeTool.activate(),this._activeTool.setChecked(!0),this._updateUI()},_initializeTool:function(t){this.inherited(arguments),this._initializeTools()},_initializeTools:function(){var t,o=this._settings.layers,s=this._settings.editor,n=!1,l=!1,a=!1,r=this._toolTypes=[];i.forEach(o,(function(o){t=o.geometryType,n=n||"esriGeometryPoint"===t,l=l||"esriGeometryPolyline"===t,a=a||"esriGeometryPolygon"===t,r=r.concat(i.map(this._getTemplatesFromLayer(o),e.hitch(this,(function(t){return s._toDrawTool(t.drawingTool,o)}))))}),this);var h=this._settings.createOptions;n&&this._toolTypes.push("point"),l&&(this._toolTypes=this._toolTypes.concat(h.polylineDrawTools)),a&&(this._toolTypes=this._toolTypes.concat(h.polygonDrawTools)),this._toolTypes=this._toUnique(this._toolTypes.concat(r))},_toUnique:function(t){var e={};return i.filter(t,(function(t){return!e[t]&&(e[t]=!0)}))},_getTemplatesFromLayer:function(t){var e=t.templates||[],o=t.types;return i.forEach(o,(function(t){e=e.concat(t.templates)})),i.filter(e,h.isDefined)},_createTools:function(){i.forEach(this._toolTypes,this._createTool,this),this.inherited(arguments)},_createTool:function(t){var i=e.mixin(l[t],{settings:this._settings,onClick:e.hitch(this,"onItemClicked",l[t].id)});this._tools[t.toUpperCase()]=new n(i)}});return o("extend-esri")&&e.setObject("dijit.editing.tools.Editing",_,r),_}));