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

define(["../../Component","../../Dropdowns/AccordionDropdown/index","dojo/i18n!../../Filters/FolderFilter/nls/resources"],function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=278)}({0:function(e,t,r){"use strict";function n(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}r.d(t,"b",function(){return n}),r.d(t,"a",function(){return i});var o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)}},11:function(e,r){e.exports=t},278:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(67),i=r(5),l=r(11),a=r.n(l),d=r(87),s=function(e){function t(t){var r=e.call(this,t)||this;return r.handleToggleKeyDown=Object(d.a)(r.handleToggleFilter.bind(r)),r.state={filterString:""},r.handleFilterStringChange=r.handleFilterStringChange.bind(r),r.handleToggleFilter=r.handleToggleFilter.bind(r),r.handleClearFilter=r.handleClearFilter.bind(r),r.mapFoldersToLinks=r.mapFoldersToLinks.bind(r),r}return n.b(t,e),t.prototype.render=function(e){return e(a.a,{key:"folder-accordion",title:o.folders,clearable:!!this.props.folderFilter,onClear:this.handleClearFilter,padding:!1},e("div",{class:"ftr-folder__input-area"},e("input",{id:"filter-folder-filters",type:"search",placeholder:o.filterFolders,"aria-label":o.filterFolders,oninput:this.handleFilterStringChange,value:this.state.filterString})),e("ul",{id:"folder-accordion-tree",class:"ftr-folder__list"},this.mapFoldersToLinks(e)))},t.prototype.handleFilterStringChange=function(e){this.setState({filterString:e.target.value})},t.prototype.handleToggleFilter=function(e){var t=e.target.dataset,r=t.id,n=t.title;this.props.folderFilter&&this.props.folderFilter.id===r||this.props.onFolderSelect({id:r,title:n})},t.prototype.handleClearFilter=function(){this.props.folderFilter&&this.props.onFolderSelect()},t.prototype.preventCloseDropdown=function(e){e.stopPropagation()},t.prototype.mapFoldersToLinks=function(e){var t=this,r={"ftr-folder__link":!0,"ftr-folder__link--active":!this.props.folderFilter};return this.props.availableFolders?[e("li",{class:"ftr-folder__item",key:"all-user-content"},e("a",{classes:r,"data-id":"all-folder-content","data-title":o.allFolders,onclick:this.handleClearFilter,onkeydown:this.handleToggleKeyDown,tabindex:"0"},o.allFolders))].concat(this.props.availableFolders.filter(function(e){return-1!==e.title.toLowerCase().indexOf(t.state.filterString.toLowerCase())}).map(function(o){var i=n.a({},r,{"ftr-folder__link--active":t.props.folderFilter&&t.props.folderFilter.id===o.id,"ftr-folder__link--home":"root"===o.id});return e("li",{class:"ftr-folder__item",key:o.id},e("a",{classes:i,"data-id":o.id,"data-title":o.title,onclick:t.handleToggleFilter,onkeydown:t.handleToggleKeyDown,tabindex:"0"},o.title))})):null},t}(i.Component);t.default=s},5:function(t,r){t.exports=e},67:function(e,t){e.exports=r},87:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){return function(t){13===t.keyCode&&e(t)}}}})});