// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/text!./internal/util.xml","./BillboardMaterial","./ColorMaterial","./HUDMaterial","./LeafCardMaterial","./Material","./RibbonLineMaterial","./WaterMaterial","./internal/SimpleGLMaterial","./internal/TexOnlyGLMaterial","./internal/BlendLayers"],function(a,e,l,r,d,i,t,n,o,s,S){return{initializeShaders:function(h,M,L,f){h._parse(a),o.loadShaders(h,M,L,f),s.loadShaders(h,M,L,f),i.loadShaders(h,M,L,f),e.loadShaders(h,M,L,f),r.loadShaders(h,M,L,f),d.loadShaders(h,M,L,f),t.loadShaders(h,M,L,f),n.loadShaders(h,M,L,f),S.loadShaders(h,M,L,f),l.loadShaders(h,M,L,f)}}});