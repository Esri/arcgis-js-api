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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","./Layer"],function(e,r,a,t,o,s){var c=function(e){function r(){e.apply(this,arguments)}return a(r,e),r.prototype.getImageUrl=function(e,r){},t([o.shared({"2d":"../views/2d/layers/MapImageLayerView2D","3d":"../views/3d/layers/DynamicLayerView3D"})],r.prototype,"viewModulePaths",void 0),r=t([o.subclass("esri.layers.DynamicLayer")],r)}(o.declared(s));return c});