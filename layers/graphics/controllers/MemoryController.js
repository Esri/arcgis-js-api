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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../Graphic","../../../core/Accessor","../../../core/Collection","../../../core/Promise"],function(r,e,o,t,p,i,s,a,c){var l=a.ofType(i),n=function(r){function e(e){var o=r.call(this)||this;return o.updating=!1,o}return o(e,r),e.prototype.normalizeCtorArgs=function(r){return this._set("layer",r.layer),this._set("layerView",r.layerView),this._set("graphics",r.graphics),{}},e}(p.declared(s,c));return t([p.property({readOnly:!0})],n.prototype,"layer",void 0),t([p.property({readOnly:!0})],n.prototype,"layerView",void 0),t([p.property({type:l,readOnly:!0})],n.prototype,"graphics",void 0),t([p.property()],n.prototype,"updating",void 0),n=t([p.subclass("esri.layers.graphics.controllers.MemoryController")],n)});