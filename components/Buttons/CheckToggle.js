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

define(["../Component"],function(t){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(o,r,function(e){return t[e]}.bind(null,r));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=262)}({0:function(t,e,n){"use strict";function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}n.d(e,"b",function(){return o}),n.d(e,"a",function(){return u});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},u=function(){return(u=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)}},1:function(e,n){e.exports=t},262:function(t,e,n){"use strict";function o(t,e,n,o,r){return n?n.map(function(n){return t(l,{key:n.value,name:n.displayName,value:e+"/"+n.value,selectedToggles:r,childOptions:n.children,onToggleClick:o})}):null}n.r(e);var r=n(0),u=n(1),l=function(t){function e(e){var n=t.call(this,e)||this;return n.handleToggleClick=n.handleToggleClick.bind(n),n}return r.b(e,t),e.prototype.render=function(t){var e=this.props,n=e.name,r=e.value,u=e.selectedToggles,l=e.childOptions,c=e.onToggleClick,i=u&&!!u[r],a={"btn-check-toggle__item":!0,"btn-check-toggle__item--active":i},s={"btn-check-toggle__button":!0,"btn-check-toggle__button--active":i},p=null;return l&&(p=t("ul",{class:"btn-check-toggle__sub-list"},o(t,r,l,c,u))),t("li",{key:r,classes:a},t("button",{id:"toggle-"+r,key:r,classes:s,value:r,onmousedown:this.preventDefault,onclick:this.handleToggleClick,tabindex:"0"},t("span",{class:"btn-check-toggle__text",key:"text"},n),this.props.count?t("span",{class:"btn-check-toggle__count",key:"count"}," ","("+this.props.count+")"):null),i?p:null)},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.handleToggleClick=function(t){t.preventDefault(),this.props.onToggleClick(this.props.value,this.props.name)},e}(u.Component);e.default=l}})});