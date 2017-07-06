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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../arcade/arcade","../../arcade/Dictionary"],function(e,r,t,n,a){function c(e){var r;try{r=e?n.parseScript(e):null}catch(t){r=null}return r}function i(e,r){r=r||t.clone(d);var a,i="string"==typeof e?c(e):e;try{a=i?n.compileScript(i,r):null}catch(u){a=null}return a}function u(e,r){return{vars:{$feature:n.constructFeature(e),$view:r&&r.view},spatialReference:r&&r.sr}}function l(e,r){var t;try{t=n.executeScript(e,r,r.spatialReference)}catch(a){t=null}return t}function o(e,r){var t;try{t=e?e(r,r.spatialReference):null}catch(n){t=null}return t}function f(e){if(!e)return[];var r="string"==typeof e?c(e):e,t=n.extractFieldLiterals(r),a=[];return t.forEach(function(e){p.test(e)&&(e=e.replace(p,""),a.push(e))}),a.sort(),a.filter(function(e,r){return 0===r||a[r-1]!==e})}function s(e){return n.referencesMember(e,"$view")}function v(e){return e&&e.viewingMode&&null!=e.scale&&e.spatialReference?{view:new a({viewingMode:e.viewingMode,scale:e.scale}),sr:e.spatialReference}:void 0}Object.defineProperty(r,"__esModule",{value:!0});var p=/^\$feature\./i,d={vars:{$feature:"any",$view:"any"}};r.createSyntaxTree=c,r.createFunction=i,r.createExecContext=u,r.evalSyntaxTree=l,r.executeFunction=o,r.extractFieldNames=f,r.dependsOnView=s,r.getViewInfo=v});