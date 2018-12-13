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

define(["../../Component","../../Buttons/FilterChip/index","dojo/i18n!../../Dropdowns/FilterController/nls/resources"],function(t,e,r){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=273)}({0:function(t,e,r){"use strict";function n(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}r.d(e,"b",function(){return n}),r.d(e,"a",function(){return l});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},l=function(){return(l=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},108:function(t,r){t.exports=e},115:function(t,e){t.exports=r},273:function(t,e,r){"use strict";function n(t){t.preventDefault()}r.r(e);var o=r(0),l=r(115),i=r(5),c=r(108),s=r.n(c),a=function(t){function e(e){var r=t.call(this,e)||this;return r.toggleFilterDisplay=r.toggleFilterDisplay.bind(r),r.state={open:!!r.props.startOpen},r}return o.b(e,t),e.prototype.render=function(t){var e,r=this.props.filters.slice(),o={"filter-controller__expand-btn":!0,"filter-controller__expand-btn--active":this.state.open,"filter-controller__expand-btn--dark":"light"===this.props.theme},i={"filter-controller__container":!0,"filter-controller__container--light":"light"===this.props.theme},c={"filter-controller__chip-container":!0,"filter-controller__chip-container--full-width":"full-width"===this.props.mode},a="light"===this.props.theme?"dark":"light";this.props.filters.length>1&&(e=t("button",{key:"filter-controller-toggle-btn",classes:o,onclick:this.toggleFilterDisplay,onmousedown:n},"+ "+(this.props.filters.length-1),t("svg",{width:"12",height:"12",viewBox:"0 0 32 32"},t("path",{d:"M28 9v5L16 26 4 14V9l12 12L28 9z"}))));var f=r.shift();if(f)return this.state.open?t("div",{classes:i},t("div",{classes:c},t(s.a,{filterId:f.filterId,handleRemoveFilter:f.onRemove,key:f.filterId,text:f.text,theme:a}),r.map(function(e){return t(s.a,{filterId:e.filterId,handleRemoveFilter:e.onRemove,key:e.filterId,text:e.text,theme:a})}),e),t("div",{class:"filter-controller__clear-container"},t("button",{class:"filter-controller__clear-btn",onclick:this.props.onClear},l.clearAll))):t("div",{classes:i},t("div",{classes:c},t(s.a,{filterId:f.filterId,handleRemoveFilter:f.onRemove,key:f.filterId,text:f.text,theme:a}),e),t("div",{class:"filter-controller__clear-container"},t("button",{key:"filter-controller-clear-btn",class:"filter-controller__clear-btn",onclick:this.props.onClear},l.clearAll)))},e.prototype.toggleFilterDisplay=function(){this.setState({open:!this.state.open})},e}(i.Component);e.default=a},5:function(e,r){e.exports=t}})});