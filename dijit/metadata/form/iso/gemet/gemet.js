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

define(["dojo/_base/lang","dojo/_base/array","dojo/query","dojo/has","dijit/registry","dojo/i18n!../../../nls/i18nIso","../../../../../kernel"],function(e,n,t,a,o,l,u){var i={conceptQuery:null,language:null},r={bul:"bg",cze:"cs",dan:"da",dut:"nl",eng:"en",est:"et",fin:"fi",fre:"fr",ger:"de",gre:"el",hun:"hu",gle:"ga",ita:"it",lav:"lv",lit:"lt",mlt:"mt",pol:"pl",por:"pt",rum:"ro",slo:"sk",slv:"sl",spa:"es",swe:"sv"},s={getSelectedLanguage:function(e){var n=e.selectedIndex;return-1!==n?e.options[n].value:"en"},getSessionConceptQuery:function(){return i.conceptQuery},populateLanguages:function(e,a){var u,s,g=null,d=null,c=null,p=i.language;if(void 0!==p&&null!==p)g=p;else if((s=t("[data-gxe-path='/gmd:MD_Metadata/gmd:language/gmd:LanguageCode/@codeListValue']",e.rootDescriptor.domNode))&&1===s.length&&(u=o.byNode(s[0]))&&u.inputWidget)if((d=u.inputWidget.getInputValue())in r)g=r[d];else for(c in r)if(r.hasOwnProperty(c)&&r[c]===d){g=d;break}void 0!==g&&null!==g||(g="en");var f,v=a.options,m=[],b=l.gemet.languages;for(c in b)b.hasOwnProperty(c)&&(f=c===g,m.push(new Option(b[c],c,!1,f)));m.sort(function(e,n){return e.label===n.label?0:e.label>n.label?1:-1}),n.forEach(m,function(e){v.add(e)})},saveSessionConceptQuery:function(e){i.conceptQuery=e},saveSessionLanguage:function(e){i.language=e}};return a("extend-esri")&&e.setObject("dijit.metadata.form.iso.gemet.gemet",s,u),s});