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

define(["../Component"],function(t){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=272)}({0:function(t,e,n){"use strict";function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}n.d(e,"b",function(){return o}),n.d(e,"a",function(){return i});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},i=function(){return(i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}},1:function(e,n){e.exports=t},272:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(1),i=function(t){function e(e){var n=t.call(this,e)||this;return n.state={active:!1},n.handleBtnClick=n.handleBtnClick.bind(n),n.handleDropdownClick=n.handleDropdownClick.bind(n),n.handleButtonKeyDown=n.handleButtonKeyDown.bind(n),n.registerCloseHandler=n.registerCloseHandler.bind(n),n.close=n.close.bind(n),n}return o.b(e,t),e.prototype.render=function(t){var e=void 0===this.props.active?this.state.active:this.props.active;if(this.props.children&&this.props.children[0]&&this.props.children[1]){var n=this.props.children[0],o=null;e&&(o=this.props.children[1]);var r=null;return e&&(r=t("div",{key:"open-dropdown-hook",id:this.props.key+"-hook",afterCreate:this.registerCloseHandler,style:"display: none;"})),t("div",{class:"drp-basic__container",onclick:this.handleDropdownClick},r,t("span",{id:this.props.key,class:"drp-basic__button",onclick:this.handleBtnClick,onkeydown:this.handleButtonKeyDown,role:"button",tabindex:this.props.tabindex?this.props.tabindex:"0"},n),o)}console.error("The BasicDropdown component requires 2 children")},e.prototype.componentWillReceiveProps=function(t){!0===this.props.active&&!1===t.active&&document.body.removeEventListener("click",this.close)},e.prototype.close=function(){void 0===this.props.active?this.setState({active:!1}):this.props.onToggle&&this.props.onToggle(),document.body.removeEventListener("click",this.close)},e.prototype.handleBtnClick=function(t){t.stopPropagation(),void 0===this.props.active?this.setState({active:!this.state.active}):this.props.onToggle?this.props.onToggle():this.setState({active:!this.state.active})},e.prototype.handleDropdownClick=function(t){t.stopPropagation(),this.setState({active:!this.state.active})},e.prototype.handleButtonKeyDown=function(t){13===t.keyCode||32===t.keyCode?(t.preventDefault(),this.handleBtnClick(t)):this.props.handleButtonKeyDown&&this.props.handleButtonKeyDown(t)},e.prototype.registerCloseHandler=function(){document.body.addEventListener("click",this.close)},e}(r.Component);e.default=i}})});