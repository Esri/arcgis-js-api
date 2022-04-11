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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","./treeAnalysis","./lib/arcade-parser"],(function(e,r,n,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.referencesFunction=r.referencesMember=r.extractExpectedFieldLiterals=r.validateScript=r.extractFieldLiterals=r.scriptCheck=r.parseScript=void 0,r.parseScript=function(e,r){void 0===r&&(r=[]);var i=t.parse("function _() { "+e+"\n}");if(null===i.body||void 0===i.body)throw new Error("No formula provided.");if(0===i.body.length)throw new Error("No formula provided.");if(0===i.body.length)throw new Error("No formula provided.");if("BlockStatement"!==i.body[0].body.type)throw new Error("Invalid formula content.");var c=n.validateLanguage(i);if(""!==c)throw new Error(c);return n.findScriptDependencies(i,r),i},r.scriptCheck=function(e,r,i,c,o){var l=[],a="function _() { \n".length-1,d="function _() { \n"+e+"\n}";try{var s=t.parse(d,{tolerant:!0,loc:!0,range:!0}),u=s.errors;if(u.length>0)for(var p=0;p<u.length;p++)l.push({line:u[p].lineNumber-2,character:u[p].column,reason:u[p].description});for(var f=n.checkScript(s,r,i,c,o),h=0;h<f.length;h++)f[h].line=f[h].line-2,f[h].range&&(f[h].range=[f[h][0]-a,f[h][1]-a]),f[h].loc&&(f[h].loc.start.line=f[h].loc.start.line-2,f[h].loc.end.line=f[h].loc.end.line-2),l.push(f[h])}catch(e){try{if("Unexpected token }"===e.description){var v=d.split("\n").length;e.lineNumber===v?(e.index=d.length-1,l.push({line:e.lineNumber-4,character:e.column,reason:"Unexpected end of script"})):(e.index=d.length-1,l.push({line:e.lineNumber-2,character:e.column,reason:"Unexpected end of script"}))}else l.push({line:e.lineNumber-2,character:e.column,reason:e.description})}catch(e){}}return l},r.extractFieldLiterals=function(e,r){return void 0===r&&(r=!1),n.findFieldLiterals(e)},r.validateScript=function(e,r,t){return n.validateScript(e,r,t)},r.extractExpectedFieldLiterals=function(e){return n.findExpectedFieldLiterals(e)},r.referencesMember=function(e,r){return n.referencesMember(e,r)},r.referencesFunction=function(e,r){return n.referencesFunction(e,r)}}));