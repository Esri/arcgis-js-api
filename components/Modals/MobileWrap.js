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

define(["../Component","../Buttons/SvgButton"],function(t,o){return function(t){function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var e={};return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(o){return t[o]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},o.p="",o(o.s=297)}({0:function(t,o,e){"use strict";function n(t,o){function e(){this.constructor=t}r(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}e.d(o,"b",function(){return n}),e.d(o,"a",function(){return i});var r=function(t,o){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])})(t,o)},i=function(){return(i=Object.assign||function(t){for(var o,e=1,n=arguments.length;e<n;e++)for(var r in o=arguments[e])Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);return t}).apply(this,arguments)}},1:function(o,e){o.exports=t},22:function(t,e){t.exports=o},297:function(t,o,e){"use strict";e.r(o);var n=e(0),r=e(1),i=e(22),s=e.n(i),p=function(t){function o(o){var e=t.call(this,o)||this;return e.state={closing:!1,open:e.props.open},e.handleClose=e.handleClose.bind(e),e}return n.b(o,t),o.prototype.componentWillReceiveProps=function(t){var o=this;this.props.open===t.open||this.state.closing||(t.open?this.setState({open:t.open}):(this.setState({closing:!0}),setTimeout(function(){o.setState({open:!1,closing:!1})},200)))},o.prototype.render=function(t){var o={"mod__mob-wrap-container":!0,"mod__mob-wrap-container--closed":!this.state.open,"mod__mob-wrap-container--closing":this.state.closing},e={"mod__mob-wrap-body":!0,"mod__mob-wrap-body--max-height":this.props.maxHeight,"mod__mob-wrap-body--closing":this.state.closing};return t("div",{classes:o,key:this.props.key},t("div",{classes:e},t("div",{class:"mod__mob-wrap-header"},t("span",{class:"mod__mob-wrap-title"},this.props.title),t(s.a,{key:"mobile-wrap-close",focusable:!0,handleClick:this.handleClose},t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24"},t("path",{fill:"currentColor",d:"M13.207 12.5l7.778 7.778-.707.707-7.778-7.778-7.778 7.778-.707-.707 7.778-7.778-7.778-7.778.707-.707 7.778 7.778 7.778-7.778.707.707z"})))),t("div",{class:"mod__mob-wrap-content"},this.props.children),this.props.footer?t("div",{class:"mod__mob-wrap-footer"},this.props.footer):null))},o.prototype.handleClose=function(){this.props.onClose&&this.props.onClose()},o}(r.Component);o.default=p}})});