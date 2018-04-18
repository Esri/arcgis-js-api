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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Graphic","../../core/Accessor","../../core/Collection","../../core/accessorSupport/decorators"],function(e,r,o,p,t,c,i,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.graphics=null,r.renderer=null,r.view=null,r}return o(r,e),p([s.property({type:i.ofType(t)})],r.prototype,"graphics",void 0),p([s.property()],r.prototype,"renderer",void 0),p([s.property()],r.prototype,"view",void 0),r=p([s.subclass("esri.views.layers.GraphicsView")],r)}(s.declared(c))});