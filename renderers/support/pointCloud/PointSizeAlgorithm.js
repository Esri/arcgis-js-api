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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/JSONSupport","../../../core/kebabDictionary","../../../core/accessorSupport/decorators"],function(e,r,t,o,i,p,n){Object.defineProperty(r,"__esModule",{value:!0}),r.typeKebabDictionary=p({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});var l=function(e){function i(){return null!==e&&e.apply(this,arguments)||this}return t(i,e),o([n.property({type:String,readOnly:!0,nonNullable:!0,json:{read:!1,write:r.typeKebabDictionary.write}})],i.prototype,"type",void 0),i=o([n.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],i)}(n.declared(i));r.PointSizeAlgorithm=l,r.default=l});