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

define(["require","exports","./treeAnalysis","./lib/esprima"],function(e,r,n,t){function o(e){var r=t.parse("function _() { "+e+"\n}");if(null===r.body||void 0===r.body)throw new Error("No formula provided.");if(0===r.body.length)throw new Error("No formula provided.");if(0===r.body.length)throw new Error("No formula provided.");if("BlockStatement"!==r.body[0].body.type)throw new Error("Invalid formula content.");var o=n.validateLanguage(r);if(""!==o)throw new Error(o);return r}function i(e,r,o,i){var c=[];try{var a=t.parse("function _() { "+e+"\n}",{tolerant:!0,loc:!0}),l=a.errors;if(l.length>0)for(var u=0;u<l.length;u++)c.push({line:l[u].lineNumber,character:l[u].column,reason:l[u].description});for(var d=n.checkScript(a,r,o,i),f=0;f<d.length;f++)c.push(d[f])}catch(s){try{"Unexpected token }"===s.description&&(s.index=("function _() { "+e+"\n}").length-1)?c.push({line:s.lineNumber,character:s.column,reason:"Unexpected end of script"}):c.push({line:s.lineNumber,character:s.column,reason:s.description})}catch(p){}}return c}function c(e,r){return void 0===r&&(r=!1),n.findFieldLiterals(e,r)}function a(e,r,t){return void 0===t&&(t="full"),n.validateScript(e,r,t)}function l(e,r){return n.referencesMember(e,r)}function u(e,r){return n.referencesFunction(e,r)}r.parseScript=o,r.scriptCheck=i,r.extractFieldLiterals=c,r.validateScript=a,r.referencesMember=l,r.referencesFunction=u});