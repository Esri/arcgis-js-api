// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../Graphic","../../../../core/Collection","../../../../core/Handles","../../../../core/promiseUtils","../../../../core/accessorSupport/decorators","../../engine/graphics/GFXGroup","../../engine/graphics/GFXObject","../../engine/graphics/GFXSurface","../../../layers/GraphicsView"],function(e,r,t,i,o,s,n,a,c,h,p,d,l){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=e.apply(this,r)||this;return i._frontGroup=new h,i._handles=new n,i._objects=new Map,i.container=new d,i.container.addChild(i._frontGroup),i.watch("graphics",function(){return i._reset()},!0),i}return t(r,e),r.prototype.hitTest=function(e,r){if(!this.view||!this.view.position)return null;e+=this.view.position[0]-window.pageXOffset,r+=this.view.position[1]-window.pageYOffset;var t=this.container.hitTest(e,r);return t?a.resolve(t.graphic):null},r.prototype.graphicUpdateHandler=function(e){var r=e.graphic,t=e.property,i=e.newValue;if(this._objects.has(r)){var o=this._objects.get(r);switch(t){case"attributes":break;case"geometry":o.graphic=r;break;case"symbol":o.renderingInfo={symbol:i};break;case"visible":o.visible=i}}},r.prototype._reset=function(){var e=this;this._handles.remove("graphics"),this._objects.forEach(function(r,t){e._frontGroup.removeChild(r)}),this._objects.clear(),this.graphics&&(this.graphics.forEach(this._add,this),this._handles.add(this.graphics.on("change",function(r){return e._graphicsChangeHandler(r)}),"graphics"))},r.prototype._add=function(e){if(e&&!this._objects.has(e)){var r=new p;r.graphic=e,r.renderingInfo={symbol:e.symbol},this._objects.set(e,r),this._frontGroup.addChild(r)}},r.prototype._remove=function(e){var r=this._objects.get(e);r&&(this._objects.delete(e),this._frontGroup.removeChild(r))},r.prototype._graphicsChangeHandler=function(e){var r=e.added,t=e.moved,i=e.removed;t.length&&this._reset();for(var o=0,s=r;o<s.length;o++){var n=s[o];this._add(n)}for(var a=0,c=i;a<c.length;a++){var n=c[a];this._remove(n)}},i([c.property(),c.cast(s.ofType(o))],r.prototype,"graphics",void 0),i([c.property()],r.prototype,"view",void 0),r=i([c.subclass("esri.views.2d.layers.support.GraphicsView2D")],r)}(c.declared(l))});