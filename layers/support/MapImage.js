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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/paramHelper","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent"],function(e,t,r,o,p,i,l,n){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.extent=null,t.height=null,t.href=null,t.opacity=1,t.rotation=0,t.scale=null,t.visible=!0,t.width=null,t}return r(t,e),o([l.property({type:n})],t.prototype,"extent",void 0),o([l.property()],t.prototype,"height",void 0),o([l.property()],t.prototype,"href",void 0),o([l.property()],t.prototype,"opacity",void 0),o([l.property()],t.prototype,"rotation",void 0),o([l.property()],t.prototype,"scale",void 0),o([l.property()],t.prototype,"visible",void 0),o([l.property()],t.prototype,"width",void 0),t=o([l.subclass("esri.layer.support.MapImage")],t)}(l.declared(i))});