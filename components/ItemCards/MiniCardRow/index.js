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

define(["../../Component","dojo/i18n!../../ItemCards/nls/resources","../../Buttons/SvgButton","../../Dropdowns/TextOptionDropdown","../../Loaders/LoaderIcon"],function(t,e,n,i,o){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(e){return t[e]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=292)}({0:function(t,e,n){"use strict";function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},r=function(){return(r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},16:function(t,n){t.exports=e},292:function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(16),r=n(5),c=n(85),s=n.n(c),l=n(35),p=n.n(l),a=n(86),u=n.n(a),d=function(t){function e(e){var n=t.call(this,e)||this;return n.handleShowItemDetails=n.handleShowItemDetails.bind(n),n.handleSelectionClick=n.handleSelectionClick.bind(n),n.handleIconActionClick=n.handleIconActionClick.bind(n),n.handleCustomActionClick=n.handleCustomActionClick.bind(n),n}return i.b(e,t),e.prototype.render=function(t){var e,n=this,i=!!this.props.selectedItems[this.props.item.id],r=!!this.props.loadingItems[this.props.item.id],c=this.props.activeItem&&this.props.activeItem.id===this.props.item.id,l=this.props.customActions.filter(function(t){return t.allowed(n.props.item)}).map(function(t){return{value:t.name,text:t.name,icon:t.icon}}),a=l.filter(function(t){return!!t.icon}),d=l.filter(function(t){return!t.icon});this.props.disableMainAction||(e=r?t(u.a,null):t(p.a,{focusable:!0,handleClick:this.handleSelectionClick,key:this.props.item.id+"-selection-btn",title:i?o.remove:o.add},t("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},t("g",{stroke:"none","stroke-width":"1"},i?t("g",{id:"minus-circled-1px-16"},t("g",null,t("polygon",{points:"3 7 12 7 12 8 3 8"}),t("path",{d:"M7.501,0 C3.365,0 0,3.364 0,7.5 C0,11.636 3.365,15 7.501,15 C11.636,15 15,11.636 15,7.5 C15,3.364 11.636,0 7.501,0 Z M7.501,14 C3.916,14 1,11.084 1,7.5 C1,3.916 3.916,1 7.501,1 C11.085,1 14,3.916 14,7.5 C14,11.084 11.085,14 7.501,14 Z"}))):t("g",{id:"plus-circled-1px-16"},t("g",null,t("polygon",{points:"12 7 7.999 7 8 3 7.001 3 7 7 2.999 7 2.999 8 7 8 6.999 12 7.998 12 7.999 8 12 8"}),t("path",{d:"M7.501,0 C3.365,0 0,3.364 0,7.5 C0,11.636 3.365,15 7.501,15 C11.636,15 15,11.636 15,7.5 C15,3.364 11.636,0 7.501,0 Z M7.501,14 C3.916,14 1,11.084 1,7.5 C1,3.916 3.916,1 7.501,1 C11.085,1 14,3.916 14,7.5 C14,11.084 11.085,14 7.501,14 Z"})))))));var h=a.map(function(e){return t(p.a,{focusable:!0,handleClick:n.handleIconActionClick,key:n.props.item.id+"-"+e.text,title:e.text,value:e.value},t("div",{class:"card-mcr__custom-icon-container",innerHTML:e.icon}))}),f={"card-mcr__container":!0,"card-mcr__container--selected":i,"card-mcr__container--active":c};return t("div",{key:this.props.item.id,classes:f,onclick:this.handleShowItemDetails},t("img",{src:this.props.item.iconURI,class:"card-mcr__item-icon",title:this.props.item.displayName,alt:""}),t("button",{id:"item-"+this.props.item.id+"-card-title",class:"card-mcr__item-title",title:c?o.hideItem:o.viewItem,tabindex:"0"},this.props.item.title),t("div",{class:"card-mcr__spacer"}),t("div",{class:"card-mcr__action-container"},e,h,d.length>0&&!this.props.hideEllipses?t(s.a,{key:this.props.item.id+"-actions",options:d,onSelect:this.handleCustomActionClick,selectedOptionValue:void 0,justify:"right"},t(p.a,{key:this.props.item.id+"-action-btn",focusable:!1,title:o.actions},t("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",style:"transform: translate(0, -2px);"},t("g",{stroke:"none","stroke-width":"1"},t("g",{id:"ellipses-1px-16"},t("path",{d:"M1,7 L3,7 L3,9 L1,9 L1,7 Z M7,7 L9,7 L9,9 L7,9 L7,7 Z M13,7 L15,7 L15,9 L13,9 L13,7 Z"})))))):null))},e.prototype.handleShowItemDetails=function(t){this.props.onShowItemDetails(this.props.item)},e.prototype.handleSelectionClick=function(t){t.stopPropagation(),this.props.onSelectionClick(this.props.item)},e.prototype.handleIconActionClick=function(t){t.stopPropagation(),t.target.value&&this.props.onCustomActionClick(t.target.value,this.props.item)},e.prototype.handleCustomActionClick=function(t){this.props.onCustomActionClick(t,this.props.item)},e}(r.Component);e.default=d},35:function(t,e){t.exports=n},5:function(e,n){e.exports=t},85:function(t,e){t.exports=i},86:function(t,e){t.exports=o}})});