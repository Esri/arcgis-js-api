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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/string","dojo/i18n!esri/nls/jsapi"],(function(e,t){t=t.geoenrichment.dijit.UrlToItemUtil;var r={},i=/\.(kml|kmz)$/i,n=/\.(csv)$/i;return r.tryCreateItemFromServerUrl=function(r){if(!r)return null;var l,s="FeatureServer",u="MapServer",a="ImageServer",S="VectorTileServer";function c(e){return r.substr(0,r.lastIndexOf(e)+e.length)}function v(e){var t=r.match("(.*"+e+")(/?)(\\d*)(.*)","i");return t?t[3]?t[1]+t[2]+t[3]:t[1]:null}function y(r){var i=l.url.split("/"),n=i[i.length-2];l.title=n?e.substitute(r,{title:n}):t.featureLayer}return-1!==r.indexOf(s)?(l={url:v(s)||c(s),type:"Feature Service",typeKeywords:["Feature Service"]},y(t.featureServicePattern)):-1!==r.indexOf(u)?(l={url:v(u)||c(u),type:"Map Service",typeKeywords:["Map Service"]},y(t.mapServicePattern)):-1!==r.indexOf(a)?(l={url:c(a),type:"Image Service",typeKeywords:["Image Service"]},y(t.imageServicePattern)):-1!==r.indexOf(S)?(l={url:c(S),type:"Vector Tile Service",typeKeywords:["Vector Tile Service"]},y(t.vectorTileServicePattern)):-1!==r.indexOf("WMSServer")?(l={url:c("WMSServer"),type:"WMS",typeKeywords:["WMS"]},y(t.wmsServicePattern)):-1!==r.indexOf("wmts")?(l={url:c("wmts"),type:"WMTS",typeKeywords:["WMTS"]},y(t.wmtsServicePattern)):-1!==r.indexOf("wfs")?(l={url:c("wfs"),type:"WFS",typeKeywords:["WFS"]},y(t.wfsServicePattern)):i.test(r)?l={url:r,type:"KML",typeKeywords:["KML"],title:e.substitute(t.kmlPattern,{title:r.substr(r.lastIndexOf("/")+1).replace(i,"")})}:n.test(r)&&(l={url:r,type:"CSV",typeKeywords:["CSV"],title:e.substitute(t.csvPattern,{title:r.substr(r.lastIndexOf("/")+1).replace(n,"")})}),l&&(l.id=l.url,l.name=l.title),l},r}));
