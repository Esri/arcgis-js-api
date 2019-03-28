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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["./utils","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(e,n){var r={};r._wrapFieldInfoInRichText=function(e){return"["+e.name+"]"};var i=/<d[^\/]*\/>/,t=/<text[^\/]*\/>/,l=/<reportname\s*\/\>/i,a=/<reporttitle2\s*\/\>/i;r.createFieldInfoFromRichText=function(e,n,o){e=e||"",n=n||[],o=o||[];for(var c=0;c<n.length;c++)e=e.replace(i,r._wrapFieldInfoInRichText(n[c]));for(c=0;c<o.length;c++){var f,d=o[c];f="Title"===d.name&&l.test(e)?l:"Subtitle"===d.name&&a.test(e)?a:t,e=e.replace(f,r._wrapFieldInfoInRichText(d))}return{isRichText:!0,richTextJson:{fieldInfos:n,specialFieldInfos:o,xmlString:e}}},r.createRichTextFromFieldInfo=function(e,n,i){var t=e.richTextJson,l=t.xmlString;return t.fieldInfos.forEach(function(e){var i=n(e);l=l.replace(r._wrapFieldInfoInRichText(e),i||"")}),t.specialFieldInfos.forEach(function(e){var n=i(e);l=l.replace(r._wrapFieldInfoInRichText(e),n||"")}),l},r.updateXMLString=function(e,n){n.forEach(function(n){e.richTextJson.xmlString=e.richTextJson.xmlString.replace(new RegExp("\\["+n.nameBefore+"\\]","g"),"["+n.name+"]")})},r.addFieldInfosToRichTextFieldInfo=function(e,n,i){var t=e.richTextJson;t.xmlString+=(i&&i.addSpaces&&t.xmlString?" ":"")+n.map(function(e){return e.hasVariable?t.fieldInfos.push(e):t.specialFieldInfos.push(e),r._wrapFieldInfoInRichText(e)}).join(", ")},r.replaceFieldInfoInRichTextFieldInfo=function(e,n,i){var t=e.richTextJson,l="@@@"+n.name+"@@@",a=-1,o=0;t.fieldInfos.some(function(e,c){if(e.name===n.name){if(e===n)return a=c,t.xmlString=t.xmlString.replace(r._wrapFieldInfoInRichText(n),r._wrapFieldInfoInRichText(i)),!0;t.xmlString=t.xmlString.replace(r._wrapFieldInfoInRichText(n),l),o++}}),-1!==a&&(t.fieldInfos[a]=i);for(var c=0;c<o;c++)t.xmlString=t.xmlString.replace(l,r._wrapFieldInfoInRichText(n))};var o={_reCache:{},getRegExp:function(){var e=n.getCurrencySymbol();return this._reCache[e]||(this._reCache[e]=new RegExp("[\\"+e+"%]*\\[[^\\[]*\\]%*","g")),this._reCache[e]}};return r.collectFieldInfosFromRenderedXMLString=function(n,r){var i={},t={};r&&r.fieldInfos.forEach(function(n){i[e.renderer.renderFieldInfoInTableCell(n).formattedValue]=n}),r&&r.specialFieldInfos.forEach(function(n){t[e.renderer.renderFieldInfoInTableCell(n).formattedValue]=n});var l=[],a=[],c=n.match(o.getRegExp());return c&&c.forEach(function(r){var o=i[r]||t[r]||e.builder.createFieldInfoFromSpecialFieldName(r.replace(/\[|\]/g,""))||e.builder.createFieldInfoFromLabel(r);o&&(o.hasVariable||o.script?(l.push(o),n=n.replace(r,"<d/>")):(a.push(o),n=n.replace(r,"<text/>")))}),{xmlString:n,fieldInfos:l,specialFieldInfos:a}},r});