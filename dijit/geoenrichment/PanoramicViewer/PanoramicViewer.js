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

define(["require","dojo/on","dojo/dom-construct","./esriPhotoViewer","dojo/i18n!esri/nls/jsapi"],(function(e,n,o,i,t){t=t.geoenrichment.dijit.ReportPlayer.PanoramicViewer;var r={};try{if(window.location!==window.parent.location)for(var a=document.getElementsByTagName("head")[0],l=parent.document.getElementsByTagName("style"),d=0;d<l.length;d++)a.appendChild(l[d].cloneNode(!0))}catch(e){console.log("Failed to initialize environment for panoramic viewer.")}return r.showViewer=function(r,a,l){if(r){var d,s,c=[],m=0;a.forEach((function(e,n){m=e===r?n:m;var o=!(void 0===e.url||!e.url),t=e.thumbnail||e.getThumbnail&&e.getThumbnail();e=new i.Image({filename:e.filename||"",imageType:e.imageViewType,url:o?e.url:e.getUrl(),caption:e.description,thumbnail:o?e.url:t&&0===t.indexOf("data:")?t:null,attachmentId:n,externalImage:o});c.push(e)})),d={mode:"standard",onCloseCallback:h},s=o.create("div",{class:"esriGEAbsoluteStretched esriGEPanoramicViewerContainer"},document.body);var u=n(document.body,"keydown",(function(e){u&&27===e.keyCode&&h()}));new i({container:s,images:c,selectedIndex:m,options:d,urlThree:e.toUrl("./esripv_three.js"),urlPanolens:e.toUrl("./esripv_lens.js"),nls:t})}function h(){o.destroy(s),u&&u.remove(),u=null,l.onClose&&l.onClose()}},r}));