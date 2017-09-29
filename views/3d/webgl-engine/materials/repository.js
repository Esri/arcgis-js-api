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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["dojo/text!./internal/util.xml","dojo/text!./internal/hud.xml","./BillboardMaterial","./ColorMaterial","./HUDMaterial","./LineCalloutMaterial","./LeafCardMaterial","./Material","./RibbonLineMaterial","./WaterMaterial","./internal/SimpleGLMaterial","./internal/TexOnlyGLMaterial","./internal/BlendLayers"],function(a,e,l,r,d,i,t,n,o,s,h,S,M){return{initializeShaders:function(u,L,x,f){u._parse(a),u._parse(e),h.loadShaders(u,L,x,f),S.loadShaders(u,L,x,f),n.loadShaders(u,L,x,f),l.loadShaders(u,L,x,f),d.loadShaders(u,L,x,f),i.loadShaders(u,L,x,f),t.loadShaders(u,L,x,f),o.loadShaders(u,L,x,f),s.loadShaders(u,L,x,f),M.loadShaders(u,L,x,f),r.loadShaders(u,L,x,f)}}});