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

define(["../Component","../GroupBrowser/index"],function(t,e){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=301)}({0:function(t,e,r){"use strict";function n(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}r.d(e,"b",function(){return n}),r.d(e,"a",function(){return i});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},1:function(e,r){e.exports=t},301:function(t,e,r){"use strict";r.r(e),r.d(e,"GroupBrowserWrapper",function(){return u});var n=r(0),o=r(1),i=r(49),s=r.n(i);r.d(e,"initialState",function(){return i.initialState});var u=function(){function t(t,e){this.options=e,this.listener=this.listener.bind(this),this.renderContainer=document.createElement("div"),this.renderContainer.style.width="100%",this.renderContainer.style.height="100%",this.renderContainer.id="group-browser-wrapper",t.appendChild(this.renderContainer);var r=e.initialState?e.initialState:i.initialState;this.initialState=n.a({},r,{config:r.config,utils:{request:4===e.apiVersion?e.request:this.shimmedRequest.bind(this),portal:4===e.apiVersion?e.portal:n.a({},e.portal,{restUrl:e.portal.portalUrl.slice(0,-1),credential:e.portal.user&&e.portal.user.credential?e.portal.user.credential:void 0})}}),this.store=Object(o.applyMiddleware)(o.thunk,Object(o.addListener)(this.listener))(o.createStore)(i.reducers,this.initialState),this.projector=Object(o.createProjector)(this.store,function(t){return t(s.a,{key:"gb"})},this.renderContainer),this.store.dispatch(Object(i.search)())}return t.prototype.shimmedRequest=function(t,e){var r=n.a({},e.query);return this.options.portal.user&&this.options.portal.user.credential&&t.indexOf(this.options.portal.restUrl)>-1&&(r.token=this.options.portal.user.credential.token),this.options.request({url:t,content:e.query},{usePost:"post"===e.method}).then(function(t){return{data:t}})},t.prototype.getState=function(){return this.store?this.store.getState():this.initialState},t.prototype.deselectGroups=function(t){if(this.store){var e=this.store.getState(),r=t.filter(function(t){return!!e.results.groups.selectedGroups[t]}).map(function(t){return e.results.groups.selectedGroups[t]});this.store.dispatch(Object(i.deselectGroups)(r))}},t.prototype.selectGroups=function(t){this.store&&this.store.dispatch(Object(i.selectGroups)(t))},t.prototype.listener=function(t,e){switch(t.type){case"DESELECT_GROUPS":this.options.onGroupDeselect&&this.options.onGroupDeselect(t.payload);break;case"SELECT_GROUPS":this.options.onGroupSelect&&this.options.onGroupSelect(t.payload)}this.options.listener&&this.options.listener(t,e)},t}()},49:function(t,r){t.exports=e}})});