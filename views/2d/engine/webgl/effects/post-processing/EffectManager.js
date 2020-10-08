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

define(["require","exports","tslib","@dojo/framework/shim/Promise"],(function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EffectManager=void 0;var n={colorize:function(){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t,r){e(["./Colorize"],t,r)}))];case 1:return[2,new(t.sent().Colorize)]}}))}))},blur:function(){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t,r){e(["./Blur"],t,r)}))];case 1:return[2,new(t.sent().Blur)]}}))}))},bloom:function(){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t,r){e(["./Bloom"],t,r)}))];case 1:return[2,new(t.sent().Bloom)]}}))}))},opacity:function(){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t,r){e(["./Opacity"],t,r)}))];case 1:return[2,new(t.sent().Opacity)]}}))}))},"drop-shadow":function(){return r.__awaiter(void 0,void 0,void 0,(function(){return r.__generator(this,(function(t){switch(t.label){case 0:return[4,new Promise((function(t,r){e(["./DropShadow"],t,r)}))];case 1:return[2,new(t.sent().DropShadow)]}}))}))}},o=function(){function e(e){this._requestRender=e,this._effectMap=new Map,this._effectPromiseMap=new Map}return e.prototype.dispose=function(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach((function(e){return e.dispose()})),this._effectMap.clear(),this._effectPromiseMap.clear()},e.prototype.getPostProcessingEffects=function(e){if(!e||0===e.length)return[];for(var t=[],r=0,n=e;r<n.length;r++){var o=n[r],i=this._getPostProcessingEffectName(o),s=this._effectMap.get(i);s?t.push({postProcessingEffect:s,effect:o}):this._enablePostProcessingEffect(i)}return t},e.prototype._getPostProcessingEffectName=function(e){return"colorMatrix"in e?"colorize":"radial-blur"===e.type?"blur":e.type},e.prototype._enablePostProcessingEffect=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,this._loadPostProcessingEffect(e)];case 1:return t=r.sent(),this._requestRender?(this._effectMap.set(e,t),this._requestRender.requestRender(),[2]):[2]}}))}))},e.prototype._loadPostProcessingEffect=function(e){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(t){return this._effectPromiseMap.has(e)||this._effectPromiseMap.set(e,n[e]()),[2,this._effectPromiseMap.get(e)]}))}))},e}();t.EffectManager=o}));