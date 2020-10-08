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

define(["require","exports","tslib","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/sql/WhereClause","../i3s/I3SUtil"],(function(e,i,r,n,s,o,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.DefinitionExpressionSceneLayerView=void 0;var p=n.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView");i.DefinitionExpressionSceneLayerView=function(e){return function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i._definitionExpressionErrors=0,i._maxDefinitionExpressionErrors=20,i.logError=function(e){i._definitionExpressionErrors<i._maxDefinitionExpressionErrors&&p.error("Error while evaluating definitionExpression: "+e),i._definitionExpressionErrors++,i._definitionExpressionErrors===i._maxDefinitionExpressionErrors&&p.error("Further errors are ignored")},i}return r.__extends(i,e),Object.defineProperty(i.prototype,"parsedDefinitionExpression",{get:function(){if(!this.i3slayer||!this.i3slayer.definitionExpression)return null;try{var e=o.WhereClause.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return p.error("definitionExpression is using non standard function"),null;var i=[],r=e.fieldNames;return t.findFieldsCaseInsensitive(r,this.i3slayer.fields,{missingFields:i}),i.length>0?(p.error("definitionExpression references unknown fields: "+i.join(", ")),null):(this._definitionExpressionErrors=0,e)}catch(e){return p.error("Failed to parse definitionExpression: "+e),null}},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"definitionExpressionFields",{get:function(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null},enumerable:!1,configurable:!0}),i.prototype._evaluateClause=function(e,i){try{return e.testFeature(i)}catch(e){return this.logError(e),!1}},i.prototype._addDefinitionExpressionToQuery=function(e){if(!this.parsedDefinitionExpression)return e;var i=this.i3slayer.definitionExpression,r=e.clone();return r.where?r.where="("+i+") AND ("+r.where+")":r.where=i,r},r.__decorate([s.property()],i.prototype,"i3slayer",void 0),r.__decorate([s.property({readOnly:!0,dependsOn:["i3slayer.definitionExpression","i3slayer.fieldsIndex"]})],i.prototype,"parsedDefinitionExpression",null),r.__decorate([s.property({readOnly:!0,dependsOn:["parsedDefinitionExpression"]})],i.prototype,"definitionExpressionFields",null),i=r.__decorate([s.subclass("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],i)}(e)}}));