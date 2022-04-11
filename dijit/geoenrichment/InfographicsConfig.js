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

define(["esri/declare","dojo/_base/lang","./_Wizard","./InfographicsOptions","./InfographicsMainPage","./DataBrowser","dojo/i18n!esri/nls/jsapi"],(function(t,i,e,n,s,a,o){o=o.geoenrichment.dijit.WizardButtons;function r(t){return"OneVar"==t.type&&1==t.variables.length}return t("esri.dijit.geoenrichment.InfographicsConfig",[e],{options:null,startup:function(){this._started||(this.inherited(arguments),this.pages.m=new s({onAddVariables:i.hitch(this,this._addVariables),onOK:i.hitch(this,this._onOK),onCancel:i.hitch(this,this._onCancel)}),this.options||this.set("options",new n),this.loadPage("m"))},_setOptionsAttr:function(t){this._set("options",t),this.pages.m.set("options",t)},_getCountryIDAttr:function(){return this.pages.m.get("countryID")},_setCountryIDAttr:function(t){this.pages.m.set("countryID",t)},_addVariables:function(){var t=this,e=this.get("countryID"),n=this.pages.db;n?n.set("countryID",e):((n=new a({countryID:e,countryBox:!1,title:this.pages.m.nls.mainTitle})).on("back",i.hitch(this,this.loadPage,"m")),n.on("cancel",i.hitch(this,this._onCancel)),n.on("ok",i.hitch(this,this._applyVariables)),this.pages.db=n);var s=[];this.options.getItems(e).then((function(i){for(var e=0;e<i.length;e++){var a=i[e];r(a)&&s.push(a.variables[0])}n.set("selection",s),t.loadPage("db"),n.launch()}))},_applyVariables:function(){var t=this,i=this.pages.m.get("countryID"),e=this.pages.db.variables.dataCollections.data;function s(t){for(var i=0;i<e.length;i++)null[e[i].id]=e[i];return null[t]}for(var a,o,h,l={},c=this.pages.db.get("selection"),g=0;g<c.length;g++){var p=c[g];if(o=".*",h=void 0,(h=(a=p).length-o.length)<0||a.indexOf(o,h)!==h)l[p]=!0;else for(var u=s(p.split(".")[0]).variables,d=0;d<u.length;d++)l[u[d].fullName]=!0}var f=this.pages.db.variables;this.options.getItems(i).then((function(i){var e,s;for(e=i.length-1;e>=0;e--)if(r(s=i[e])){var a=f.get(s.variables[0]);a&&l[a.fullName]?delete l[a.fullName]:i.splice(e,1)}for(var o in l)a=f.get(o),(s=new n.Item("OneVar",[o])).title=a.alias,i.push(s);t.loadPage("m"),t.pages.m.set("options",t.options)}))},_onOK:function(){this.emit("ok")},_onCancel:function(){this.emit("cancel")}})}));