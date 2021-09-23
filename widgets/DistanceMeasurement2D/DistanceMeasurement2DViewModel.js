/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/Handles","../../core/Logger","../../core/maybe","../../core/unitUtils","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass","../../properties/defaultUnit","./DistanceMeasurement2DTool","../support/InteractiveToolViewModel"],(function(e,t,i,r,o,n,s,a,l,u,d,c,p,h){"use strict";const y={handleWidth:8,handleColor:[255,128,0,.5],pathWidth:5,pathPrimaryColor:[255,128,0,255],pathSecondaryColor:[255,255,255,255]},m=r.getLogger("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel");let _=function(t){function r(e){var r;return(r=t.call(this,e)||this).logger=m,r.supportedViewType="2d",r.unsupportedErrorMessage="DistanceMeasurement2DViewModel is only supported in 2D views.",r._handles=new i,r.geodesicDistanceThreshold=1e5,r.measurement=null,r.measurementLabel=null,r.palette=y,r}e._inheritsLoose(r,t);var a=r.prototype;return a.initialize=function(){this._handles.add([s.init(this,["unit","palette","geodesicDistanceThreshold"],((e,t,i)=>{this.tool&&(this.tool[i]=e)}))])},a.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},a.start=function(){return this.createTool()},a.clear=function(){this.removeTool()},a.createToolParams=function(){return{toolConstructor:p.default,constructorArguments:()=>({geodesicDistanceThreshold:this.geodesicDistanceThreshold,palette:this.palette,unit:this.unit})}},a._validateUnit=function(e){return-1!==this.unitOptions.indexOf(e)?e:-1!==this.unitOptions.indexOf(this.defaultUnit)?this.defaultUnit:this.unitOptions[0]},a._validateUnits=function(e=[]){const t=e.filter((e=>-1!==n.measurementLengthUnits.indexOf(e)));return 0===t.length?n.measurementLengthUnits.slice():t},e._createClass(r,[{key:"state",get:function(){var e;return this.disabled||!p.isSupported(null==(e=this.view)?void 0:e.spatialReference)?"disabled":o.isSome(this.tool)&&this.measurement?this.tool.active?"measuring":"measured":"ready"}},{key:"unit",get:function(){return this._validateUnit(this.defaultUnit)},set:function(e){void 0!==e?this._override("unit",this._validateUnit(e)):this._clearOverride("unit")}},{key:"unitOptions",get:function(){return n.measurementLengthUnits},set:function(e){void 0!==e?this._override("unitOptions",this._validateUnits(e)):this._clearOverride("unitOptions")}}]),r}(h.InteractiveToolViewModel);return t.__decorate([a.property(c.defaultUnitPropertyMetadata)],_.prototype,"defaultUnit",void 0),t.__decorate([a.property({type:Number})],_.prototype,"geodesicDistanceThreshold",void 0),t.__decorate([a.property({readOnly:!0,aliasOf:"tool.measurement"})],_.prototype,"measurement",void 0),t.__decorate([a.property({readOnly:!0,aliasOf:"tool.measurementLabel"})],_.prototype,"measurementLabel",void 0),t.__decorate([a.property()],_.prototype,"palette",void 0),t.__decorate([a.property({readOnly:!0})],_.prototype,"state",null),t.__decorate([a.property({type:String})],_.prototype,"unit",null),t.__decorate([a.property({type:[String]})],_.prototype,"unitOptions",null),_=t.__decorate([d.subclass("esri.widgets.DistanceMeasurement2D.DistanceMeasurement2DViewModel")],_),_}));
