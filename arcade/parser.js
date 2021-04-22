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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","./treeAnalysis","./lib/esprima"],(function(e,r,n,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.referencesFunction=r.referencesMember=r.validateScript=r.extractFieldLiterals=r.scriptCheck=r.parseScript=void 0,r.parseScript=function(e,r){void 0===r&&(r=[]);var i=t.parse("function _() { "+e+"\n}");if(null===i.body||void 0===i.body)throw new Error("No formula provided.");if(0===i.body.length)throw new Error("No formula provided.");if(0===i.body.length)throw new Error("No formula provided.");if("BlockStatement"!==i.body[0].body.type)throw new Error("Invalid formula content.");var o=n.validateLanguage(i);if(""!==o)throw new Error(o);return n.findScriptDependencies(i,r),i},r.scriptCheck=function(e,r,i,o,c){var l=[],a="function _() { \n".length-1,u="function _() { \n"+e+"\n}";try{var d=t.parse(u,{tolerant:!0,loc:!0,range:!0}),s=d.errors;if(s.length>0)for(var f=0;f<s.length;f++)l.push({line:s[f].lineNumber-2,character:s[f].column,reason:s[f].description});for(var p=n.checkScript(d,r,i,o,c),h=0;h<p.length;h++)p[h].line=p[h].line-2,p[h].range&&(p[h].range=[p[h][0]-a,p[h][1]-a]),p[h].loc&&(p[h].loc.start.line=p[h].loc.start.line-2,p[h].loc.end.line=p[h].loc.end.line-2),l.push(p[h])}catch(e){try{if("Unexpected token }"===e.description){var v=u.split("\n").length;e.lineNumber===v?(e.index=u.length-1,l.push({line:e.lineNumber-4,character:e.column,reason:"Unexpected end of script"})):(e.index=u.length-1,l.push({line:e.lineNumber-2,character:e.column,reason:"Unexpected end of script"}))}else l.push({line:e.lineNumber-2,character:e.column,reason:e.description})}catch(e){}}return l},r.extractFieldLiterals=function(e,r){return void 0===r&&(r=!1),n.findFieldLiterals(e)},r.validateScript=function(e,r,t){return n.validateScript(e,r,t)},r.referencesMember=function(e,r){return n.referencesMember(e,r)},r.referencesFunction=function(e,r){return n.referencesFunction(e,r)}}));