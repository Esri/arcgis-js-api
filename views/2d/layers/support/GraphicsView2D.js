// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/accessorSupport/decorators","../../../../core/Collection","../../../../core/HandleRegistry","../../../../core/promiseUtils","../../../../Graphic","../../../layers/GraphicsView","../../engine/graphics/GFXSurface","../../engine/graphics/GFXGroup","../../engine/graphics/GFXObject"],function(e,r,t,i,s,o,n,a,h,c,p,d,u){var l=function(e){function r(){for(var r=this,t=[],i=0;i<arguments.length;i++)t[i-0]=arguments[i];e.apply(this,t),this._frontGroup=new d,this._handles=new n,this._objects=new Map,this.container=new p,this.container.addChild(this._frontGroup),this.watch("graphics",function(){return r._reset()},!0)}return t(r,e),r.prototype.hitTest=function(e,r){var t=this.container.hitTest(e,r);return t?a.resolve(t.graphic):null},r.prototype._reset=function(){var e=this;this._handles.remove("graphics"),this.graphics&&(this.graphics.forEach(this._add,this),this._handles.add(this.graphics.on("change",function(r){return e._graphicsChangeHandler(r)}),"graphics"))},r.prototype._add=function(e){if(!this._objects.has(e)){var r=new u;r.graphic=e,r.renderingInfo={symbol:e.symbol},this._objects.set(e,r),this._frontGroup.addChild(r)}},r.prototype._remove=function(e){var r=this._objects.get(e);r&&(this._objects["delete"](e),this._frontGroup.removeChild(r))},r.prototype._graphicsChangeHandler=function(e){for(var r=e.added,t=e.removed,i=0,s=r;i<s.length;i++){var o=s[i];this._add(o)}for(var n=0,a=t;n<a.length;n++){var o=a[n];this._remove(o)}},i([s.cast(o.ofType(h))],r.prototype,"graphics",void 0),i([s.property()],r.prototype,"view",void 0),r=i([s.subclass("esri.views.2d.layers.support.GraphicsView2D")],r)}(s.declared(c));return l});