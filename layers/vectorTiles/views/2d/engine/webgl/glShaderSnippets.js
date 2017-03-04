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

define(["require","exports","../../../webgl/ShaderSnippets","dojo/text!./Shaders.xml","dojo/text!./bitblit.vs.glsl","dojo/text!./bitblit.fs.glsl","dojo/text!./stencil.vs.glsl","dojo/text!./stencil.fs.glsl"],function(t,e,s,i,n,l,o,p){function r(t,e){b+='<snippet name="'+t+'"><![CDATA[',b+=e,b+="]]></snippet>"}var b="";b+='<?xml version="1.0" encoding="UTF-8"?>',b+="<snippets>",r("bitblitVS",n),r("bitblitFS",l),r("stencilVS",o),r("stencilFS",p),b+="</snippets>";var d=new s;return s.parse(b,d),s.parse(i,d),d});