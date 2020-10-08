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

define(["require","exports","tslib","../../../core/has","./DisplayObject","../../layers/effects/EffectList"],(function(t,e,i,n,r,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Container=void 0;var o=n("mapview-transitions-duration"),l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._childrenSet=new Set,e.children=[],e._effectList=null,e}return i.__extends(e,t),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this._blendMode},set:function(t){this._blendMode=t,this.requestRender()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clips",{get:function(){return this._clips},set:function(t){this._clips=t,this.children.forEach((function(e){return e.clips=t}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"computedEffects",{get:function(){var t,e;return null!==(e=null===(t=this._effectList)||void 0===t?void 0:t.effects)&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"effect",{get:function(){var t,e;return null!==(e=null===(t=this._effectList)||void 0===t?void 0:t.effect)&&void 0!==e?e:""},set:function(t){(this._effectList||t)&&(this._effectList||(this._effectList=new s.default(o)),this._effectList.effect=t,this.requestRender())},enumerable:!1,configurable:!0}),e.prototype.updateTransitionProperties=function(e){t.prototype.updateTransitionProperties.call(this,e),this._effectList&&(this._effectList.transitionStep(e),this._effectList.transitioning&&this.requestRender())},e.prototype.doRender=function(t){var e=this.createRenderParams(t);this.renderChildren(e)},e.prototype.addChild=function(t){return this.addChildAt(t,this.children.length)},e.prototype.addChildAt=function(t,e){if(void 0===e&&(e=this.children.length),!t)return t;if(this.contains(t))return t;var i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t},e.prototype.contains=function(t){return this._childrenSet.has(t)},e.prototype.removeAllChildren=function(){this._childrenSet.clear();for(var t=0,e=this.children;t<e.length;t++){var i=e[t];this!==this.stage&&(i.clips=null),i.stage=null,i.parent=null}this.children.length=0},e.prototype.removeChild=function(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t},e.prototype.removeChildAt=function(t){var e;return t<0||t>=this.children.length?null:(e=this.children.splice(t,1)[0],this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e)},e.prototype.sortChildren=function(t){return this.children.sort(t)},e.prototype.onAttach=function(){t.prototype.onAttach.call(this);for(var e=this.stage,i=0,n=this.children;i<n.length;i++){n[i].stage=e}},e.prototype.onDetach=function(){t.prototype.onDetach.call(this);for(var e=0,i=this.children;e<i.length;e++){i[e].stage=null}},e.prototype.renderChildren=function(t){for(var e=this.children,i=e.length,n=0;n<i;n++)e[n].processRender(t)},e.prototype.createRenderParams=function(t){return i.__assign(i.__assign({},t),{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition})},e}(r.DisplayObject);e.Container=l}));