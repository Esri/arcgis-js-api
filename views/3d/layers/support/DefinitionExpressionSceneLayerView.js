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

define(["require","exports","tslib","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/sql/WhereClause","../i3s/I3SUtil"],(function(e,r,i,n,o,s,t){Object.defineProperty(r,"__esModule",{value:!0});var p=n.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView");r.DefinitionExpressionSceneLayerView=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._definitionExpressionErrors=0,r._maxDefinitionExpressionErrors=20,r.logError=function(e){r._definitionExpressionErrors<r._maxDefinitionExpressionErrors&&p.error("Error while evaluating definitionExpression: "+e),r._definitionExpressionErrors++,r._definitionExpressionErrors===r._maxDefinitionExpressionErrors&&p.error("Further errors are ignored")},r}return i.__extends(r,e),Object.defineProperty(r.prototype,"parsedDefinitionExpression",{get:function(){if(!this.layer||!this.layer.definitionExpression)return null;try{var e=s.WhereClause.create(this.layer.definitionExpression,this.layer.fieldsIndex);if(!e.isStandardized)return p.error("definitionExpression is using non standard function"),null;var r=[],i=e.fieldNames;return t.findFieldsCaseInsensitive(i,this.layer.fields,{missingFields:r}),r.length>0?(p.error("definitionExpression references unknown fields: "+r.join(", ")),null):(this._definitionExpressionErrors=0,e)}catch(e){return p.error("Failed to parse definitionExpression: "+e),null}},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"definitionExpressionFields",{get:function(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:null},enumerable:!0,configurable:!0}),r.prototype._evaluateClause=function(e,r){try{return e.testFeature(r)}catch(e){return this.logError(e),!1}},r.prototype._addDefinitionExpressionToQuery=function(e){if(!this.parsedDefinitionExpression)return e;var r=this.layer.definitionExpression,i=e.clone();return i.where?i.where="("+r+") AND ("+i.where+")":i.where=r,i},i.__decorate([o.property()],r.prototype,"layer",void 0),i.__decorate([o.property({readOnly:!0,dependsOn:["layer.definitionExpression","layer.fieldsIndex"]})],r.prototype,"parsedDefinitionExpression",null),i.__decorate([o.property({readOnly:!0,dependsOn:["parsedDefinitionExpression"]})],r.prototype,"definitionExpressionFields",null),r=i.__decorate([o.subclass("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],r)}(e)}}));