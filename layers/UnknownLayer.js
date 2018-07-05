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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/Error","../core/MultiOriginJSONSupport","../core/promiseUtils","../core/scheduling","../core/accessorSupport/decorators","./Layer","./mixins/PortalLayer"],function(e,r,o,n,t,i,p,s,u,c,a){return function(e){function r(r){var o=e.call(this)||this;return o.resourceInfo=null,o.type="unknown",o}return o(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create(function(r,o){s.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),n="Unknown layer type";r&&(n+=" "+r),o(new t("layer:unknown-layer-type",n,{layerType:r}))})}))},r.prototype.read=function(e,r){return this.inherited(arguments,[{resourceInfo:e},r]),this},r.prototype.write=function(e,r){return null},n([u.shared("esri.layers.UnknownLayer")],r.prototype,"declaredClass",void 0),n([u.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),n([u.property({json:{read:!1},readOnly:!0,value:"unknown"})],r.prototype,"type",void 0),r=n([u.subclass()],r)}(u.declared(c,i,a))});