// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/paramHelper","../core/lang","../core/accessorSupport/decorators","./Renderer","./support/stretchRendererUtils","../tasks/support/ColorRamp","../tasks/support/colorRamps"],function(t,e,r,o,p,a,n,i,s,l,u){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.colorRamp=null,e.computeGamma=!1,e.dynamicRangeAdjustment=!0,e.gamma=[],e.maxPercent=null,e.minPercent=null,e.numberOfStandardDeviations=null,e.outputMax=null,e.outputMin=null,e.sigmoidStrengthLevel=null,e.statistics=[],e.useGamma=!1,e.stretchType="none",e.type="raster-stretch",e}r(e,t),p=e,e.prototype.readColorRamp=function(t,e){if(t)return u.fromJSON(t)},e.prototype.writeStatistics=function(t,e,r){null==t||0===t.length?t=null:t[0]instanceof Array||(t=t.map(function(t){return[t.min,t.max,t.avg,t.stddev]})),e[r]=t},e.prototype.clone=function(){return new p({stretchType:this.stretchType,outputMin:this.outputMin,outputMax:this.outputMax,useGamma:this.useGamma,computeGamma:this.computeGamma,statistics:a.clone(this.statistics),gamma:a.clone(this.gamma),sigmoidStrengthLevel:this.sigmoidStrengthLevel,numberOfStandardDeviations:this.numberOfStandardDeviations,minPercent:this.minPercent,maxPercent:this.maxPercent,colorRamp:a.clone(this.colorRamp),dynamicRangeAdjustment:this.dynamicRangeAdjustment})};var p;return o([n.property({type:l,json:{write:!0}})],e.prototype,"colorRamp",void 0),o([n.reader("colorRamp")],e.prototype,"readColorRamp",null),o([n.property({type:Boolean,json:{write:!0}})],e.prototype,"computeGamma",void 0),o([n.property({type:Boolean,json:{write:{target:"dra"},read:{source:"dra"}}})],e.prototype,"dynamicRangeAdjustment",void 0),o([n.property({type:[Number],json:{write:{allowNull:!0}}})],e.prototype,"gamma",void 0),o([n.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"maxPercent",void 0),o([n.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"minPercent",void 0),o([n.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"numberOfStandardDeviations",void 0),o([n.property({type:Number,json:{read:{source:"max"},write:{target:"max",allowNull:!0}}})],e.prototype,"outputMax",void 0),o([n.property({type:Number,json:{read:{source:"min"},write:{target:"min",allowNull:!0}}})],e.prototype,"outputMin",void 0),o([n.property({type:Number,json:{write:{allowNull:!0}}})],e.prototype,"sigmoidStrengthLevel",void 0),o([n.property({json:{write:{allowNull:!0}}})],e.prototype,"statistics",void 0),o([n.writer("statistics")],e.prototype,"writeStatistics",null),o([n.property({type:Boolean,json:{write:!0}})],e.prototype,"useGamma",void 0),o([n.property({type:s.stretchTypeJSONDict.apiValues,json:{type:s.stretchTypeJSONDict.jsonValues,read:s.stretchTypeJSONDict.read,write:s.stretchTypeJSONDict.write}})],e.prototype,"stretchType",void 0),o([n.enumeration.serializable()({rasterStretch:"raster-stretch"})],e.prototype,"type",void 0),e=p=o([n.subclass("esri.renderers.StretchRenderer")],e)}(n.declared(i))});