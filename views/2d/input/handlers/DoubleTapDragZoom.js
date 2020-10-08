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

define(["require","exports","tslib","../../../../core/compilerUtils","../../../input/InputHandler"],(function(e,t,a,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DoubleTapDragZoom=void 0;var n=function(e){function t(t,a,r){var i=e.call(this,!0)||this;return i.view=t,i.pointerType=a,i.registerIncoming("double-tap-drag",r,(function(e){return i._handleDoubleTapDrag(e)})),i}return a.__extends(t,e),t.prototype._handleDoubleTapDrag=function(e){var t=e.data;if(t.pointerType===this.pointerType){e.stopPropagation();var a=t.action,i=t.delta,n=this.view,o=n.mapViewNavigation;switch(a){case"begin":var s=n.scale;this._startScale=s,this._currentScale=s,this._previousDelta=i,o.begin();break;case"update":if(this._previousDelta.y===i.y)return;this._previousDelta=i;var c=Math.pow(1.015,i.y),l=this._startScale*c,u=l/this._currentScale;o.setViewpointImmediate(u),this._currentScale=l;break;case"end":var p=n.constraints,h=p.effectiveLODs;if(!p.snapToZoom||!h)return void o.end();var d=p.snapScale(this._currentScale),v=(i.y>0?Math.max(d,p.snapToPreviousScale(this._startScale)):Math.min(d,p.snapToNextScale(this._startScale)))/this._currentScale;o.zoom(v);break;default:r.neverReached(a)}}},t}(i.InputHandler);t.DoubleTapDragZoom=n}));