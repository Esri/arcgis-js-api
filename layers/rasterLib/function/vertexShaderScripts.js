// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define([],(function(){return{basic:["varying vec2 v_texCoord;","attribute vec2 a_texCoord;","uniform vec2 u_xformOffset;","uniform vec2 u_xformScale;","uniform bool u_flipY;","void main() {","v_texCoord = u_xformOffset + a_texCoord * u_xformScale;","if (u_flipY) {","v_texCoord.t = 1.0 - v_texCoord.t;","}","vec2 position = a_texCoord * 2.0 - 1.0;","gl_Position = vec4(position, 0.0, 1.0);","}"].join("\n"),histogram:["attribute float a_pixelIndex;","uniform sampler2D u_image;","uniform sampler2D u_image1;","uniform sampler2D u_image2;","uniform vec2 u_sourceDim;","uniform vec2 u_halfPixel;","uniform vec4 u_bandSelection;","uniform vec4 u_mins;","uniform vec4 u_factors;","uniform float u_size;","uniform int u_bandCount;","uniform bool u_minMaxTexture;","void main() {","float row = a_pixelIndex/u_sourceDim.s;","vec2 coord = vec2(fract(row), floor(row)/u_sourceDim.t);","vec4 pv = texture2D(u_image, coord + u_halfPixel);","vec4 minVal, maxVal, pvm;","if (u_minMaxTexture){","if (u_bandCount ==1){ //min = red, max = green","vec4 minmax = texture2D(u_image1, vec2(0.5,0.5));","minVal = vec4(minmax.r, minmax.r, minmax.r, 0.0);","maxVal = vec4(minmax.g, minmax.g, minmax.g, 0.0);","}","else if (u_bandCount ==3){ //min = red, max = green","minVal = texture2D(u_image1, vec2(0.5,0.5));","maxVal = texture2D(u_image2, vec2(0.5,0.5));","}","vec4 factors = u_size/(maxVal-minVal+vec4(0.0,0.0,0.0,1.0)) * u_factors;","pvm = (pv - minVal) * factors;","}","else {","pvm = (pv - u_mins) * u_factors;","}","float histVal = min(floor(pvm.r+pvm.g+pvm.b), u_size-1.0);","histVal = pv.a == 1.0? histVal: u_size;","gl_Position = vec4((histVal+0.1) / (u_size+1.0) * 2.0 - 1.0, 0.5, 0, 1);","gl_PointSize = 1.0;","}"].join("\n"),mesh:["varying vec2 v_texCoord;","attribute vec2 a_texCoord;","uniform bool u_drawMeshLines;","uniform bool u_flipY;","uniform vec2 u_xformOffset;","uniform vec2 u_xformScale;","uniform sampler2D u_transformGrid;","uniform vec2 u_transformSpacing;","uniform vec2 u_transformGridSize;","uniform vec2 u_targetImageSize;","uniform vec2 u_srcImageSize;","uniform bool u_projection;","vec2 projectPixelLocation(vec2 coords) {","vec2 index_image = floor(coords * u_targetImageSize);","vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);","vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;","vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);","vec2 srcLocation;","vec2 transform_location = index_transform + oneTransformPixel * 0.5;","if (pos.s <= pos.t) {","vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));","vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));","srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));","srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));","} else {","vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));","vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));","srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));","srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));","}","return srcLocation;// + halfPixel;","}","void main() {","if (u_projection) {","v_texCoord = projectPixelLocation(a_texCoord);","} else {","v_texCoord = u_xformOffset + a_texCoord * u_xformScale;","}","if (u_flipY) {","v_texCoord.t = 1.0 - v_texCoord.t;","}","vec2 position = a_texCoord * 2.0 - 1.0;","if (u_drawMeshLines){","vec2 adjustedPos = (v_texCoord - u_xformOffset) / u_xformScale;","gl_Position = vec4( adjustedPos * 2.0 - 1.0, 0.0, 1.0);","}","else {","gl_Position = vec4(position, 0.0, 1.0);","}","}"].join("\n")}}));