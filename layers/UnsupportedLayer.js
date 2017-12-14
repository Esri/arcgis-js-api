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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","./Layer","../core/promiseUtils","../core/Scheduler","../core/Error","../core/MultiOriginJSONSupport","./mixins/PortalLayer","../core/accessorSupport/decorators"],function(e,r,t,o,n,i,p,s,u,a,l,c){var d=function(e){function r(r){var t=e.call(this)||this;return t.resourceInfo=null,t.type="unsupported",t}return t(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create(function(r,t){s.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),o="Unsupported layer type";r&&(o+=" "+r),t(new u("layer:unsupported-layer-type",o,{layerType:r}))})}))},r.prototype.read=function(e,r){var t={resourceInfo:e};return null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),this.inherited(arguments,[t,r]),this},r.prototype.write=function(e,r){return n.mixin(e||{},this.resourceInfo,{id:this.id})},o([c.shared("esri.layers.UnsupportedLayer")],r.prototype,"declaredClass",void 0),o([c.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),o([c.property({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=o([c.subclass()],r)}(c.declared(i,a,l));return d});