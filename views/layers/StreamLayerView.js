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

define(["require","exports","tslib","../../core/accessorSupport/decorators","./support/FeatureFilter"],(function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.StreamLayerView=function(e){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var o=e.apply(this,r)||this;return o.connectionError=null,o.connectionStatus="disconnected",o.filter=null,o}return t.__extends(r,e),t.__decorate([o.property({readOnly:!0})],r.prototype,"connectionError",void 0),t.__decorate([o.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],r.prototype,"connectionStatus",void 0),t.__decorate([o.property({type:n})],r.prototype,"filter",void 0),r=t.__decorate([o.subclass("esri.layers.mixins.StreamLayerView")],r)}(e)}}));