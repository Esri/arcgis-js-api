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

define(["require","exports","tslib","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators","./Layer","./mixins/PortalLayer"],(function(e,r,t,o,i,n,p,s,u,a,c){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.resourceInfo=null,t.type="unsupported",t}return t.__extends(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create((function(r,t){s.schedule((function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),i="Unsupported layer type";r&&(i+=" "+r),t(new o("layer:unsupported-layer-type",i,{layerType:r}))}))})))},r.prototype.read=function(r,t){var o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),e.prototype.read.call(this,o,t)},r.prototype.write=function(e){return i.mixin(e||{},this.resourceInfo,{id:this.id})},t.__decorate([u.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),t.__decorate([u.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t.__decorate([u.property({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=t.__decorate([u.subclass("esri.layers.UnsupportedLayer")],r)}(c.PortalLayer(n.MultiOriginJSONMixin(a)))}));