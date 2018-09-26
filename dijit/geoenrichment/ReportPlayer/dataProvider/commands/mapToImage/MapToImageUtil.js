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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/dom-construct","dojo/promise/all","./MapToURLUtil","./_MapReplacer"],function(e,n,r,o,a,t){var c={};return c.enableCaching=a.enableCaching,c.clearCaching=a.clearCaching,c.replaceMapWithImage=function(c,u){u=u||{};var l=[],i={errors:[],undo:function(){l.map(function(e){e()})}},p=c.collectMaps({allAreas:!0}),m=[];return o(p.map(function(o){return n(a.mapToURL(o.map,o.legend,o.node,u),function(c){var i=t.replaceMapWithImage(o.node);l.push(i.undo),m.push(o);var p=new e;return i.mapImage.onload=p.resolve,i.mapImage.onerror=function(e){console.log(e),r.destroy(i.mapImage),p.resolve()},n(a.urlToSrc(c,u),function(e){i.mapImage.src=e}),p.promise})})).always(function(){return m.length!==p.length&&(p.forEach(function(e){if(-1===m.indexOf(e)){var n=t.replaceMapWithImage(e.node);l.push(n.undo)}}),i.errors.push(new Error("Some maps can't be exported"))),i})},c.mapInfoToDataUrl=function(e,r){return r=r||{},n(a.mapToURL(e.map,e.legend,e.node,r),function(e){return a.urlToSrc(e,r)})},c.collectMapsAsImages=function(e,r){r=r||{};var t=e.collectMaps({allAreas:!0});return o(t.map(function(e){return n(a.mapToURL(e.map,e.legend,e.node,r),function(e){return a.urlToSrc(e,r)}).otherwise(function(){return null}).then(function(n){return{url:n,itemId:e.itemId,areaIndex:e.areaIndex,position:e.position}})}))},c});