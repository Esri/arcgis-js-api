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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/i18n!esri/nls/jsapi"],(function(e){e=e.geoenrichment.dijit.UrlToItemUtil;var r={},t=/\.(kml|kmz)$/i,i=/\.(csv)$/i;return r.tryCreateItemFromServerUrl=function(r){if(!r)return null;var l,n="FeatureServer",u="MapServer",s="ImageServer",y="VectorTileServer";function a(e){return r.substr(0,r.lastIndexOf(e)+e.length)}function p(e){var t=r.match("(.*"+e+")(/?)(\\d*)(.*)","i");return t?t[3]?t[1]+t[2]+t[3]:t[1]:null}function S(r){var t=r.split("/"),i=t[t.length-2];l.title=i||e.featureLayer}if(-1!==r.indexOf(n)){var d=a(n);l={url:p(n)||d,type:"Feature Service",typeKeywords:["Feature Service"]},S(d)}else if(-1!==r.indexOf(u)){d=a(u);l={url:p(u)||d,type:"Map Service",typeKeywords:["Map Service"]},S(d)}else-1!==r.indexOf(s)?S((l={url:a(s),type:"Image Service",typeKeywords:["Image Service"]}).url):-1!==r.indexOf(y)?S((l={url:a(y),type:"Vector Tile Service",typeKeywords:["Vector Tile Service"]}).url):-1!==r.indexOf("WMSServer")?S((l={url:a("WMSServer"),type:"WMS",typeKeywords:["WMS"]}).url):-1!==r.indexOf("wmts")?S((l={url:a("wmts"),type:"WMTS",typeKeywords:["WMTS"]}).url):-1!==r.indexOf("wfs")?S((l={url:a("wfs"),type:"WFS",typeKeywords:["WFS"]}).url):t.test(r)?l={url:r,type:"KML",typeKeywords:["KML"],title:r.substr(r.lastIndexOf("/")+1).replace(t,"")}:i.test(r)&&(l={url:r,type:"CSV",typeKeywords:["CSV"],title:r.substr(r.lastIndexOf("/")+1).replace(i,"")});return l&&(l.id=l.url,l.name=l.title),l},r}));