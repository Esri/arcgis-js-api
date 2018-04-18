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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/Error","../../core/Evented","../../core/Handles","../../core/promiseUtils","../../core/watchUtils","../../core/accessorSupport/decorators"],function(e,t,o,r,n,c,i,l,a,s,p){return function(e){function t(){var t=e.call(this)||this;return t._handles=new l,t.connectionError=null,t.connectionStatus="disconnected",t.filter=null,t._handles.add(s.on(t,"controller","data-received",function(e){t.emit("data-received",e)})),t}return o(t,e),t.prototype.connect=function(){return this.controller.connection.connect()},t.prototype.disconnect=function(){this.controller.connection.disconnect()},t.prototype.updateFilter=function(e){return"connected"!==this.connectionStatus?a.reject(new c("stream-layer-view: updateFilter","Cannot update filter. The connection with the stream service is closed")):this.controller.updateFilter(e).then(function(e){return e}).catch(function(e){throw e})},r([p.property({aliasOf:"controller.connection.connectionError",readOnly:!0})],t.prototype,"connectionError",void 0),r([p.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),r([p.property()],t.prototype,"controller",void 0),r([p.property({aliasOf:"controller.filter",readOnly:!0})],t.prototype,"filter",void 0),t=r([p.subclass("esri.views.layers.StreamLayerView")],t)}(p.declared(n,i))});