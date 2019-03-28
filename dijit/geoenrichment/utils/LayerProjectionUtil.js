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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/promise/all","./GraphicUtil","./ProjectionUtil"],function(e,r,t,n){function i(r,i){var o=n.getSpatialReference(i),c=r.features&&r.features.filter(function(e){return e.geometry.spatialReference.wkid!==o.wkid});if(!o||!c||!c.length)return(new e).resolve(null);var a=c.map(function(e){return e.geometry});return console.log("ProjectionUtil: projecting feature set to "+o.wkid+". Num: "+a.length),n.projectGeometries(a,o).then(function(e){var n=[];return r.features.forEach(function(r,t){r.setGeometry(e[t]),r.geometry&&n.push(r)}),t.createFeatureSetFromGraphics(n)})}function o(e,t){var i=n.getSpatialReference(t);return r([c(e,i),a(e,i)]).then(function(){return e})}function c(e,r){e.graphics&&e.graphics.filter(function(e){return!e.geometry||!e.geometry.spatialReference}).forEach(function(r){e.remove(r)});var t=e.graphics&&e.graphics.filter(function(e){return e.geometry.spatialReference.wkid!==r.wkid});if(r&&t&&t.length){var i=t.map(function(e){return e.geometry});return console.log("ProjectionUtil: projecting layer graphics from "+i[0].spatialReference.wkid+" to "+r.wkid+". Num: "+i.length),n.projectGeometries(i,r).then(function(r){var n=[];t.forEach(function(e,t){e.setGeometry(r[t]),e.geometry||n.push(e)}),n.forEach(function(r){e.remove(r)}),console.log("ProjectionUtil: projected graphics: "+(i.length-n.length))})}}function a(e,r){r&&(e.spatialReference=r)}var f={};return f.projectFeatureSet=i,f.projectLayer=o,f});