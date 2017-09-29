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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/accessorSupport/decorators","../../core/JSONSupport","../../geometry/Extent"],function(e,r,t,o,p,i,l,n){var y=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.extent=null,r.height=null,r.href=null,r.opacity=1,r.rotation=0,r.scale=null,r.visible=!0,r.width=null,r}return t(r,e),o([i.property({type:n})],r.prototype,"extent",void 0),o([i.property()],r.prototype,"height",void 0),o([i.property()],r.prototype,"href",void 0),o([i.property()],r.prototype,"opacity",void 0),o([i.property()],r.prototype,"rotation",void 0),o([i.property()],r.prototype,"scale",void 0),o([i.property()],r.prototype,"visible",void 0),o([i.property()],r.prototype,"width",void 0),r=o([i.subclass("esri.layer.support.MapImage")],r)}(i.declared(l));return y});