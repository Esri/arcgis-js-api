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

define(["require","exports","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/declareExtendsHelper","../../../core/lang","../../../core/accessorSupport/decorators","../../../renderers/visualVariables/SizeVariable","../../../renderers/visualVariables/support/sizeVariableUtils"],(function(e,i,t,s,l,r,a,n){Object.defineProperty(i,"__esModule",{value:!0});var o=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}var a;return s(i,e),a=i,i.prototype.writeLevels=function(e,i,t){for(var s in e){var l=this.levels[s];return void(i.stops=l)}},i.prototype.clone=function(){return new a({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:n.isSizeVariable(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:n.isSizeVariable(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((function(e){return e.clone()})),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:l.clone(this.levels)})},t([r.property()],i.prototype,"levels",void 0),t([r.writer("levels")],i.prototype,"writeLevels",null),i=a=t([r.subclass("esri.views.2d.engine.LevelDependentSizeVariable")],i)}(r.declared(a));i.LevelDependentSizeVariable=o}));