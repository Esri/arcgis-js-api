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

define(["../../Component","../../Dropdowns/AccordionDropdown/index","../../Buttons/Toggle","dojo/i18n!../../Filters/SharedFilter/nls/resources"],function(e,t,r,o){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(t){return e[t]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=282)}({0:function(e,t,r){"use strict";function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}r.d(t,"b",function(){return o}),r.d(t,"a",function(){return i});var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}},11:function(e,r){e.exports=t},19:function(e,t){e.exports=r},282:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r(60),i=r(5),a=r(11),l=r.n(a),s=r(19),p=r.n(s),u=function(e){function t(t){var r=e.call(this,t)||this;return r.state={options:[{value:"public",displayName:n.options.public},{value:"org",displayName:n.options.org},{value:"shared",displayName:n.options.shared},{value:"private",displayName:n.options.private}]},r.mapOptionsToToggles=r.mapOptionsToToggles.bind(r),r.handleToggleClick=r.handleToggleClick.bind(r),r.handleClearFilter=r.handleClearFilter.bind(r),r}return o.b(t,e),t.prototype.render=function(e){return e(l.a,{key:"shared-accordion",title:n.shared,clearable:!!this.props.sharedFilter,onClear:this.handleClearFilter},e("ul",{id:"shared-accordion-tree",class:"ftr-shared__tree",role:"tree","aria-label":n.shared},this.mapOptionsToToggles(e)))},t.prototype.mapOptionsToToggles=function(e){var t=this,r=this.state.options;return this.props.hideOrgGroupFilters&&(r=[this.state.options[0],this.state.options[3]]),r.map(function(r){return e(p.a,{count:t.props.counts[r.value],key:r.value,name:r.displayName,value:r.value,selectedToggle:t.props.sharedFilter?t.props.sharedFilter.value:void 0,childOptions:r.childOptions,onToggleClick:t.handleToggleClick})})},t.prototype.handleToggleClick=function(e,t){var r=this.props.sharedFilter;r&&r.value===e?this.props.onSharedSelect():this.props.onSharedSelect({value:e,text:t})},t.prototype.handleClearFilter=function(){this.props.onSharedSelect()},t}(i.Component);t.default=u},5:function(t,r){t.exports=e},60:function(e,t){e.exports=o}})});