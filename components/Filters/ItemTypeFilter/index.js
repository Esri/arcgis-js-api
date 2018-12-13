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

define(["../../Component","dojo/i18n!../../Filters/ItemTypeFilter/nls/resources","../../Dropdowns/AccordionDropdown/index","../../Buttons/Toggle"],function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(t){return e[t]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=280)}({0:function(e,t,r){"use strict";function n(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}r.d(t,"b",function(){return n}),r.d(t,"a",function(){return i});var a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)}},10:function(e,r){e.exports=t},11:function(e,t){e.exports=r},173:function(e,t,r){"use strict";var n=r(10);t.a=[{value:"maps",displayName:n.filters.maps,children:[{value:"webMaps",displayName:n.filters.webMaps},{value:"mapFiles",displayName:n.filters.mapFiles}]},{value:"layers",displayName:n.filters.layers,children:[{value:"featureLayers",displayName:n.filters.featureLayers},{value:"tileLayers",displayName:n.filters.tileLayers},{value:"mapImageLayers",displayName:n.filters.mapImageLayers},{value:"imageryLayers",displayName:n.filters.imageryLayers},{value:"sceneLayers",displayName:n.filters.sceneLayers},{value:"tables",displayName:n.filters.tables}]},{value:"scenes",displayName:n.filters.scenes},{value:"apps",displayName:n.filters.apps,children:[{value:"webApps",displayName:n.filters.webApps},{value:"mobileApps",displayName:n.filters.mobileApps},{value:"desktopApps",displayName:n.filters.desktopApps}]},{value:"tools",displayName:n.filters.tools,children:[{value:"locators",displayName:n.filters.locators},{value:"geodatabaseAccess",displayName:n.filters.geodatabaseAccess},{value:"geometricOperations",displayName:n.filters.geometricOperations},{value:"geoprocessingTasks",displayName:n.filters.geoprocessingTasks},{value:"networkAnalysis",displayName:n.filters.networkAnalysis},{value:"webTools",displayName:n.filters.webTools}]},{value:"files",displayName:n.filters.files,children:[{value:"documents",displayName:n.filters.documents},{value:"images",displayName:n.filters.images},{value:"pdfs",displayName:n.filters.pdfs}]},{value:"notebooks",displayName:n.filters.notebooks}]},19:function(e,t){e.exports=n},280:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(10),i=r(5),l=r(11),o=r.n(l),s=r(19),u=r.n(s),p=r(173),c=r(39),f=function(e){function t(t){var r=e.call(this,t)||this;return r.state={availableFilters:Object(c.e)(Object(c.g)({value:"##itemTypeOptionsRoot",children:p.a},t.availableItemTypes)).children},r.mapItemTypesToToggles=r.mapItemTypesToToggles.bind(r),r.handleToggleClick=r.handleToggleClick.bind(r),r.handleClearFilter=r.handleClearFilter.bind(r),r}return n.b(t,e),t.prototype.render=function(e){return e(o.a,{key:"item-type-accordion",title:a.itemType,clearable:!!this.props.itemTypeFilter,onClear:this.handleClearFilter},e("ul",{"aria-label":a.itemType,id:"item-type-accordion-tree",class:"ftr-item-type__tree",role:"tree"},this.mapItemTypesToToggles(e)))},t.prototype.mapItemTypesToToggles=function(e){var t=this;return this.state.availableFilters.map(function(r){return e(u.a,{key:r.value,name:r.displayName,value:r.value,selectedToggle:t.props.itemTypeFilter?t.props.itemTypeFilter.value:void 0,childOptions:r.children,onToggleClick:t.handleToggleClick})})},t.prototype.handleToggleClick=function(e,t){var r=this.props.itemTypeFilter;r&&r.value===e?this.props.onItemTypeSelect():this.props.onItemTypeSelect({value:e,text:t})},t.prototype.handleClearFilter=function(){this.props.onItemTypeSelect()},t}(i.Component);t.default=f},39:function(e,t,r){"use strict";function n(e,t){return s("children","value",e,t)}function a(e,t){return function e(t,r,n,a){var i,l=n,o=n[t];return o&&0!==o.length?c.a({},l,(i={},i[t]=o.reduce(function(n,i){return-1!==a.indexOf(i[r])&&n.push(e(t,r,i,a)),n},[]),i)):c.a({},l)}("children","value",e,t)}function i(e){return function(e,t){var r,n=t,a=t[e];return a?c.a({},n,((r={})[e]=function t(r){return 0===r.length?[]:1!==r.length||r[0][e]?r.length>1?r.reduce(function(r,n){var a;if(!n[e])return r.push(n),r;var i=n;return r.push(c.a({},i,((a={})[e]=t(i[e]),a))),r},[]):t(r[0][e]):r}(a),r)):t}("children",e)}function l(e,t){return u("children",e,t)}function o(e,t,r,n){var a=r[e];return r[t]===n?r:a?a.reduce(function(r,a){return r||o(e,t,a,n)},void 0):void 0}function s(e,t,r,n){var a=r[e];if(a)return a.reduce(function(r,a){return a[t]===n[0]?1===n.length?a:s(e,t,a,n.slice(1)):r},void 0)}function u(e,t,r){var n,a=t;return r(c.a({},a,((n={})[e]=a[e]?a[e].map(function(t){return u(e,t,r)}):void 0,n)))}function p(e,t,r){return u(e,r,function(r){var n=r,a=r[t];if(delete r[t],r[e]){var i=r[e];return delete r[e],c.a({},n,{value:a,children:i})}return c.a({},n,{value:a})})}r.d(t,"d",function(){return n}),r.d(t,"g",function(){return a}),r.d(t,"e",function(){return i}),r.d(t,"f",function(){return l}),r.d(t,"a",function(){return o}),r.d(t,"b",function(){return s}),r.d(t,"c",function(){return p});var c=r(0)},5:function(t,r){t.exports=e}})});