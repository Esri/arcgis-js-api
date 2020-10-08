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

define(["require","exports","tslib","../core/accessorSupport/decorators","./Layer","./mixins/BlendLayer","./mixins/ScaleRangeLayer","../support/GraphicsCollection","../symbols/support/ElevationInfo"],(function(e,t,r,o,p,i,n,a,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.elevationInfo=null,r.graphics=new a.default,r.screenSizePerspectiveEnabled=!0,r.type="graphics",r}return r.__extends(t,e),t.prototype.destroy=function(){this.removeAll()},t.prototype.add=function(e){return this.graphics.add(e),this},t.prototype.addMany=function(e){return this.graphics.addMany(e),this},t.prototype.removeAll=function(){return this.graphics.removeAll(),this},t.prototype.remove=function(e){this.graphics.remove(e)},t.prototype.removeMany=function(e){this.graphics.removeMany(e)},t.prototype.on=function(t,r){return e.prototype.on.call(this,t,r)},t.prototype.graphicChanged=function(e){this.emit("graphic-update",e)},r.__decorate([o.property({type:s})],t.prototype,"elevationInfo",void 0),r.__decorate([o.property(a.graphicsCollectionProperty)],t.prototype,"graphics",void 0),r.__decorate([o.property({type:["show","hide"]})],t.prototype,"listMode",void 0),r.__decorate([o.property()],t.prototype,"screenSizePerspectiveEnabled",void 0),r.__decorate([o.property({readOnly:!0})],t.prototype,"type",void 0),t=r.__decorate([o.subclass("esri.layers.GraphicsLayer")],t)}(i.BlendLayer(n.ScaleRangeLayer(p)))}));