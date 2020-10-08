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

define(["require","exports","./webgl/BufferObject","./webgl/FramebufferObject","./webgl/Program","./webgl/Renderbuffer","./webgl/RenderingContext","./webgl/ShaderCompiler","./webgl/Texture","./webgl/VertexArrayObject","./webgl/ProgramCache","./webgl/programUtils","./webgl/context-util"],(function(e,r,t,n,b,f,o,a,u,g,c,i,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Renderbuffer=r.ShaderCompiler=r.Program=r.FramebufferObject=r.VertexArrayObject=r.Texture=r.RenderingContext=r.BufferObject=void 0,r.BufferObject=t,r.FramebufferObject=n,r.Program=b,r.Renderbuffer=f,r.RenderingContext=o,r.ShaderCompiler=a,r.Texture=u,r.VertexArrayObject=g,Object.defineProperty(r,"ProgramCache",{enumerable:!0,get:function(){return c.ProgramCache}}),Object.defineProperty(r,"createProgram",{enumerable:!0,get:function(){return i.createProgram}}),Object.defineProperty(r,"glslifyDefineMap",{enumerable:!0,get:function(){return i.glslifyDefineMap}}),Object.defineProperty(r,"createContextOrErrorHTML",{enumerable:!0,get:function(){return l.createContextOrErrorHTML}})}));