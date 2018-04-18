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

define(["../../ConversionUtil","./AlignParser"],function(e,a){var t={getElement:function(t,l){var i=t.attributes,o=l.templateJson.metadata.mapImageInfosHash[i.name],n="mapImage"===t.name,m=n?null:l.processFileName(i.src),r={id:"img",fileName:m,isMapImage:n,circularMask:i.circularMask,scaleToCover:i.scaleToCover,webMapId:o?o.webMapId:i.webMapId,defaultBasemapId:o?o.defaultBasemapId:i.defaultBasemapId,mapScale:o?o.mapScale:null,calculatorFieldName:o&&o.fieldName,style:{top:e.ptToPx(i.top)||0,left:e.ptToPx(i.left)||0,width:e.ptToPx(i.width),height:e.ptToPx(i.height),angle:Number(i.angle)||0,opacity:Math.min(1,Number(0===i.opacity?0:i.opacity||1))},isLogoPlaceholder:i.isLogoPlaceholder,dynamicBehavior:i.dynamicBehavior};return a.parseAlign(i,r.style),l.revisionVersion<1&&(r.style.angle=e.ptToPx(r.style.angle),r.style.opacity=Math.min(1,e.ptToPx(r.style.opacity))),m&&l.putImageData(m,i.data),r},parseMapImageDField:function(e,a){return t.getElement({name:"mapImage",attributes:{name:e}},a)}};return t});