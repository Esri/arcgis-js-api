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

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./support/stretchRendererUtils","../tasks/support/colorRamps"],(function(t,e,r,o,a,p,n,i){return function(t){function e(e){var r=t.call(this,e)||this;return r.colorRamp=null,r.computeGamma=!1,r.dynamicRangeAdjustment=!1,r.gamma=[],r.maxPercent=null,r.minPercent=null,r.numberOfStandardDeviations=null,r.outputMax=null,r.outputMin=null,r.sigmoidStrengthLevel=null,r.statistics=[],r.histograms=null,r.useGamma=!1,r.stretchType="none",r.type="raster-stretch",r}var o;return r.__extends(e,t),o=e,e.prototype.readColorRamp=function(t){if(t)return i.fromJSON(t)},e.prototype.writeStatistics=function(t,e,r){null==t||0===t.length?t=null:t[0]instanceof Array||(t=t.map((function(t){return[t.min,t.max,t.avg,t.stddev]}))),e[r]=t},e.prototype.readStretchType=function(t,e){var r=e.stretchType;return"number"==typeof r&&(r=n.stretchTypeFunctionEnum[r]),n.stretchTypeJSONDict.read(r)},e.prototype.clone=function(){return new o({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:a.clone(this.statistics),gamma:a.clone(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:a.clone(this.colorRamp),histograms:a.clone(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})},r.__decorate([p.property({types:i.types,json:{write:!0}})],e.prototype,"colorRamp",void 0),r.__decorate([p.reader("colorRamp")],e.prototype,"readColorRamp",null),r.__decorate([p.property({type:Boolean,json:{write:!0}})],e.prototype,"computeGamma",void 0),r.__decorate([p.property({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],e.prototype,"dynamicRangeAdjustment",void 0),r.__decorate([p.property({type:[Number],json:{write:{allowNull:!0}}})],e.prototype,"gamma",void 0),r.__decorate([p.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"maxPercent",void 0),r.__decorate([p.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"minPercent",void 0),r.__decorate([p.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"numberOfStandardDeviations",void 0),r.__decorate([p.property({type:Number,json:{read:{source:"max"},write:{target:"max",allowNull:!0}}})],e.prototype,"outputMax",void 0),r.__decorate([p.property({type:Number,json:{read:{source:"min"},write:{target:"min",allowNull:!0}}})],e.prototype,"outputMin",void 0),r.__decorate([p.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"sigmoidStrengthLevel",void 0),r.__decorate([p.property({json:{write:{allowNull:!0}}})],e.prototype,"statistics",void 0),r.__decorate([p.property()],e.prototype,"histograms",void 0),r.__decorate([p.writer("statistics")],e.prototype,"writeStatistics",null),r.__decorate([p.property({type:Boolean,json:{write:!0}})],e.prototype,"useGamma",void 0),r.__decorate([p.property({type:n.stretchTypeJSONDict.apiValues,json:{type:n.stretchTypeJSONDict.jsonValues,write:n.stretchTypeJSONDict.write}})],e.prototype,"stretchType",void 0),r.__decorate([p.reader("stretchType",["stretchType"])],e.prototype,"readStretchType",null),r.__decorate([p.enumeration({rasterStretch:"raster-stretch"})],e.prototype,"type",void 0),e=o=r.__decorate([p.subclass("esri.renderers.RasterStretchRenderer")],e)}(o.JSONSupport)}));