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

define(["../../Component","../../Buttons/Toggle","dojo/i18n!../../Dropdowns/SortDropdown/nls/resources","../../Dropdowns/Ago2018Dropdown","../../Buttons/IconButton","../../Modals/MobileWrap"],function(e,t,n,o,r,i){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=274)}({0:function(e,t,n){"use strict";function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}},116:function(e,t){e.exports=r},172:function(e,t){e.exports=i},19:function(e,n){e.exports=t},274:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(52),i=n(5),s=n(116),l=n.n(s),p=n(19),a=n.n(p),d=n(73),c=n.n(d),u=n(172),h=n.n(u),f=function(e){function t(t){var n=e.call(this,t)||this;return n.handleSortClick=n.handleSortClick.bind(n),n.handleFieldChange=n.handleFieldChange.bind(n),n.handleOrderChange=n.handleOrderChange.bind(n),n.handleMobileWrapClose=n.handleMobileWrapClose.bind(n),n}return o.b(t,e),t.prototype.render=function(e){var t=this,n=[e("div",{class:"drp-sort__menu-section",role:"tree"},e("h3",{class:"drp-sort__menu-title"},r.sortBy),this.props.availableFields.map(function(n){return e(a.a,{key:n,name:r[n],value:n,onToggleClick:t.handleFieldChange,selectedToggle:t.props.field})})),e("br",null),e("div",{class:"drp-sort__menu-section",role:"tree"},e("h3",{class:"drp-sort__menu-title"},r.sortDir),e(a.a,{key:"ascending-toggle",name:r.ascending[this.props.field],value:"asc",onToggleClick:this.handleOrderChange,selectedToggle:this.props.order}),e(a.a,{key:"descending-toggle",name:r.descending[this.props.field],value:"desc",onToggleClick:this.handleOrderChange,selectedToggle:this.props.order}))];return window.matchMedia("(max-width: 860px)").matches?[e(l.a,{key:"gb-sort-btn-mobile",active:this.props.active,handleClick:this.handleSortClick},e("div",{class:"drp-sort__btn-body"},e("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},e("g",{stroke:"none","stroke-width":"1"},e("g",{id:"sort-1px-16"},e("path",{d:"M1,1 L15,1 L15,2 L1,2 L1,1 Z M4,5 L15,5 L15,6 L4,6 L4,5 Z M7,9 L15,9 L15,10 L7,10 L7,9 Z M11,13 L15,13 L15,14 L11,14 L11,13 Z"})))),e("span",{class:"drp-sort__btn-label"},r[this.props.field]))),e(h.a,{key:"sort-mobile-wrap",title:r.sort,open:this.props.active,onClose:this.handleMobileWrapClose},n)]:e(c.a,{key:"sort-dropdown",active:this.props.active,onToggle:this.handleSortClick},e(l.a,{key:"gb-sort-btn",active:this.props.active,handleClick:this.stub,tabindex:-1},e("div",{class:"drp-sort__btn-body"},e("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},e("g",{stroke:"none","stroke-width":"1"},e("g",{id:"sort-1px-16"},e("path",{d:"M1,1 L15,1 L15,2 L1,2 L1,1 Z M4,5 L15,5 L15,6 L4,6 L4,5 Z M7,9 L15,9 L15,10 L7,10 L7,9 Z M11,13 L15,13 L15,14 L11,14 L11,13 Z"})))),e("span",{class:"drp-sort__btn-label"},r[this.props.field]))),e("div",{class:"drp-sort__menu-container"},n))},t.prototype.stub=function(){},t.prototype.handleSortClick=function(){this.props.onClick&&this.props.onClick()},t.prototype.handleFieldChange=function(e){e!==this.props.field&&this.props.onFieldChange&&this.props.onFieldChange(e)},t.prototype.handleOrderChange=function(e){e!==this.props.order&&this.props.onOrderChange&&this.props.onOrderChange(e)},t.prototype.handleMobileWrapClose=function(){this.props.onClick&&this.props.onClick()},t}(i.Component);t.default=f},5:function(t,n){t.exports=e},52:function(e,t){e.exports=n},73:function(e,t){e.exports=o}})});