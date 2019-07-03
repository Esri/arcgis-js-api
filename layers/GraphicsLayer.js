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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ScaleRangeLayer","../support/GraphicsCollection","../symbols/support/ElevationInfo"],function(e,r,t,o,p,i,n,s,a,c,u,y,l){return function(r){function p(e){var t=r.call(this)||this;return t.elevationInfo=null,t.graphics=new y.default,t.screenSizePerspectiveEnabled=!0,t.type="graphics",t}return t(p,r),p.prototype.destroy=function(){this.removeAll()},p.prototype.add=function(e){return this.graphics.add(e),this},p.prototype.addMany=function(e){return this.graphics.addMany(e),this},p.prototype.removeAll=function(){return this.graphics.removeAll(),this},p.prototype.remove=function(e){this.graphics.remove(e)},p.prototype.removeMany=function(e){this.graphics.removeMany(e)},p.prototype.importLayerViewModule=function(r){return n(this,void 0,void 0,function(){return i(this,function(t){switch(r.type){case"2d":return[2,s.create(function(r){return e(["../views/2d/layers/GraphicsLayerView2D"],r)})];case"3d":return[2,s.create(function(r){return e(["../views/3d/layers/GraphicsLayerView3D"],r)})]}return[2]})})},p.prototype.graphicChanged=function(e){this.emit("graphic-update",e)},o([a.property({type:l})],p.prototype,"elevationInfo",void 0),o([a.property(y.graphicsCollectionProperty)],p.prototype,"graphics",void 0),o([a.property({type:["show","hide"]})],p.prototype,"listMode",void 0),o([a.property()],p.prototype,"screenSizePerspectiveEnabled",void 0),o([a.property({readOnly:!0})],p.prototype,"type",void 0),p=o([a.subclass("esri.layers.GraphicsLayer")],p)}(a.declared(c,u))});