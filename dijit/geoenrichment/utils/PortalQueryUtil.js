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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define([],(function(){var e={combineQueryString:function(r){var o="";return r.type&&(o+='type:"'+r.type+'"'),r.typeKeywords?Array.isArray(r.typeKeywords[0])?o+=" typekeywords:("+r.typeKeywords.map((function(r){return e.combineTypeKeywords(r)})).join(" OR ")+")":o+=" typekeywords:"+e.combineTypeKeywords(r.typeKeywords,r.typeKeywordsNot):r.typeKeywordsNot&&(o+=" typekeywords:"+e.combineTypeKeywords(null,r.typeKeywordsNot)),r.owner&&(o+=" owner:"+r.owner),r.isShared&&(o+=r.orgId?" ((orgid:"+r.orgId+' AND access:"public") OR access:"shared" OR access:"org")':' (access:"shared" OR access:"org")'),r.ownerNot&&(o+=" NOT owner:"+r.ownerNot),o},combineTypeKeywords:function(r,o){return r=r?e._combineArray(r):"",o?"("+r+" NOT "+(o=e._combineArray(o," OR "))+")":r},_combineArray:function(e,r){var o="string"==typeof e?e:1===e.length?e[0]:null;return o?"("===o.charAt(0)||'"'===o.charAt(0)?o:'"'+o+'"':"("+e.map((function(e){return'"'+e+'"'})).join(r||" ")+")"}};return e}));