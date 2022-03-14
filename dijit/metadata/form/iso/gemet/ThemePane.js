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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/has","../../../base/Templated","dojo/text!./templates/ThemePane.html","dojo/i18n!../../../nls/i18nBase","dojo/i18n!../../../nls/i18nIso","../../../base/etc/docUtil","./gemet","../../../../../request","../../../../../kernel"],(function(e,t,n,i,s,a,o,r,l,c,h,g,u){var d=e([a],{checkBoxes:null,dialogBroker:null,gxeDocument:null,initiallySelectedValues:null,i18nBase:r,i18nIso:l,templateString:o,gemetUrl:null,gemetInspireThemeThesaurus:null,initialLanguage:null,_activePromise:null,postCreate:function(){this.inherited(arguments),this.workingNode.style.display="none",this.checkBoxes=[];var e=this.gxeDocument.gxeContext;this.gemetUrl=e.gemetUrl,this.gemetInspireThemeThesaurus=e.gemetInspireThemeThesaurus,h.populateLanguages(this.gxeDocument,this.languageSelect),this.initialLanguage=h.getSelectedLanguage(this.languageSelect),this._query()},_addOption:function(e,s,a){var o="Unknown",r=null;e.preferredLabel&&"string"==typeof e.preferredLabel.string&&(o=t.trim(e.preferredLabel.string)),e.definition&&"string"==typeof e.definition.string&&0===(r=t.trim(e.definition.string)).length&&(r=null);var l=this.id+"_chk"+s,h=i.create("div",{class:"gxeOption"},a),g=o,u=n.some(this.initiallySelectedValues,(function(e){if(e===g)return!0})),d={id:l,type:"checkbox",value:g};u&&(d.checked="checked");var m=i.create("input",d,h);this.checkBoxes.push(m);var p,f=i.create("label",{for:l},h);c.setNodeText(f,o),null!==r&&r.length>0&&(p=i.create("div",{class:"gxeDescription gxeSmallText"},h),c.setNodeText(p,r))},_fetch:function(e,t){var n=this.gemetInspireThemeThesaurus,i=this.gemetUrl+"/getConceptsMatchingRegexByThesaurus";return i+="?thesaurus_uri="+encodeURIComponent(n),i+="&language="+encodeURIComponent(e),i+="&regex="+encodeURIComponent(t),g({url:i,handleAs:"json",callbackParamName:"jsonp"},{})},_handleError:function(e){this.workingNode.style.display="none",console.error(e);var t=this.gemetUrl,n=l.gemet.ioerror.replace("{url}",t);i.empty(this.resultsNode);var s=i.create("div",{class:"gxeMessagePane"},this.resultsNode);i.create("div",{class:"gxeIcon gxeIconError"},s);var a=i.create("div",{class:"gxeMessageText"},s);c.setNodeText(a,n)},_onCancelClick:function(e){this.onCancelClick(e)},onCancelClick:function(e){},_onLanguageChange:function(e){this._query()},_onOkClick:function(e){var t=[],i=null;n.forEach(this.checkBoxes,(function(e){e.checked&&t.push(e.value)})),t.length>0&&(i=h.getSelectedLanguage(this.languageSelect),this.initialLanguage!==i&&h.saveSessionLanguage(i)),this.onOkClick(t)},onOkClick:function(e){},_query:function(){var e=h.getSelectedLanguage(this.languageSelect);null===this._activePromise&&(this.workingNode.style.display="inline-block",i.empty(this.resultsNode),(this._activePromise=this._fetch(e,".")).then(t.hitch(this,(function(e){this._activePromise=null;try{this._render(e)}catch(e){this._handleError(e)}})),t.hitch(this,(function(e){this._activePromise=null,this._handleError(e)}))))},_render:function(e){var t,s,a=0,o=this.resultsNode;i.empty(o),this.checkBoxes=[],n.forEach(e,(function(e,t){a++,this._addOption(e,t,o)}),this),this.workingNode.style.display="none",0===a&&(i.empty(o),t=i.create("div",{class:"gxeMessagePane"},o),i.create("div",{class:"gxeIcon gxeIconWarning"},t),s=i.create("div",{class:"gxeMessageText"},t),c.setNodeText(s,l.gemet.noMatch))}});return s("extend-esri")&&t.setObject("dijit.metadata.form.iso.gemet.ThemePane",d,u),d}));