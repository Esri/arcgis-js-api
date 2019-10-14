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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","./_Wizard","./InfographicsOptions","./InfographicsMainPage","./DataBrowser","./utils/lang","dojo/i18n!esri/nls/jsapi"],function(t,i,e,n,s,a,o,r){function h(t){return"OneVar"==t.type&&1==t.variables.length}r=r.geoenrichment.dijit.WizardButtons;return t("esri.dijit.geoenrichment.InfographicsConfig",[e],{options:null,startup:function(){this._started||(this.inherited(arguments),this.pages.m=new s({onAddVariables:i.hitch(this,this._addVariables),onOK:i.hitch(this,this._onOK),onCancel:i.hitch(this,this._onCancel)}),this.options||this.set("options",new n),this.loadPage("m"))},_setOptionsAttr:function(t){this._set("options",t),this.pages.m.set("options",t)},_getCountryIDAttr:function(){return this.pages.m.get("countryID")},_setCountryIDAttr:function(t){this.pages.m.set("countryID",t)},_addVariables:function(){var t=this,e=this.get("countryID"),n=this.pages.db;n?n.set("countryID",e):(n=new a({countryID:e,countryBox:!1,title:this.pages.m.nls.mainTitle}),n.on("back",i.hitch(this,this.loadPage,"m")),n.on("cancel",i.hitch(this,this._onCancel)),n.on("ok",i.hitch(this,this._applyVariables)),this.pages.db=n);var s=[];this.options.getItems(e).then(function(i){for(var e=0;e<i.length;e++){var a=i[e];h(a)&&s.push(a.variables[0])}n.set("selection",s),t.loadPage("db"),n.launch()})},_applyVariables:function(){for(var t=this,i=this.pages.m.get("countryID"),e=this.pages.db.variables.dataCollections.data,s=null,a={},r=this.pages.db.get("selection"),l=0;l<r.length;l++){var c=r[l];if(o.endsWith(c,".*"))for(var g=c.split(".")[0],p=function(t){if(!s)for(var i=0;i<e.length;i++)s[e[i].id]=e[i];return s[t]}(g),u=p.variables,d=0;d<u.length;d++)a[u[d].fullName]=!0;else a[c]=!0}var f=this.pages.db.variables;this.options.getItems(i).then(function(i){var e,s;for(e=i.length-1;e>=0;e--)if(s=i[e],h(s)){var o=f.get(s.variables[0]);o&&a[o.fullName]?delete a[o.fullName]:i.splice(e,1)}for(var r in a)o=f.get(r),s=new n.Item("OneVar",[r]),s.title=o.alias,i.push(s);t.loadPage("m"),t.pages.m.set("options",t.options)})},_onOK:function(){this.emit("ok")},_onCancel:function(){this.emit("cancel")}})});