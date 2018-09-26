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

define(["../../declare","dojo/_base/lang","./_Wizard","./InfographicsOptions","./InfographicsMainPage","./DataBrowser","./lang","dojo/i18n!../../nls/jsapi"],function(t,i,n,e,s,a,o,h){function r(t){return"OneVar"==t.type&&1==t.variables.length}h=h.geoenrichment.dijit.WizardButtons;return t("esri.dijit.geoenrichment.InfographicsConfig",[n],{options:null,constructor:function(){this.pages.m=new s({onAddVariables:i.hitch(this,this._addVariables),onOK:i.hitch(this,this._onOK),onCancel:i.hitch(this,this._onCancel)})},startup:function(){this._started||(this.inherited(arguments),this.options||this.set("options",new e),this.loadPage("m"))},_setOptionsAttr:function(t){this._set("options",t),this.pages.m.set("options",t)},_getCountryIDAttr:function(){return this.pages.m.get("countryID")},_setCountryIDAttr:function(t){this.pages.m.set("countryID",t)},_addVariables:function(){var t=this,n=this.get("countryID"),e=this.pages.db;e?e.set("countryID",n):(e=new a({countryID:n,countryBox:!1,title:this.pages.m.nls.mainTitle}),e.on("back",i.hitch(this,this.loadPage,"m")),e.on("cancel",i.hitch(this,this._onCancel)),e.on("ok",i.hitch(this,this._applyVariables)),this.pages.db=e);var s=[];this.options.getItems(n).then(function(i){for(var n=0;n<i.length;n++){var a=i[n];r(a)&&s.push(a.variables[0])}e.set("selection",s),t.loadPage("db"),e.launch()})},_applyVariables:function(){for(var t=this,i=this.pages.m.get("countryID"),n=this.pages.db.dataCollections[i],s=null,a={},h=this.pages.db.get("selection"),l=0;l<h.length;l++){var c=h[l];if(o.endsWith(c,".*"))for(var g=c.split(".")[0],u=function(t){if(!s)for(var i=0;i<n.length;i++)s[n[i].id]=n[i];return s[t]}(g),p=u.variables,f=0;f<p.length;f++)a[p[f].fullName]=!0;else a[c]=!0}this.options.getItems(i).then(function(i){var n,s;for(n=i.length-1;n>=0;n--)if(s=i[n],r(s)){var o=p.get(s.variables[0]);o&&a[o.fullName]?delete a[o.fullName]:i.splice(n,1)}for(var h in a)o=p.get(h),s=new e.Item("OneVar",[h]),s.title=o.alias,i.push(s);t.loadPage("m"),t.pages.m.set("options",t.options)})},_onOK:function(){this.emit("ok")},_onCancel:function(){this.emit("cancel")}})});