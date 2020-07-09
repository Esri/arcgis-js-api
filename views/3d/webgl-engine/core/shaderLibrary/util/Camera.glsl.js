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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(i,n){Object.defineProperty(n,"__esModule",{value:!0}),function(i){function n(i,n,e){i.setUniform3f("camPos",e[3]-n[0],e[7]-n[1],e[11]-n[2])}i.bindUniformsCustomOrigin=n,i.bindUniforms=function(i,e){n(i,e.origin,e.viewInvTransp)}}(n.Camera||(n.Camera={})),function(i){i.bindUniforms=function(i,n){i.setUniform1f("pixelRatio",n.pixelRatio||1),i.setUniform4fv("viewport",n.viewport)}}(n.Viewport||(n.Viewport={}))}));