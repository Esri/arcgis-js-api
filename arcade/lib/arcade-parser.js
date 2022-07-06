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

define(["require","exports","../polyfill/tsSupport/exportstar","./comment-handler","./parser","./tokenizer","./syntax","./token","./nodes"],(function(e,r,t,n,o,a,i,s,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.version=r.Syntax=r.tokenize=r.parse=void 0,r.parse=function(e,r,t){var a=null,i=function(e,r){t&&t(e,r),a&&a.visit(e,r)},s="function"==typeof t?i:void 0,c=!1;if(r){c="boolean"==typeof r.comment&&r.comment;var m="boolean"==typeof r.attachComment&&r.attachComment;(c||m)&&((a=new n.CommentHandler).attach=m,r.comment=!0,s=i)}var f=new o.Parser(e,r,s),l=f.parseScript();return c&&a&&(l.comments=a.comments),f.config.tokens&&(l.tokens=f.tokens),f.config.tolerant&&(l.errors=f.errorHandler.errors),l},r.tokenize=function(e,r,t){var n=new a.Tokenizer(e,r),o=[],i=void 0;try{for(;;){var s=n.getNextToken();if(!s)break;t&&(s=t(s)),o.push(s)}}catch(e){n.errorHandler.tolerate(e)}return n.errorHandler.tolerant&&(i=n.errors()),{tokens:o,errors:i}},Object.defineProperty(r,"Syntax",{enumerable:!0,get:function(){return i.Syntax}}),t(s,r),t(c,r),r.version="4.0.0-dev"}));