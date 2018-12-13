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

define(["../../Component","../../Buttons/Toggle","dojo/date/locale","dojo/i18n!../../DateSelection/DateRangeSelector/nls/resources","../../DateSelection/DatePicker"],function(t,e,n,a,o){return function(t){function e(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(a,o,function(e){return t[e]}.bind(null,o));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=268)}({0:function(t,e,n){"use strict";function a(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}n.d(e,"b",function(){return a}),n.d(e,"a",function(){return s});var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},s=function(){return(s=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}},107:function(t,e,n){"use strict";var a=n(0),o=n(29),s=n(20);e.a=function(t,e){var n=new Date,r=n.getTime();n.setHours(0,0,0,0);var i=n.getTime();switch(t){case"today":return{start:i,end:r,label:o.today};case"yesterday":return{start:i-864e5,end:i,label:o.yesterday};case"last7Days":return{start:r-6048e5,end:r,label:o.last7Days};case"last30Days":return{start:r-2592e6,end:r,label:o.last30Days};case"custom":if(e){var c=new Date(e.start),u=s.format(c,{selector:"date",formatLength:"short"}),l=new Date(e.end),p=s.format(l,{selector:"date",formatLength:"short"});return a.a({},e,{label:u+"—"+p})}return;default:return}}},114:function(t,e){t.exports=o},169:function(t,e,n){"use strict";var a=n(0),o=n(5),s=n(19),r=n.n(s),i=function(t){function e(e){return t.call(this,e)||this}return a.b(e,t),e.prototype.render=function(t){var e=this;return this.props.options.map(function(n){return t(r.a,{key:n.value,name:n.displayName,value:n.value,selectedToggle:e.props.selectedOption,childOptions:n.childOptions,onToggleClick:e.props.handleOptionClick})})},e}(o.Component);e.a=i},19:function(t,n){t.exports=e},20:function(t,e){t.exports=n},268:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n(29),s=n(5),r=n(114),i=n.n(r),c=n(169),u=n(107),l=function(t){function e(e){var n=t.call(this,e)||this;return n.state={uid:Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5),customStart:"custom"===e.selectedOption&&e.range?new Date(e.range.start):void 0,customEnd:"custom"===e.selectedOption&&e.range?new Date(e.range.end):void 0,customRange:"custom"===e.selectedOption&&e.range?e.range:void 0,options:[{value:"today",displayName:o.today},{value:"yesterday",displayName:o.yesterday},{value:"last7Days",displayName:o.last7Days},{value:"last30Days",displayName:o.last30Days},{value:"custom",displayName:o.custom}]},n.handleFromDateChange=n.handleFromDateChange.bind(n),n.handleToDateChange=n.handleToDateChange.bind(n),n.handleOptionClick=n.handleOptionClick.bind(n),n}return a.b(e,t),e.prototype.render=function(t){var e={hide:"custom"!==this.props.selectedOption,"margin-left-1":!0,"margin-right-0":!0,date__selector:!0,"date__selector--hide":"custom"!==this.props.selectedOption};return t("div",null,t(c.a,{key:"date-range-static-toggles",options:this.state.options,selectedOption:this.props.selectedOption,customRange:this.state.customRange,handleOptionClick:this.handleOptionClick}),t("div",{classes:e},t("label",null,o.from,t("div",{class:"date-selector__pick-wrapper"},t(i.a,{key:"from-picker-"+this.state.uid,onDateChange:this.handleFromDateChange,value:this.state.customStart,constraints:this.state.customEnd?{max:this.state.customEnd}:void 0}))),t("label",null,o.to,t("div",{class:"date-selector__pick-wrapper"},t(i.a,{key:"to-picker-"+this.state.uid,onDateChange:this.handleToDateChange,value:this.state.customEnd,constraints:this.state.customStart?{min:this.state.customStart}:void 0})))))},e.prototype.handleFromDateChange=function(t){this.state.customEnd?(this.setState({customStart:t,customRange:{start:t.getTime(),end:this.state.customEnd.getTime()}}),this.props.onDateRangeSelect("custom",Object(u.a)("custom",this.state.customRange))):this.setState({customStart:t})},e.prototype.handleToDateChange=function(t){this.state.customStart?(this.setState({customEnd:t,customRange:{start:this.state.customStart.getTime(),end:t.getTime()}}),this.props.onDateRangeSelect("custom",Object(u.a)("custom",this.state.customRange))):this.setState({customEnd:t})},e.prototype.handleOptionClick=function(t){this.props.selectedOption===t?this.props.onDateRangeSelect():this.props.onDateRangeSelect(t,Object(u.a)(t,this.state.customRange))},e}(s.Component);e.default=l},29:function(t,e){t.exports=a},5:function(e,n){e.exports=t}})});