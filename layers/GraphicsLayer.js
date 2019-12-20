// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../core/tsSupport/generatorHelper","../core/tsSupport/awaiterHelper","../core/accessorSupport/decorators","./Layer","./mixins/ScaleRangeLayer","../support/GraphicsCollection","../symbols/support/ElevationInfo"],function(e,r,t,o,p,i,n,s,a,c,y,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.elevationInfo=null,t.graphics=new y.default,t.screenSizePerspectiveEnabled=!0,t.type="graphics",t}return t(r,e),r.prototype.destroy=function(){this.removeAll()},r.prototype.add=function(e){return this.graphics.add(e),this},r.prototype.addMany=function(e){return this.graphics.addMany(e),this},r.prototype.removeAll=function(){return this.graphics.removeAll(),this},r.prototype.remove=function(e){this.graphics.remove(e)},r.prototype.removeMany=function(e){this.graphics.removeMany(e)},r.prototype.on=function(e,r){return this.inherited(arguments,[e,r])},r.prototype.graphicChanged=function(e){this.emit("graphic-update",e)},o([s.property({type:l})],r.prototype,"elevationInfo",void 0),o([s.property(y.graphicsCollectionProperty)],r.prototype,"graphics",void 0),o([s.property({type:["show","hide"]})],r.prototype,"listMode",void 0),o([s.property()],r.prototype,"screenSizePerspectiveEnabled",void 0),o([s.property({readOnly:!0})],r.prototype,"type",void 0),r=o([s.subclass("esri.layers.GraphicsLayer")],r)}(s.declared(c.ScaleRangeLayer(a)))});