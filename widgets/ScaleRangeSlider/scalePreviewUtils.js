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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","dojo/_base/config"],(function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0}),n.fallbackSpriteSheetFileName="en-wo",n.languageCode=r.locale.substr(0,2);var t={ae:"en",ar:"es",at:"de",au:"en",be:"nl",bg:"bg",bo:"es",br:"pt",ca:"en",ch:"de",ci:"fr",cl:"es",cn:"zh",co:"es",cr:"es",cz:"cs",de:"de",dk:"da",ee:"et",eg:"en",es:"es",fi:"fi",fr:"fr",gb:"en",gl:"da",gr:"el",gt:"es",hk:"en",id:"en",ie:"en",il:"en",in:"en",iq:"ar",is:"is",it:"it",jp:"ja",ke:"en",kr:"ko",kw:"ar",li:"de",lt:"lt",lu:"en",lv:"lv",ma:"fr",mg:"fr",ml:"fr",mo:"en",mx:"es",my:"en",ni:"es",nl:"nl",no:"nn",nz:"en",pe:"es",pl:"pl",pr:"es",pt:"pt",ro:"ro",ru:"ru",rw:"en",se:"sv",sg:"en",sk:"sk",sr:"nl",sv:"es",th:"th",tn:"fr",tw:"zh",us:"en",ve:"es",vi:"en",wo:"en",za:"en"};function l(n){return"url("+e.toUrl("./images/scalePreview/"+n+".jpg")+")"}n.getScalePreviewSource=function(e){return e=function(e){return e.toLowerCase()}(e),l(n.languageCode+"-"+e)+", "+l(t[e]+"-"+e)+", "+l(n.fallbackSpriteSheetFileName)},n.getScalePreviewSpriteBackgroundPosition=function(e){return e<0||e>=25?null:"-"+e%5*128+"px -"+128*Math.floor(e/5)+"px"}}));