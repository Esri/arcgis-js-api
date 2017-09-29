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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators","../../core/Accessor","../../core/Evented","../../core/Error","../../core/HandleRegistry","../../core/promiseUtils","../../core/watchUtils"],function(e,t,r,o,n,c,i,l,s,a,p){var d=function(e){function t(){var t=e.call(this)||this;return t._handles=new s,t.connectionError=null,t.connectionStatus="disconnected",t.filter=null,t._handles.add(p.on(t,"controller","data-received",function(e){t.emit("data-received",e)})),t}return r(t,e),t.prototype.connect=function(){return this.controller.connection.connect()},t.prototype.disconnect=function(){this.controller.connection.disconnect()},t.prototype.updateFilter=function(e){return"connected"!==this.connectionStatus?a.reject(new l("stream-layer-view: updateFilter","Cannot update filter. The connection with the stream service is closed")):this.controller.updateFilter(e).then(function(e){return e}).otherwise(function(e){throw e})},o([n.property({aliasOf:"controller.connection.connectionError",readOnly:!0})],t.prototype,"connectionError",void 0),o([n.property({aliasOf:"controller.connection.connectionStatus",readOnly:!0})],t.prototype,"connectionStatus",void 0),o([n.property()],t.prototype,"controller",void 0),o([n.property({aliasOf:"controller.filter",readOnly:!0})],t.prototype,"filter",void 0),t=o([n.subclass("esri.views.layers.StreamLayerView")],t)}(n.declared(c,i));return d});