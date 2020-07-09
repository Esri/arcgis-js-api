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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../../renderers/support/heatmapUtils"],(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.gradient=null,this.height=512,this.width=512}return e.prototype.render=function(e){i.drawHeatmap(e,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)},e}();t.HeatmapSource=n}));