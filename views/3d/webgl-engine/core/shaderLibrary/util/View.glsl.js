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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/libs/gl-matrix-2/mat4","../../../../../../core/libs/gl-matrix-2/mat4f32"],(function(i,e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.View=void 0,function(i){function e(i,e,n){t.mat4.translate(r,n,e),i.setUniform3fv("localOrigin",e),i.setUniformMatrix4fv("view",r)}i.bindCamPosition=function(i,e,t){i.setUniform3f("camPos",t[3]-e[0],t[7]-e[1],t[11]-e[2])},i.bindProjectionMatrix=function(i,e){i.setUniformMatrix4fv("proj",e)},i.bindNearFar=function(i,e){i.setUniform2fv("nearFar",e)},i.bindViewCustomOrigin=e,i.bindView=function(i,t){e(i,t.origin,t.camera.viewMatrix)},i.bindViewport=function(i,e){i.setUniform4fv("viewport",e.camera.fullViewport)}}(e.View||(e.View={}));var r=n.mat4f32.create()}));