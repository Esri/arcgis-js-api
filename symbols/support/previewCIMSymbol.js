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

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../cim/CIMSymbolRasterizer"],function(e,t,a,i,r){function n(e,t){return i(this,void 0,void 0,function(){var i,r,n,s,c,m,h,g;return a(this,function(a){switch(a.label){case 0:return i=t&&t.size?t.size:null,r=t&&t.maxSize?t.maxSize:null,n=Math.min(i||o,r||u),s=3,[4,l.rasterizeCIMSymbolAsync(e,null,null,{targetSize:n*s})];case 1:return c=a.sent(),m=document.createElement("canvas"),m.width=c.imageData.width,m.height=c.imageData.height,h=m.getContext("2d"),h.putImageData(c.imageData,0,0),g=new Image(m.width/s,m.height/s),g.src=m.toDataURL(),[2,g]}})})}Object.defineProperty(t,"__esModule",{value:!0});var l=new r(null,!0),o=22,u=120;t.previewCIMSymbol=n});