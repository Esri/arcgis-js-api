// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/has"],function(t){var r="transform-origin",n=t("ff"),o=t("ie"),e=t("webkit"),i=t("opera"),a=e&&"-webkit-transform"||n&&"-moz-transform"||i&&"-o-transform"||o&&"-ms-transform"||"transform",u=!o||o>9,f={supports3DTransforms:u,transformStyleName:a,clip:function(t,r){t.clip=r?"rect("+r.top+"px, "+r.right+"px, "+r.bottom+"px,"+r.left+"px)":""},setTransform:function(t,r){var n=null;2===r.length&&(n=f.translate(r)),6===r.length&&(n=f.matrix3d(r)),f.setTransformStyle(t,n)},setTransformStyle:function(t,r){t.transform=t[a]=r},setOrigin:function(){return u?function(t,n){t[r]=n[0]+"px "+n[1]+"px"}:function(t,n){t[r]=n[0]+"px "+n[1]+"px 0"}}(),matrix:function(t){return"matrix("+t[0].toFixed(10)+","+t[1].toFixed(10)+","+t[2].toFixed(10)+","+t[3].toFixed(10)+","+t[4]+","+t[5]+")"},matrix3d:function(){return u?function(t){return 6===t.length?"matrix3d("+t[0].toFixed(10)+","+t[1].toFixed(10)+",0,0,"+t[2].toFixed(10)+","+t[3].toFixed(10)+",0,0,0,0,1,0,"+Math.round(t[4]).toFixed(10)+","+Math.round(t[5]).toFixed(10)+",0,1)":void 0}:function(t){return"matrix("+t[0].toFixed(10)+","+t[1].toFixed(10)+","+t[2].toFixed(10)+","+t[3].toFixed(10)+","+Math.round(t[4])+","+Math.round(t[5])+")"}}(),translate:function(t){return"translate("+Math.round(t[0])+"px, "+Math.round(t[1])+"px)"},rotate:function(t){return f.rotateZ(t.toFixed(3))},rotateZ:function(){return u?function(t){return"rotateZ("+t+"deg)"}:function(t){return"rotate("+t+"deg)"}}()};return f});