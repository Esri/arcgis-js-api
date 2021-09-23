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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","../kernel","../arcade/arcade","../arcade/Feature"],(function(e,t,r,n,a,c,u){var i={vars:{$feature:"any",$view:"any"}},o=/^\$(feature|aggregatedFeatures)\./i;function l(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}var s={_getSyntaxTree:function(e){return"string"==typeof e?s.createSyntaxTree(e):e},createSyntaxTree:function(e){var t;try{t=e?c.parseScript(e):null}catch(e){t=null}return t},createFunction:function(t,r){r=r||e.clone(i);var n,a=s._getSyntaxTree(t);try{n=a?c.compileScript(a,r):null}catch(e){console.log("expressionUtils.createFunction: compilation failed. "+(e.message||"")),n=null}return n},createExecContext:function(e,t){return{vars:{$feature:e?u.createFromGraphic(e):new u,$view:t&&t.view},spatialReference:t&&t.sr}},evalSyntaxTree:function(e,t){var r;try{r=c.executeScript(e,t)}catch(e){r=null}return r},executeFunction:function(e,t){var r;try{r=e?e(t):null}catch(e){r=null}return r},executeAsyncFunction:function(e,t){var r;try{r=e?e(t):(new n).reject(new Error("expressionUtils.executeAsyncFunction: Invalid argument. compiledFunc is missing."))}catch(e){r=(new n).reject(e)}return r},extractFieldNames:function(e,r){var n=s._getSyntaxTree(e),a=c.extractExpectedFieldLiterals(n),u=[];t.forEach(a,(function(e){o.test(e)&&(e=e.replace(o,""),u.push(e))}));var i=t.filter(u,(function(e){return-1!==e.indexOf("*")}));return u=t.filter(u,(function(e){return-1===i.indexOf(e)})),r&&t.forEach(i,(function(e){var n=new RegExp("^"+e.split(/\*+/).map(l).join(".*")+"$","i");t.forEach(r,(function(e){n.test(e)&&u.push(e)}))})),u.sort(),t.filter(u,(function(e,t){return 0===t||u[t-1]!==e}))},dependsOnView:function(e){return s.hasVariable(e,"$view")},hasGeometryFunctions:function(e){var t=s._getSyntaxTree(e);return!!t&&c.scriptTouchesGeometry(t)},hasGeometryOperations:function(e){var t=s._getSyntaxTree(e);return!!t&&c.scriptUsesGeometryEngine(t)},enableGeometryOperations:function(){return c.enableGeometrySupport()},hasVariable:function(e,t){var r=s._getSyntaxTree(e);return!!r&&c.referencesMember(r,t)},hasFunction:function(e,t){var r=s._getSyntaxTree(e);return!!r&&c.referencesFunction(r,t)},createFeatureSetFromLayer:function(e,t){t=t||{};var r=c.featureSetUtils();return r?r.constructFeatureSet(e,t.spatialReference,t.outFields,t.returnGeometry,t.cache):null},createFeatureSetFromLayerUrl:function(e,t){t=t||{};var r=c.featureSetUtils();return r?r.constructFeatureSetFromUrlRaw(e,t.spatialReference,t.outFields,t.returnGeometry,t.cache):null},createFeatureSetCollectionFromMap:function(e,t){var r=c.featureSetUtils();return r?r.createFeatureSetCollectionFromMap(e,e.spatialReference,t&&t.cache):null},createFeatureSetCollectionFromServiceUrl:function(e,t){t=t||{};var r=c.featureSetUtils();return r?r.createFeatureSetCollectionFromService(e,t.spatialReference,t.cache):null},hasFeatureSetOperations:function(e){var t=s._getSyntaxTree(e);return!!t&&c.scriptUsesFeatureSet(t)},enableFeatureSetOperations:function(){return c.enableFeatureSetSupport().then((function(){var e=c.featureSetUtils();e&&e.initialiseMetaDataCache()}))},enableAsyncOperations:function(){return c.enableAsyncSupport()}};return r("extend-esri")&&e.setObject("support.expressionUtils",s,a),s}));