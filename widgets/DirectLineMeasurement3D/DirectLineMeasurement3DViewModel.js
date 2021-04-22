/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/has","../../core/maybe","../../core/Logger","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/property","../../core/accessorSupport/decorators/subclass","../../core/urlUtils","../../core/uuid","../../portal/support/resourceExtension","../../core/Handles","../../core/watchUtils","../../core/unitUtils","../../views/3d/interactive/graphics/analysisFactoryUtils","../support/commonProperties","../support/InteractiveToolViewModel","../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool"],(function(e,t,i,n,r,s,o,a,l,u,c,d,p,h,_,f,m,y){"use strict";const U=r.getLogger("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel");let D=function(t){function i(e){var i;return(i=t.call(this,e)||this).supportedViewType="3d",i._handles=new d,i._userUnitOptions=null,i._userUnit=null,i}e._inheritsLoose(i,t);var r=i.prototype;return r.initialize=function(){this._handles.add([p.init(this,"unit",(e=>{this.tool&&(this.tool.model.unit=e)}))])},r.destroy=function(){this._handles.destroy(),this._handles=null},r.start=function(){return this.createTool()},r.clear=function(){this.removeTool()},i.preload=async function(){return _.preloadAnalysisModules("DirectLineMeasurement3D")},r.createToolParams=function(){return{toolConstructor:y,constructorArguments:()=>({unit:this.unit})}},r.logUnsupportedError=function(){U.error("DirectLineMeasurement3D widget is not implemented for MapView")},r.logError=function(...e){U.error(...e)},r._findSelectableUnit=function(e,t){const i=this.unitOptions;return-1!==i.indexOf(e)?e:t?this._findSelectableUnit(t):i[0]},r._filteredOrAllUnits=function(e){if(!e)return h.measurementLengthUnits.slice();const t=e.filter((e=>-1!==h.measurementLengthUnits.indexOf(e)));return 0===t.length?h.measurementLengthUnits.slice():t},e._createClass(i,[{key:"state",get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"}},{key:"measurement",get:function(){if(!this.tool)return null;const e=this.tool.model,t=this.tool.directLineMeasurementView.dataObjectView;if(n.isNone(t))return{mode:"euclidean",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:null,state:"unavailable"},verticalDistance:{text:null,state:"unavailable"}};const i=t.actualVisualizedMeasurement,r=this.tool.directLineMeasurementView,s=n.isSome(e.model.measurement)?"available":"unavailable";switch(i){case"euclidean":return{mode:i,directDistance:{text:r.directLabelText,state:s},horizontalDistance:{text:r.horizontalLabelText,state:s},verticalDistance:{text:r.verticalLabelText,state:s}};case"geodesic":return{mode:i,directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:r.directLabelText,state:s},verticalDistance:{text:r.verticalLabelText,state:s}}}}},{key:"unitOptions",get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(e){this._userUnitOptions=e,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}},{key:"unit",get:function(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)},set:function(e){this._userUnit=e?this._findSelectableUnit(e,this._userUnit):null,this.notifyChange("unit")}}]),i}(m.InteractiveToolViewModel);return t.__decorate([o.property({readOnly:!0})],D.prototype,"state",null),t.__decorate([o.property({readOnly:!0})],D.prototype,"measurement",null),t.__decorate([o.property()],D.prototype,"tool",void 0),t.__decorate([o.property(f.defaultUnitPropertyMetadata)],D.prototype,"defaultUnit",void 0),t.__decorate([o.property()],D.prototype,"unitOptions",null),t.__decorate([o.property()],D.prototype,"unit",null),D=t.__decorate([a.subclass("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],D),D}));
