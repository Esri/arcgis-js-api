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

define(["require","exports","tslib","../../../../../core/Evented","../../../../../core/maybe","./config","./core","./jobs","./SymbolDeclutterer","./SymbolRepository","./util"],(function(t,e,i,o,s,r,l,a,n,c,_){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SymbolFader=void 0;var u=function(t){function e(e){var i=t.call(this)||this;return i.layers=e,i._tileToHandle=new Map,i._viewState={scale:0,rotation:0,center:[0,0],size:[0,0]},i._declutterViewState={scale:0,rotation:0,center:[0,0],size:[0,0]},i._completed=!1,i._tileForest=new _.TileForest,i._symbolRepository=new c.SymbolRepository(4096,i._tileForest,(function(){return new l.VTLUniqueSymbol})),i._symbolDeclutterer=new n.SymbolDeclutterer(i._tileForest,i._symbolRepository,(function(t,e,o){return new a.CollisionJob(t,e,o,i.layers,i._zoom,i._viewState.rotation)}),(function(t,e){t.allSymbolsFadingOut=!0,t.lastOpacityUpdate=e,_.writeOpacityToBuffers(t,e,!0),t.decluttered=!0,t.requestRender()})),i}return i.__extends(e,t),e.prototype.addTile=function(t){var e=this;this._tileForest.has(t)||(t.decluttered=!1,this._tileForest.add(t),this._tileToHandle.set(t,t.on("symbols-changed",(function(){e._symbolRepository.addTile(t,!1),e.restartDeclutter()}))),this._symbolRepository.addTile(t),this.restartDeclutter())},e.prototype.removeTile=function(t){this._tileForest.has(t)&&(this._symbolRepository.removeTile(t),this.restartDeclutter(),this._tileToHandle.get(t).remove(),this._tileToHandle.delete(t),this._tileForest.remove(t))},e.prototype.update=function(t,e){return this._zoom=t,this._viewState={scale:e.scale,rotation:e.rotation,center:[e.center[0],e.center[1]],size:[e.size[0],e.size[1]]},this._continueDeclutter(),this._completed},e.prototype.restartDeclutter=function(){this._completed=!1,this._symbolDeclutterer.restart(),this._notifyUnstable()},Object.defineProperty(e.prototype,"stale",{get:function(){return this._zoom!==this._declutterZoom||this._viewState.size[0]!==this._declutterViewState.size[0]||this._viewState.size[1]!==this._declutterViewState.size[1]||this._viewState.scale!==this._declutterViewState.scale||this._viewState.rotation!==this._declutterViewState.rotation},enumerable:!1,configurable:!0}),e.prototype._continueDeclutter=function(){this._completed&&!this.stale||(this._symbolDeclutterer.running||(this._declutterZoom=this._zoom,this._declutterViewState.center[0]=this._viewState.center[0],this._declutterViewState.center[1]=this._viewState.center[1],this._declutterViewState.rotation=this._viewState.rotation,this._declutterViewState.scale=this._viewState.scale,this._declutterViewState.size[0]=this._viewState.size[0],this._declutterViewState.size[1]=this._viewState.size[1],this._symbolDeclutterer.restart()),this._symbolDeclutterer.setScreenSize(this._viewState.size[0],this._viewState.size[1]),this._completed=this._symbolDeclutterer.continue(r.DECLUTTER_BUDGET),this._completed&&this._scheduleNotifyStable())},e.prototype._scheduleNotifyStable=function(){var t=this;s.isSome(this._stableNotificationHandle)&&clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=setTimeout((function(){t._stableNotificationHandle=null,t.emit("fade-complete")}),1.5*r.FADE_DURATION)},e.prototype._notifyUnstable=function(){s.isSome(this._stableNotificationHandle)&&(clearTimeout(this._stableNotificationHandle),this._stableNotificationHandle=null),this.emit("fade-start")},e}(o);e.SymbolFader=u}));