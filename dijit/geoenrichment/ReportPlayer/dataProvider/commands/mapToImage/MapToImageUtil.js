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

define(["dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","esri/dijit/geoenrichment/promise/all","./MapToURLUtil","./_MapReplacer"],(function(e,a,n,r,o,t,i){var m={};return m.enableCaching=t.enableCaching,m.clearCaching=t.clearCaching,m.replaceMapWithImage=function(m,c){c=c||{};var l=[],p={errors:[],undo:function(){l.map((function(e){e()}))}},u=m.collectMaps({allAreas:!0}),s=[],d={};return o(u.map((function(o){d[o.areaIndex]=d[o.areaIndex]||1;var p=m.getReportData().isMultiFeature?m.getReportData().combinedAreasInfo.name:m.getReportData().analysisAreas[o.areaIndex].name;return(c=e.mixin({},c)).mapName=p+" (Map"+(d[o.areaIndex]>1?" "+d[o.areaIndex]:"")+")",d[o.areaIndex]++,n(t.mapToURL(o.map,o.legend,o.node,c),(function(e){var m=i.replaceMapWithImage(o.node);if(l.push(m.undo),s.push(o),!c.replaceWithJson){var p=new a;return m.mapImage.onload=function(){m.mapImage.onload=m.mapImage.onerror=null,p.resolve()},m.mapImage.onerror=function(e){m.mapImage.onload=m.mapImage.onerror=null,console.log(e),r.destroy(m.mapImage),p.resolve()},n(t.urlToSrc(e,c),(function(e){m.mapImage.src=e})),p.promise}m.mapImage.src=e}))}))).always((function(){return s.length!==u.length&&(u.forEach((function(e){if(-1===s.indexOf(e)){var a=i.replaceMapWithImage(e.node);l.push(a.undo)}})),p.errors.push(new Error("Some maps can't be exported"))),p}))},m.mapInfoToDataUrl=function(e,a){return n(t.mapToURL(e.map,e.legend,e.node,a),(function(e){return t.urlToSrc(e,a)}))},m.collectMapsAsImages=function(e,a){var r=e.collectMaps({allAreas:!0});return o(r.map((function(e){return n(t.mapToURL(e.map,e.legend,e.node,a),(function(e){return t.urlToSrc(e,a)})).otherwise((function(){return null})).then((function(a){return{url:a,itemId:e.itemId,mapName:e.mapName,areaIndex:e.areaIndex,position:e.position}}))})))},m}));