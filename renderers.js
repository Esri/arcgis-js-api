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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./renderers/ClassBreaksRenderer","./renderers/DictionaryRenderer","./renderers/DotDensityRenderer","./renderers/HeatmapRenderer","./renderers/Renderer","./renderers/SimpleRenderer","./renderers/UniqueValueRenderer","./renderers/support/jsonUtils"],(function(e,r,n,s,d,a,i,t,p,u){Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DictionaryRenderer=s,r.DotDensityRenderer=d,r.HeatmapRenderer=a,r.BaseRenderer=i,r.SimpleRenderer=t,r.UniqueValueRenderer=p,r.isRenderer=function(e){return e instanceof i},r.read=u.read,r.write=u.write,r.fromJSON=u.fromJSON,r.rendererTypes={key:"type",base:i,typeMap:{heatmap:a,simple:t,"unique-value":p,"class-breaks":n,"dot-density":d,dictionary:s}},r.webSceneRendererTypes={key:"type",base:i,typeMap:{simple:t,"unique-value":p,"class-breaks":n}}}));