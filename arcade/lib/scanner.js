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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","./assert","./character","./messages"],(function(e,t,i,s,r){"use strict";function n(e){return"0123456789abcdef".indexOf(e.toLowerCase())}function h(e){return"01234567".indexOf(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.Scanner=void 0;var a=function(){function e(e,t){this.source=e,this.errorHandler=t,this.trackComment=!1,this.isModule=!1,this.length=e.length,this.index=0,this.lineNumber=e.length>0?1:0,this.lineStart=0,this.curlyStack=[]}return e.prototype.saveState=function(){return{index:this.index,lineNumber:this.lineNumber,lineStart:this.lineStart,curlyStack:this.curlyStack.slice()}},e.prototype.restoreState=function(e){this.index=e.index,this.lineNumber=e.lineNumber,this.lineStart=e.lineStart,this.curlyStack=e.curlyStack},e.prototype.eof=function(){return this.index>=this.length},e.prototype.throwUnexpectedToken=function(e){return void 0===e&&(e=r.Messages.UnexpectedTokenIllegal),this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},e.prototype.tolerateUnexpectedToken=function(e){void 0===e&&(e=r.Messages.UnexpectedTokenIllegal),this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,e)},e.prototype.skipSingleLineComment=function(e){var t=[],i=0,r=null;for(this.trackComment&&(t=[],i=this.index-e,r={start:{line:this.lineNumber,column:this.index-this.lineStart-e},end:{line:0,column:0}});!this.eof();){var n=this.source.charCodeAt(this.index);if(++this.index,s.Character.isLineTerminator(n)){if(r){r.end={line:this.lineNumber,column:this.index-this.lineStart-1};var h={multiLine:!1,slice:[i+e,this.index-1],range:[i,this.index-1],loc:r};t.push(h)}return 13===n&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t}}if(r){r.end={line:this.lineNumber,column:this.index-this.lineStart};h={multiLine:!1,slice:[i+e,this.index],range:[i,this.index],loc:r};t.push(h)}return t},e.prototype.skipMultiLineComment=function(){var e=[],t=0,i=null;for(this.trackComment&&(t=this.index-2,i={start:{line:this.lineNumber,column:this.index-this.lineStart-2},end:{line:0,column:0}});!this.eof();){var r=this.source.charCodeAt(this.index);if(s.Character.isLineTerminator(r))13===r&&10===this.source.charCodeAt(this.index+1)&&++this.index,++this.lineNumber,++this.index,this.lineStart=this.index;else if(42===r){if(47===this.source.charCodeAt(this.index+1)){if(this.index+=2,i){i.end={line:this.lineNumber,column:this.index-this.lineStart};var n={multiLine:!0,slice:[t+2,this.index-2],range:[t,this.index],loc:i};e.push(n)}return e}++this.index}else++this.index}if(i){i.end={line:this.lineNumber,column:this.index-this.lineStart};n={multiLine:!0,slice:[t+2,this.index],range:[t,this.index],loc:i};e.push(n)}return this.tolerateUnexpectedToken(),e},e.prototype.scanComments=function(){var e=null;this.trackComment&&(e=[]);for(var t=0===this.index;!this.eof();){var i=this.source.charCodeAt(this.index);if(s.Character.isWhiteSpace(i))++this.index;else if(s.Character.isLineTerminator(i))++this.index,13===i&&10===this.source.charCodeAt(this.index)&&++this.index,++this.lineNumber,this.lineStart=this.index,t=!0;else if(47===i)if(47===(i=this.source.charCodeAt(this.index+1))){this.index+=2;var r=this.skipSingleLineComment(2);e&&(e=e.concat(r)),t=!0}else{if(42!==i)break;this.index+=2;r=this.skipMultiLineComment();e&&(e=e.concat(r))}else if(t&&45===i){if(45!==this.source.charCodeAt(this.index+1)||62!==this.source.charCodeAt(this.index+2))break;this.index+=3;r=this.skipSingleLineComment(3);e&&(e=e.concat(r))}else{if(60!==i||this.isModule)break;if("!--"!==this.source.slice(this.index+1,this.index+4))break;this.index+=4;r=this.skipSingleLineComment(4);e&&(e=e.concat(r))}}return e},e.prototype.isKeyword=function(e){switch((e=e.toLowerCase()).length){case 2:return"if"===e||"in"===e;case 3:return"var"===e||"for"===e;case 4:return"else"===e;case 5:return"break"===e;case 6:return"return"===e;case 8:return"function"===e||"continue"===e;default:return!1}},e.prototype.codePointAt=function(e){var t=this.source.charCodeAt(e);if(t>=55296&&t<=56319){var i=this.source.charCodeAt(e+1);if(i>=56320&&i<=57343)t=1024*(t-55296)+i-56320+65536}return t},e.prototype.scanHexEscape=function(e){for(var t="u"===e?4:2,i=0,r=0;r<t;++r){if(this.eof()||!s.Character.isHexDigit(this.source.charCodeAt(this.index)))return null;i=16*i+n(this.source[this.index++])}return String.fromCharCode(i)},e.prototype.scanUnicodeCodePointEscape=function(){var e=this.source[this.index],t=0;for("}"===e&&this.throwUnexpectedToken();!this.eof()&&(e=this.source[this.index++],s.Character.isHexDigit(e.charCodeAt(0)));)t=16*t+n(e);return(t>1114111||"}"!==e)&&this.throwUnexpectedToken(),s.Character.fromCodePoint(t)},e.prototype.getIdentifier=function(){for(var e=this.index++;!this.eof();){var t=this.source.charCodeAt(this.index);if(92===t)return this.index=e,this.getComplexIdentifier();if(t>=55296&&t<57343)return this.index=e,this.getComplexIdentifier();if(!s.Character.isIdentifierPart(t))break;++this.index}return this.source.slice(e,this.index)},e.prototype.getComplexIdentifier=function(){var e,t=this.codePointAt(this.index),i=s.Character.fromCodePoint(t);for(this.index+=i.length,92===t&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):null!==(e=this.scanHexEscape("u"))&&"\\"!==e&&s.Character.isIdentifierStart(e.charCodeAt(0))||this.throwUnexpectedToken(),i=e);!this.eof()&&(t=this.codePointAt(this.index),s.Character.isIdentifierPart(t));)i+=e=s.Character.fromCodePoint(t),this.index+=e.length,92===t&&(i=i.substr(0,i.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),++this.index,"{"===this.source[this.index]?(++this.index,e=this.scanUnicodeCodePointEscape()):null!==(e=this.scanHexEscape("u"))&&"\\"!==e&&s.Character.isIdentifierPart(e.charCodeAt(0))||this.throwUnexpectedToken(),i+=e);return i},e.prototype.octalToDecimal=function(e){var t="0"!==e,i=h(e);return!this.eof()&&s.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(t=!0,i=8*i+h(this.source[this.index++]),"0123".indexOf(e)>=0&&!this.eof()&&s.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(i=8*i+h(this.source[this.index++]))),{code:i,octal:t}},e.prototype.scanIdentifier=function(){var e,t=this.index,i=92===this.source.charCodeAt(t)?this.getComplexIdentifier():this.getIdentifier();if(3!==(e=1===i.length?3:this.isKeyword(i)?4:"null"===i.toLowerCase()?5:"true"===i.toLowerCase()||"false"===i.toLowerCase()?1:3)&&t+i.length!==this.index){var s=this.index;this.index=t,this.tolerateUnexpectedToken(r.Messages.InvalidEscapedReservedWord),this.index=s}return{type:e,value:i,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},e.prototype.scanPunctuator=function(){var e=this.index,t=this.source[this.index];switch(t){case"(":case"{":"{"===t&&this.curlyStack.push("{"),++this.index;break;case".":++this.index;break;case"}":++this.index,this.curlyStack.pop();break;case")":case";":case",":case"[":case"]":case":":case"?":case"~":++this.index;break;default:">>>="===(t=this.source.substr(this.index,4))?this.index+=4:"==="===(t=t.substr(0,3))||"!=="===t||">>>"===t||"<<="===t||">>="===t||"**="===t?this.index+=3:"&&"===(t=t.substr(0,2))||"||"===t||"=="===t||"!="===t||"+="===t||"-="===t||"*="===t||"/="===t||"++"===t||"--"===t||"<<"===t||">>"===t||"&="===t||"|="===t||"^="===t||"%="===t||"<="===t||">="===t||"=>"===t||"**"===t?this.index+=2:(t=this.source[this.index],"<>=!+-*%&|^/".indexOf(t)>=0&&++this.index)}return this.index===e&&this.throwUnexpectedToken(),{type:7,value:t,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanHexLiteral=function(e){for(var t="";!this.eof()&&s.Character.isHexDigit(this.source.charCodeAt(this.index));)t+=this.source[this.index++];return 0===t.length&&this.throwUnexpectedToken(),s.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseInt("0x"+t,16),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanBinaryLiteral=function(e){for(var t="";!this.eof();){if("0"!==(i=this.source[this.index])&&"1"!==i)break;t+=this.source[this.index++]}if(0===t.length&&this.throwUnexpectedToken(),!this.eof()){var i=this.source.charCodeAt(this.index);(s.Character.isIdentifierStart(i)||s.Character.isDecimalDigit(i))&&this.throwUnexpectedToken()}return{type:6,value:parseInt(t,2),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanOctalLiteral=function(e,t){var i="",r=!1;for(s.Character.isOctalDigit(e.charCodeAt(0))?(r=!0,i="0"+this.source[this.index++]):++this.index;!this.eof()&&s.Character.isOctalDigit(this.source.charCodeAt(this.index));)i+=this.source[this.index++];return r||0!==i.length||this.throwUnexpectedToken(),(s.Character.isIdentifierStart(this.source.charCodeAt(this.index))||s.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),{type:6,value:parseInt(i,8),octal:r,lineNumber:this.lineNumber,lineStart:this.lineStart,start:t,end:this.index}},e.prototype.scanNumericLiteral=function(){var e=this.index,t=this.source[e];i.assert(s.Character.isDecimalDigit(t.charCodeAt(0))||"."===t,"Numeric literal must start with a decimal digit or a decimal point");var r="";if("."!==t){if(r=this.source[this.index++],t=this.source[this.index],"0"===r){if("x"===t||"X"===t)return++this.index,this.scanHexLiteral(e);if("b"===t||"B"===t)return++this.index,this.scanBinaryLiteral(e);if("o"===t||"O"===t)return this.scanOctalLiteral(t,e)}for(;s.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r+=this.source[this.index++];t=this.source[this.index]}if("."===t){for(r+=this.source[this.index++];s.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r+=this.source[this.index++];t=this.source[this.index]}if("e"===t||"E"===t)if(r+=this.source[this.index++],"+"!==(t=this.source[this.index])&&"-"!==t||(r+=this.source[this.index++]),s.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;s.Character.isDecimalDigit(this.source.charCodeAt(this.index));)r+=this.source[this.index++];else this.throwUnexpectedToken();return s.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),{type:6,value:parseFloat(r),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanStringLiteral=function(){var e=this.index,t=this.source[e];i.assert("'"===t||'"'===t,"String literal must starts with a quote"),++this.index;for(var n=!1,h="";!this.eof();){var a=this.source[this.index++];if(a===t){t="";break}if("\\"===a)if((a=this.source[this.index++])&&s.Character.isLineTerminator(a.charCodeAt(0)))++this.lineNumber,"\r"===a&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(a){case"u":if("{"===this.source[this.index])++this.index,h+=this.scanUnicodeCodePointEscape();else{var o=this.scanHexEscape(a);null===o&&this.throwUnexpectedToken(),h+=o}break;case"x":var c=this.scanHexEscape(a);null===c&&this.throwUnexpectedToken(r.Messages.InvalidHexEscapeSequence),h+=c;break;case"n":h+="\n";break;case"r":h+="\r";break;case"t":h+="\t";break;case"b":h+="\b";break;case"f":h+="\f";break;case"v":h+="\v";break;case"8":case"9":h+=a,this.tolerateUnexpectedToken();break;default:if(a&&s.Character.isOctalDigit(a.charCodeAt(0))){var d=this.octalToDecimal(a);n=d.octal||n,h+=String.fromCharCode(d.code)}else h+=a}else{if(s.Character.isLineTerminator(a.charCodeAt(0)))break;h+=a}}return""!==t&&(this.index=e,this.throwUnexpectedToken()),{type:8,value:h,octal:n,lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.scanTemplate=function(){var e="",t=!1,i=this.index,n="`"===this.source[i],h=!1,a=2;for(++this.index;!this.eof();){var o=this.source[this.index++];if("`"===o){a=1,h=!0,t=!0;break}if("$"===o){if("{"===this.source[this.index]){this.curlyStack.push("${"),++this.index,t=!0;break}e+=o}else if("\\"===o)if(o=this.source[this.index++],s.Character.isLineTerminator(o.charCodeAt(0)))++this.lineNumber,"\r"===o&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index;else switch(o){case"n":e+="\n";break;case"r":e+="\r";break;case"t":e+="\t";break;case"u":if("{"===this.source[this.index])++this.index,e+=this.scanUnicodeCodePointEscape();else{var c=this.index,d=this.scanHexEscape(o);null!==d?e+=d:(this.index=c,e+=o)}break;case"x":var u=this.scanHexEscape(o);null===u&&this.throwUnexpectedToken(r.Messages.InvalidHexEscapeSequence),e+=u;break;case"b":e+="\b";break;case"f":e+="\f";break;case"v":e+="\v";break;default:"0"===o?(s.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(r.Messages.TemplateOctalLiteral),e+="\0"):s.Character.isOctalDigit(o.charCodeAt(0))?this.throwUnexpectedToken(r.Messages.TemplateOctalLiteral):e+=o}else s.Character.isLineTerminator(o.charCodeAt(0))?(++this.lineNumber,"\r"===o&&"\n"===this.source[this.index]&&++this.index,this.lineStart=this.index,e+="\n"):e+=o}return t||this.throwUnexpectedToken(),n||this.curlyStack.pop(),{type:10,value:this.source.slice(i+1,this.index-a),cooked:e,head:n,tail:h,lineNumber:this.lineNumber,lineStart:this.lineStart,start:i,end:this.index}},e.prototype.testRegExp=function(e,t){var i=this,s=e;t.indexOf("u")>=0&&(s=s.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,(function(e,t,s){var n=parseInt(t||s,16);return n>1114111&&i.throwUnexpectedToken(r.Messages.InvalidRegExp),n<=65535?String.fromCharCode(n):"￿"})).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"￿"));try{RegExp(s)}catch(e){this.throwUnexpectedToken(r.Messages.InvalidRegExp)}try{return new RegExp(e,t)}catch(e){return null}},e.prototype.scanRegExpBody=function(){var e=this.source[this.index];i.assert("/"===e,"Regular expression literal must start with a slash");for(var t=this.source[this.index++],n=!1,h=!1;!this.eof();)if(t+=e=this.source[this.index++],"\\"===e)e=this.source[this.index++],s.Character.isLineTerminator(e.charCodeAt(0))&&this.throwUnexpectedToken(r.Messages.UnterminatedRegExp),t+=e;else if(s.Character.isLineTerminator(e.charCodeAt(0)))this.throwUnexpectedToken(r.Messages.UnterminatedRegExp);else if(n)"]"===e&&(n=!1);else{if("/"===e){h=!0;break}"["===e&&(n=!0)}return h||this.throwUnexpectedToken(r.Messages.UnterminatedRegExp),t.substr(1,t.length-2)},e.prototype.scanRegExpFlags=function(){for(var e="";!this.eof();){var t=this.source[this.index];if(!s.Character.isIdentifierPart(t.charCodeAt(0)))break;if(++this.index,"\\"!==t||this.eof())e+=t,t;else if("u"===(t=this.source[this.index])){++this.index;var i=this.index,r=this.scanHexEscape("u");if(null!==r)for(e+=r,"\\u";i<this.index;++i)this.source[i];else this.index=i,e+="u","\\u";this.tolerateUnexpectedToken()}else"\\",this.tolerateUnexpectedToken()}return e},e.prototype.scanRegExp=function(){var e=this.index,t=this.scanRegExpBody(),i=this.scanRegExpFlags();return{type:9,value:"",pattern:t,flags:i,regex:this.testRegExp(t,i),lineNumber:this.lineNumber,lineStart:this.lineStart,start:e,end:this.index}},e.prototype.lex=function(){if(this.eof())return{type:2,value:"",lineNumber:this.lineNumber,lineStart:this.lineStart,start:this.index,end:this.index};var e=this.source.charCodeAt(this.index);return s.Character.isIdentifierStart(e)?this.scanIdentifier():40===e||41===e||59===e?this.scanPunctuator():39===e||34===e?this.scanStringLiteral():46===e?s.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():s.Character.isDecimalDigit(e)?this.scanNumericLiteral():96===e||125===e&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():e>=55296&&e<57343&&s.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()},e}();t.Scanner=a}));