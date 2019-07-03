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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../../ConversionUtil","./AlignParser","../../../annotations/supportClasses/DynamicBehaviors"],function(e,t,o){return{getElement:function(a,i){var r=a.attributes,s=i.processFileName(r.src),l={id:"img",fileName:s,circularMask:r.circularMask,scaleToCover:r.scaleToCover,style:{top:e.ptToPx(r.top)||0,left:e.ptToPx(r.left)||0,width:e.ptToPx(r.width),height:e.ptToPx(r.height),angle:Number(r.angle)||0,opacity:Math.min(1,Number(0===r.opacity?0:r.opacity||1)),zoom:r.zoom},isLogoPlaceholder:r.isLogoPlaceholder,dynamicBehavior:o.isSupported(r.dynamicBehavior)?r.dynamicBehavior:void 0};return t.parseAlign(r,l.style),i.revisionVersion<1&&(l.style.angle=e.ptToPx(l.style.angle),l.style.opacity=Math.min(1,e.ptToPx(l.style.opacity))),s&&i.putImageData(s,r.data),l}}});