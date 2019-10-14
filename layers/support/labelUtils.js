// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/string"],function(e,r,n){function t(e){var r;return e?(r=n.replace(e,function(e){return i+'$feature["'+e+'"]'+c}),r=_.test(r)?r.replace(_,""):o+r,r=g.test(r)?r.replace(g,""):r+o,r=r.replace(p,u).replace(a,l)):r='""',r}Object.defineProperty(r,"__esModule",{value:!0});var i="__begin__",c="__end__",p=new RegExp(i,"ig"),a=new RegExp(c,"ig"),_=new RegExp("^"+i,"i"),g=new RegExp(c+"$","i"),o='"',u=o+" + ",l=" + "+o;r.convertTemplatedStringToArcade=t});