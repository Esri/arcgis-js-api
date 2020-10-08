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

define(["require","exports","tslib","../../../colorUtils","./effects","./parser"],(function(t,e,r,s,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var f=function(){function t(t){void 0===t&&(t=200),this.duration=t,this._from=null,this._to=null,this._toNumEffects=0,this._time=0,this._effects=[],this._effect=""}return Object.defineProperty(t.prototype,"effects",{get:function(){return this._effects},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"effect",{get:function(){return this._effect},set:function(t){if(this._effect=t,t){var e=n.parse(t);e.error?(this._from=this._to=null,this._toNumEffects=0,this._effects=[]):this._transitionTo(e.effects)}else this._transitionTo([])},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"transitioning",{get:function(){return null!==this._to},enumerable:!1,configurable:!0}),t.prototype.transitionStep=function(t){if(this._to){this._time+=t;for(var e=Math.min(1,this._time/this.duration),r=0;r<this._effects.length;r++){var s=this._effects[r],i=this._from[r],n=this._to[r];s.interpolate(i,n,e)}1===e&&(this._effects.length=this._toNumEffects,this._from=this._to=null,this._toNumEffects=0)}},t.prototype._transitionTo=function(t){var e=this._effects,r=e.length>t.length?e:t,s=e.length>t.length?t:e;if(s.every((function(t,e){return t.type===r[e].type}))){this._toNumEffects=t.length;for(var i=s.length;i<r.length;i++)s.push(o(r[i].type));this._from=e.map((function(t){return t.clone()})),this._to=t,this._time=0}else this._from=this._to=null,this._toNumEffects=0,this._effects=t},t}();function o(t){switch(t){case"grayscale":case"sepia":case"invert":return new i.ColorMatrixEffect(t,0);case"saturate":case"brightness":case"contrast":return new i.ColorMatrixEffect(t,1);case"opacity":return new i.OpacityEffect(1);case"hue-rotate":return new i.HueRotateEffect(0);case"radial-blur":case"blur":return new i.BlurEffect(t,0);case"drop-shadow":return new i.DropShadowEffect(0,0,0,r.__spreadArrays(s.getNamedColor("transparent")));case"bloom":return new i.BloomEffect(0,0,0)}}e.default=f}));