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

define([],function(){var r,e={};return e.getPrettifyYAxisParameters=function(e,a){if(!r){r=[];for(var o=-20;20>o;o++)r.push(1*Math.pow(10,o)),r.push(2*Math.pow(10,o)),r.push(5*Math.pow(10,o))}for(var t,i,n=0;n<r.length;n++){var f=r[n],p=r[n+1];if(e>f&&p>=e){t=p/5,i=t/5;break}}for(var u=0,h=0;e>=(u+1)*t;)u++;for(;e>=u*t+(h+1)*i;)h++;var v={majorTickStep:t,minorTickStep:i,max:u*t+(h+2)*i};return a&&(v.includeZero=!0,v.min=.9*-i,v.fixLower="none"),v},e});