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

var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),__exportStar=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||__createBinding(t,e,r)};define(["require","exports","./comment-handler","./parser","./tokenizer","./syntax","./token","./nodes"],(function(e,t,r,n,o,a,i,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version=t.Syntax=t.tokenize=t.parse=void 0,t.parse=function(e,t,o){var a=null,i=function(e,t){o&&o(e,t),a&&a.visit(e,t)},c="function"==typeof o?i:void 0,s=!1;if(t){s="boolean"==typeof t.comment&&t.comment;var f="boolean"==typeof t.attachComment&&t.attachComment;(s||f)&&((a=new r.CommentHandler).attach=f,t.comment=!0,c=i)}var u=new n.Parser(e,t,c),d=u.parseScript();return s&&a&&(d.comments=a.comments),u.config.tokens&&(d.tokens=u.tokens),u.config.tolerant&&(d.errors=u.errorHandler.errors),d},t.tokenize=function(e,t,r){var n=new o.Tokenizer(e,t),a=[],i=void 0;try{for(;;){var c=n.getNextToken();if(!c)break;r&&(c=r(c)),a.push(c)}}catch(e){n.errorHandler.tolerate(e)}return n.errorHandler.tolerant&&(i=n.errors()),{tokens:a,errors:i}},Object.defineProperty(t,"Syntax",{enumerable:!0,get:function(){return a.Syntax}}),__exportStar(i,t),__exportStar(c,t),t.version="4.0.0-dev"}));