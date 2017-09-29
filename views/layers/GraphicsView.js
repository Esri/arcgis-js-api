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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Collection","../../Graphic"],function(r,e,o,p,t,c,s,i){var n=function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.graphics=null,e.renderer=null,e.view=null,e}return o(e,r),p([t.property({type:s.ofType(i)})],e.prototype,"graphics",void 0),p([t.property()],e.prototype,"renderer",void 0),p([t.property()],e.prototype,"view",void 0),e=p([t.subclass("esri.views.layers.GraphicsView")],e)}(t.declared(c));return n});