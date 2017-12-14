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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../webgl/ShaderSnippets","dojo/text!./shaders/backgroundShaders.xml","dojo/text!./shaders/fillShaders.xml","dojo/text!./shaders/outlineShaders.xml","dojo/text!./shaders/lineShaders.xml","dojo/text!./shaders/iconShaders.xml","dojo/text!./shaders/textShaders.xml","dojo/text!./shaders/tileInfo.vs.glsl","dojo/text!./shaders/tileInfo.fs.glsl"],function(e,s,t,r,o,a,d,n,l,i,p){function x(e,s){h+='<snippet name="'+e+'"><![CDATA[',h+=s,h+="]]></snippet>"}var h="";h+='<?xml version="1.0" encoding="UTF-8"?>',h+="<snippets>",x("tileInfoVS",i),x("tileInfoFS",p),h+="</snippets>";var S=new t;return t.parse(r,S),t.parse(h,S),t.parse(o,S),t.parse(a,S),t.parse(d,S),t.parse(n,S),t.parse(l,S),S});