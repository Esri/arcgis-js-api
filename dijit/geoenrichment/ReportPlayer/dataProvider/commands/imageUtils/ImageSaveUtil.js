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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/when","dojo/Deferred","esri/dijit/geoenrichment/utils/FileUtil","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue"],function(e,n,t,a,i,r){var u={};return u.saveImages=function(u,s){if(u&&u.length){var o=u.length>1,c=0,l=[],g=new n;return e(r.executeFunctions(u.map(function(e){return function(){var n=e.dataURL||e,t=i.base64DataFromDataURL(n),r=a.binaryStringToByteArray(atob(t)).buffer;l.push({name:function(){var e=s.reportTitle;if(o){var n=s.analysisAreas[Math.floor(c/s.numPages)],t=c%s.numPages;e+="_"+n.name+"_Page "+(t+1)}return e+=".png"}(),data:a.arrayBuffersToBlob([r],"image/png"),base64Data:t}),c++}}),0),function(){1===l.length&&s.saveImageFunc?e(s.saveImageFunc(l[0]),g.resolve,g.reject):l.length>1&&s.saveMultipleImagesFunc?e(s.saveMultipleImagesFunc(l),g.resolve,g.reject):e(r.executeFunctions(l.map(function(e){return function(){if(!s.skipSavingFile){var n=e.name;return s.confirmSaveFile(n,function(){t.saveAs(e.data,n)})}}}),100),function(){g.resolve(l)},g.reject)}),g.promise}},u});