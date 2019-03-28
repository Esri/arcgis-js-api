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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/promiseUtils","../core/accessorSupport/decorators","./Layer","./mixins/ScaleRangeLayer","../support/GraphicsCollection","../symbols/support/ElevationInfo"],function(e,r,t,o,p,i,n,s,a,c,y){return function(r){function p(e){var t=r.call(this)||this;return t.elevationInfo=null,t.graphics=new c.default,t.screenSizePerspectiveEnabled=!0,t.type="graphics",t}return t(p,r),p.prototype.destroy=function(){this.removeAll()},p.prototype.add=function(e){return this.graphics.add(e),this},p.prototype.addMany=function(e){return this.graphics.addMany(e),this},p.prototype.removeAll=function(){return this.graphics.removeAll(),this},p.prototype.remove=function(e){this.graphics.remove(e)},p.prototype.removeMany=function(e){this.graphics.removeMany(e)},p.prototype.importLayerViewModule=function(r){switch(r.type){case"2d":return i.create(function(r){return e(["../views/2d/layers/GraphicsLayerView2D"],r)});case"3d":return i.create(function(r){return e(["../views/3d/layers/GraphicsLayerView3D"],r)})}},p.prototype.graphicChanged=function(e){this.emit("graphic-update",e)},o([n.property({type:y})],p.prototype,"elevationInfo",void 0),o([n.property(c.graphicsCollectionProperty)],p.prototype,"graphics",void 0),o([n.property({type:["show","hide"]})],p.prototype,"listMode",void 0),o([n.property()],p.prototype,"screenSizePerspectiveEnabled",void 0),o([n.property({readOnly:!0})],p.prototype,"type",void 0),p=o([n.subclass("esri.layers.GraphicsLayer")],p)}(n.declared(s,a))});