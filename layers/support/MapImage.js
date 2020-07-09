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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent"],(function(e,t,o,r,p,i){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.extent=null,t.height=null,t.href=null,t.opacity=1,t.rotation=0,t.scale=null,t.visible=!0,t.width=null,t}return o.__extends(t,e),o.__decorate([p.property({type:i})],t.prototype,"extent",void 0),o.__decorate([p.property()],t.prototype,"height",void 0),o.__decorate([p.property()],t.prototype,"href",void 0),o.__decorate([p.property()],t.prototype,"opacity",void 0),o.__decorate([p.property()],t.prototype,"rotation",void 0),o.__decorate([p.property()],t.prototype,"scale",void 0),o.__decorate([p.property()],t.prototype,"visible",void 0),o.__decorate([p.property()],t.prototype,"width",void 0),t=o.__decorate([p.subclass("esri.layer.support.MapImage")],t)}(r.JSONSupport)}));