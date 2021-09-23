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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["./utils","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],(function(e,n){var r={};function t(e){return e.name}function i(e,n,r,t){return e.replace(new RegExp('hreff="'+n+'"',"g"),t?'href="'+r+'" target="_blank"':'hreff="'+r+'"')}r._wrapFieldInfoInRichText=function(e){return"["+t(e)+"]"},r._updateXMLString=function(e,n,r){return e.replace(new RegExp("\\["+n+"\\]","g"),r)},r.isDTagFieldInfo=function(e){return e&&(e.hasVariable||e.script||0===e.name.indexOf("headers."))};var o=/<d .*?\/>|<d\/>/,a=/<text.*?\/>/,f=/<reporttitle.*?\/>/i,l=/<reportname.*?\/>/i,d=/<reporttitle2.*?\/>/i;r.createFieldInfoFromRichText=function(e,n,i){e=e||"",n=n||[];for(var c,s={},g=0;g<n.length;g++){var u,I=n[g];u="Title"===I.name&&f.test(e)?f:"Name"===I.name&&l.test(e)?l:"Subtitle"===I.name&&d.test(e)?d:r.isDTagFieldInfo(I)?o:a,e=e.replace(u,r._wrapFieldInfoInRichText(I)),s[t(I)]=I}return i&&i.length&&(c={},i.forEach((function(n){e=e.replace(new RegExp('hreff="'+n.templateName+'"'),'hreff="'+t(n)+'"'),c[t(n)]=n}))),{isRichText:!0,richTextJson:{fieldInfos:s,linkFieldInfos:c,xmlString:e}}},r.createRichTextFromFieldInfo=function(e,n){var o=e.richTextJson,a=o.xmlString;for(var f in o.fieldInfos){var l=o.fieldInfos[f],d=n.getFieldInfoTagString(l);a=r._updateXMLString(a,t(l),d||"")}for(var f in o.linkFieldInfos){l=o.linkFieldInfos[f],d=n.getLinkFieldInfoTagString(l);a=i(a,t(l),d||"",n.actualLink)}return a},r.updateXMLString=function(e,n){n.forEach((function(n){e.richTextJson.xmlString=r._updateXMLString(e.richTextJson.xmlString,n.nameBefore,"["+n.name+"]")}))},r.addFieldInfosToRichTextFieldInfo=function(n,i,o){o=o||{};var a=n.richTextJson,f=i.map((function(n){return a.fieldInfos[t(n)]=n,o.insertRendered?e.renderer.renderFieldInfoInTableCell(n).formattedValue:r._wrapFieldInfoInRichText(n)})).join(", "),l=a.xmlString,d="number"==typeof o.insertIndex?Math.min(l.length,o.insertIndex):l.length,c=l.substr(0,d),s=l.substr(d);o.addSpaces&&c.length&&" "!==c.charAt(c.length-1)&&(c+=" "),o.addSpaces&&s.length&&!/^(\s|\.|,|:|\))/.test(s)&&(s=" "+s),a.xmlString=c+f+s},r.replaceFieldInfoInRichTextFieldInfo=function(e,n,i){var o=e.richTextJson;o.fieldInfos[t(n)]&&-1!==o.xmlString.indexOf(r._wrapFieldInfoInRichText(n))&&(delete o.fieldInfos[t(n)],r.updateXMLString(e,[{nameBefore:t(n),name:t(i)}]),o.fieldInfos[t(i)]=i)};var c={_reCache:{},getRegExp:function(){var e=n.getCurrencySymbol();return this._reCache[e]||(this._reCache[e]=new RegExp("[\\"+e+"%]*\\[.+?\\]%*","g")),this._reCache[e]}};return r.createFieldInfoFromRenderedXMLString=function(e,n){var t=r.collectFieldInfosFromRenderedXMLString(e,n);return r.createFieldInfoFromRichText(t._xmlString,t.fieldInfos)},r.collectFieldInfosFromRenderedXMLString=function(n,t){var i={};if(t)for(var o in t.fieldInfos){var a=t.fieldInfos[o];i[e.renderer.renderFieldInfoInTableCell(a).formattedValue]=a}var f=[],l=n.match(c.getRegExp());return l&&l.forEach((function(t){var o=i[t]||e.builder.createFieldInfoFromSpecialFieldName(t.replace(/\[|\]/g,""))||e.builder.createFieldInfoFromLabel(t);o&&(f.push(o),n=n.replace(t,r.isDTagFieldInfo(o)?"<d/>":"<text/>"))})),{fieldInfos:f,_xmlString:n}},r}));