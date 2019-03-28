// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","./treeAnalysis","./lib/esprima"],function(e,r,n,t){"use strict";function i(e,r){void 0===r&&(r=[]);var i=t.parse("function _() { "+e+"\n}");if(null===i.body||void 0===i.body)throw new Error("No formula provided.");if(0===i.body.length)throw new Error("No formula provided.");if(0===i.body.length)throw new Error("No formula provided.");if("BlockStatement"!==i.body[0].body.type)throw new Error("Invalid formula content.");var o=n.validateLanguage(i);if(""!==o)throw new Error(o);return n.findScriptDependencies(i,r),i}function o(e,r,i,o,c){var a=[];try{var u=t.parse("function _() { "+e+"\n}",{tolerant:!0,loc:!0}),l=u.errors;if(l.length>0)for(var d=0;d<l.length;d++)a.push({line:l[d].lineNumber,character:l[d].column,reason:l[d].description});for(var f=n.checkScript(u,r,i,o,c),s=0;s<f.length;s++)a.push(f[s])}catch(r){try{"Unexpected token }"===r.description?(r.index=("function _() { "+e+"\n}").length-1,a.push({line:r.lineNumber,character:r.column,reason:"Unexpected end of script"})):a.push({line:r.lineNumber,character:r.column,reason:r.description})}catch(e){}}return a}function c(e,r){return void 0===r&&(r=!1),n.findFieldLiterals(e,r)}function a(e,r,t){return n.validateScript(e,r,t)}function u(e,r){return n.referencesMember(e,r)}function l(e,r){return n.referencesFunction(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.parseScript=i,r.scriptCheck=o,r.extractFieldLiterals=c,r.validateScript=a,r.referencesMember=u,r.referencesFunction=l});