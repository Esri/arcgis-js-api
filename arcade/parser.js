// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./treeAnalysis","./lib/esprima"],function(e,r,n,t){function o(e,r){void 0===r&&(r=[]);var o=t.parse("function _() { "+e+"\n}");if(null===o.body||void 0===o.body)throw new Error("No formula provided.");if(0===o.body.length)throw new Error("No formula provided.");if(0===o.body.length)throw new Error("No formula provided.");if("BlockStatement"!==o.body[0].body.type)throw new Error("Invalid formula content.");var i=n.validateLanguage(o);if(""!==i)throw new Error(i);return n.findScriptDependencies(o,r),o}function i(e,r,o,i,c){var a=[];try{var u=t.parse("function _() { "+e+"\n}",{tolerant:!0,loc:!0}),l=u.errors;if(l.length>0)for(var d=0;d<l.length;d++)a.push({line:l[d].lineNumber,character:l[d].column,reason:l[d].description});for(var f=n.checkScript(u,r,o,i,c),s=0;s<f.length;s++)a.push(f[s])}catch(r){try{"Unexpected token }"===r.description?(r.index=("function _() { "+e+"\n}").length-1,a.push({line:r.lineNumber,character:r.column,reason:"Unexpected end of script"})):a.push({line:r.lineNumber,character:r.column,reason:r.description})}catch(e){}}return a}function c(e,r){return void 0===r&&(r=!1),n.findFieldLiterals(e,r)}function a(e,r,t){return n.validateScript(e,r,t)}function u(e,r){return n.referencesMember(e,r)}function l(e,r){return n.referencesFunction(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.parseScript=o,r.scriptCheck=i,r.extractFieldLiterals=c,r.validateScript=a,r.referencesMember=u,r.referencesFunction=l});