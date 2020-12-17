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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],(function(e,n,i,t,a,r){var s={saveImages:function(s,u){if(s&&s.length){var o=s.length>1,c=0,l=[],g=new n,m={};return e(r.executeFunctions(s.map((function(e){return function(){var n=e.dataURL||e,i=a.base64DataFromDataURL(n),r=t.binaryStringToByteArray(atob(i)).buffer;l.push({name:function(){var e=u.reportTitle;if(o){var n=u.analysisAreas[Math.floor(c/u.numPages)],i=c%u.numPages;e+="_"+n.name+"_Page "+(i+1),m[e]?e+=" ("+ ++m[e]+")":m[e]=1}return e+=".png"}(),data:t.arrayBuffersToBlob([r],"image/png"),base64Data:i}),c++}})),0),(function(){1===l.length&&u.saveImageFunc?e(u.saveImageFunc(l[0]),g.resolve,g.reject):l.length>1&&u.saveMultipleImagesFunc?e(u.saveMultipleImagesFunc(l),g.resolve,g.reject):e(r.executeFunctions(l.map((function(e){return function(){if(!u.skipSavingFile){var n=1===l.length&&u.fileName||e.name;return u.confirmSaveFile(n,(function(){i.saveAs(e.data,n)}))}}})),100),(function(){g.resolve(l)}),g.reject)})),g.promise}}};return s}));