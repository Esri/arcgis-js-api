// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/_base/lang"],function(e,r,n){function t(e){var r;return e?(r=n.replace(e,function(e,r){return a+'$feature["'+r+'"]'+i}),r=_.test(r)?r.replace(_,""):g+r,r=o.test(r)?r.replace(o,""):r+g,r=r.replace(p,l).replace(c,u)):r='""',r}Object.defineProperty(r,"__esModule",{value:!0});var a="__begin__",i="__end__",p=new RegExp(a,"ig"),c=new RegExp(i,"ig"),_=new RegExp("^"+a,"i"),o=new RegExp(i+"$","i"),g='"',l=g+" + ",u=" + "+g;r.convertTemplatedStringToArcade=t});