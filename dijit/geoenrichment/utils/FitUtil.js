// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define([],function(){var a={};a.fitBox=function(a,e,t){t=t||{};var r=(t.mode||"contain",t.vAlign||"middle"),h=t.hAlign||"center",i=a.w/e.w,n=a.h/e.h,c=i>1?1:-1,w=n>1?1:-1;i=i>1?1/i:i,n=n>1?1/n:n;var o;-1===c&&-1===w?o=1/Math.max(i,n):-1===c&&1===w?o=n:1===c&&-1===w?o=i:1===c&&1===w&&(o=Math.min(i,n));var f={x:0,y:0,w:a.w*o,h:a.h*o,ratio:o};switch(h){case"left":f.x=0;break;case"right":f.x=e.w-f.w;break;default:f.x=(e.w-f.w)/2}switch(r){case"top":f.y=0;break;case"bottom":f.y=e.h-f.h;break;default:f.y=(e.h-f.h)/2}return f};return a});