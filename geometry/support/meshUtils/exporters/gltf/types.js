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

define(["require","exports"],(function(E,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FilterMode=e.ColorMode=e.AlphaMode=e.MeshMode=e.DataType=e.TargetBuffer=e.ComponentType=e.ImageOutputType=e.BufferOutputType=void 0,function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(e.BufferOutputType||(e.BufferOutputType={})),function(E){E[E.External=0]="External",E[E.DataURI=1]="DataURI",E[E.GLB=2]="GLB"}(e.ImageOutputType||(e.ImageOutputType={})),function(E){E[E.BYTE=5120]="BYTE",E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.SHORT=5122]="SHORT",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.UNSIGNED_INT=5125]="UNSIGNED_INT",E[E.FLOAT=5126]="FLOAT"}(e.ComponentType||(e.ComponentType={})),function(E){E[E.ARRAY_BUFFER=34962]="ARRAY_BUFFER",E[E.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(e.TargetBuffer||(e.TargetBuffer={})),function(E){E.SCALAR="SCALAR",E.VEC2="VEC2",E.VEC3="VEC3",E.VEC4="VEC4",E.MAT2="MAT2",E.MAT3="MAT3",E.MAT4="MAT4"}(e.DataType||(e.DataType={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(e.MeshMode||(e.MeshMode={})),function(E){E.OPAQUE="OPAQUE",E.MASK="MASK",E.BLEND="BLEND"}(e.AlphaMode||(e.AlphaMode={})),function(E){E[E.NoColor=0]="NoColor",E[E.FaceColor=1]="FaceColor",E[E.VertexColor=2]="VertexColor"}(e.ColorMode||(e.ColorMode={})),function(E){E[E.NEAREST=9728]="NEAREST",E[E.LINEAR=9729]="LINEAR",E[E.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",E[E.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",E[E.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",E[E.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(e.FilterMode||(e.FilterMode={}))}));