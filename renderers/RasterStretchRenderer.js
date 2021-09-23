/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators/property","../core/accessorSupport/ensureType","../core/has","../core/Logger","../core/accessorSupport/decorators/enumeration","../core/accessorSupport/decorators/reader","../core/accessorSupport/decorators/subclass","../core/accessorSupport/decorators/writer","./support/stretchRendererUtils","../rest/support/colorRamps"],(function(e,t,r,o,a,p,s,n,i,c,u,m,d,y){"use strict";var l;let h=l=function(t){function r(e){var r;return(r=t.call(this,e)||this).colorRamp=null,r.computeGamma=!1,r.dynamicRangeAdjustment=!1,r.gamma=[],r.maxPercent=null,r.minPercent=null,r.numberOfStandardDeviations=null,r.outputMax=null,r.outputMin=null,r.sigmoidStrengthLevel=null,r.statistics=[],r.histograms=null,r.useGamma=!1,r.stretchType="none",r.type="raster-stretch",r}e._inheritsLoose(r,t);var a=r.prototype;return a.readColorRamp=function(e){if(e)return y.fromJSON(e)},a.writeStatistics=function(e,t,r){var o;null!=(o=e)&&o.length&&(Array.isArray(e[0])||(e=e.map((e=>[e.min,e.max,e.avg,e.stddev]))),t[r]=e)},a.readStretchType=function(e,t){let r=t.stretchType;return"number"==typeof r&&(r=d.stretchTypeFunctionEnum[r]),d.stretchTypeJSONDict.read(r)},a.clone=function(){return new l({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:o.clone(this.statistics),gamma:o.clone(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:o.clone(this.colorRamp),histograms:o.clone(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})},r}(r.JSONSupport);return t.__decorate([a.property({types:y.types,json:{write:!0}})],h.prototype,"colorRamp",void 0),t.__decorate([c.reader("colorRamp")],h.prototype,"readColorRamp",null),t.__decorate([a.property({type:Boolean,json:{write:!0}})],h.prototype,"computeGamma",void 0),t.__decorate([a.property({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],h.prototype,"dynamicRangeAdjustment",void 0),t.__decorate([a.property({type:[Number],json:{write:!0}})],h.prototype,"gamma",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],h.prototype,"maxPercent",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],h.prototype,"minPercent",void 0),t.__decorate([a.property({type:p.Integer,json:{write:!0}})],h.prototype,"numberOfStandardDeviations",void 0),t.__decorate([a.property({type:Number,json:{read:{source:"max"},write:{target:"max"}}})],h.prototype,"outputMax",void 0),t.__decorate([a.property({type:Number,json:{read:{source:"min"},write:{target:"min"}}})],h.prototype,"outputMin",void 0),t.__decorate([a.property({type:Number,json:{write:!0}})],h.prototype,"sigmoidStrengthLevel",void 0),t.__decorate([a.property({json:{type:[[Number]],write:!0}})],h.prototype,"statistics",void 0),t.__decorate([a.property()],h.prototype,"histograms",void 0),t.__decorate([m.writer("statistics")],h.prototype,"writeStatistics",null),t.__decorate([a.property({type:Boolean,json:{write:!0}})],h.prototype,"useGamma",void 0),t.__decorate([a.property({type:d.stretchTypeJSONDict.apiValues,json:{type:d.stretchTypeJSONDict.jsonValues,write:d.stretchTypeJSONDict.write}})],h.prototype,"stretchType",void 0),t.__decorate([c.reader("stretchType",["stretchType"])],h.prototype,"readStretchType",null),t.__decorate([i.enumeration({rasterStretch:"raster-stretch"})],h.prototype,"type",void 0),h=l=t.__decorate([u.subclass("esri.renderers.RasterStretchRenderer")],h),h}));
