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

define(["../Component","../ItemBrowser/index"],function(t,e){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(e){return t[e]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=302)}({0:function(t,e,r){"use strict";function n(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}r.d(e,"b",function(){return n}),r.d(e,"a",function(){return o});var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},o=function(){return(o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}},1:function(e,r){e.exports=t},302:function(t,e,r){"use strict";r.r(e),r.d(e,"ItemBrowserWrapper",function(){return a});var n=r(0),i=r(33),o=r.n(i),s=r(1);r.d(e,"changeSearchSection",function(){return i.changeSearchSection}),r.d(e,"initialState",function(){return i.initialState}),r.d(e,"search",function(){return i.search}),r.d(e,"updateExtent",function(){return i.updateExtent});var a=function(){function t(t,e){this.options=e,this.listener=this.listener.bind(this),this.renderContainer=document.createElement("div"),this.renderContainer.style.width="100%",this.renderContainer.style.height="100%",this.renderContainer.id="item-browser-wrapper",t.appendChild(this.renderContainer);var r=e.initialState?e.initialState:i.initialState;this.initialState=n.a({},r,{settings:{config:r.settings.config,utils:{request:4===e.apiVersion?e.request:this.shimmedRequest.bind(this),portal:4===e.apiVersion?e.portal:n.a({},e.portal,{restUrl:e.portal.portalUrl.slice(0,-1),credential:e.portal.user&&e.portal.user.credential?e.portal.user.credential:void 0}),iconDir:4===e.apiVersion?window.require.toUrl("esri/images/portal"):window.require.toUrl("esri/css/images/item_type_icons")}}}),this.store=Object(s.applyMiddleware)(s.thunk,Object(s.addListener)(this.listener))(s.createStore)(i.reducers,this.initialState),this.projector=Object(s.createProjector)(this.store,function(t){return t(o.a,{key:"ib"})},this.renderContainer),this.store.dispatch(Object(i.search)(!0))}return t.prototype.shimmedRequest=function(t,e){var r=n.a({},e.query);return this.options.portal.user&&this.options.portal.user.credential&&t.indexOf(this.options.portal.restUrl)>-1&&(r.token=this.options.portal.user.credential.token),this.options.request({url:t,content:e.query},{usePost:"post"===e.method}).then(function(t){return{data:t}})},t.prototype.dispatch=function(t){this.store&&this.store.dispatch(t)},t.prototype.getState=function(){return this.store?this.store.getState():this.initialState},t.prototype.listener=function(t,e){this.options.listener&&this.options.listener(t,e)},t}()},33:function(t,r){t.exports=e}})});