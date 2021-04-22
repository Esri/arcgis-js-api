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

define(["require","exports","./comment-handler","./parser","./tokenizer","./syntax"],(function(e,r,t,n,o,a){"use strict";function i(e,r,o){var a=null,i=function(e,r){o&&o(e,r),a&&a.visit(e,r)},c="function"==typeof o?i:null,s=!1;if(r){s="boolean"==typeof r.comment&&r.comment;var u="boolean"==typeof r.attachComment&&r.attachComment;(s||u)&&((a=new t.CommentHandler).attach=u,r.comment=!0,c=i)}var m=new n.Parser(e,r,c),f=m.parseScript();return s&&a&&(f.comments=a.comments),m.config.tokens&&(f.tokens=m.tokens),m.config.tolerant&&(f.errors=m.errorHandler.errors),f}Object.defineProperty(r,"__esModule",{value:!0}),r.version=r.tokenize=r.parseScript=r.parse=void 0,r.parse=i,r.parseScript=function(e,r,t){var n=r||{};return n.sourceType="script",i(e,n,t)},r.tokenize=function(e,r,t){var n=new o.Tokenizer(e,r),a=[];try{for(;;){var i=n.getNextToken();if(!i)break;t&&(i=t(i)),a.push(i)}}catch(e){n.errorHandler.tolerate(e)}return n.errorHandler.tolerant&&(a.errors=n.errors()),a},Object.defineProperty(r,"Syntax",{enumerable:!0,get:function(){return a.Syntax}}),r.version="4.0.0-dev"}));