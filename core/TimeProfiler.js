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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports"],function(t,e){var n=function(){function t(t,e){void 0===e&&(e=.9),this._alpha=.9,this._name=t,this._alpha=e,this.reset()}return t.prototype.reset=function(){this._count=0,this._sum=0,this._smooth=0,this._min=1/0,this._max=0},Object.defineProperty(t.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"count",{get:function(){return this._count},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"average",{get:function(){return this._count>0?this._sum/this._count:0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"smooth",{get:function(){return this._smooth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"min",{get:function(){return this._min},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"max",{get:function(){return this._max},enumerable:!0,configurable:!0}),t.prototype.begin=function(){this._startTime=performance.now()},t.prototype.end=function(){var t=performance.now()-this._startTime;this._count+=1,this._sum+=t,this._smooth=this._alpha*t+(1-this._alpha)*this._smooth,this._min=Math.min(this._min,t),this._max=Math.max(this._max,t)},t.prototype.toJSON=function(){return{name:this.name,count:this.count,average:this.average,smooth:this.smooth,min:this.min,max:this.max}},t}();return function(t){function e(e){return e in a||(a[e]=new t(e)),a[e]}function n(t){e(t).begin()}function o(t,n){void 0===n&&(n=!0),e(t).end();var o=performance.now();!n||t in s&&!(o>=s[t]+u)||(i(t),s[t]=o)}function i(t){console.log(e(t).toJSON())}function r(){for(var t in a)i(t)}var u=1e3,a={},s={};t.get=e,t.begin=n,t.end=o,t.log=i,t.logAll=r}(n||(n={})),n});