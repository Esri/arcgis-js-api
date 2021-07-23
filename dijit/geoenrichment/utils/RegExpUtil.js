// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define([],(function(){var t={createRegExp:function(e,n,r){return!(e=t.trimText(e))&&r?null:new RegExp(e,n)},trimText:function(t){return t?t.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,"").trim():""},replace:function(t,e,n){return null==t?"":(""+t).replace(e,(function(t){return n[t]||""}))}},e=/&|<|>/g,n=/&|<|>|"|'/g,r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};t.encodeXML=function(u,a){return t.replace(u,a?n:e,r)};var u=/&amp;|&lt;|&gt;|&quot;|&apos;/g,a={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'"};t.decodeXML=function(e){return t.replace(e,u,a)},t.IS_RICH_TEXT_RE=/<\w/,t.IS_URL_RE=/((www\.|http:\/\/|https:\/\/)[A-Za-z0-9_.\-~]+\.[A-Za-z0-9_.\-~/]+)|([A-Za-z0-9_.\-~]+\.com[A-Za-z0-9_.\-~/]*)/,t.isRichText=function(e){return e&&t.IS_RICH_TEXT_RE.test(e)},t.isUrl=function(e){return e&&t.IS_URL_RE.test(e)};var c=/^[0-9a-fA-F]{32}$/;return t.isId=function(t){return t&&c.test(t)},t}));