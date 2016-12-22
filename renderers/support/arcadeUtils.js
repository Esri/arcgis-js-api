// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang","../../arcade/arcade","../../arcade/Dictionary","../../geometry/SpatialReference"],function(e,n,r,t,c,a){function i(e){var n;try{n=e?t.parseScript(e):null}catch(r){n=null}return n}function u(e,n){n=n||r.clone(w);var c,a="string"==typeof e?i(e):e;try{c=a?t.compileScript(a,n):null}catch(u){c=null}return c}function o(e,n){return{vars:{$feature:t.constructFeature(e),$view:n}}}function l(e,n){return t.executeScript(e,n,y)}function f(e,n){return e?e(n,y):null}function s(e){if(!e)return[];var n="string"==typeof e?i(e):e,r=t.extractFieldLiterals(n),c=[];return r.forEach(function(e){p.test(e)&&(e=e.replace(p,""),c.push(e))}),c.sort(),c.filter(function(e,n){return 0===n||c[n-1]!==e})}function v(e){return t.referencesMember(e,"$view")}function d(e){return e&&e.viewingMode&&null!=e.scale?new c({viewingMode:e.viewingMode,scale:e.scale}):"any"}var p=/^\$feature\./i,y=new a,w={vars:{$feature:"any",$view:"any"}};n.createSyntaxTree=i,n.createFunction=u,n.createExecContext=o,n.evalSyntaxTree=l,n.executeFunction=f,n.extractFieldNames=s,n.dependsOnView=v,n.getView=d});