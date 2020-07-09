// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Handles","../../core/Logger","../../core/promiseUtils","../../core/unitUtils","../../core/watchUtils","../../core/accessorSupport/decorators","../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool","../support/commonProperties","../support/InteractiveToolViewModel"],(function(e,t,i,n,r,o,s,l,a,u,c,p){var d=r.getLogger("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel");return function(e){function t(t){var i=e.call(this,t)||this;return i.supportedViewType="3d",i._handles=new n,i._userUnitOptions=null,i._userUnit=null,i}return i.__extends(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([l.init(this,"unit",(function(t){e.tool&&(e.tool.model.unit=t)}))])},t.prototype.destroy=function(){this._handles.destroy(),this._handles=null},Object.defineProperty(t.prototype,"state",{get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"measurement",{get:function(){if(!this.tool)return null;var e=this.tool.model,t=e.measurementMode,i="geodesic"===t,n=e.validMeasurement;return{mode:t,directDistance:{text:i?null:e.triangleView.directLabel,state:n&&!i?"available":"unavailable"},horizontalDistance:{text:e.triangleView.horizontalLabel,state:n?"available":"unavailable"},verticalDistance:{text:e.triangleView.verticalLabel,state:n?"available":"unavailable"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unitOptions",{get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(e){this._userUnitOptions=e,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"unit",{get:function(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)},set:function(e){this._userUnit=e?this._findSelectableUnit(e,this._userUnit):null,this.notifyChange("unit")},enumerable:!0,configurable:!0}),t.prototype.start=function(){return this.createTool()},t.prototype.clear=function(){this.removeTool()},t.prototype.newMeasurement=function(){o.ignoreAbortErrors(this.start())},t.prototype.clearMeasurement=function(){this.clear()},t.prototype.createToolParams=function(){var e=this;return{toolConstructor:u,constructorArguments:function(){return{unit:e.unit}}}},t.prototype.logUnsupportedError=function(){d.error("DirectLineMeasurement3D widget is not implemented for MapView")},t.prototype.logError=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];d.error.apply(d,e)},t.prototype._findSelectableUnit=function(e,t){var i=this.unitOptions;return-1!==i.indexOf(e)?e:t?this._findSelectableUnit(t):i[0]},t.prototype._filteredOrAllUnits=function(e){if(!e)return s.measurementLengthUnits.slice();var t=e.filter((function(e){return-1!==s.measurementLengthUnits.indexOf(e)}));return 0===t.length?s.measurementLengthUnits.slice():t},i.__decorate([a.property({dependsOn:["isDisabled","tool.state"],readOnly:!0})],t.prototype,"state",null),i.__decorate([a.property({dependsOn:["view.ready","tool.model.triangleView","tool.model.directDistance","tool.model.horizontalDistance","tool.model.verticalDistance","tool.model.geodesicDistance","tool.model.measurementMode"],readOnly:!0})],t.prototype,"measurement",null),i.__decorate([a.property()],t.prototype,"tool",void 0),i.__decorate([a.property(c.defaultUnitPropertyMetadata)],t.prototype,"defaultUnit",void 0),i.__decorate([a.property({dependsOn:["view.spatialReference"]})],t.prototype,"unitOptions",null),i.__decorate([a.property({dependsOn:["unitOptions","defaultUnit"]})],t.prototype,"unit",null),t=i.__decorate([a.subclass("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],t)}(p.InteractiveToolViewModel)}));