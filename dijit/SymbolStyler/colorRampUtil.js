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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/array","dojox/gfx"],function(o,r){var e={createColorRamp:function(o){var t=o.node,s=o.width,n=o.height,a=e._stopsFromColors(o),l=r.createSurface(t,s,n);return l=l.createRect(l.getDimensions()).setFill({type:"linear",x1:0,y1:0,x2:0,y2:n,colors:a})},updateColorRamp:function(o){var r=o.ramp,t=r.getFill();return t.colors=e._stopsFromColors(o),r.setFill(t),r},_stopsFromColors:function(o){var r,e,t,s=o.colors,n=o.hasStops,a=s.length,l=n?1/a:1/(a-1),c=[],f=s[0];if("object"==typeof f&&f.hasOwnProperty("offset")&&f.hasOwnProperty("color"))return s;for(var i=0;a>i;i++)r=i*l,e=s[a-1-i],c.push({offset:r,color:e}),n&&(t=(i+1)*l,c.push({offset:t,color:e}));return c}};return e});