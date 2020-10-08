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

define(["require","exports","./Jpg","./Zlib"],(function(e,r,n,t){"use strict";return function(){function e(){}return e.decode=function(e){var r=new Uint8Array(e),i=new n;i.parse(r);var a,o=i.width,f=i.height,u=i.numComponents,s=i.eof,h=i.getData(o,f,!0),g=o*f,l=0,w=0,c=0;if(s<r.length-1){var p=new t(r.subarray(s)).getBytes();a=new Uint8Array(g);var d=0;for(l=0;l<p.length;l++)for(c=7;c>=0;c--)a[d++]=p[l]>>c&1}var v,y=null;if(1===u)y=[h,h,h];else{for(y=[],l=0;l<3;l++)v=new Uint8Array(g),y.push(v);for(c=0,w=0;w<g;w++)for(l=0;l<3;l++)y[l][w]=h[c++]}return{width:o,height:f,pixels:y,mask:a}},e}()}));