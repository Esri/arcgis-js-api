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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when","dojo/dom-construct","dojo/dom-style","dojo/promise/all","esri/tasks/PrintTask","esri/tasks/PrintParameters","esri/tasks/PrintTemplate","esri/dijit/geoenrichment/utils/UrlUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil","esri/dijit/geoenrichment/utils/ImageUtil"],function(e,t,r,n,i,o,a,s,u,l,c){var p="https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export Web Map Task",m={mapToURL:function(r,i,l){var c=function(e){return e=e||p,u.registerCORS(e),e}(l.printMapTaskUrl),m=new o(c),d=new a;d.map=r;var h=new s;return h.exportOptions={width:3.125*n.get(i,"width"),height:3.125*n.get(i,"height"),dpi:300},h.format="png32",h.showAttribution=!1,d.template=h,t(m.execute(d),function(t){var r=new e;return setTimeout(function(){r.resolve(t.url)},100),r.promise})},urlToSrc:function(e,t){return t.saveImagesAsBase64?l.getRemoteImageDataUrl(e,{sizeLimit:1500}):e}},d={replaceMapWithImage:function(e){for(var t=[];e.children.length;)t.push(e.firstChild),e.removeChild(e.firstChild);var i=n.get(e,"position"),o=r.create("img",{class:"esriGEAbsoluteStretched"},e);return n.set(o,{width:n.get(e,"width")+"px",height:n.get(e,"height")+"px"}),n.set(e,"position","relative"),{mapImage:o,undo:function(){r.destroy(o),n.set(e,"position",i),t.forEach(function(t){r.place(t,e)})}}}},h={};return h.replaceMapWithImage=function(n,o){var a=[],s={errors:[],undo:function(){a.map(function(e){e()})}},u=n.collectMaps({allAreas:o.allAreas}),l=[];return i(u.map(function(n){return t(m.mapToURL(n.map,n.node,o),function(i){var s=d.replaceMapWithImage(n.node);a.push(s.undo),l.push(n);var u=new e;return s.mapImage.onload=u.resolve,s.mapImage.onerror=function(e){console.log(e),r.destroy(s.mapImage),u.resolve()},t(m.urlToSrc(i,o),function(e){s.mapImage.src=e}),u.promise})})).always(function(){return l.length!==u.length&&(u.forEach(function(e){if(-1===l.indexOf(e)){var t=d.replaceMapWithImage(e.node);a.push(t.undo)}}),s.errors.push(new Error("Some maps can't be exported"))),s})},h.collectMapsAsImages=function(e,r){var n=e.collectMaps({allAreas:!0});return i(n.map(function(e){return t(m.mapToURL(e.map,e.node,r),function(e){return m.urlToSrc(e,r)}).otherwise(function(){return null}).then(function(t){return{url:t,itemId:e.itemId,areaIndex:e.areaIndex,position:e.position}})}))},h});