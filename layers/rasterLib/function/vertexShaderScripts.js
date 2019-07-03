// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define([],function(){return{basic:["varying vec2 v_texCoord;","attribute vec2 a_texCoord;","uniform vec2 u_xformOffset;","uniform vec2 u_xformScale;","uniform bool u_flipY;","void main() {","v_texCoord = u_xformOffset + a_texCoord * u_xformScale;","if (u_flipY) {","v_texCoord.t = 1.0 - v_texCoord.t;","}","vec2 position = a_texCoord * 2.0 - 1.0;","gl_Position = vec4(position, 0.0, 1.0);","}"].join("\n"),histogram:["attribute float a_pixelIndex;","uniform sampler2D u_image;","uniform sampler2D u_image1;","uniform sampler2D u_image2;","uniform vec2 u_sourceDim;","uniform vec2 u_halfPixel;","uniform vec4 u_bandSelection;","uniform vec4 u_mins;","uniform vec4 u_factors;","uniform float u_size;","uniform int u_bandCount;","uniform bool u_minMaxTexture;","void main() {","float row = a_pixelIndex/u_sourceDim.s;","vec2 coord = vec2(fract(row), floor(row)/u_sourceDim.t);","vec4 pv = texture2D(u_image, coord + u_halfPixel);","vec4 minVal, maxVal, pvm;","if (u_minMaxTexture){","if (u_bandCount ==1){ //min = red, max = green","vec4 minmax = texture2D(u_image1, vec2(0.5,0.5));","minVal = vec4(minmax.r, minmax.r, minmax.r, 0.0);","maxVal = vec4(minmax.g, minmax.g, minmax.g, 0.0);","}","else if (u_bandCount ==3){ //min = red, max = green","minVal = texture2D(u_image1, vec2(0.5,0.5));","maxVal = texture2D(u_image2, vec2(0.5,0.5));","}","vec4 factors = u_size/(maxVal-minVal+vec4(0.0,0.0,0.0,1.0)) * u_factors;","pvm = (pv - minVal) * factors;","}","else {","pvm = (pv - u_mins) * u_factors;","}","float histVal = min(floor(pvm.r+pvm.g+pvm.b), u_size-1.0);","histVal = pv.a == 1.0? histVal: u_size;","gl_Position = vec4((histVal+0.1) / (u_size+1.0) * 2.0 - 1.0, 0.5, 0, 1);","gl_PointSize = 1.0;","}"].join("\n"),mesh:["varying vec2 v_texCoord;","attribute vec2 a_texCoord;","uniform vec2 u_xformOffset;","uniform vec2 u_xformScale;","uniform bool u_projection;","uniform vec2 u_xformGrid[400];","uniform vec2 u_meshSize;","uniform bool u_drawMeshLines;","uniform bool u_flipY;","int getOffsetIndex(vec2 indexPos){","int i = int(indexPos.s*(u_meshSize.s+1.0)+indexPos.y+0.001);","int maxIndex = int((u_meshSize.s+1.0) * (u_meshSize.t+1.0) -1.0);","return i>maxIndex ? maxIndex:i;","}","void main() {","if (u_projection) {","vec2 index_ul = floor(a_texCoord*u_meshSize);","vec2 index_ur = floor(a_texCoord*u_meshSize) + vec2(0.0, 1.0);","vec2 index_ll = floor(a_texCoord*u_meshSize) + vec2(1.0, 0.0);","vec2 index_lr = floor(a_texCoord*u_meshSize) + vec2(1.0, 1.0);","vec2 weight = fract(a_texCoord*u_meshSize);","vec2 offset_ul = u_xformGrid[getOffsetIndex(index_ul)];","vec2 offset_ur = u_xformGrid[getOffsetIndex(index_ur)];","vec2 offset_ll = u_xformGrid[getOffsetIndex(index_ll)];","vec2 offset_lr = u_xformGrid[getOffsetIndex(index_lr)];","v_texCoord = (offset_ul * (1.0 - weight) + offset_ur * vec2(1.0-weight.s,weight.t) + offset_ll * vec2(weight.s,1.0- weight.t) + offset_lr * weight)/2.0;","}","else {","v_texCoord = u_xformOffset + a_texCoord * u_xformScale;","}","if (u_flipY) {","v_texCoord.t = 1.0 - v_texCoord.t;","}","vec2 position = a_texCoord * 2.0 - 1.0;","if (u_drawMeshLines){","vec2 adjustedPos = (v_texCoord - u_xformOffset) / u_xformScale;","gl_Position = vec4( adjustedPos * 2.0 - 1.0, 0.0, 1.0);","}","else {","gl_Position = vec4(position, 0.0, 1.0);","}","}"].join("\n")}});