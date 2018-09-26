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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout"],function(e,t,a,o){Object.defineProperty(t,"__esModule",{value:!0}),t.EdgeInputBufferLayout=o.newLayout().vec3f("position").u16("componentIndex").u16("_padding"),t.VertexLayout=o.newLayout().vec2u8("sideness"),t.glVertexLayout=a.glLayout(t.VertexLayout,{prefixA:!0}),t.CommonInstancesLayout=o.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").vec2u8("packedAttributes").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}),t.RegularEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normal"),t.SilhouetteEdgeInstancesLayout=t.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB"),t.EdgeShaderAttributeLocations={aPosition0:0,aPosition1:1,aComponentIndex:2,aPackedAttributes:3,aVariantOffset:4,aVariantStroke:5,aVariantExtension:6,aNormal:7,aNormalA:7,aNormalB:8,aSideness:9}});