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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./types","./utils/mat3","./utils/mat4","./utils/scalar","./utils/vec2","./utils/vec3","./utils/vec4"],function(e,t,u,r,l,n,c,i,a){function s(e,t){return new e(new ArrayBuffer(t*e.ElementCount*u.elementTypeSize(e.ElementType)))}Object.defineProperty(t,"__esModule",{value:!0}),t.mat3=r,t.mat4=l,t.scalar=n,t.vec2=c,t.vec3=i,t.vec4=a,t.createBuffer=s});