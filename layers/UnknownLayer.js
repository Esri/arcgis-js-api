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

define(["require","exports","tslib","../core/Error","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators","./Layer","./mixins/PortalLayer"],(function(e,r,o,t,n,i,p,a,c,s){return function(e){function r(r){var o=e.call(this,r)||this;return o.resourceInfo=null,o.type="unknown",o}return o.__extends(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(i.create((function(r,o){p.schedule((function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),n="Unknown layer type";r&&(n+=" "+r),o(new t("layer:unknown-layer-type",n,{layerType:r}))}))})))},r.prototype.read=function(r,o){e.prototype.read.call(this,{resourceInfo:r},o)},r.prototype.write=function(){return null},o.__decorate([a.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),o.__decorate([a.property({type:["show","hide"]})],r.prototype,"listMode",void 0),o.__decorate([a.property({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=o.__decorate([a.subclass("esri.layers.UnknownLayer")],r)}(s.PortalLayer(n.MultiOriginJSONMixin(c)))}));