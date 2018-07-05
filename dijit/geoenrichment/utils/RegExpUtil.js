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

define([],function(){var e={};e.createRegExp=function(t,n,r){return t=e.trimText(t),!t&&r?null:new RegExp(t,n)},e.trimText=function(e){return e?e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,"").trim():""},e.replace=function(e,t,n){return null==e?"":(""+e).replace(t,function(e){return n[e]||""})};var t=/&|<|>/g,n=/&|<|>|"|'/g,r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};e.encodeXML=function(u,a){return e.replace(u,a?n:t,r)};var u=/&amp;|&lt;|&gt;|&quot;|&apos;/g,a={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'"};return e.decodeXML=function(t){return e.replace(t,u,a)},e});