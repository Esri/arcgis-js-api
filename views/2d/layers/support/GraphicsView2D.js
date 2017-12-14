// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Collection","../../../../core/HandleRegistry","../../../../core/promiseUtils","../../../../Graphic","../../../layers/GraphicsView","../../engine/graphics/GFXSurface","../../engine/graphics/GFXGroup","../../engine/graphics/GFXObject"],function(e,r,t,i,o,s,n,a,h,c,p,d,u){var l=function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i._frontGroup=new d,i._handles=new n,i._objects=new Map,i.container=new p,i.container.addChild(i._frontGroup),i.watch("graphics",function(){return i._reset()},!0),i}return t(r,e),r.prototype.hitTest=function(e,r){if(!this.view||!this.view.position)return null;e+=this.view.position[0]-window.pageXOffset,r+=this.view.position[1]-window.pageYOffset;var t=this.container.hitTest(e,r);return t?a.resolve(t.graphic):null},r.prototype._reset=function(){var e=this;this._handles.remove("graphics"),this._objects.forEach(function(r,t){e._frontGroup.removeChild(r)}),this._objects.clear(),this.graphics&&(this.graphics.forEach(this._add,this),this._handles.add(this.graphics.on("change",function(r){return e._graphicsChangeHandler(r)}),"graphics"))},r.prototype._add=function(e){if(!this._objects.has(e)){var r=new u;r.graphic=e,r.renderingInfo={symbol:e.symbol},this._objects.set(e,r),this._frontGroup.addChild(r)}},r.prototype._remove=function(e){var r=this._objects.get(e);r&&(this._objects["delete"](e),this._frontGroup.removeChild(r))},r.prototype._graphicsChangeHandler=function(e){for(var r=e.added,t=e.removed,i=0,o=r;i<o.length;i++){var s=o[i];this._add(s)}for(var n=0,a=t;n<a.length;n++){var s=a[n];this._remove(s)}},i([o.cast(s.ofType(h))],r.prototype,"graphics",void 0),i([o.property()],r.prototype,"view",void 0),r=i([o.subclass("esri.views.2d.layers.support.GraphicsView2D")],r)}(o.declared(c));return l});