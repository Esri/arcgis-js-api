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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./renderers/ClassBreaksRenderer","./renderers/DictionaryRenderer","./renderers/DotDensityRenderer","./renderers/HeatmapRenderer","./renderers/Renderer","./renderers/SimpleRenderer","./renderers/UniqueValueRenderer","./renderers/support/jsonUtils","./renderers/support/types"],(function(e,r,n,t,d,s,i,u,a,o,R){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isRenderer=r.UniqueValueRenderer=r.SimpleRenderer=r.BaseRenderer=r.HeatmapRenderer=r.DotDensityRenderer=r.DictionaryRenderer=r.ClassBreaksRenderer=void 0,r.ClassBreaksRenderer=n,r.DictionaryRenderer=t,r.DotDensityRenderer=d,r.HeatmapRenderer=s,r.BaseRenderer=i,r.SimpleRenderer=u,r.UniqueValueRenderer=a,r.isRenderer=function(e){return e instanceof i},Object.defineProperty(r,"read",{enumerable:!0,get:function(){return o.read}}),Object.defineProperty(r,"write",{enumerable:!0,get:function(){return o.write}}),Object.defineProperty(r,"fromJSON",{enumerable:!0,get:function(){return o.fromJSON}}),Object.defineProperty(r,"rendererTypes",{enumerable:!0,get:function(){return R.rendererTypes}}),Object.defineProperty(r,"webSceneRendererTypes",{enumerable:!0,get:function(){return R.webSceneRendererTypes}})}));