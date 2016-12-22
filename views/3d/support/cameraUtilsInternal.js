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

define(["./mathUtils","../lib/glMatrix"],function(t,a){function e(a,e,n,o,l){var c=d;r.normalize(a,c);var s=Math.abs(r.dot(c,o));s>.99&&(s=Math.abs(r.dot(e,o)),.99>s?r.set(e,c):c=null);var g=0;if(c){r.scale(o,r.dot(o,c),i),r.subtract(c,i);var h=r.dot(c,l),v=h/(r.length(c)*r.length(l));r.cross(c,l,i);var u=r.dot(i,o)>0?1:-1;g=u*t.rad2deg(t.acos(v))}var b=t.rad2deg(t.acos(-r.dot(o,a)/r.length(a)));return n?(n.heading=g,n.tilt=b,n):{heading:g,tilt:b}}var r=a.vec3d,d=r.create(),i=r.create();return{directionToHeadingTilt:e}});