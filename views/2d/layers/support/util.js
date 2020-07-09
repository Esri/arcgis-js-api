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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/jsonMap"],(function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var r=new o.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});t.toJSONGeometryType=function(e){return r.toJSON(e)},t.analyzeRings=function(e,t,o){for(var r=[],n=[],i=0,l=0,u=0,y=e;u<y.length;u++){var a=y[u],s=l,p=a[0][0],m=a[0][1];r[l++]=p,r[l++]=m;for(var f=0,h=1;h<a.length;++h){var c=p,g=m;p=a[h][0],f+=(m=a[h][1])*c-p*g,r[l++]=p,r[l++]=m}t(f/2),f>0?(s-i>0&&(o(i,s,r,n),i=s),n.length=0):f<0&&s-i>0?n.push(.5*(s-i)):l=s}l-i>0&&o(i,l,r,n)}}));