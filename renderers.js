// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./renderers/ClassBreaksRenderer","./renderers/DictionaryRenderer","./renderers/DotDensityRenderer","./renderers/HeatmapRenderer","./renderers/Renderer","./renderers/SimpleRenderer","./renderers/UniqueValueRenderer","./renderers/support/jsonUtils"],function(e,r,n,s,d,a,i,t,R,p){function l(e){return e instanceof r.BaseRenderer}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DictionaryRenderer=s,r.DotDensityRenderer=d,r.HeatmapRenderer=a,r.BaseRenderer=i,r.SimpleRenderer=t,r.UniqueValueRenderer=R,r.isRenderer=l,r.read=p.read,r.write=p.write,r.fromJSON=p.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer,dictionary:r.DictionaryRenderer}},r.webSceneRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer}}});