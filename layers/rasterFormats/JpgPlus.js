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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","./Zlib","./Jpg"],(function(e,r,t){"use strict";return e(null,{constructor:function(){},decode:function(e){var n=new Uint8Array(e),i=new t;i.parse(n);var a,o=i.numComponents,h=i.getData(i.width,i.height,!0),f=i.width*i.height,s=i.eof,u=0,d=0,g=0;if(s<n.length-1){var w=new r(n.subarray(s)).getBytes();a=new Uint8Array(f);var c=0;for(u=0;u<w.length;u++)for(g=7;g>=0;g--)a[c++]=w[u]>>g&1}var l,p=[];if(1===o)p=[h,h,h];else{for(u=0;u<3;u++)l=new Uint8Array(f),p.push(l);for(g=0,d=0;d<f;d++)for(u=0;u<3;u++)p[u][d]=h[g++]}return{width:i.width,height:i.height,pixels:p,mask:a}}})}));