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

define(["../../Component","../../Dropdowns/AccordionDropdown/index","../../DateSelection/DateRangeSelector/index","dojo/i18n!../../Filters/ModifiedFilter/nls/resources"],function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=281)}({0:function(e,t,n){"use strict";function r(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}},11:function(e,n){e.exports=t},118:function(e,t){e.exports=r},281:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(118),i=n(5),a=n(11),l=n.n(a),c=n(74),u=n.n(c),d=function(e){function t(t){var n=e.call(this,t)||this;return n.handleDateRangeSelect=n.handleDateRangeSelect.bind(n),n.handleClearFilter=n.handleClearFilter.bind(n),n}return r.b(t,e),t.prototype.render=function(e){return e(l.a,{key:"modified-filter-accordion",title:o.dateModified,clearable:!!this.props.dateModifiedFilter,onClear:this.handleClearFilter},e("ul",{"aria-label":o.dateModified,class:"ftr-modified__tree",id:"modified-filter-accordion-tree",role:"tree"},e(u.a,{key:"date-range-selector",selectedOption:this.props.dateModifiedSection,range:this.props.dateModifiedFilter,onDateRangeSelect:this.handleDateRangeSelect})))},t.prototype.handleDateRangeSelect=function(e,t){this.props.onDateModifiedSelect(e,t)},t.prototype.handleClearFilter=function(){this.props.onDateModifiedSelect()},t}(i.Component);t.default=d},5:function(t,n){t.exports=e},74:function(e,t){e.exports=n}})});