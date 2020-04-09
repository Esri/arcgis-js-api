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

define(["require","exports","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout"],(function(e,n,o,t){Object.defineProperty(n,"__esModule",{value:!0}),n.EdgeInputBufferLayout=t.newLayout().vec3f("position").u16("componentIndex").u16("_padding"),n.VertexLayout=t.newLayout().vec2u8("sideness"),n.glVertexLayout=o.glLayout(n.VertexLayout),n.CommonInstancesLayout=t.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0}),n.RegularEdgeInstancesLayout=n.CommonInstancesLayout.clone().vec3f("normal"),n.SilhouetteEdgeInstancesLayout=n.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB"),n.EdgeShaderAttributeLocations={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9}}));