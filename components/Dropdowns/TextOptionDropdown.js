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

define(["../Component","../Dropdowns/BasicDropdown"],function(t,e){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(e){return t[e]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=275)}({0:function(t,e,n){"use strict";function o(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},r=function(){return(r=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}},1:function(e,n){e.exports=t},275:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n(1),r=n(72),s=n.n(r),p=function(t){function e(e){var n=t.call(this,e)||this;return n.state={optionElements:[],numOptions:-1},n.handleOptionClick=n.handleOptionClick.bind(n),n.mapOptionsToButtons=n.mapOptionsToButtons.bind(n),n.registerOptionElement=n.registerOptionElement.bind(n),n.handleOptionKeyDown=n.handleOptionKeyDown.bind(n),n.handleButtonKeyDown=n.handleButtonKeyDown.bind(n),n}return o.b(e,t),e.prototype.render=function(t){var e={"drp-text-option__menu--left":!this.props.justify||"left"===this.props.justify,"drp-text-option__menu--right":"right"===this.props.justify};if(this.props.children&&this.props.children[0])return t(s.a,{key:this.props.key+"-dropdown-base",handleButtonKeyDown:this.handleButtonKeyDown},this.props.children[0],t("nav",{id:this.props.key+"-option-dropdown",class:"drp-text-option__menu",classes:e,style:"\n                        background-color: white;\n                        z-index: 9999999;\n                        margin: 0px;\n                        display: block;\n                        pointer-events: all;\n                        box-shadow: 0 0 16px 0 rgba(0,0,0,0.2);\n                        border: 0;\n                    ",role:"listbox","aria-activedescendant":this.props.selectedOptionValue+"-option"},this.mapOptionsToButtons(t)));console.error("The TextOptionDropdown component requires a single child")},e.prototype.mapOptionsToButtons=function(t){var e=this;return this.props.options.map(function(n,o){var i={"drp-text-option__link":!0,"drp-text-option__link--active":n.value===e.props.selectedOptionValue};return t("button",{id:n.value+"-option",classes:i,key:n.value,onclick:e.handleOptionClick,onkeydown:e.handleOptionKeyDown,value:n.value,dataIndex:o,afterCreate:e.registerOptionElement,role:"option","aria-selected":""+(n.value===e.props.selectedOptionValue)},n.text)})},e.prototype.handleOptionClick=function(t){this.props.onSelect(t.target.value)},e.prototype.registerOptionElement=function(t){var e;this.setState({optionElements:o.a({},this.state.optionElements,(e={},e[t.dataIndex]=t,e)),numOptions:this.state.numOptions+1})},e.prototype.handleButtonKeyDown=function(t){t.keyCode&&40===t.keyCode&&this.state.optionElements[0]&&this.state.optionElements[0].focus()},e.prototype.handleOptionKeyDown=function(t){var e=t.target.dataIndex;switch(t.keyCode){case 40:this.state.optionElements[e+1]?this.state.optionElements[e+1].focus():this.state.optionElements[0]&&this.state.optionElements[0].focus();break;case 38:this.state.optionElements[e-1]?this.state.optionElements[e-1].focus():this.state.optionElements[this.state.numOptions]&&this.state.optionElements[this.state.numOptions].focus()}},e}(i.Component);e.default=p},72:function(t,n){t.exports=e}})});