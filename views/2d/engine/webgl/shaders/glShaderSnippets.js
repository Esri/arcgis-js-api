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

define(["require","exports","../../../../webgl/ShaderSnippets","dojo/text!./bitblit.vs.glsl","dojo/text!./bitblit.fs.glsl","dojo/text!./stencil.vs.glsl","dojo/text!./stencil.fs.glsl","dojo/text!./background.vs.glsl","dojo/text!./background.fs.glsl","dojo/text!./tileInfo.vs.glsl","dojo/text!./tileInfo.fs.glsl"],function(t,e,l,s,o,n,i,d,g,r,b){function p(t,e){c+='<snippet name="'+t+'"><![CDATA[',c+=e,c+="]]></snippet>"}var c="";c+='<?xml version="1.0" encoding="UTF-8"?>',c+="<snippets>",p("bitblitVS",s),p("bitblitFS",o),p("stencilVS",n),p("stencilFS",i),p("backgroundVS",d),p("backgroundFS",g),p("tileInfoVS",r),p("tileInfoFS",b),c+="</snippets>";var f=new l;return l.parse(c,f),f});