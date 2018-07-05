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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../Graphic","../core/Collection","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./graphics/controllers/MemoryController","./mixins/ScaleRangeLayer","../symbols/support/ElevationInfo"],function(e,r,t,o,i,n,p,a,s,c,l,y,h){return function(r){function c(e){var t=r.call(this)||this;return t.elevationInfo=null,t.screenSizePerspectiveEnabled=!0,t.type="graphics",t.graphics=new(p.ofType(n)),t}return t(c,r),c.prototype.destroy=function(){this.removeAll()},Object.defineProperty(c.prototype,"graphics",{set:function(e){var r=this,t=this._get("graphics");if(t)return t.removeAll(),void t.addMany(e);e&&(e.forEach(function(e){e.layer=r}),e.on("change",function(e){for(var t=0,o=e.added;t<o.length;t++){var i=o[t];i.layer=r}for(var n=0,p=e.removed;n<p.length;n++){var i=p[n];i.layer=null}}),this._set("graphics",e))},enumerable:!0,configurable:!0}),c.prototype.add=function(e){return this.graphics.add(e),this},c.prototype.addMany=function(e){return this.graphics.addMany(e),this},c.prototype.removeAll=function(){return this.graphics.removeAll(),this},c.prototype.createGraphicsController=function(e){return a.resolve(new l(i({},e.options,{layer:this,layerView:e.layerView,graphics:this.graphics})))},c.prototype.remove=function(e){this.graphics.remove(e)},c.prototype.removeMany=function(e){this.graphics.removeMany(e)},c.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return a.create(function(r){return e(["../views/2d/layers/GraphicsLayerView2D"],r)});case"3d":return a.create(function(r){return e(["../views/3d/layers/GraphicsLayerView3D"],r)})}},c.prototype.graphicChanged=function(e){this.emit("graphic-update",e)},o([s.property({type:h})],c.prototype,"elevationInfo",void 0),o([s.property({type:p.ofType(n)})],c.prototype,"graphics",null),o([s.property()],c.prototype,"screenSizePerspectiveEnabled",void 0),o([s.property({readOnly:!0})],c.prototype,"type",void 0),c=o([s.subclass("esri.layers.GraphicsLayer")],c)}(s.declared(c,y))});