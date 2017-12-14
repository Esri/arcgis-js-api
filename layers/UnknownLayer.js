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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Layer","../core/promiseUtils","../core/Scheduler","../core/Error","../core/MultiOriginJSONSupport","./mixins/PortalLayer","../core/accessorSupport/decorators"],function(e,r,o,n,t,i,p,s,u,a,c){var l=function(e){function r(r){var o=e.call(this)||this;return o.resourceInfo=null,o.type="unknown",o}return o(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(i.create(function(r,o){p.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),n="Unknown layer type";r&&(n+=" "+r),o(new s("layer:unknown-layer-type",n,{layerType:r}))})}))},r.prototype.read=function(e,r){return this.inherited(arguments,[{resourceInfo:e},r]),this},r.prototype.write=function(e,r){return null},n([c.shared("esri.layers.UnknownLayer")],r.prototype,"declaredClass",void 0),n([c.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),n([c.property({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=n([c.subclass()],r)}(c.declared(t,u,a));return l});