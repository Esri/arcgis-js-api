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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/Accessor","../../../../core/Logger","../../../../core/accessorSupport/decorators","../../../../core/sql/WhereClause","../../../../layers/support/fieldUtils","../i3s/I3SUtil"],function(e,r,i,n,s,o,t,p,l,d){Object.defineProperty(r,"__esModule",{value:!0});var a=o.getLogger("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView"),f=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._definitionExpressionErrors=0,r._maxDefinitionExpressionErrors=20,r.logError=function(e){r._definitionExpressionErrors<r._maxDefinitionExpressionErrors&&a.error("Error while evaluating definitionExpression: "+e),++r._definitionExpressionErrors===r._maxDefinitionExpressionErrors&&a.error("Further errors are ignored")},r}return i(r,e),Object.defineProperty(r.prototype,"parsedDefinitionExpression",{get:function(){if(this.layer.definitionExpression)try{var e=p.create(this.layer.definitionExpression);if(!e.isStandardized())return a.error("definitionExpression is using non standard function"),null;var r=[],i=e.getFields();return d.findFieldsCaseInsensitive(i,this.layer.fields,{missingFields:r}),r.length>0?(a.error("definitionExpression references unknown fields: "+r.join(", ")),null):(this._definitionExpressionErrors=0,e)}catch(e){return a.error("Failed to parse definitionExpression: "+e),null}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"definitionExpressionFields",{get:function(){return this.parsedDefinitionExpression?l.fixFields(this.layer.fields,this.parsedDefinitionExpression.getFields()):null},enumerable:!0,configurable:!0}),r.prototype._evaluateClause=function(e,r){try{return e.testFeature(r)}catch(e){return this.logError(e),!1}},n([t.property()],r.prototype,"layer",void 0),n([t.property({readOnly:!0,dependsOn:["layer.definitionExpression"]})],r.prototype,"parsedDefinitionExpression",null),n([t.property({readOnly:!0,dependsOn:["parsedDefinitionExpression"]})],r.prototype,"definitionExpressionFields",null),r=n([t.subclass("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],r)}(t.declared(s));r.DefinitionExpressionSceneLayerView=f,r.default=f});