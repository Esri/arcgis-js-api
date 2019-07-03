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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(e,r,t,o,n,i,a){return function(e){function r(r){var t=e.call(this)||this;return t.variableName=null,t.dimensionName=null,t.values=[],t.isSlice=!1,t}t(r,e),n=r,r.prototype.castValues=function(e){return Array.isArray(e)?e.map(function(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]?e:"number"==typeof e?e:null}).filter(function(e){return null!=e}):[]},r.prototype.clone=function(){return new n({variableName:this.variableName,dimensionName:this.dimensionName,values:i.clone(this.values),isSlice:this.isSlice})};var n;return o([a.property({type:String,json:{write:!0}})],r.prototype,"variableName",void 0),o([a.property({type:String,json:{write:!0}})],r.prototype,"dimensionName",void 0),o([a.property({json:{write:!0}})],r.prototype,"values",void 0),o([a.cast("values")],r.prototype,"castValues",null),o([a.property({type:Boolean,json:{write:!0}})],r.prototype,"isSlice",void 0),r=n=o([a.subclass("esri.layers.support.DimensionalDefinition")],r)}(a.declared(n))});