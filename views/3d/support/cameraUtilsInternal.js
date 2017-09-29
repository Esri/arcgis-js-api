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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["./mathUtils","../lib/glMatrix"],function(t,a){function e(a,e,n,l,o){var c=d;r.normalize(a,c);var s=r.dot(c,l),g=s>0;s=Math.abs(s),s>.99&&(s=Math.abs(r.dot(e,l)),.99>s?(r.set(e,c),g&&r.scale(c,-1)):c=null);var h=0;if(c){r.scale(l,r.dot(l,c),i),r.subtract(c,i);var v=r.dot(c,o),u=v/(r.length(c)*r.length(o));r.cross(c,o,i);var b=r.dot(i,l)>0?1:-1;h=b*t.rad2deg(t.acos(u))}var f=t.rad2deg(t.acos(-r.dot(l,a)/r.length(a)));return n?(n.heading=h,n.tilt=f,n):{heading:h,tilt:f}}var r=a.vec3d,d=r.create(),i=r.create();return{directionToHeadingTilt:e}});