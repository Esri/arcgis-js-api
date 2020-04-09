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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","dojo/on","dojo/dom-construct","./esriPhotoViewer","dojo/i18n!esri/nls/jsapi"],(function(e,n,o,i,a){a=a.geoenrichment.dijit.ReportPlayer.PanoramicViewer;var r={};try{if(window.location!==window.parent.location)for(var t=document.getElementsByTagName("head")[0],l=parent.document.getElementsByTagName("style"),s=0;s<l.length;s++)t.appendChild(l[s].cloneNode(!0))}catch(e){console.log("Failed to initialize environment for panoramic viewer.")}return r.showViewer=function(r,t,l){if(r){var s,c,d=[],u=0;t.forEach((function(e,n){u=e===r?n:u;var o=!(void 0===e.url||!e.url),a=e.thumbnail||e.getThumbnail&&e.getThumbnail();e=new i.Image({filename:e.filename||"",imageType:e.imageViewType,url:o?e.url:e.getUrl(),caption:e.description,thumbnail:o?e.url:a&&0===a.indexOf("data:")?a:null,attachmentId:n,externalImage:o});d.push(e)})),s={callbacks:{onCloseCallback:h},allowFullScreen:!0,showCarousel:!0,showCaptions:!0,showArrowPagination:!0},c=o.create("div",{class:"esriGEAbsoluteStretched esriGEPanoramicViewerContainer"},document.body);var m=n(document.body,"keydown",(function(e){m&&27===e.keyCode&&h()}));new i({container:c,images:d,selectedIndex:u,options:s,urlThree:e.toUrl("./esripv_three.js"),urlPanolens:e.toUrl("./esripv_lens.js"),nls:a})}function h(){o.destroy(c),m&&m.remove(),m=null,l.onClose&&l.onClose()}},r}));