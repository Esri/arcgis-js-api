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

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/tsSupport/assignHelper","../../../../Graphic","../../../../core/accessorSupport/decorators"],(function(e,t,r,o,i,n,p){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t){return e.call(this,t)||this}var n;return o(t,e),n=t,t.prototype.clone=function(){return new n(this.cloneProperties())},t.prototype.cloneProperties=function(){var e=this.pointCloudMetadata;return i({},this.inherited(arguments),{pointCloudMetadata:e})},r([p.property({constructOnly:!0})],t.prototype,"pointCloudMetadata",void 0),t=n=r([p.subclass("esri.views.3d.layers.i3s.PointGraphic")],t)}(p.declared(n));t.PointGraphic=c}));