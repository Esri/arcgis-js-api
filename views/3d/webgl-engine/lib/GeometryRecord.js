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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/ObjectPool","./IdGen"],function(t,n,r,i){return function(){function t(n,r,i,o,e,a){this.id=t._idGen.gen(n&&n.id),this.geometry=n,this.material=r,this.transformation=i,this.instanceParameters=o,this.origin=e,this.shaderTransformation=a}return t.prototype.getStaticTransformation=function(){return this.transformation},t.prototype.getShaderTransformation=function(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation},t._idGen=new i.IdGen,t.pool=new r(t,!0),t}()});