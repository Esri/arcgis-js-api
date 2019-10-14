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

define(["require","exports","../../../../../core/tsSupport/assignHelper"],function(e,r,l){function n(e){return!("textureBuffer"in e)}function a(e){return l({baseColor:t,baseColorOpacity:1,baseColorTexture:null,doubleSidedShading:!1,normals:"screen-space",cullFace:"back",componentData:o,useVertexTransparencyDiscards:!1,receiveSSAO:!0,forceTransparency:null,slicePlaneEnabled:!1,polygonOffsetEnabled:!1,writeStencil:!1,readStencil:!1,layerOpacity:1,usePBR:!1,normalTexture:null,emissiveTexture:null,occlusionTexture:null,metallicRoughnessTexture:null,emissiveFactor:[0,0,0],metallicFactor:0,roughnessFactor:1,reflectanceFactor:.5},e)}Object.defineProperty(r,"__esModule",{value:!0}),r.isUniformComponentData=n,r.fillDefaults=a;var t=[1,1,1],o={externalColor:[1,1,1,1],externalColorMixMode:"multiply",castShadows:!0}});