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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Collection","../../Graphic"],function(e,r,o,t,p,s,c,i){var n=function(e){function r(){e.apply(this,arguments),this.graphics=null,this.renderer=null,this.view=null}return o(r,e),t([p.property({type:c.ofType(i)})],r.prototype,"graphics",void 0),t([p.property()],r.prototype,"renderer",void 0),t([p.property()],r.prototype,"view",void 0),r=t([p.subclass("esri.views.layers.GraphicsView")],r)}(p.declared(s));return n});