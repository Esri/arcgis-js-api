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

define(["../../Component","dojo/i18n!../../Dropdowns/AccordionDropdown/nls/resources"],function(t,n){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(n){return t[n]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=270)}({0:function(t,n,e){"use strict";function r(t,n){function e(){this.constructor=t}o(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}e.d(n,"b",function(){return r}),e.d(n,"a",function(){return i});var o=function(t,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])})(t,n)},i=function(){return(i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)}},171:function(t,e){t.exports=n},270:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(171),i=e(5),c=e(87),a=function(t){function n(n){var e=t.call(this,n)||this;return e.handleDropdownKeyDown=Object(c.a)(e.handleDropdownClick.bind(e)),e.state={active:!!n.startActive&&n.startActive},e.handleDropdownClick=e.handleDropdownClick.bind(e),e.handleClear=e.handleClear.bind(e),e}return r.b(n,t),n.prototype.render=function(t){var n={"drp-accordion__content":!0,"drp-accordion__content--no-padding":!1===this.props.padding},e={"drp-accordion__icon":!0,"drp-accordion__icon--active":this.state.active},r=null;return this.props.clearable&&(r=t("button",{class:"drp-accordion__clear-btn",onclick:this.handleClear},o.clear)),t("div",{key:this.props.key,classes:{"drp-accordion__section":!0},role:"tablist"},t("h4",{id:this.props.key,class:"drp-accordion__title",value:"itemType",onclick:this.handleDropdownClick,onkeydown:this.handleDropdownKeyDown,role:"tab",tabindex:"0","aria-expanded":""+this.state.active,"aria-controls":this.props.key+"-tree"},t("span",{classes:e},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 32 32"},t("path",{d:"M28 9v5L16 26 4 14V9l12 12L28 9z"}))),t("span",null,this.props.title),r),this.state.active?t("div",{classes:n},this.props.children):null)},n.prototype.handleDropdownClick=function(){this.setState({active:!this.state.active})},n.prototype.handleClear=function(t){t.stopPropagation(),this.props.onClear()},n}(i.Component);n.default=a},5:function(n,e){n.exports=t},87:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(t){return function(n){13===n.keyCode&&t(n)}}}})});