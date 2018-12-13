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

define(["../../Component","dojo/date/locale","dojo/i18n!../../GroupCards/GroupCheckCard/nls/resources","../../Buttons/Ago2018Checkbox"],function(t,e,r,o){return function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(o,n,function(e){return t[e]}.bind(null,n));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=287)}({0:function(t,e,r){"use strict";function o(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}r.d(e,"b",function(){return o}),r.d(e,"a",function(){return c});var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)},c=function(){return(c=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)}},130:function(t,e){t.exports=r},182:function(t,e){t.exports=o},183:function(t,e,r){"use strict";e.a=function(t,e){var r=t.group;return r.thumbURI?e("img",{src:r.thumbURI,class:"gcard-thumbnail__container",alt:r.title}):e("div",{class:"gcard-thumbnail__container gcard-thumbnail__svg-container"},e("svg",null,e("path",{fill:"#"+r.id.substr(r.id.length-6),d:"M0 0h65v65H0z"}),e("path",{fill:"#ccc",d:"M0 0h65v65H0z","fill-opacity":"0.8"}),e("text",{x:"50%",y:"50%",fill:"white","dominant-baseline":"central","text-anchor":"middle"},r.title.slice(0,1).toUpperCase())))}},20:function(t,r){t.exports=e},287:function(t,e,r){"use strict";r.r(e);var o=r(0),n=r(130),c=r(20),i=r(5),s=r(183),p=r(182),a=r.n(p),u=function(t){function e(e){var r=t.call(this,e)||this;return r.handleCheckClick=r.handleCheckClick.bind(r),r}return o.b(e,t),e.prototype.render=function(t){var e=n.modified+": "+c.format(new Date(this.props.group.modified),{selector:"date",formatLength:"medium"});return this.props.sortField&&"created"===this.props.sortField&&(e=n.created+": "+c.format(new Date(this.props.group.created),{selector:"date",formatLength:"medium"})),t("div",{classes:{"gcard-gcc__container":!0,"gcard-gcc__container--active":this.props.checked},key:this.props.key},t(a.a,{key:"gcard-gcc__checkbox-"+this.props.group.id,checked:this.props.checked,onChange:this.handleCheckClick,title:this.props.group.title}),t(s.a,{group:this.props.group}),t("div",{class:"gcard-gcc__flex"},t("div",{class:"gcard-gcc__title-owner"},t("span",{class:"gcard-gcc__title"},this.props.group.title),t("a",{href:"#",class:"gcard-gcc__owner"},this.props.group.owner),t("span",{class:"gcard-gcc__small-info"},e)),t("div",{class:"gcard-gcc__info"},t("span",null,e))))},e.prototype.handleCheckClick=function(){this.props.checked&&this.props.onUncheckGroup?this.props.onUncheckGroup(this.props.group):!this.props.checked&&this.props.onCheckGroup&&this.props.onCheckGroup(this.props.group)},e}(i.Component);e.default=u},5:function(e,r){e.exports=t}})});