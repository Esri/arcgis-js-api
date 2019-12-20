// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators","./support/FeatureFilter"],function(e,r,o,t,n,c,i,a){Object.defineProperty(r,"__esModule",{value:!0}),r.StreamLayerView=function(e){return function(e){function r(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var t=e.apply(this,r)||this;return t._handles=new n,t.connectionError=null,t.connectionStatus="disconnected",t.filter=null,t._handles.add(c.on(t,"controller","data-received",function(e){t.emit("data-received",e)})),t}return o(r,e),t([i.property({aliasOf:"controller.connection.connectionError",readOnly:!0})],r.prototype,"connectionError",void 0),t([i.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],r.prototype,"connectionStatus",void 0),t([i.property()],r.prototype,"controller",void 0),t([i.property({type:a})],r.prototype,"filter",void 0),r=t([i.subclass("esri.layers.mixins.StreamLayerView")],r)}(i.declared(e))}});