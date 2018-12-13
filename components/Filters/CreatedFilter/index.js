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

define(["../../Component","../../Dropdowns/AccordionDropdown/index","../../DateSelection/DateRangeSelector/index","dojo/i18n!../../Filters/CreatedFilter/nls/resources"],function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=277)}({0:function(e,t,r){"use strict";function n(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}r.d(t,"b",function(){return n}),r.d(t,"a",function(){return a});var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}},11:function(e,r){e.exports=t},117:function(e,t){e.exports=n},277:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(117),a=r(5),i=r(11),c=r.n(i),l=r(74),u=r.n(l),d=function(e){function t(t){var r=e.call(this,t)||this;return r.handleDateRangeSelect=r.handleDateRangeSelect.bind(r),r.handleClearFilter=r.handleClearFilter.bind(r),r}return n.b(t,e),t.prototype.render=function(e){return e(c.a,{key:"created-filter-accordion",title:o.dateCreated,clearable:!!this.props.dateCreatedFilter,onClear:this.handleClearFilter},e("ul",{"aria-label":o.dateCreated,class:"ftr-created__tree",id:"created-filter-accordion-tree",role:"tree"},e(u.a,{key:"date-range-selector",selectedOption:this.props.dateCreatedSection,range:this.props.dateCreatedFilter,onDateRangeSelect:this.handleDateRangeSelect})))},t.prototype.handleDateRangeSelect=function(e,t){this.props.onDateCreatedSelect(e,t)},t.prototype.handleClearFilter=function(){this.props.onDateCreatedSelect()},t}(a.Component);t.default=d},5:function(t,r){t.exports=e},74:function(e,t){e.exports=r}})});