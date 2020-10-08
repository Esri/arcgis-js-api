// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){"use strict";var n=function(){function t(t,e){void 0===e&&(e=.9),this._alpha=.9,this._startTime=0,this._count=0,this._sum=0,this._smooth=0,this._min=0,this._max=0,this._name=t,this._alpha=e,this.reset()}return t.prototype.reset=function(){this._count=0,this._sum=0,this._smooth=0,this._min=1/0,this._max=0},Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"average",{get:function(){return this._count>0?this._sum/this._count:0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"smooth",{get:function(){return this._smooth},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this._min},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this._max},enumerable:!1,configurable:!0}),t.prototype.begin=function(){this._startTime=performance.now()},t.prototype.end=function(){var t=performance.now()-this._startTime;this._count+=1,this._sum+=t,this._smooth=this._alpha*t+(1-this._alpha)*this._smooth,this._min=Math.min(this._min,t),this._max=Math.max(this._max,t)},t.prototype.toJSON=function(){return{name:this.name,count:this.count,average:this.average,smooth:this.smooth,min:this.min,max:this.max}},t}();return function(t){var e={},n={};function i(n){return n in e||(e[n]=new t(n)),e[n]}function o(t){console.log(i(t).toJSON())}t.get=i,t.begin=function(t){i(t).begin()},t.end=function(t,e){void 0===e&&(e=!0),i(t).end();var r=performance.now();!e||t in n&&!(r>=n[t]+1e3)||(o(t),n[t]=r)},t.log=o,t.logAll=function(){for(var t in e)o(t)}}(n||(n={})),n}));