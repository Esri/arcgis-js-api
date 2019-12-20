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

define(["require","exports","./core/Warning","./renderers/ClassBreaksRenderer","./renderers/RasterColormapRenderer","./renderers/RasterStretchRenderer","./renderers/UniqueValueRenderer"],function(e,r,n,s,a,t,u){function d(e){return e?R[e.type]||null:null}function l(e,r){if(!e)return null;var s=d(e);if(s){var a=new s;return a.read(e,r),a}return r&&r.messages&&e&&r.messages.push(new n("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null}function o(e,r){return l(e,r)}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=s,r.RasterColormapRenderer=a,r.RasterStretchRenderer=t,r.UniqueValueRenderer=u,r.rasterRendererTypes={key:"type",base:null,typeMap:{"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"raster-colormap":r.RasterColormapRenderer,"raster-stretch":r.RasterStretchRenderer}};var R={uniqueValue:r.UniqueValueRenderer,classBreaks:r.ClassBreaksRenderer,rasterStretch:r.RasterStretchRenderer,rasterColormap:r.RasterColormapRenderer};r.read=l,r.fromJSON=o});