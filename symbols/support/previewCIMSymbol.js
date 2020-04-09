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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../cim/CIMSymbolRasterizer"],(function(e,t,a,r,i){Object.defineProperty(t,"__esModule",{value:!0});var n=new i(null,!0);t.previewCIMSymbol=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,(function(){var r,i,o,u,c,s,h,l,m;return a(this,(function(a){switch(a.label){case 0:return r=t.size,i=t.maxSize,o=t.feature,u=t.fieldMap,c=Math.min(r||22,i||120),s=3,[4,n.rasterizeCIMSymbolAsync(e,o,u,{targetSize:c*s})];case 1:return h=a.sent(),(l=document.createElement("canvas")).width=h.imageData.width,l.height=h.imageData.height,l.getContext("2d").putImageData(h.imageData,0,0),(m=new Image(l.width/s,l.height/s)).src=l.toDataURL(),[2,m]}}))}))}}));