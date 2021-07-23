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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["require","exports","./error-handler","./scanner","./token"],(function(e,t,n,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Tokenizer=void 0;var i=function(){function e(){this.values=[],this.curly=this.paren=-1}return e.prototype.beforeFunctionExpression=function(e){return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(e)>=0},e.prototype.isRegexStart=function(){var e=this.values[this.values.length-1],t=null!==e;switch(e){case"this":case"]":t=!1;break;case")":var n=this.values[this.paren-1];t="if"===n||"while"===n||"for"===n||"with"===n;break;case"}":if(t=!0,"function"===this.values[this.curly-3])t=!!(r=this.values[this.curly-4])&&!this.beforeFunctionExpression(r);else if("function"===this.values[this.curly-4]){var r;t=!(r=this.values[this.curly-5])||!this.beforeFunctionExpression(r)}}return t},e.prototype.push=function(e){7===e.type||4===e.type?("{"===e.value?this.curly=this.values.length:"("===e.value&&(this.paren=this.values.length),this.values.push(e.value)):this.values.push(null)},e}(),a=function(){function e(e,t){this.errorHandler=new n.ErrorHandler,this.errorHandler.tolerant=!!t&&("boolean"==typeof t.tolerant&&t.tolerant),this.scanner=new r.Scanner(e,this.errorHandler),this.scanner.trackComment=!!t&&("boolean"==typeof t.comment&&t.comment),this.trackRange=!!t&&("boolean"==typeof t.range&&t.range),this.trackLoc=!!t&&("boolean"==typeof t.loc&&t.loc),this.buffer=[],this.reader=new i}return e.prototype.errors=function(){return this.errorHandler.errors},e.prototype.getNextToken=function(){if(0===this.buffer.length){var e=this.scanner.scanComments();if(this.scanner.trackComment)for(var t=0;t<e.length;++t){var n=e[t],r=this.scanner.source.slice(n.slice[0],n.slice[1]),i={type:n.multiLine?"BlockComment":"LineComment",value:r};this.trackRange&&(i.range=n.range),this.trackLoc&&(i.loc=n.loc),this.buffer.push(i)}if(!this.scanner.eof()){var a=void 0;this.trackLoc&&(a={start:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},end:{}});var o=void 0;if("/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()){var c=this.scanner.saveState();try{o=this.scanner.scanRegExp()}catch(n){this.scanner.restoreState(c),o=this.scanner.lex()}}else o=this.scanner.lex();this.reader.push(o);var h={type:s.TokenName[o.type],value:this.scanner.source.slice(o.start,o.end)};if(this.trackRange&&(h.range=[o.start,o.end]),this.trackLoc&&(a.end={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},h.loc=a),9===o.type){var l=o.pattern,u=o.flags;h.regex={pattern:l,flags:u}}this.buffer.push(h)}}return this.buffer.shift()},e}();t.Tokenizer=a}));