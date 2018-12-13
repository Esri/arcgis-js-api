// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

define(["../Component","../Inputs/Tags/index"],function(t,e){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=303)}({0:function(t,e,r){"use strict";function n(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}r.d(e,"b",function(){return n}),r.d(e,"a",function(){return i});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},1:function(e,r){e.exports=t},240:function(t,r){t.exports=e},303:function(t,e,r){"use strict";r.r(e),r.d(e,"TagsWrapper",function(){return s});var n=r(0),o=r(1),i=r(240),u=r.n(i),c=function(t,e){switch(e.type){case"UPDATE_ACTIVE_TAGS":return n.a({},t,{activeTags:e.payload});default:return t}},a=Object(o.connect)(function(t){return{activeTags:t.activeTags}},function(t){return{onChange:function(e){t({type:"UPDATE_ACTIVE_TAGS",payload:e})}}})(u.a),s=function(){function t(t,e){this.renderContainer=t,this.store=Object(o.createStore)(c,{activeTags:e.activeTags}),this.projector=Object(o.createProjector)(this.store,function(t){return t(a,n.a({key:"wrapped-tags"},e))},this.renderContainer)}return t.prototype.destroy=function(){this.projector.stop(),this.renderContainer.remove()},t.prototype.focus=function(){var t=this.renderContainer.querySelector("input");t&&t.focus()},t.prototype.getTags=function(){return this.store.getState().activeTags},t.prototype.setTags=function(t){this.store.dispatch({type:"UPDATE_ACTIVE_TAGS",payload:t})},t.prototype.watchTags=function(t){var e=this,r=this.store.getState().activeTags;return this.store.subscribe(function(){var n=e.store.getState().activeTags;n!==r&&t(r=n)})},t}()}})});