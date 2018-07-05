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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(r,o,e,t,p,c,i){return function(r){function o(){var o=null!==r&&r.apply(this,arguments)||this;return o.color=new p([0,255,255]),o.haloOpacity=1,o.fillOpacity=.5,o}return e(o,r),t([i.property({type:p})],o.prototype,"color",void 0),t([i.property()],o.prototype,"haloOpacity",void 0),t([i.property()],o.prototype,"fillOpacity",void 0),o=t([i.subclass("esri.views.2d.support.HighlightOptions")],o)}(i.declared(c))});