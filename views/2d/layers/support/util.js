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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../core/jsonMap"],(function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=new o.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"});t.toJSONGeometryType=function(e){return r.toJSON(e)},t.analyzeRings=function(e,t,o){for(var r=[],n=[],i=0,l=0,u=0,y=e;u<y.length;u++){var a=y[u],p=l,s=a[0][0],f=a[0][1];r[l++]=s,r[l++]=f;for(var m=0,c=1;c<a.length;++c){var g=s,h=f;s=a[c][0],m+=(f=a[c][1])*g-s*h,r[l++]=s,r[l++]=f}t(m/2),m>0?(p-i>0&&(o(i,p,r,n),i=p),n.length=0):m<0&&p-i>0?n.push(.5*(p-i)):l=p}l-i>0&&o(i,l,r,n)}}));