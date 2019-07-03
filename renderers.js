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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./renderers/ClassBreaksRenderer","./renderers/DictionaryRenderer","./renderers/DotDensityRenderer","./renderers/HeatmapRenderer","./renderers/Renderer","./renderers/SimpleRenderer","./renderers/StretchRenderer","./renderers/UniqueValueRenderer","./renderers/support/jsonUtils"],function(e,r,n,s,a,d,t,i,R,p,u){function l(e){return e instanceof r.BaseRenderer}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DictionaryRenderer=s,r.DotDensityRenderer=a,r.HeatmapRenderer=d,r.BaseRenderer=t,r.SimpleRenderer=i,r.StretchRenderer=R,r.UniqueValueRenderer=p,r.isRenderer=l,r.read=u.read,r.write=u.write,r.fromJSON=u.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer,dictionary:r.DictionaryRenderer}},r.webSceneRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer}},r.rasterRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"raster-stretch":r.StretchRenderer}}});