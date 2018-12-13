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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define([],function(){var e={};return e.combineQueryString=function(r){var n="";return r.type&&(n+='type:"'+r.type+'"'),r.typeKeywords&&(Array.isArray(r.typeKeywords[0])?n+=" typekeywords:("+r.typeKeywords.map(function(r){return e.combineTypeKeywords(r)}).join(" OR ")+")":n+=" typekeywords:"+e.combineTypeKeywords(r.typeKeywords,r.typeKeywordsNot)),r.owner&&(n+=" owner:"+r.owner),r.isShared&&(n+=' (access:"shared" OR access:"org")'),r.ownerNot&&(n+=" NOT owner:"+r.ownerNot),n},e.combineTypeKeywords=function(r,n){return r=e._combineArray(r),n?(n=e._combineArray(n),"("+r+" NOT "+n+")"):r},e._combineArray=function(e){return"string"==typeof e?"("===e.charAt(0)||'"'===e.charAt(0)?e:'"'+e+'"':1===e.length?'"'+e[0]+'"':"("+e.map(function(e){return'"'+e+'"'}).join(" ")+")"},e});