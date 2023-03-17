// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/Deferred","../kernel","../arcade/arcade","../arcade/Feature","../arcade/languageUtils"],(function(e,t,r,n,a,i,c,u){function o(e){var t=new n;return e.then((function(e){if(!t.isFulfilled())return t.resolve(e)}),(function(e){if(!t.isFulfilled())return t.reject(e)})),t.promise}var l={vars:{$feature:"any",$view:"any"}},s=/^\$(feature|aggregatedFeatures)\./i;function f(e){return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")}var p={_getSyntaxTree:function(e){return"string"==typeof e?p.createSyntaxTree(e):e},createSyntaxTree:function(e){var t;try{t=e?i.parseScript(e):null}catch(e){t=null}return t},createFunction:function(t,r){r=r||e.clone(l);var n,a=p._getSyntaxTree(t);try{n=a?i.compileScript(a,r):null}catch(e){console.log("expressionUtils.createFunction: compilation failed. "+(e.message||"")),n=null}return n},createExecContext:function(e,t){return{vars:{$feature:e?c.createFromGraphic(e):new c,$view:t&&t.view},spatialReference:t&&t.sr}},evalSyntaxTree:function(e,t){var r;try{r=i.executeScript(e,t)}catch(e){r=null}return r},executeFunction:function(e,t){var r;try{r=e?e(t):null}catch(e){r=null}return u.isDate(r)?r.toJSDate():r},executeAsyncFunction:function(e,t){var r,a,i;try{e?(a=e(t),i=new n,a.then((function(e){if(!i.isFulfilled())return u.isDate(e)&&(e=e.toJSDate()),i.resolve(e)}),(function(e){if(!i.isFulfilled())return i.reject(e)})),r=i.promise):r=(new n).reject(new Error("expressionUtils.executeAsyncFunction: Invalid argument. compiledFunc is missing."))}catch(e){r=(new n).reject(e)}return r},extractFieldNames:function(e,r){var n=p._getSyntaxTree(e),a=i.extractExpectedFieldLiterals(n),c=[];t.forEach(a,(function(e){s.test(e)&&(e=e.replace(s,""),c.push(e))}));var u=t.filter(c,(function(e){return-1!==e.indexOf("*")}));return c=t.filter(c,(function(e){return-1===u.indexOf(e)})),r&&t.forEach(u,(function(e){var n=new RegExp("^"+e.split(/\*+/).map(f).join(".*")+"$","i");t.forEach(r,(function(e){n.test(e)&&c.push(e)}))})),c.sort(),t.filter(c,(function(e,t){return 0===t||c[t-1]!==e}))},dependsOnView:function(e){return p.hasVariable(e,"$view")},hasGeometryFunctions:function(e){var t=p._getSyntaxTree(e);return!!t&&i.scriptTouchesGeometry(t)},hasGeometryOperations:function(e){var t=p._getSyntaxTree(e);return!!t&&i.scriptUsesGeometryEngine(t)},enableGeometryOperations:function(){return o(i.enableGeometrySupport())},hasVariable:function(e,t){var r=p._getSyntaxTree(e);return!!r&&i.referencesMember(r,t)},hasFunction:function(e,t){var r=p._getSyntaxTree(e);return!!r&&i.referencesFunction(r,t)},createFeatureSetFromLayer:function(e,t){t=t||{};var r=i.featureSetUtils();return r?r.constructFeatureSet(e,t.spatialReference,t.outFields,t.returnGeometry,t.cache):null},createFeatureSetFromLayerUrl:function(e,t){t=t||{};var r=i.featureSetUtils();return r?r.constructFeatureSetFromUrlRaw(e,t.spatialReference,t.outFields,t.returnGeometry,t.cache):null},createFeatureSetCollectionFromMap:function(e,t){var r=i.featureSetUtils();return r?r.createFeatureSetCollectionFromMap(e,e.spatialReference,t&&t.cache):null},createFeatureSetCollectionFromServiceUrl:function(e,t){t=t||{};var r=i.featureSetUtils();return r?r.createFeatureSetCollectionFromService(e,t.spatialReference,t.cache):null},hasFeatureSetOperations:function(e){var t=p._getSyntaxTree(e);return!!t&&i.scriptUsesFeatureSet(t)},enableFeatureSetOperations:function(){return o(i.enableFeatureSetSupport().then((function(){var e=i.featureSetUtils();e&&e.initialiseMetaDataCache()})))},enableAsyncOperations:function(){return o(i.enableAsyncSupport())}};return r("extend-esri")&&e.setObject("support.expressionUtils",p,a),p}));