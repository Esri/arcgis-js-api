// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64"],function(t,i,a,r){return function(){function t(t,i,n,s,o,e,m,h,l){this.name=t,this.from=i,this.to=n,this.displayedIndexRange=s,this.highlightedIndexRanges=o,this.transformation=e,this.instanceParameters=m,this.idx=h,this.dataId=l,null!=e&&(this.transformationNormal=r.mat4f64.clone(e),a.mat4.invert(this.transformationNormal,this.transformationNormal),a.mat4.transpose(this.transformationNormal,this.transformationNormal))}return t}()});