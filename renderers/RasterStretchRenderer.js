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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./support/stretchRendererUtils","../tasks/support/colorRamps"],(function(t,e,r,o,p,a,n,s,i,u){return function(t){function e(e){var r=t.call(this,e)||this;return r.colorRamp=null,r.computeGamma=!1,r.dynamicRangeAdjustment=!1,r.gamma=[],r.maxPercent=null,r.minPercent=null,r.numberOfStandardDeviations=null,r.outputMax=null,r.outputMin=null,r.sigmoidStrengthLevel=null,r.statistics=[],r.histograms=null,r.useGamma=!1,r.stretchType="none",r.type="raster-stretch",r}var p;return r(e,t),p=e,e.prototype.readColorRamp=function(t){if(t)return u.fromJSON(t)},e.prototype.writeStatistics=function(t,e,r){null==t||0===t.length?t=null:t[0]instanceof Array||(t=t.map((function(t){return[t.min,t.max,t.avg,t.stddev]}))),e[r]=t},e.prototype.readStretchType=function(t,e){var r=e.stretchType;return"number"==typeof r&&(r=i.stretchTypeFunctionEnum[r]),i.stretchTypeJSONDict.read(r)},e.prototype.clone=function(){return new p({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:n.clone(this.statistics),gamma:n.clone(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:n.clone(this.colorRamp),histograms:n.clone(this.histograms),dynamicRangeAdjustment:this.dynamicRangeAdjustment})},o([s.property({types:u.types,json:{write:!0}})],e.prototype,"colorRamp",void 0),o([s.reader("colorRamp")],e.prototype,"readColorRamp",null),o([s.property({type:Boolean,json:{write:!0}})],e.prototype,"computeGamma",void 0),o([s.property({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],e.prototype,"dynamicRangeAdjustment",void 0),o([s.property({type:[Number],json:{write:{allowNull:!0}}})],e.prototype,"gamma",void 0),o([s.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"maxPercent",void 0),o([s.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"minPercent",void 0),o([s.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"numberOfStandardDeviations",void 0),o([s.property({type:Number,json:{read:{source:"max"},write:{target:"max",allowNull:!0}}})],e.prototype,"outputMax",void 0),o([s.property({type:Number,json:{read:{source:"min"},write:{target:"min",allowNull:!0}}})],e.prototype,"outputMin",void 0),o([s.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"sigmoidStrengthLevel",void 0),o([s.property({json:{write:{allowNull:!0}}})],e.prototype,"statistics",void 0),o([s.property()],e.prototype,"histograms",void 0),o([s.writer("statistics")],e.prototype,"writeStatistics",null),o([s.property({type:Boolean,json:{write:!0}})],e.prototype,"useGamma",void 0),o([s.property({type:i.stretchTypeJSONDict.apiValues,json:{type:i.stretchTypeJSONDict.jsonValues,write:i.stretchTypeJSONDict.write}})],e.prototype,"stretchType",void 0),o([s.reader("stretchType",["stretchType"])],e.prototype,"readStretchType",null),o([s.enumeration.serializable()({rasterStretch:"raster-stretch"})],e.prototype,"type",void 0),e=p=o([s.subclass("esri.renderers.RasterStretchRenderer")],e)}(s.declared(a.JSONSupport))}));