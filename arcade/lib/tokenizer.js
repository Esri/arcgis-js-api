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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./error-handler","./scanner","./types"],(function(e,n,r,t,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Tokenizer=void 0;var o=function(){function e(e,n){this.errorHandler=new r.ErrorHandler,this.errorHandler.tolerant=!!n&&("boolean"==typeof n.tolerant&&n.tolerant),this.scanner=new t.Scanner(e,this.errorHandler),this.trackComments=!!n&&("boolean"==typeof n.comment&&n.comment),this.buffer=[]}return e.prototype.errors=function(){return this.errorHandler.errors},e.prototype.getNextToken=function(){var e=this;if(0===this.buffer.length){var n=this.scanner.scanComments();if(this.trackComments&&n&&n.forEach((function(n){var r=e.scanner.source.slice(n.start,n.end),t={type:n.multiLine?"BlockComment":"LineComment",value:r,range:n.range,loc:n.loc};e.buffer.push(t)})),!this.scanner.eof()){var r={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},t=this.scanner.lex(),o={line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart},i={type:s.TokenNames[t.type],value:this.scanner.source.slice(t.start,t.end),range:[t.start,t.end],loc:{start:r,end:o}};this.buffer.push(i)}}return this.buffer.shift()},e}();n.Tokenizer=o}));