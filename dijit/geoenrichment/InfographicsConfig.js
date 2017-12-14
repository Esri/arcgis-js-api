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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/string","./_Wizard","./InfographicsOptions","./InfographicsMainPage","./DataBrowser","./lang","dojo/i18n!../../nls/jsapi"],function(t,i,n,e,s,a,o,r,h){function l(t){return"OneVar"!=t.type?!1:1!=t.variables.length?!1:!0}h=h.geoenrichment.dijit.WizardButtons;var c="m",g="db",u=t("esri.dijit.geoenrichment.InfographicsConfig",[e],{options:null,constructor:function(){this.pages[c]=new a({onAddVariables:i.hitch(this,this._addVariables),onOK:i.hitch(this,this._onOK),onCancel:i.hitch(this,this._onCancel)})},startup:function(){this._started||(this.inherited(arguments),this.options||this.set("options",new s),this.loadPage(c))},_setOptionsAttr:function(t){this._set("options",t),this.pages[c].set("options",t)},_getCountryIDAttr:function(){return this.pages[c].get("countryID")},_setCountryIDAttr:function(t){this.pages[c].set("countryID",t)},_addVariables:function(){var t=this,n=this.get("countryID"),e=this.pages[g];e?e.set("countryID",n):(e=new o({countryID:n,countryBox:!1,title:this.pages[c].nls.mainTitle}),e.on("back",i.hitch(this,this.loadPage,c)),e.on("cancel",i.hitch(this,this._onCancel)),e.on("ok",i.hitch(this,this._applyVariables)),this.pages[g]=e);var s=[];this.options.getItems(n).then(function(i){for(var n=0;n<i.length;n++){var a=i[n];l(a)&&s.push(a.variables[0])}e.set("selection",s),t.loadPage(g),e.launch()})},_applyVariables:function(){function t(t){if(!a)for(var i=0;i<e.length;i++)a[e[i].id]=e[i];return a[t]}for(var i=this,n=this.pages[c].get("countryID"),e=this.pages[g].dataCollections[n],a=null,o={},h=this.pages[g].get("selection"),u=0;u<h.length;u++){var p=h[u];if(r.endsWith(p,".*"))for(var f=p.split(".")[0],d=t(f),v=d.variables,_=0;_<v.length;_++)o[v[_].fullName]=!0;else o[p]=!0}this.options.getItems(n).then(function(t){var n,e;for(n=t.length-1;n>=0;n--)if(e=t[n],l(e)){var a=v.get(e.variables[0]);a&&o[a.fullName]?delete o[a.fullName]:t.splice(n,1)}for(var r in o)a=v.get(r),e=new s.Item("OneVar",[r]),e.title=a.alias,t.push(e);i.loadPage(c),i.pages[c].set("options",i.options)})},_onOK:function(){this.emit("ok")},_onCancel:function(){this.emit("cancel")}});return u});