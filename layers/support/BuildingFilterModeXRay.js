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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","./BuildingFilterMode"],(function(e,r,t,o,p,n){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="x-ray",r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n},o([p.property({type:["x-ray"],readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),r=n=o([p.subclass("esri.layers.support.BuildingFilterModeXRay")],r)}(p.declared(n))}));