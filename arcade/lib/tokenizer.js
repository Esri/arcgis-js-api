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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

var __spreadArray=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,s=e.length;t<n;t++,s++)e[s]=r[t];return e};define(["require","exports","./error-handler","./nodes","./scanner","./token"],(function(e,r,t,n,s,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Tokenizer=void 0;var i=function(){function e(){this.values=[],this.curly=this.paren=-1}return e.prototype.beforeFunctionExpression=function(e){return __spreadArray(__spreadArray(__spreadArray(__spreadArray(["(","{","[","return",","],n.AssignmentOperators),n.BinaryOperators),n.LogicalOperators),n.UnaryOperators).indexOf(e)>=0},e.prototype.isRegexStart=function(){var e=this.values[this.values.length-1],r=null!==e;switch(e){case"this":case"]":r=!1;break;case")":var t=this.values[this.paren-1];r="if"===t||"while"===t||"for"===t||"with"===t;break;case"}":if(r=!0,"function"===this.values[this.curly-3])r=!!(n=this.values[this.curly-4])&&!this.beforeFunctionExpression(n);else if("function"===this.values[this.curly-4]){var n;r=!(n=this.values[this.curly-5])||!this.beforeFunctionExpression(n)}}return r},e.prototype.push=function(e){7===e.type||4===e.type?("{"===e.value?this.curly=this.values.length:"("===e.value&&(this.paren=this.values.length),this.values.push(e.value)):this.values.push(null)},e}(),o=function(){function e(e,r){this.errorHandler=new t.ErrorHandler,this.errorHandler.tolerant=!!r&&("boolean"==typeof r.tolerant&&r.tolerant),this.scanner=new s.Scanner(e,this.errorHandler),this.scanner.trackComment=!!r&&("boolean"==typeof r.comment&&r.comment),this.trackRange=!!r&&("boolean"==typeof r.range&&r.range),this.trackLoc=!!r&&("boolean"==typeof r.loc&&r.loc),this.buffer=[],this.reader=new i}return e.prototype.errors=function(){return this.errorHandler.errors},e.prototype.getNextToken=function(){if(0===this.buffer.length){var e=this.scanner.scanComments();if(e)for(var r=0;r<e.length;++r){var t=e[r],n=this.scanner.source.slice(t.slice[0],t.slice[1]),s={type:t.multiLine?"BlockComment":"LineComment",value:n};this.trackRange&&(s.range=t.range),this.trackLoc&&(s.loc=t.loc),this.buffer.push(s)}if(!this.scanner.eof()){var i=null;this.trackLoc&&(i={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{line:0,column:0}});var o=void 0;if("/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()){var c=this.scanner.saveState();try{o=this.scanner.scanRegExp()}catch(t){this.scanner.restoreState(c),o=this.scanner.lex()}}else o=this.scanner.lex();this.reader.push(o);var h={type:a.TokenName[o.type],value:this.scanner.source.slice(o.start,o.end)};if(this.trackRange&&(h.range=[o.start,o.end]),this.trackLoc&&i&&(i.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},h.loc=i),9===o.type){var l=o.pattern,u=o.flags;h.regex={pattern:l,flags:u}}this.buffer.push(h)}}return this.buffer.shift()},e}();r.Tokenizer=o}));