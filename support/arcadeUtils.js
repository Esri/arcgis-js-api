// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../arcade/arcade","../arcade/Dictionary"],function(e,t,r,n,a){function c(e){var t;try{t=e?n.parseScript(e):null}catch(r){t=null}return t}function i(e,t){t=t||r.clone(w);var a,i="string"==typeof e?c(e):e;try{a=i?n.compileScript(i,t):null}catch(u){a=null}return a}function u(e,t){return{vars:{$feature:n.constructFeature(e),$view:t&&t.view},spatialReference:t&&t.sr}}function l(e){return n.constructFeature(e)}function o(e,t){e.vars.$feature=t}function f(e,t){var r;try{r=n.executeScript(e,t,t.spatialReference)}catch(a){r=null}return r}function s(e,t){var r;try{r=e?e(t,t.spatialReference):null}catch(n){r=null}return r}function v(e){if(!e)return[];var t="string"==typeof e?c(e):e,r=n.extractFieldLiterals(t),a=[];return r.forEach(function(e){y.test(e)&&(e=e.replace(y,""),a.push(e))}),a.sort(),a.filter(function(e,t){return 0===t||a[t-1]!==e})}function p(e){return n.referencesMember(e,"$view")}function d(e){return e&&e.viewingMode&&null!=e.scale&&e.spatialReference?{view:new a({viewingMode:e.viewingMode,scale:e.scale}),sr:e.spatialReference}:void 0}Object.defineProperty(t,"__esModule",{value:!0});var y=/^\$feature\./i,w={vars:{$feature:"any",$view:"any"},spatialReference:null};t.createSyntaxTree=c,t.createFunction=i,t.createExecContext=u,t.createFeature=l,t.updateExecContext=o,t.evalSyntaxTree=f,t.executeFunction=s,t.extractFieldNames=v,t.dependsOnView=p,t.getViewInfo=d});