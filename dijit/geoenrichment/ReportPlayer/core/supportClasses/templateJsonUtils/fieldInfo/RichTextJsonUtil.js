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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["./utils","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,n){var r={_wrapFieldInfoInRichText:function(e){return"["+e.name+"]"},_updateXMLString:function(e,n,r){return e.replace(new RegExp("\\["+n+"\\]","g"),r)},isDTagFieldInfo:function(e){return e&&(e.hasVariable||e.script||0===e.name.indexOf("headers."))}},t=/<d.*?\/>/,a=/<text.*?\/>/,o=/<reportname.*?\/>/i,l=/<reporttitle2.*?\/>/i;r.createFieldInfoFromRichText=function(e,n){e=e||"",n=n||[];var f={};for(i=0;i<n.length;i++){var d,c=n[i];d="Title"===c.name&&o.test(e)?o:"Subtitle"===c.name&&l.test(e)?l:r.isDTagFieldInfo(c)?t:a,e=e.replace(d,r._wrapFieldInfoInRichText(c)),f[c.name]=c}return{isRichText:!0,richTextJson:{fieldInfos:f,xmlString:e}}},r.createRichTextFromFieldInfo=function(e,n){var t=e.richTextJson,i=t.xmlString;for(var a in t.fieldInfos){var o=t.fieldInfos[a],l=n(o);i=r._updateXMLString(i,o.name,l||"")}return i},r.updateXMLString=function(e,n){n.forEach((function(n){e.richTextJson.xmlString=r._updateXMLString(e.richTextJson.xmlString,n.nameBefore,"["+n.name+"]")}))},r.addFieldInfosToRichTextFieldInfo=function(n,t,i){i=i||{};var a=n.richTextJson,o=t.map((function(n){return a.fieldInfos[n.name]=n,i.insertRendered?e.renderer.renderFieldInfoInTableCell(n).formattedValue:r._wrapFieldInfoInRichText(n)})).join(", "),l=a.xmlString,f="number"==typeof i.insertIndex?Math.min(l.length,i.insertIndex):l.length,d=l.substr(0,f),c=l.substr(f);i.addSpaces&&d.length&&" "!==d.charAt(d.length-1)&&(d+=" "),i.addSpaces&&c.length&&!/^(\s|\.|,|:|\))/.test(c)&&(c=" "+c),a.xmlString=d+o+c},r.replaceFieldInfoInRichTextFieldInfo=function(e,n,t){var i=e.richTextJson;i.fieldInfos[n.name]&&-1!==i.xmlString.indexOf(r._wrapFieldInfoInRichText(n))&&(delete i.fieldInfos[n.name],r.updateXMLString(e,[{nameBefore:n.name,name:t.name}]),i.fieldInfos[t.name]=t)};var f={_reCache:{},getRegExp:function(){var e=n.getCurrencySymbol();return this._reCache[e]||(this._reCache[e]=new RegExp("[\\"+e+"%]*\\[.+?\\]%*","g")),this._reCache[e]}};return r.createFieldInfoFromRenderedXMLString=function(e,n){var t=r.collectFieldInfosFromRenderedXMLString(e,n);return r.createFieldInfoFromRichText(t._xmlString,t.fieldInfos)},r.collectFieldInfosFromRenderedXMLString=function(n,t){var i={};if(t)for(var a in t.fieldInfos){var o=t.fieldInfos[a];i[e.renderer.renderFieldInfoInTableCell(o).formattedValue]=o}var l=[],d=n.match(f.getRegExp());return d&&d.forEach((function(t){var a=i[t]||e.builder.createFieldInfoFromSpecialFieldName(t.replace(/\[|\]/g,""))||e.builder.createFieldInfoFromLabel(t);a&&(l.push(a),n=n.replace(t,r.isDTagFieldInfo(a)?"<d/>":"<text/>"))})),{fieldInfos:l,_xmlString:n}},r}));