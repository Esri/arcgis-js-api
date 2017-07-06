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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","./Layer","../core/promiseUtils","../core/Error","../core/MultiOriginJSONSupport","./mixins/PortalLayer","../core/accessorSupport/decorators"],function(e,r,t,o,i,n,p,s,u,a,l){var d=function(e){function r(r){var t=e.call(this)||this;return t.resourceInfo=null,t.type="unsupported",t}return t(r,e),r.prototype.initialize=function(){var e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type),r="Unsupported layer type";e&&(r+=" "+e),this.addResolvingPromise(p.reject(new s("layer:unsupported-layer-type",r,{layerType:e})))},r.prototype.read=function(e,r){var t={resourceInfo:e};return null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),this.inherited(arguments,[t,r]),this},r.prototype.write=function(e,r){return i.mixin(e||{},this.resourceInfo,{id:this.id})},r}(l.declared(n,u,a));return o([l.shared("esri.layers.UnsupportedLayer")],d.prototype,"declaredClass",void 0),o([l.property({readOnly:!0})],d.prototype,"resourceInfo",void 0),o([l.property({json:{read:!1},readOnly:!0,value:"unsupported"})],d.prototype,"type",void 0),d=o([l.subclass()],d)});