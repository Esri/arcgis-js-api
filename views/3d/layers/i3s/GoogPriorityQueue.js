// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

// Copyright 2011 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

define([],function(){var t={};return function(){function t(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var r=Object.prototype.toString.call(t);if("[object Window]"==r)return"object";if("[object Array]"==r||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==r||"undefined"!=typeof t.call&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&"undefined"==typeof t.call)return"object";return e}function e(t,e){var r=t.split("."),o=p;r[0]in o||!o.execScript||o.execScript("var "+r[0]);for(var n;r.length&&(n=r.shift());)r.length||void 0===e?o=o[n]?o[n]:o[n]={}:o[n]=e}function r(t,e){this.d=t,this.b=e}function o(e){if("array"!=t(e))for(var r=e.length-1;r>=0;r--)delete e[r];e.length=0}function n(t){if(this.a=[],t)t:{var e,o;if(t instanceof n){e=t.a,o=[];for(var u=e.length,p=0;u>p;p++)o.push(e[p].getKey());e=o,o=t.a;for(var u=[],p=o.length,f=0;p>f;f++)u.push(o[f].b);if(o=u,0>=t.a.length){for(t=this.a,u=0;u<e.length;u++)t.push(new r(e[u],o[u]));break t}}else{e=[],u=0;for(p in t)e[u++]=p;u=[],p=0;for(o in t)u[p++]=t[o];o=u}for(u=0;u<e.length;u++)i(this,e[u],o[u])}}function i(t,e,o){var n=t.a;for(n.push(new r(e,o)),e=n.length-1,t=t.a,o=t[e];e>0&&(n=e-1>>1,t[n].getKey()>o.getKey());)t[e]=t[n],e=n;t[e]=o}function u(){n.call(this)}var p=this;r.prototype.getKey=function(){return this.d},r.prototype.c=function(){return new r(this.d,this.b)},n.prototype.remove=function(){var t=this.a,e=t.length,r=t[0];if(!(0>=e)){if(1==e)o(t);else{t[0]=t.pop();for(var t=0,e=this.a,n=e.length,i=e[t];n>>1>t;){var u=2*t+1,p=2*t+2,u=n>p&&e[p].getKey()<e[u].getKey()?p:u;if(e[u].getKey()>i.getKey())break;e[t]=e[u],t=u}e[t]=i}return r.b}},n.prototype.c=function(){return new n(this)},n.prototype.g=function(){return this.a.length},n.prototype.h=function(){return 0==this.a.length},n.prototype.clear=function(){o(this.a)},function(){function t(){}var e=n;t.prototype=e.prototype,u.i=e.prototype,u.prototype=new t}(),u.prototype.f=function(t,e){i(this,t,e)},u.prototype.e=function(){return this.remove()},e("goog.structs.PriorityQueue",u),e("goog.structs.PriorityQueue.prototype.enqueue",u.prototype.f),e("goog.structs.PriorityQueue.prototype.dequeue",u.prototype.e),e("goog.structs.PriorityQueue.prototype.isEmpty",u.prototype.h),e("goog.structs.PriorityQueue.prototype.clear",u.prototype.clear),e("goog.structs.PriorityQueue.prototype.clone",u.prototype.c),e("goog.structs.PriorityQueue.prototype.getCount",u.prototype.g)}.bind(t)(),t});