// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define([],(function(){var e={fitBox:function(e,t,a){(a=a||{}).mode;var h,r=a.vAlign||"middle",i=a.hAlign||"center",n=e.w/t.w,w=e.h/t.h,c=n>1?1:-1,o=w>1?1:-1;n=n>1?1/n:n,w=w>1?1/w:w,-1===c&&-1===o?h=1/Math.max(n,w):-1===c&&1===o?h=w:1===c&&-1===o?h=n:1===c&&1===o&&(h=Math.min(n,w));var f={x:0,y:0,w:e.w*h,h:e.h*h,ratio:h};switch(i){case"left":f.x=0;break;case"right":f.x=t.w-f.w;break;default:f.x=(t.w-f.w)/2}switch(r){case"top":f.y=0;break;case"bottom":f.y=t.h-f.h;break;default:f.y=(t.h-f.h)/2}return f}};return e}));