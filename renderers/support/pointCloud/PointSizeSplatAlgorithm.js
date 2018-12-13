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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","./PointSizeAlgorithm"],function(e,t,r,o,l,p){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="splat",t.scaleFactor=1,t}r(t,e),p=t,t.prototype.clone=function(){return new p({scaleFactor:this.scaleFactor})};var p;return o([l.enumeration.serializable()({pointCloudSplatAlgorithm:"splat"})],t.prototype,"type",void 0),o([l.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],t.prototype,"scaleFactor",void 0),t=p=o([l.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],t)}(l.declared(p.default));t.PointSizeSplatAlgorithm=a,t.default=a});