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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/query","dojo/has","dijit/registry","dojo/i18n!../../../nls/i18nIso","../../../../../kernel"],(function(e,n,t,a,l,o,u){var r={conceptQuery:null,language:null},i={bul:"bg",cze:"cs",dan:"da",dut:"nl",eng:"en",est:"et",fin:"fi",fre:"fr",ger:"de",gre:"el",hun:"hu",gle:"ga",ita:"it",lav:"lv",lit:"lt",mlt:"mt",pol:"pl",por:"pt",rum:"ro",slo:"sk",slv:"sl",spa:"es",swe:"sv"},s={getSelectedLanguage:function(e){var n=e.selectedIndex;return-1!==n?e.options[n].value:"en"},getSessionConceptQuery:function(){return r.conceptQuery},populateLanguages:function(e,a){var u,s,g=null,d=null,c=null,p=r.language;if(null!=p)g=p;else if((s=t("[data-gxe-path='/gmd:MD_Metadata/gmd:language/gmd:LanguageCode/@codeListValue']",e.rootDescriptor.domNode))&&1===s.length&&(u=l.byNode(s[0]))&&u.inputWidget)if((d=u.inputWidget.getInputValue())in i)g=i[d];else for(c in i)if(i.hasOwnProperty(c)&&i[c]===d){g=d;break}null==g&&(g="en");var f,m=a.options,b=[],v=o.gemet.languages;for(c in v)v.hasOwnProperty(c)&&(f=c===g,b.push(new Option(v[c],c,!1,f)));b.sort((function(e,n){return e.label===n.label?0:e.label>n.label?1:-1})),n.forEach(b,(function(e){m.add(e)}))},saveSessionConceptQuery:function(e){r.conceptQuery=e},saveSessionLanguage:function(e){r.language=e}};return a("extend-esri")&&e.setObject("dijit.metadata.form.iso.gemet.gemet",s,u),s}));