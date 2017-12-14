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

define(["dojo/text!./internal/util.xml","dojo/text!./internal/hud.xml","./BillboardMaterial","./ColorMaterial","./HUDMaterial","./LineCalloutMaterial","./LeafCardMaterial","./Material","./RibbonLineMaterial","./WaterMaterial","./MeasurementArrowMaterial","./internal/SimpleGLMaterial","./internal/TexOnlyGLMaterial","./internal/BlendLayers"],function(a,e,r,l,d,i,t,o,n,s,h,S,M,u){return{initializeShaders:function(L,x,f,m){L._parse(a),L._parse(e),S.loadShaders(L,x,f,m),M.loadShaders(L,x,f,m),o.loadShaders(L,x,f,m),r.loadShaders(L,x,f,m),d.loadShaders(L,x,f,m),i.loadShaders(L,x,f,m),t.loadShaders(L,x,f,m),n.loadShaders(L,x,f,m),s.loadShaders(L,x,f,m),u.loadShaders(L,x,f,m),l.loadShaders(L,x,f,m),h.loadShaders(L,x,f,m)}}});