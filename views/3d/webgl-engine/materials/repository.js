// COPYRIGHT © 2018 Esri
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

define(["require","exports","dojo/text!./internal/hud.xml","dojo/text!./internal/util.xml","../lib/edgeRendering/EdgeView","./CheckerBoardMaterial","./ColorMaterial","./DefaultMaterial","./HUDMaterial","./LineCalloutMaterial","./MeasurementArrowMaterial","./RibbonLineMaterial","./internal/BlendLayers","./internal/SimpleGLMaterial","./internal/TexOnlyGLMaterial"],function(e,a,r,l,d,i,t,o,n,s,h,S,M,u,x){function f(e,a,f){e._parse(l),e._parse(r),u.loadShaders(e,a,f),x.loadShaders(e,a,f),o.loadShaders(e,a,f),n.loadShaders(e,a,f),s.loadShaders(e,a,f),S.loadShaders(e,a,f),M.loadShaders(e,a,f),t.loadShaders(e,a,f),h.loadShaders(e,a,f),d.EdgeView.loadShaders(e,a,f),i.loadShaders(e,a,f)}Object.defineProperty(a,"__esModule",{value:!0}),a.initializeShaders=f});