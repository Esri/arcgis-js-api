// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","dojo/_base/lang","./Layer","../core/promiseUtils","../core/Error","../core/MultiOriginJSONSupport","./mixins/PortalLayer","../core/accessorSupport/decorators"],function(e,r,t,o,i,n,s,p,u,l,a){function c(){return n}var d=function(e){function r(r){e.call(this),this.resourceInfo=null}return t(r,e),r.prototype.initialize=function(){var e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type),r="Unsupported layer type";e&&(r+=" "+e),this.addResolvingPromise(s.reject(new p("layer:unsupported-layer-type",r,{layerType:e})))},r.prototype.read=function(e,r){var t={resourceInfo:e};return null!=e.id&&(t.id=e.id),null!=e.title&&(t.title=e.title),this.inherited(arguments,[t,r]),this},r.prototype.write=function(e,r){return i.mixin(e||{},this.resourceInfo,{id:this.id})},o([a.shared("esri.layers.UnsupportedLayer")],r.prototype,"declaredClass",void 0),o([a.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),r=o([a.subclass()],r)}(a.declared(c(),u,l));return d});