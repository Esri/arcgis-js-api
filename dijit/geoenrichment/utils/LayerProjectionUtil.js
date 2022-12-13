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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/promise/all","./ProjectionUtil"],(function(e,r){var t={};function n(e,t){e.graphics&&e.graphics.filter((function(e){return!e.geometry||!e.geometry.spatialReference})).forEach((function(r){e.remove(r)}));var n=e.graphics&&e.graphics.filter((function(e){return e.geometry.spatialReference.wkid!==t.wkid}));if(t&&n&&n.length){var i=n.map((function(e){return e.geometry}));return console.log("ProjectionUtil: projecting layer graphics from "+i[0].spatialReference.wkid+" to "+t.wkid+". Num: "+i.length),r.projectGeometries(i,t).then((function(r){var t=[];n.forEach((function(e,n){e.setGeometry(r[n]),e.geometry||t.push(e)})),t.forEach((function(r){e.remove(r)})),console.log("ProjectionUtil: projected graphics: "+(i.length-t.length))}))}}function i(e,r){r&&(e.spatialReference=r)}return t.projectLayer=function(t,o){var c=r.getSpatialReference(o);return e([n(t,c),i(t,c)]).then((function(){return t}))},t}));