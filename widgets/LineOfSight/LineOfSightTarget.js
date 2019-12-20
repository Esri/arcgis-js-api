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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../Graphic","../../core/Accessor","../../core/accessorSupport/decorators","../../geometry/Point"],function(e,t,r,o,i,p,c,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.location=null,r.intersectedLocation=null,r.intersectedGraphic=null,r.visible=void 0,r}return o(t,e),r([c.property({type:n})],t.prototype,"location",void 0),r([c.property({type:n})],t.prototype,"intersectedLocation",void 0),r([c.property({type:i})],t.prototype,"intersectedGraphic",void 0),r([c.property({type:Boolean})],t.prototype,"visible",void 0),t=r([c.subclass("esri.widgets.lineOfSight.LineOfSightTarget")],t)}(c.declared(p))});