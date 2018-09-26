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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators"],function(e,r,t,o,s,p){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshTimestamp=null,r}return t(r,e),r.prototype.refresh=function(e){void 0===e&&(e=Date.now()),this._set("refreshTimestamp",e),this.doRefresh&&this.doRefresh()},o([p.property()],r.prototype,"layer",void 0),o([p.aliasOf("layer.refreshInterval")],r.prototype,"refreshInterval",void 0),o([p.property({readOnly:!0})],r.prototype,"refreshTimestamp",void 0),r=o([p.subclass("esri.layers.mixins.RefreshableLayerView")],r)}(p.declared(s))});