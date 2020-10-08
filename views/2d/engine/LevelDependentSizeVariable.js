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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/lang","../../../core/accessorSupport/decorators","../../../renderers/visualVariables/SizeVariable","../../../renderers/visualVariables/support/sizeVariableUtils"],(function(e,i,t,s,a,l,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.LevelDependentSizeVariable=void 0;var r=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}var l;return t.__extends(i,e),l=i,i.prototype.writeLevels=function(e,i,t){for(var s in e){var a=this.levels[s];return void(i.stops=a)}},i.prototype.clone=function(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:n.isSizeVariable(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:n.isSizeVariable(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((function(e){return e.clone()})),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:s.clone(this.levels)})},t.__decorate([a.property()],i.prototype,"levels",void 0),t.__decorate([a.writer("levels")],i.prototype,"writeLevels",null),i=l=t.__decorate([a.subclass("esri.views.2d.engine.LevelDependentSizeVariable")],i)}(l);i.LevelDependentSizeVariable=r}));