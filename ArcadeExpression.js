// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel","./layers/support/attributeUtils","./support/expressionUtils"],(function(e,t,i,s,r,n){var a=e(null,{declaredClass:"esri.ArcadeExpression",expression:null,profile:null,returnType:null,async:null,id:null,syntaxTree:null,_traits:null,_attributeDef:null,_attributeCache:null,_compiled:!1,constructor:function(e){t.mixin(this,e),this.returnType=this.returnType||"string",this.id=r.getAttributeId(this.expression),this._setSyntaxTree(this.profile.parse(this)),this.async=this.async||this.profile.isAsync(this)},hasGeometryOperations:function(){var e=this._traits.geometryOperations;return void 0===e&&(e=this._traits.geometryOperations=n.hasGeometryOperations(this.syntaxTree)),e},hasFeatureSetOperations:function(){var e=this._traits.featureSetOperations;return void 0===e&&(e=this._traits.featureSetOperations=n.hasFeatureSetOperations(this.syntaxTree)),e},hasVariable:function(e){var t=this._traits.variables;return void 0===t[e]&&(t[e]=n.hasVariable(this.syntaxTree,e)),t[e]},hasFunction:function(e){var t=this._traits.functions;return void 0===t[e]&&(t[e]=n.hasFunction(this.syntaxTree,e)),t[e]},evaluate:function(e){this._compile();var t=this._attributeCache.compiledFunc;return this.async?n.executeAsyncFunction(t,e):n.executeFunction(t,e)},_setSyntaxTree:function(e){this.syntaxTree=e,this._compiled=!1,this._traits={variables:{},functions:{}},this._createLegacyValueObjects()},_createLegacyValueObjects:function(){this._attributeDef={valueExpression:this.expression},this._attributeCache={attributeInfo:this._attributeDef,isNumeric:"number"===this.returnType,idSource:this.expression,id:this.id,hasExpr:!0,compiledFunc:null,syntaxTree:this.syntaxTree,isScaleDriven:!1,dependsOnView:this.hasVariable("$view"),dependsOnGeometry:this.hasGeometryOperations(),isJSFunc:!1}},_compile:function(){this._compiled||(this._attributeCache.compiledFunc=this.profile.compile(this),this._compiled=!0)}});return i("extend-esri")&&(s.ArcadeExpression=a),a}));