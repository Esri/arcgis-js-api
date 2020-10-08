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

define(["require","exports","../../../core/maybe","../../../core/libs/gl-matrix-2/vec4f64"],(function(e,t,i,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextureReference=void 0;var n=function(){function e(e){this._getFadeDuration=e,this._fadeStart=0,this._delayedTime=0}return e.prototype.clear=function(){this._current=i.destroyMaybe(this._current),this._next=i.destroyMaybe(this._next),this._waiting=i.destroyMaybe(this._waiting),this._delayed=i.destroyMaybe(this._delayed)},Object.defineProperty(e.prototype,"current",{get:function(){if(i.isNone(this._current))return null;if(!this._isFading){var e=this._delayed||this._waiting||this._next||this._current;e!==this._current&&(this._current=null,this.clear(),this._current=e)}var t=performance.now();if(i.isSome(this._delayed)&&t>=this._delayedTime&&(this._push(this._delayed,0),this._delayed=null),i.isSome(this._next)){var r=this._fadeDuration;t-this._fadeStart>=r&&(i.destroyMaybe(this._current),this._current=this._next,this._next=this._waiting,this._waiting=null,this._fadeStart=t)}return this._current},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"next",{get:function(){return this._next},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fadeFactor",{get:function(){if(i.isNone(this._next))return 1;var e=performance.now()-this._fadeStart,t=this._fadeDuration;return e>t?0:1-e/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isFading",{get:function(){return i.isSome(this._next)||i.isSome(this._delayed)},enumerable:!1,configurable:!0}),e.prototype.push=function(e,t,r,n,a){void 0===a&&(a=0),this._delayed=i.destroyMaybe(this._delayed);var o=i.isSome(e)?new s(e,t,r,n):null;this._push(o,a)},e.prototype._push=function(e,t){if(this._isFading||this.clear(),!i.isNone(this._current)){var r=performance.now();return 0!==t?(this._delayed=e,void(this._delayedTime=r+t)):i.isNone(this._next)?(this._next=e,void(this._fadeStart=r)):void(i.isNone(e)||(i.destroyMaybe(this._waiting),this._waiting=e))}this._current=e},Object.defineProperty(e.prototype,"_fadeDuration",{get:function(){return i.isNone(this._waiting)?this._getFadeDuration():.5*this._getFadeDuration()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"_isFading",{get:function(){return this._getFadeDuration()>0},enumerable:!1,configurable:!0}),e}();t.default=n;var s=function(){function e(e,t,i,n){this.texture=e,e.retain(),this.offsetAndScale=r.vec4f64.fromValues(t,i,n,n)}return e.prototype.destroy=function(){this.texture.release()},e}();t.TextureReference=s}));