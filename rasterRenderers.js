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

define(["require","exports","./core/Warning","./renderers/ClassBreaksRenderer","./renderers/RasterColormapRenderer","./renderers/RasterShadedReliefRenderer","./renderers/RasterStretchRenderer","./renderers/UniqueValueRenderer","./renderers/VectorFieldRenderer"],(function(e,r,n,s,t,a,d,l,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.fromJSON=r.read=r.rasterRendererTypes=r.VectorFieldRenderer=r.RasterShadedReliefRenderer=r.UniqueValueRenderer=r.RasterStretchRenderer=r.RasterColormapRenderer=r.ClassBreaksRenderer=void 0,r.ClassBreaksRenderer=s,r.RasterColormapRenderer=t,r.RasterShadedReliefRenderer=a,r.RasterStretchRenderer=d,r.UniqueValueRenderer=l,r.VectorFieldRenderer=u,r.rasterRendererTypes={key:"type",base:null,typeMap:{"unique-value":l,"class-breaks":s,"raster-colormap":t,"raster-stretch":d,"vector-field":u,"raster-shaded-relief":a}};var R={uniqueValue:l,classBreaks:s,rasterStretch:d,rasterColormap:t,vectorField:u,rasterShadedRelief:a};function o(e,r){if(!e)return null;var s=function(e){return e&&R[e.type]||null}(e);if(s){var t=new s;return t.read(e,r),t}return r&&r.messages&&e&&r.messages.push(new n("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}r.read=o,r.fromJSON=function(e,r){return o(e,r)}}));