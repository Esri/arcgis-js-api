// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/declare","./Zlib","./Jpg"],function(r,e,t){"use strict";var n=r(null,{constructor:function(){},decode:function(r){var n=new Uint8Array(r),i=new t;i.parse(n);var a,h=i.getData(i.width,i.height),o=i.width*i.height,f=i.eof,s=0,u=0,d=0;if(f<n.length-1){var g=new e(n.subarray(f)),w=g.getBytes();a=new Uint8Array(o);var c=0;for(s=0;s<w.length;s++)for(d=7;d>=0;d--)a[c++]=w[s]>>d&1}var l,v=[];for(s=0;3>s;s++)l=new Uint8Array(o),v.push(l);for(d=0,u=0;o>u;u++)for(s=0;3>s;s++)v[s][u]=h[d++];return{width:i.width,height:i.height,pixels:v,mask:a}}});return n});