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

define(["require","exports","../../../../core/promiseUtils"],(function(t,o,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Loadable=void 0;var l=function(){function t(){this._abortController=null,this._loadStatus=0,this._loadError=null,this._loader=null,this.logger=null}return Object.defineProperty(t.prototype,"loadStatus",{get:function(){return this._loadStatus},enumerable:!1,configurable:!0}),t.prototype.load=function(t,o){var l=this;return 1===this._loadStatus?(t&&t(),this._loader):2===this._loadStatus?(o&&o(this._loadError),this._loader):(this._loader||(this._abortController=r.createAbortController(),this._loader=this.doLoad(this._abortController.signal).then((function(){l._abortController=null,l._loadStatus=1}),(function(t){throw l._loadError=t,l._abortController=null,l._loadStatus=2,!r.isAbortError(t)&&l.logger&&t.message&&l.logger.warn(t.message),t}))),this._loader.then(t,o).catch((function(){})),this._loader)},t.prototype.abortLoad=function(){this._abortController?(this._abortController.abort(),this._abortController=null):0===this._loadStatus&&(this._loadStatus=2),this._loader=null},t}();o.Loadable=l}));