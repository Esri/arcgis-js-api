// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["./utils","./countryConfig"],function(e,n){var r={},i={_reCache:{},getRegExp:function(){var e=n.getCurrencySymbol();return this._reCache[e]||(this._reCache[e]=new RegExp("[\\"+e+"%]*\\[[^\\[]*\\]%*","g")),this._reCache[e]}};r.collectFieldInfosFromRenderedXMLString=function(n,r){var t={},a={};r&&r.fieldInfos.forEach(function(n){t[e.renderer.renderFieldInfoInTableCell(n)]=n}),r&&r.specialFieldInfos.forEach(function(n){a[e.renderer.renderFieldInfoInTableCell(n)]=n});var o=[],l=[],c=n.match(i.getRegExp());return c&&c.forEach(function(r){var i=t[r]||a[r]||e.builder.createFieldInfoFromSpecialFieldName(r.replace(/\[|\]/g,""))||e.builder.getFieldInfoFromLabel(r);i&&(i.hasVariable||i.script?(o.push(i),n=n.replace(r,"<d/>")):(l.push(i),n=n.replace(r,"<text/>")))}),{xmlString:n,fieldInfos:o,specialFieldInfos:l}};var t=/<d[^\/]*\/>/,a=/<text[^\/]*\/>/,o=/<reportname\s*\/\>/i,l=/<reporttitle2\s*\/\>/i;return r.createFieldInfoFromRichText=function(e,n,i){e=e||"",n=n||[],i=i||[];for(var c=0;c<n.length;c++)e=e.replace(t,r._wrapFieldInfoInRichText(n[c]));for(c=0;c<i.length;c++){var f,d=i[c];f="Title"==d.name&&o.test(e)?o:"Subtitle"==d.name&&l.test(e)?l:a,e=e.replace(f,r._wrapFieldInfoInRichText(d))}return{isRichText:!0,richTextJson:{fieldInfos:n,specialFieldInfos:i,xmlString:e}}},r.createRichTextFromFieldInfo=function(e,n,i){var t=e.richTextJson,a=t.xmlString;return t.fieldInfos.forEach(function(e){var i=n(e);a=a.replace(r._wrapFieldInfoInRichText(e),i||"")}),t.specialFieldInfos.forEach(function(e){var n=i(e);a=a.replace(r._wrapFieldInfoInRichText(e),n||"")}),a},r.addFieldInfosToRichTextFieldInfo=function(e,n){var i=e.richTextJson;i.xmlString+=n.map(function(e){return e.hasVariable?i.fieldInfos.push(e):i.specialFieldInfos.push(e),r._wrapFieldInfoInRichText(e)}).join(", ")},r._wrapFieldInfoInRichText=function(e){return"["+e.name+"]"},r.updateXMLString=function(e,n){return n.forEach(function(n){e=e.replace(new RegExp("\\["+n.nameBefore+"\\]","g"),"["+n.name+"]")}),e},r});