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

define(["../Component"],function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=266)}({0:function(e,t,n){"use strict";function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},l=function(){return(l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}},1:function(t,n){t.exports=e},266:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(1),l=function(e){function t(t){var n=e.call(this,t)||this;return n.handleToggleClick=n.handleToggleClick.bind(n),n}return o.b(t,e),t.prototype.render=function(e){var t=this.props,n=t.name,o=t.selectedToggle,r=t.childOptions,l=t.prependValue,u=l?""+l+this.props.value:this.props.value,i=!!(o===u||r&&this.childSelectedRecursive(r,u)),p={"btn-toggle__item":!0,"btn-toggle__item--active":i},s={"btn-toggle__button":!0,"btn-toggle__button--active":i},c=null;return r&&(c=e("ul",{class:"btn-toggle__sub-list",role:"group"},this.mapChildrenToToggles(e))),e("li",{id:u+"-option",key:u,classes:p,role:"treeitem","aria-selected":i?"true":void 0,"aria-expanded":r?i?"true":"false":void 0},e("button",{id:"toggle-"+u,key:u,classes:s,value:u,onmousedown:this.preventDefault,onclick:this.handleToggleClick,title:this.props.tooltip,tabindex:"0"},e("span",{class:"btn-toggle__text",key:"text"},n),this.props.count?e("span",{class:"btn-toggle__count",key:"count"}," ","("+this.props.count+")"):null),i?c:null)},t.prototype.preventDefault=function(e){e.preventDefault()},t.prototype.mapChildrenToToggles=function(e){var n=this,o=this.props,r=o.childOptions,l=o.selectedToggle,u=o.onToggleClick,i=o.useFullPathAsValue,p=o.prependValue,s=p?""+p+this.props.value:this.props.value;return r?r.map(function(o){return e(t,{count:o.count,key:o.value,name:o.displayName,value:i?s+"/"+o.value:o.value,showTooltip:n.props.showTooltip,tooltip:o.tooltip,selectedToggle:l,childOptions:o.children,onToggleClick:u,useFullPathAsValue:i})}):null},t.prototype.childSelectedRecursive=function(e,t){var n=this,o=this.props,r=o.selectedToggle;return o.useFullPathAsValue?e.reduce(function(e,o){return!!(r===t+"/"+o.value||o.children&&n.childSelectedRecursive(o.children,t+"/"+o.value))||e},!1):e.reduce(function(e,t){return!!(r===t.value||t.children&&n.childSelectedRecursive(t.children,n.props.value))||e},!1)},t.prototype.handleToggleClick=function(e){e.preventDefault(),this.props.onToggleClick(this.props.prependValue?""+this.props.prependValue+this.props.value:this.props.value,this.props.name)},t}(r.Component);t.default=l}})});