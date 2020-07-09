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

define(["require","exports","tslib","../cim/CIMSymbolRasterizer"],(function(e,t,a,i){Object.defineProperty(t,"__esModule",{value:!0});var r=new i.CIMSymbolRasterizer(null,!0);t.previewCIMSymbol=function(e,t){return void 0===t&&(t={}),a.__awaiter(this,void 0,void 0,(function(){var i,n,o,s,l,m,d,u,c,y,h;return a.__generator(this,(function(a){switch(a.label){case 0:return i=t.size,n=t.maxSize,o=t.feature,s=t.fieldMap,l=t.geometryType,m=t.style,d=Math.min(i||22,n||120),u=3,e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(u=1),[4,r.rasterizeCIMSymbolAsync(e,o,s,l,{targetSize:d*u,style:m})];case 1:return c=a.sent(),(y=document.createElement("canvas")).width=c.imageData.width,y.height=c.imageData.height,y.getContext("2d").putImageData(c.imageData,0,0),(h=new Image(y.width/u,y.height/u)).src=y.toDataURL(),[2,h]}}))}))}}));