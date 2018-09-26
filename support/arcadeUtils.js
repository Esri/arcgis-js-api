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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../arcade/arcade","../arcade/Dictionary","../arcade/Feature","../core/lang"],function(e,r,t,n,a,c){function i(e){var r;try{r=e?t.parseScript(e):null}catch(e){r=null}return r}function u(e,r){r=r||c.clone(h);var n="string"==typeof e?i(e):e;if(!n)return null;var a;try{a=n?t.compileScript(n,r):null}catch(e){a=null}return a}function l(e,r){return{vars:{$feature:null==e?new a:a.createFromGraphic(e),$view:r&&r.view},spatialReference:r&&r.sr}}function o(e,r,t){return a.createFromGraphicLikeObject(r,e,t)}function f(e,r){e.vars.$feature=r}function s(e,r){var n;try{n=t.executeScript(e,r,r.spatialReference)}catch(e){n=null}return n}function p(e,r){var t;try{t=e?e(r,r.spatialReference):null}catch(e){t=null}return t}function v(e){if(!e)return[];var r="string"==typeof e?i(e):e;if(!r)return[];var n=t.extractFieldLiterals(r),a=[];return n.forEach(function(e){g.test(e)&&(e=e.replace(g,""),a.push(e))}),a.sort(),a.filter(function(e,r){return 0===r||a[r-1]!==e})}function y(e){return t.referencesMember(e,"$view")}function d(e){if(e&&e.viewingMode&&null!=e.scale&&e.spatialReference)return{view:new n({viewingMode:e.viewingMode,scale:e.scale}),sr:e.spatialReference}}function w(e){var r="string"==typeof e?i(e):e;return r&&t.scriptUsesGeometryEngine(r)}function x(){return t.enableGeometrySupport()}Object.defineProperty(r,"__esModule",{value:!0});var g=/^\$feature\./i,h={vars:{$feature:"any",$view:"any"},spatialReference:null};r.createSyntaxTree=i,r.createFunction=u,r.createExecContext=l,r.createFeature=o,r.updateExecContext=f,r.evalSyntaxTree=s,r.executeFunction=p,r.extractFieldNames=v,r.dependsOnView=y,r.getViewInfo=d,r.hasGeometryOperations=w,r.enableGeometryOperations=x});