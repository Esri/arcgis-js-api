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

define(["../../Component","../../Dropdowns/AccordionDropdown/index","dojo/i18n!../../Filters/TagsFilter/nls/resources","../../Buttons/CheckToggle"],function(t,e,r,n){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=284)}({0:function(t,e,r){"use strict";function n(t,e){function r(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}r.d(e,"b",function(){return n}),r.d(e,"a",function(){return i});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},11:function(t,r){t.exports=e},174:function(t,e){t.exports=n},284:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(69),i=r(5),a=r(11),l=r.n(a),s=r(174),p=r.n(s),u=function(t){function e(e){var r=t.call(this,e)||this;return r.handleFilterStringChange=r.handleFilterStringChange.bind(r),r.handleToggleClick=r.handleToggleClick.bind(r),r.handleClearFilter=r.handleClearFilter.bind(r),r}return n.b(e,t),e.prototype.render=function(t){return t(l.a,{key:this.props.key+"-accordion",title:this.props.title?this.props.title:o.tags,clearable:!!this.props.tagsFilter,onClear:this.handleClearFilter,padding:!1},t("div",{class:"ftr-tags__input-area"},t("input",{id:"filter-tag-filters",type:"search",placeholder:o.filterTags,"aria-label":o.filterTags,oninput:this.handleFilterStringChange,value:this.props.filterString})),t("ul",{class:"ftr-tags__tree",id:this.props.key+"-accordion-tree",role:"tree","aria-label":o.tags},this.props.availableTags.length>0?this.mapTagsToToggles(t):t("p",{class:"ftr-tags__none"},o.noTags)))},e.prototype.mapTagsToToggles=function(t){var e=this;return this.props.availableTags.map(function(r){return t(p.a,{key:r.value,name:r.value,value:r.value,selectedToggles:e.props.tagsFilter?e.props.tagsFilter:void 0,onToggleClick:e.handleToggleClick})})},e.prototype.handleToggleClick=function(t,e){var r,o,i=this.props.tagsFilter;if(i&&i[t]){var a=n.a({},i);delete a[t],Object.keys(a).length>0?this.props.onTagSelect(a):this.props.onTagSelect()}else i?this.props.onTagSelect(n.a({},i,((r={})[t]=!0,r))):this.props.onTagSelect(((o={})[t]=!0,o))},e.prototype.handleFilterStringChange=function(t){t.preventDefault(),this.props.onFilterStringChange(t.target.value)},e.prototype.handleClearFilter=function(){this.props.tagsFilter&&this.props.onTagSelect()},e}(i.Component);e.default=u},5:function(e,r){e.exports=t},69:function(t,e){t.exports=r}})});