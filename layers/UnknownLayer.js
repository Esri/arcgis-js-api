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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators","./Layer","./mixins/PortalLayer"],(function(e,r,o,t,n,i,p,u,s,c,a){return function(e){function r(r){var o=e.call(this,r)||this;return o.resourceInfo=null,o.type="unknown",o}return o(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create((function(r,o){u.schedule((function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),t="Unknown layer type";r&&(t+=" "+r),o(new n("layer:unknown-layer-type",t,{layerType:r}))}))})))},r.prototype.read=function(e,r){this.inherited(arguments,[{resourceInfo:e},r])},r.prototype.write=function(){return null},t([s.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([s.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t([s.property({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=t([s.subclass("esri.layers.UnknownLayer")],r)}(s.declared(a.PortalLayer(i.MultiOriginJSONMixin(c))))}));