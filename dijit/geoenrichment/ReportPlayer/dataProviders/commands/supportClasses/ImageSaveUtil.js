// COPYRIGHT © 2017 Esri
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

define(["dojo/when","dojo/Deferred","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],function(e,n,t,i,a,r){var s={};return s.saveImages=function(s,u){if(s&&s.length){var o=s.length>1,l=0,c=[],f=new n;return e(r.executeFunctions(s.map(function(e){return function(){function n(){var e=u.reportTitle;if(o){var n=u.analysisAreas[Math.floor(l/u.numPages)],t=l%u.numPages;e+="_"+n.name+"_Page "+(t+1)}return e+=".png"}var t=e.dataURL||e;t=a.base64DataFromDataURL(t);var r=atob(t),s=i.binaryStringToByteArray(r).buffer;c.push({name:n(),data:i.arrayBuffersToBlob([s],"image/png"),base64Data:r}),l++}}),0),function(){c.length>1&&u.saveMultipleImages?e(u.saveMultipleImages(c),f.resolve,f.reject):e(r.executeFunctions(c.map(function(e){return function(){if(!u.skipSavingFile){var n=e.filename;return u.confirmSaveFile(n,function(){t.saveAs(e.data,n)})}}}),100),function(){f.resolve(c)},f.reject)}),f.promise}},s});