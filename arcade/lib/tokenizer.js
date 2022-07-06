// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/assign","../polyfill/tsSupport/spreadarray","./error-handler","./nodes","./scanner","./token"],(function(e,t,r,n,s,i,a,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tokenizer=void 0;var c=function(){function e(){this.values=[],this.curly=this.paren=-1}return e.prototype.beforeFunctionExpression=function(e){return n(n(n(n(["(","{","[","return",","],i.AssignmentOperators),i.BinaryOperators),i.LogicalOperators),i.UnaryOperators).includes(e)},e.prototype.isRegexStart=function(){var e=this.values[this.values.length-1],t=null!==e;switch(e){case"this":case"]":t=!1;break;case")":var r=this.values[this.paren-1];t="if"===r||"while"===r||"for"===r||"with"===r;break;case"}":if(t=!0,"function"===this.values[this.curly-3])t=!!(n=this.values[this.curly-4])&&!this.beforeFunctionExpression(n);else if("function"===this.values[this.curly-4]){var n;t=!(n=this.values[this.curly-5])||!this.beforeFunctionExpression(n)}}return t},e.prototype.push=function(e){e.type===o.TokenType.Punctuator||e.type===o.TokenType.Keyword?("{"===e.value?this.curly=this.values.length:"("===e.value&&(this.paren=this.values.length),this.values.push(e.value)):this.values.push(null)},e}(),l=function(){function e(e,t){this.errorHandler=new s.ErrorHandler,this.errorHandler.tolerant=!!t&&("boolean"==typeof t.tolerant&&t.tolerant),this.scanner=new a.Scanner(e,this.errorHandler),this.scanner.trackComment=!!t&&("boolean"==typeof t.comment&&t.comment),this.trackRange=!!t&&("boolean"==typeof t.range&&t.range),this.trackLoc=!!t&&("boolean"==typeof t.loc&&t.loc),this.buffer=[],this.reader=new c}return e.prototype.errors=function(){return this.errorHandler.errors},e.prototype.getNextToken=function(){if(0===this.buffer.length){var e=this.scanner.scanComments();if(e)for(var t=0;t<e.length;++t){var r=e[t],n=this.scanner.source.slice(r.slice[0],r.slice[1]),s={type:r.multiLine?"BlockComment":"LineComment",value:n};this.trackRange&&(s.range=r.range),this.trackLoc&&(s.loc=r.loc),this.buffer.push(s)}if(!this.scanner.eof()){var i=null;this.trackLoc&&(i={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{line:0,column:0}});var a=void 0;if("/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()){var c=this.scanner.saveState();try{a=this.scanner.scanRegExp()}catch(r){this.scanner.restoreState(c),a=this.scanner.lex()}}else a=this.scanner.lex();this.reader.push(a);var l={type:o.TokenName[a.type],value:this.scanner.source.slice(a.start,a.end)};if(this.trackRange&&(l.range=[a.start,a.end]),this.trackLoc&&i&&(i.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},l.loc=i),a.type===o.TokenType.RegularExpression){var h=a.pattern,u=a.flags;l.regex={pattern:h,flags:u}}this.buffer.push(l)}}return this.buffer.shift()},e}();t.Tokenizer=l}));