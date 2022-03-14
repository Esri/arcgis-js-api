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

define(["require","exports","./syntax"],(function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentHandler=void 0;var i=function(){function t(){this.attach=!1,this.comments=[],this.stack=[],this.leading=[],this.trailing=[]}return t.prototype.insertInnerComments=function(t,e){if(t.type===n.Syntax.BlockStatement&&0===t.body.length){for(var i=[],s=this.leading.length-1;s>=0;--s){var o=this.leading[s];e.end.offset>=o.start&&(i.unshift(o.comment),this.leading.splice(s,1),this.trailing.splice(s,1))}i.length&&(t.innerComments=i)}},t.prototype.findTrailingComments=function(t){var e=[];if(this.trailing.length>0){for(var n=this.trailing.length-1;n>=0;--n){var i=this.trailing[n];i.start>=t.end.offset&&e.unshift(i.comment)}return this.trailing.length=0,e}var s=this.stack[this.stack.length-1];if(s&&s.node.trailingComments){var o=s.node.trailingComments[0];o&&o.range[0]>=t.end.offset&&(e=s.node.trailingComments,delete s.node.trailingComments)}return e},t.prototype.findLeadingComments=function(t){for(var e,n=[];this.stack.length>0;){if(!((o=this.stack[this.stack.length-1])&&o.start>=t.start.offset))break;e=o.node,this.stack.pop()}if(e){for(var i=(e.leadingComments?e.leadingComments.length:0)-1;i>=0;--i){var s=e.leadingComments[i];s.range[1]<=t.start.offset&&(n.unshift(s),e.leadingComments.splice(i,1))}return e.leadingComments&&0===e.leadingComments.length&&delete e.leadingComments,n}for(i=this.leading.length-1;i>=0;--i){var o;(o=this.leading[i]).start<=t.start.offset&&(n.unshift(o.comment),this.leading.splice(i,1))}return n},t.prototype.visitNode=function(t,e){if(!(t.type===n.Syntax.Program&&t.body.length>0)){this.insertInnerComments(t,e);var i=this.findTrailingComments(e),s=this.findLeadingComments(e);s.length>0&&(t.leadingComments=s),i.length>0&&(t.trailingComments=i),this.stack.push({node:t,start:e.start.offset})}},t.prototype.visitComment=function(t,e){if(this.comments.push(t),this.attach){var n={comment:{type:t.type,value:t.value,range:[e.start.offset,e.end.offset]},start:e.start.offset};t.loc&&(n.comment.loc=t.loc),this.leading.push(n),this.trailing.push(n)}},t.prototype.visit=function(t,e){"Line"===t.type||"Block"===t.type?this.visitComment(t,e):this.attach&&this.visitNode(t,e)},t}();e.CommentHandler=i}));