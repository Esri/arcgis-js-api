// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","./Zlib","./Jpg"],(function(e,t,r){"use strict";return e(null,{constructor:function(){},decode:function(e){var n=new Uint8Array(e),i=new r;i.parse(n);var a,h=i.numComponents,o=i.getData(i.width,i.height,!0),f=i.width*i.height,s=i.eof,u=0,g=0,d=0;if(s<n.length-1){var l=new t(n.subarray(s)).getBytes();a=new Uint8Array(f);var w=0;for(u=0;u<l.length;u++)for(d=7;d>=0;d--)a[w++]=l[u]>>d&1}var c,p=[];if(1===h&&o.length===f)p=[o,o,o];else{for(u=0;u<3;u++)c=new Uint8Array(f),p.push(c);for(d=0,g=0;g<f;g++)for(u=0;u<3;u++)p[u][g]=o[d++]}return{width:i.width,height:i.height,pixels:p,mask:a}}})}));