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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Layer","../core/promiseUtils","../core/Error","../core/MultiOriginJSONSupport","./mixins/PortalLayer","../core/accessorSupport/decorators"],function(e,r,o,t,n,i,s,p,u,a){function c(){return n}var l=function(e){function r(r){e.call(this),this.resourceInfo=null,this.type="unknown"}return o(r,e),r.prototype.initialize=function(){var e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type),r="Unknown layer type";e&&(r+=" "+e),this.addResolvingPromise(i.reject(new s("layer:unknown-layer-type",r,{layerType:e})))},r.prototype.read=function(e,r){return this.inherited(arguments,[{resourceInfo:e},r]),this},r.prototype.write=function(e,r){return null},t([a.shared("esri.layers.UnknownLayer")],r.prototype,"declaredClass",void 0),t([a.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([a.property({json:{readable:!1}})],r.prototype,"type",void 0),r=t([a.subclass()],r)}(a.declared(c(),p,u));return l});