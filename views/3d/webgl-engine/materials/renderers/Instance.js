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

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64"],(function(t,a,i,r){Object.defineProperty(a,"__esModule",{value:!0});var s=function(t,a,s,n,o,e,m){this.from=t,this.to=a,this.isHidden=s,this.highlightedIndexRanges=n,this.hasOccludees=o,this.transformation=e,this.instanceParameters=m,null!=e&&(this.transformationNormal=r.mat4f64.clone(e),i.mat4.invert(this.transformationNormal,this.transformationNormal),i.mat4.transpose(this.transformationNormal,this.transformationNormal))};a.Instance=s}));