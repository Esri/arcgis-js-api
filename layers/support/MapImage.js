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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators","../../geometry/Extent"],(function(t,e,o,r,p,i){"use strict";return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.extent=null,e.height=null,e.href=null,e.opacity=1,e.rotation=0,e.scale=null,e.visible=!0,e.width=null,e}return o.__extends(e,t),o.__decorate([p.property({type:i})],e.prototype,"extent",void 0),o.__decorate([p.property()],e.prototype,"height",void 0),o.__decorate([p.property()],e.prototype,"href",void 0),o.__decorate([p.property()],e.prototype,"opacity",void 0),o.__decorate([p.property()],e.prototype,"rotation",void 0),o.__decorate([p.property()],e.prototype,"scale",void 0),o.__decorate([p.property()],e.prototype,"visible",void 0),o.__decorate([p.property()],e.prototype,"width",void 0),e=o.__decorate([p.subclass("esri.layer.support.MapImage")],e)}(r.JSONSupport)}));