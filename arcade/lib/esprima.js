// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["require","exports","./comment-handler","./parser","./tokenizer","./syntax"],(function(e,r,t,n,o,a){"use strict";function i(e,r,o){var a,i=null,c=function(e,r){o&&o(e,r),i&&i.visit(e,r)},s="function"==typeof o?c:null,u=!1;if(r){u="boolean"==typeof r.comment&&r.comment;var m="boolean"==typeof r.attachComment&&r.attachComment;(u||m)&&((i=new t.CommentHandler).attach=m,r.comment=!0,s=c)}var f=(a=new n.Parser(e,r,s)).parseScript();return u&&i&&(f.comments=i.comments),a.config.tokens&&(f.tokens=a.tokens),a.config.tolerant&&(f.errors=a.errorHandler.errors),f}Object.defineProperty(r,"__esModule",{value:!0}),r.version=r.tokenize=r.parseScript=r.parse=void 0,r.parse=i,r.parseScript=function(e,r,t){var n=r||{};return n.sourceType="script",i(e,n,t)},r.tokenize=function(e,r,t){var n=new o.Tokenizer(e,r),a=[];try{for(;;){var i=n.getNextToken();if(!i)break;t&&(i=t(i)),a.push(i)}}catch(e){n.errorHandler.tolerate(e)}return n.errorHandler.tolerant&&(a.errors=n.errors()),a},Object.defineProperty(r,"Syntax",{enumerable:!0,get:function(){return a.Syntax}}),r.version="4.0.0-dev"}));