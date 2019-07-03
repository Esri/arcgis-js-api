// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define([],function(){var e={};e.fitBox=function(e,a,t){t=t||{};var r=(t.mode,t.vAlign||"middle"),h=t.hAlign||"center",i=e.w/a.w,n=e.h/a.h,w=i>1?1:-1,c=n>1?1:-1;i=i>1?1/i:i,n=n>1?1/n:n;var o;-1===w&&-1===c?o=1/Math.max(i,n):-1===w&&1===c?o=n:1===w&&-1===c?o=i:1===w&&1===c&&(o=Math.min(i,n));var f={x:0,y:0,w:e.w*o,h:e.h*o,ratio:o};switch(h){case"left":f.x=0;break;case"right":f.x=a.w-f.w;break;default:f.x=(a.w-f.w)/2}switch(r){case"top":f.y=0;break;case"bottom":f.y=a.h-f.h;break;default:f.y=(a.h-f.h)/2}return f};return e});