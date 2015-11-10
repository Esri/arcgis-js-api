define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../layers/FeatureTemplate","./Edit","./EditingTools","./DropDownToolBase","../../../kernel","../../../lang"],function(t,e,i,o,s,n,a,l,r,h){var _=t([l],{declaredClass:"esri.dijit.editing.tools.Editing",_enabled:!1,deactivate:function(){this._enabled&&(this._enabled=!1,this.inherited(arguments),this._settings.templatePicker.clearSelection())},onItemClicked:function(){this.inherited(arguments),this._activeTool===this._tools.AUTOCOMPLETE&&(this._settings.editor._drawingTool=s.TOOL_AUTO_COMPLETE_POLYGON)},_activateTool:function(t,e){var i;this.enable(e);for(i in this._tools)this._tools.hasOwnProperty(i)&&(this.dropDown.removeChild(this._tools[i]),this._tools[i]._enabled===!0&&this.dropDown.addChild(this._tools[i]));(this._geometryType!==e||this._activeTool._enabled===!1)&&(this._activeTool=this._tools[t.toUpperCase()]),this._geometryType=e,this._activeTool.activate(),this._activeTool.setChecked(!0),this._updateUI()},_initializeTool:function(){this.inherited(arguments),this._initializeTools()},_initializeTools:function(){var t,o=this._settings.layers,s=this._settings.editor,n=!1,a=!1,l=!1,r=this._toolTypes=[];i.forEach(o,function(o){t=o.geometryType,n=n||"esriGeometryPoint"===t,a=a||"esriGeometryPolyline"===t,l=l||"esriGeometryPolygon"===t,r=r.concat(i.map(this._getTemplatesFromLayer(o),e.hitch(this,function(t){return s._toDrawTool(t.drawingTool,o)})))},this);var h=this._settings.createOptions;n&&this._toolTypes.push("point"),a&&(this._toolTypes=this._toolTypes.concat(h.polylineDrawTools)),l&&(this._toolTypes=this._toolTypes.concat(h.polygonDrawTools)),this._toolTypes=this._toUnique(this._toolTypes.concat(r))},_toUnique:function(t){var e={};return i.filter(t,function(t){return e[t]?!1:e[t]=!0})},_getTemplatesFromLayer:function(t){var e=t.templates||[],o=t.types;return i.forEach(o,function(t){e=e.concat(t.templates)}),i.filter(e,h.isDefined)},_createTools:function(){i.forEach(this._toolTypes,this._createTool,this),this.inherited(arguments)},_createTool:function(t){var i=e.mixin(a[t],{settings:this._settings,onClick:e.hitch(this,"onItemClicked",a[t].id)});this._tools[t.toUpperCase()]=new n(i)}});return o("extend-esri")&&e.setObject("dijit.editing.tools.Editing",_,r),_});