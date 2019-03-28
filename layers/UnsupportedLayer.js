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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/lang","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators","./Layer","./mixins/PortalLayer"],function(e,r,o,t,i,p,n,s,u,l,c,d){return function(e){function r(r){var o=e.call(this)||this;return o.resourceInfo=null,o.type="unsupported",o}return o(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(s.create(function(r,o){u.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),t="Unsupported layer type";r&&(t+=" "+r),o(new i("layer:unsupported-layer-type",t,{layerType:r}))})}))},r.prototype.read=function(e,r){var o={resourceInfo:e};null!=e.id&&(o.id=e.id),null!=e.title&&(o.title=e.title),this.inherited(arguments,[o,r])},r.prototype.write=function(e,r){return p.mixin(e||{},this.resourceInfo,{id:this.id})},t([l.shared("esri.layers.UnsupportedLayer")],r.prototype,"declaredClass",void 0),t([l.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([l.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t([l.property({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=t([l.subclass()],r)}(l.declared(c,n,d))});