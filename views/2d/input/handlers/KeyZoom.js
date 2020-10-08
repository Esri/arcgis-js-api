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

define(["require","exports","tslib","../../../../core/compilerUtils","../../../input/InputHandler"],(function(e,o,n,t,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.KeyZoom=void 0;var r=function(e){function o(o,n,t){var i=e.call(this,!0)||this;return i.view=o,i.keys=n,i._keysToZoomAction={},i.registerIncoming("key-down",t,(function(e){return i._handleKeyDown(e)})),n.zoomIn.forEach((function(e){return i._keysToZoomAction[e]=0})),n.zoomOut.forEach((function(e){return i._keysToZoomAction[e]=1})),i}return n.__extends(o,e),o.prototype._handleKeyDown=function(e){this._handleKey(e)},o.prototype._handleKey=function(e){var o=e.modifiers;if(!(o.size>0)||o.has("Shift")){var n=e.data.key;if(n in this._keysToZoomAction){var i=this._keysToZoomAction[n],r=this.view.mapViewNavigation,a=null;switch(i){case 0:a=r.zoomIn();break;case 1:a=r.zoomOut();break;default:return void t.neverReached(i)}r.begin(),a.then((function(){return r.end()})),e.stopPropagation()}}},o}(i.InputHandler);o.KeyZoom=r}));