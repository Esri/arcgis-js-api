// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","esri/dijit/geoenrichment/promise/all","./MapToURLUtil","./_MapReplacer"],(function(e,n,a,r,o,t,i){var c={};return c.enableCaching=t.enableCaching,c.clearCaching=t.clearCaching,c.replaceMapWithImage=function(c,l){l=l||{};var m=[],p={errors:[],undo:function(){m.map((function(e){e()}))}},u=c.collectMaps({allAreas:!0}),s=[],d={};return o(u.map((function(o){d[o.areaIndex]=d[o.areaIndex]||1;var p=c.getReportData().isMultiFeature?c.getReportData().combinedAreasInfo.name:c.getReportData().analysisAreas[o.areaIndex].name;return(l=e.mixin({},l)).mapName=p+" (Map"+(d[o.areaIndex]>1?" "+d[o.areaIndex]:"")+")",d[o.areaIndex]++,a(t.mapToURL(o.map,o.legend,o.node,l),(function(e){var c=i.replaceMapWithImage(o.node);if(m.push(c.undo),s.push(o),!l.replaceWithJson){var p=new n;return c.mapImage.onload=function(){c.mapImage.onload=c.mapImage.onerror=null,p.resolve()},c.mapImage.onerror=function(e){c.mapImage.onload=c.mapImage.onerror=null,console.log(e),r.destroy(c.mapImage),p.resolve()},a(t.urlToSrc(e,l),(function(e){c.mapImage.src=e})),p.promise}c.mapImage.src=e}))}))).always((function(){return s.length!==u.length&&(u.forEach((function(e){if(-1===s.indexOf(e)){var n=i.replaceMapWithImage(e.node);m.push(n.undo)}})),p.errors.push(new Error("Some maps can't be exported"))),p}))},c.mapInfoToDataUrl=function(e,n){return a(t.mapToURL(e.map,e.legend,e.node,n),(function(e){return t.urlToSrc(e,n)}))},c.collectMapsAsImages=function(e,n){var r=e.collectMaps({allAreas:!0});return o(r.map((function(e){return a(t.mapToURL(e.map,e.legend,e.node,n),(function(e){return t.urlToSrc(e,n)})).otherwise((function(){return null})).then((function(n){return{url:n,itemId:e.itemId,areaIndex:e.areaIndex,position:e.position}}))})))},c}));