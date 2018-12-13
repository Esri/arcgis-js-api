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

define(["../../Component","dojo/i18n!../../Navigation/Pager/nls/resources"],function(e,n){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=299)}({0:function(e,n,t){"use strict";function r(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}t.d(n,"b",function(){return r}),t.d(n,"a",function(){return a});var o=function(e,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)}},299:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(70),a=t(5),i=function(e){function n(n){var t=e.call(this,n)||this;return t.handleNext=t.handleNext.bind(t),t.handlePrevious=t.handlePrevious.bind(t),t.handlePageBtn=t.handlePageBtn.bind(t),t}return r.b(n,e),n.prototype.render=function(e){var n=this,t=Array.apply(null,{length:this.props.numPages}).map(function(t,r){var o=n.props.currentPage===r+1;return e("button",{classes:{"nav-pager__btn":!0,"nav-pager__page-btn--active":o,"nav-pager__page-btn--inactive":!o},id:"page-"+(r+1)+"-button",title:"page-"+(r+1),onclick:n.handlePageBtn,role:"link",tabindex:"0",key:"page-"+(r+1)+"-button"},""+(r+1))}).reduce(function(t,r,o,a){return 0===o||o===n.props.numPages-1||o===n.props.currentPage-1||o===n.props.currentPage-2||o===n.props.currentPage||1===o&&4===n.props.currentPage||o===n.props.numPages-2&&n.props.currentPage===n.props.numPages-3||o<=4&&n.props.currentPage<5?t.push(r):(o===n.props.currentPage-3||o===n.props.currentPage+1||5===o&&n.props.currentPage<5)&&t.push(e("span",{class:"nav-pager__dots",key:"dots-"+o},"...")),t},[]),r={"nav-pager__btn":!0,"nav-pager__btn--disabled":this.props.currentPage<=1},a={"nav-pager__btn":!0,"nav-pager__btn--disabled":this.props.currentPage>=this.props.numPages};return e("nav",{class:"nav-pager__container",key:"pager"},this.props.currentPage===this.props.numPages&&this.props.paginationLimitReached?e("div",{class:"nav-pager__limit-container",key:"pagination-limit-container"},e("div",{class:"nav-pager__limit-inner"},e("p",{class:"nav-pager__limit-text"},o.paginationLimit))):null,e("button",{classes:r,id:"previous",title:o.previous,role:"link",key:"previous-btn",onclick:this.handlePrevious,tabindex:this.props.currentPage<=1?"-1":"0"},o.previous),e("div",{class:"nav-pager__page-btn-container"},t),e("button",{classes:a,id:"next",title:o.next,role:"link",key:"next-btn",onclick:this.handleNext,tabindex:this.props.currentPage>=this.props.numPages?"-1":"0"},o.next))},n.prototype.handleNext=function(){this.props.onPageChange(this.props.currentPage+1)},n.prototype.handlePrevious=function(){this.props.onPageChange(this.props.currentPage-1)},n.prototype.handlePageBtn=function(e){this.props.onPageChange(parseInt(e.target.textContent,10))},n}(a.Component);n.default=i},5:function(n,t){n.exports=e},70:function(e,t){e.exports=n}})});