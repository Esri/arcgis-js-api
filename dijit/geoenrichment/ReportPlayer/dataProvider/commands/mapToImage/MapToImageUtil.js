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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-construct","esri/dijit/geoenrichment/promise/all","./MapToURLUtil","./_MapReplacer"],function(e,n,r,o,a,t){var i={};return i.enableCaching=a.enableCaching,i.clearCaching=a.clearCaching,i.replaceMapWithImage=function(i,c){c=c||{};var u=[],l={errors:[],undo:function(){u.map(function(e){e()})}},p=i.collectMaps({allAreas:!0}),m=[];return o(p.map(function(o){return n(a.mapToURL(o.map,o.legend,o.node),function(i){var l=t.replaceMapWithImage(o.node);u.push(l.undo),m.push(o);var p=new e;return l.mapImage.onload=p.resolve,l.mapImage.onerror=function(e){console.log(e),r.destroy(l.mapImage),p.resolve()},n(a.urlToSrc(i,c),function(e){l.mapImage.src=e}),p.promise})})).always(function(){return m.length!==p.length&&(p.forEach(function(e){if(-1===m.indexOf(e)){var n=t.replaceMapWithImage(e.node);u.push(n.undo)}}),l.errors.push(new Error("Some maps can't be exported"))),l})},i.mapInfoToDataUrl=function(e,r){return r=r||{},n(a.mapToURL(e.map,e.legend,e.node,r),function(e){return a.urlToSrc(e,r)})},i.collectMapsAsImages=function(e,r){r=r||{};var t=e.collectMaps({allAreas:!0});return o(t.map(function(e){return n(a.mapToURL(e.map,e.legend,e.node,r),function(e){return a.urlToSrc(e,r)}).otherwise(function(){return null}).then(function(n){return{url:n,itemId:e.itemId,areaIndex:e.areaIndex,position:e.position}})}))},i});