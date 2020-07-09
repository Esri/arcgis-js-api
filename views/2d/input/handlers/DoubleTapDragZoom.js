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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../core/compilerUtils","../../../input/InputHandler"],(function(e,t,a,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){function t(t,a,r){var i=e.call(this,!0)||this;return i.view=t,i.pointerType=a,i.registerIncoming("double-tap-drag",r,(function(e){return i._handleDoubleTapDrag(e)})),i}return a.__extends(t,e),t.prototype._handleDoubleTapDrag=function(e){var t=e.data;if(t.pointerType===this.pointerType){e.stopPropagation();var a=t.action,i=t.delta,n=this.view,s=n.mapViewNavigation;switch(a){case"begin":var o=n.scale;this._startScale=o,this._currentScale=o,this._previousDelta=i,s.begin();break;case"update":if(this._previousDelta.y===i.y)return;this._previousDelta=i;var c=Math.pow(1.015,i.y),l=this._startScale*c,p=l/this._currentScale;s.setViewpointImmediate(p),this._currentScale=l;break;case"end":var u=n.constraints,h=u.effectiveLODs;if(!u.snapToZoom||!h)return void s.end();var d=u.snapScale(this._currentScale),v=(i.y>0?Math.max(d,u.snapToPreviousScale(this._startScale)):Math.min(d,u.snapToNextScale(this._startScale)))/this._currentScale;s.zoom(v);break;default:r.neverReached(a)}}},t}(i.InputHandler);t.DoubleTapDragZoom=n}));