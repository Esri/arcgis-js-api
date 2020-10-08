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

define(["require","exports","tslib","../../core/screenUtils","../cim/CIMSymbolRasterizer","./cimSymbolUtils"],(function(e,t,i,a,l,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.previewCIMSymbol=void 0;var r=new l.CIMSymbolRasterizer(null,!0);t.previewCIMSymbol=function(e,t){return void 0===t&&(t={}),i.__awaiter(this,void 0,void 0,(function(){var l,o,s,c,u,m,d,y,h,p,b,g,v,M,S,w;return i.__generator(this,(function(i){switch(i.label){case 0:return l=t.size,o=t.maxSize,s=t.feature,c=t.fieldMap,u=t.geometryType,m=t.style,d=t.node,y=t.opacity,h=Math.min(null!=l?l:n.getCIMSymbolSize(e),null!=o?o:a.px2pt(120)),p=3,e&&e.data&&e.data.symbol&&"CIMPointSymbol"!==e.data.symbol.type&&(p=1),[4,r.rasterizeCIMSymbolAsync(e,s,c,u,{targetSize:h*p,style:m})];case 1:return b=i.sent(),(g=document.createElement("canvas")).width=b.imageData.width,g.height=b.imageData.height,g.getContext("2d").putImageData(b.imageData,0,0),v=g.width/p,M=g.height/p,null!=l&&(null==(null==t?void 0:t.scale)||(null==t?void 0:t.scale))&&(v=(S=v/M)<=1?Math.ceil(h*S):h,M=S<=1?h:Math.ceil(h/S)),(w=new Image(v,M)).src=g.toDataURL(),null!=y&&(w.style.opacity=""+y),d&&d.appendChild(w),[2,w]}}))}))}}));