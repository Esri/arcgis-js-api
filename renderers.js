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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./renderers/ClassBreaksRenderer","./renderers/DotDensityRenderer","./renderers/HeatmapRenderer","./renderers/Renderer","./renderers/SimpleRenderer","./renderers/StretchRenderer","./renderers/UniqueValueRenderer","./renderers/support/jsonUtils"],function(e,r,n,d,s,a,t,i,R,p){function u(e){return e instanceof r.BaseRenderer}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DotDensityRenderer=d,r.HeatmapRenderer=s,r.BaseRenderer=a,r.SimpleRenderer=t,r.StretchRenderer=i,r.UniqueValueRenderer=R,r.isRenderer=u,r.read=p.read,r.write=p.write,r.fromJSON=p.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer}}});