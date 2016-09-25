// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/string","./_Wizard","./InfographicsOptions","./InfographicsMainPage","./DataBrowser","./lang","dojo/i18n!../../nls/jsapi"],function(t,i,n,e,s,o,a,r,h){function l(t){return"OneVar"!=t.type?!1:1!=t.variables.length?!1:!0}h=h.geoenrichment.dijit.WizardButtons;var c="m",g="db",p=t("esri.dijit.geoenrichment.InfographicsConfig",[e],{options:null,constructor:function(){this.pages[c]=new o({onAddVariables:i.hitch(this,this._addVariables),onOK:i.hitch(this,this._onOK),onCancel:i.hitch(this,this._onCancel)})},startup:function(){this._started||(this.inherited(arguments),this.options||this.set("options",new s),this.loadPage(c))},_setOptionsAttr:function(t){this._set("options",t),this.pages[c].set("options",t)},_getCountryIDAttr:function(){return this.pages[c].get("countryID")},_setCountryIDAttr:function(t){this.pages[c].set("countryID",t)},_addVariables:function(){var t=this,n=this.get("countryID"),e=this.pages[g];e?e.set("countryID",n):(e=new a({countryID:n,countryBox:!1,multiSelect:!0,title:this.pages[c].nls.mainTitle}),e.on("back",i.hitch(this,this.loadPage,c)),e.on("cancel",i.hitch(this,this._onCancel)),e.on("ok",i.hitch(this,this._applyVariables)),this.pages[g]=e);var s=[];this.options.getItems(n).then(function(i){for(var n=0;n<i.length;n++){var o=i[n];l(o)&&s.push(o.variables[0])}e.set("selection",s),t.loadPage(g)})},_applyVariables:function(){function t(t){if(!o)for(var i=0;i<e.length;i++)o[e[i].id]=e[i];return o[t]}for(var i=this,n=this.pages[c].get("countryID"),e=this.pages[g].dataCollections[n],o=null,a={},h=this.pages[g].get("selection"),p=0;p<h.length;p++){var u=h[p];if(r.endsWith(u,".*"))for(var f=u.split(".")[0],d=t(o),v=d.variables,_=0;_<v.length;_++)a[f+"."+v[_].id]=!0;else a[u]=!0}this.options.getItems(n).then(function(t){var n,o;for(n=t.length-1;n>=0;n--)if(o=t[n],l(o)){var r=o.variables[0];a[r]?a[r]=!1:t.splice(n,1)}for(n=0;n<e.length;n++)for(var h=e[n].variables,g=0;g<h.length;g++){var p=e[n].id+"."+h[g].id;a[p]&&(o=new s.Item("OneVar",[p]),o.title=h[g].alias,t.push(o))}i.loadPage(c),i.pages[c].set("options",i.options)})},_onOK:function(){this.emit("ok")},_onCancel:function(){this.emit("cancel")}});return p});