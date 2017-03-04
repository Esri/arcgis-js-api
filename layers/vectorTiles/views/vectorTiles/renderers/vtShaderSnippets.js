// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","exports","../../webgl/ShaderSnippets","dojo/text!./Shaders.xml","dojo/text!./shaders/background.vs.glsl","dojo/text!./shaders/background.fs.glsl","dojo/text!./shaders/lineShader.vs.glsl","dojo/text!./shaders/lineShader.fs.glsl","dojo/text!./shaders/patternLineShader.vs.glsl","dojo/text!./shaders/patternLineShader.fs.glsl","dojo/text!./shaders/lineJoinShader.vs.glsl","dojo/text!./shaders/lineJoinShader.fs.glsl","dojo/text!./shaders/lineJoinQuadShader.vs.glsl","dojo/text!./shaders/lineJoinQuadShader.fs.glsl","dojo/text!./shaders/solidFillShader.vs.glsl","dojo/text!./shaders/solidFillShader.fs.glsl","dojo/text!./shaders/patternFillShader.vs.glsl","dojo/text!./shaders/patternFillShader.fs.glsl","dojo/text!./shaders/fillOutlineShader.vs.glsl","dojo/text!./shaders/fillOutlineShader.fs.glsl","dojo/text!./shaders/iconShader.vs.glsl","dojo/text!./shaders/iconShader.fs.glsl","dojo/text!./shaders/sdfShader.vs.glsl","dojo/text!./shaders/sdfShader.fs.glsl","dojo/text!./shaders/tileInfo.vs.glsl","dojo/text!./shaders/tileInfo.fs.glsl"],function(e,s,d,l,r,a,t,o,n,i,S,h,g,f,x,j,p,F,u,v,c,V,J,b,k,I){function L(e,s){O+='<snippet name="'+e+'"><![CDATA[',O+=s,O+="]]></snippet>"}var O="";O+='<?xml version="1.0" encoding="UTF-8"?>',O+="<snippets>",L("backgroundVS",r),L("backgroundFS",a),L("lineShaderVS",t),L("lineShaderFS",o),L("patternLineShaderVS",n),L("patternLineShaderFS",i),L("lineJoinShaderVS",S),L("lineJoinShaderFS",h),L("lineJoinQuadShaderVS",g),L("lineJoinQuadShaderFS",f),L("solidFillShaderVS",x),L("solidFillShaderFS",j),L("patternFillShaderVS",p),L("patternFillShaderFS",F),L("fillOutlineShaderVS",u),L("fillOutlineShaderFS",v),L("iconShaderVS",c),L("iconShaderFS",V),L("sdfShaderVS",J),L("sdfShaderFS",b),L("tileInfoVS",k),L("tileInfoFS",I),O+="</snippets>";var Q=new d;return d.parse(O,Q),d.parse(l,Q),Q});