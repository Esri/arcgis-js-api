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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","../polyfill/tsSupport/assign","../polyfill/tsSupport/spreadarray","./types"],(function(n,t,e,i,o){"use strict";function s(n,t){return!!t&&(t.loc.end.line===n.loc.start.line&&t.loc.end.column<=n.loc.start.column)}function m(n,t){return n.range[0]>=t.range[0]&&n.range[1]<=t.range[1]}Object.defineProperty(t,"__esModule",{value:!0}),t.CommentHandler=void 0;var l=function(){function n(){this.comments=[],this._nodeStack=[],this._newComments=[]}return n.prototype.insertInnerComments=function(n){if(o.isBlockStatement(n)&&0===n.body.length){for(var t=[],e=this._newComments.length-1;e>=0;--e){var i=this._newComments[e];n.range[1]>=i.range[0]&&(t.unshift(i),this._newComments.splice(e,1))}t.length&&(n.innerComments=t)}},n.prototype.attachTrailingComments=function(n){var t,e;if(n){var l=this._nodeStack[this._nodeStack.length-1];if(o.isBlockStatement(n)&&m(l,n))for(var a=this._newComments.length-1;a>=0;--a){m(h=this._newComments[a],n)&&(l.trailingComments=i(i([],null!==(t=l.trailingComments)&&void 0!==t?t:[]),[h]),this._newComments.splice(a,1))}var r=[];if(this._newComments.length>0)for(a=this._newComments.length-1;a>=0;--a){var h;s(h=this._newComments[a],l)?(l.trailingComments=i(i([],null!==(e=l.trailingComments)&&void 0!==e?e:[]),[h]),this._newComments.splice(a,1)):s(h,n)&&(r.unshift(h),this._newComments.splice(a,1))}if(null==l?void 0:l.trailingComments)s(l.trailingComments[0],n)&&(r=i(i([],r),l.trailingComments),delete l.trailingComments);r.length>0&&(n.trailingComments=r)}},n.prototype.attachLeadingComments=function(n){var t,e,s,m;if(n){for(var l;this._nodeStack.length>0;){var a=this._nodeStack[this._nodeStack.length-1];if(!(n.range[0]<=a.range[0]))break;l=a,this._nodeStack.pop()}var r=[],h=[];if(l){for(var g=(null!==(e=null===(t=l.leadingComments)||void 0===t?void 0:t.length)&&void 0!==e?e:0)-1;g>=0;--g){var C=l.leadingComments[g];n.range[0]>=C.range[1]?(r.unshift(C),l.leadingComments.splice(g,1)):o.isVariableDeclarator(n)&&!o.isBlockComment(C)&&(h.unshift(C),l.leadingComments.splice(g,1))}return 0===(null===(s=l.leadingComments)||void 0===s?void 0:s.length)&&delete l.leadingComments,r.length&&(n.leadingComments=r),void(h.length&&(n.trailingComments=i(i([],h),null!==(m=n.trailingComments)&&void 0!==m?m:[])))}for(g=this._newComments.length-1;g>=0;--g){C=this._newComments[g];n.range[0]>=C.range[0]&&(r.unshift(C),this._newComments.splice(g,1))}r.length&&(n.leadingComments=r)}},n.prototype.attachComments=function(n){var t;if(o.isProgram(n)&&n.body.length>0){var e=this._nodeStack[this._nodeStack.length-1];return e?(e.trailingComments=i(i([],null!==(t=e.trailingComments)&&void 0!==t?t:[]),this._newComments),this._newComments.length=0,void this._nodeStack.pop()):(n.trailingComments=i([],this._newComments),void(this._newComments.length=0))}this.attachTrailingComments(n),this.attachLeadingComments(n),this.insertInnerComments(n),this._nodeStack.push(n)},n.prototype.collectComment=function(n){this.comments.push(n),this._newComments.push(n)},n}();t.CommentHandler=l}));