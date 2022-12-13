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

define(["../../ConversionUtil","./AlignParser","../../../annotations/supportClasses/DynamicBehaviors"],(function(e,t,a){return{getElement:function(o,i){var r=o.attributes,l=i.processFileName(r.src),n={id:"img",fileName:l,circularMask:r.circularMask,scaleToCover:r.scaleToCover,style:{top:e.ptToPx(r.top)||0,left:e.ptToPx(r.left)||0,width:e.ptToPx(r.width),height:e.ptToPx(r.height),angle:Number(r.angle)||0,opacity:Math.min(1,Number(0===r.opacity?0:r.opacity||1)),zoom:r.zoom},dynamicBehavior:a.toSupportedValue(r.dynamicBehavior,r.isLogoPlaceholder)};return t.parseAlign(r,n.style),i.revisionVersion<1&&(n.style.angle=e.ptToPx(n.style.angle),n.style.opacity=Math.min(1,e.ptToPx(n.style.opacity))),l&&i.putImageData(l,r.data),n}}}));