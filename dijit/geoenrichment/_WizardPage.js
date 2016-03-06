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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../declare","dojo/string","dojo/dom-class","dojox/mvc/Templated","dojo/text!./templates/_WizardPage.html","./Grid"],function(s,r,e,t,i,o){var n={busy:"Wizard_Loading",done:"Wizard_Done",error:"Wizard_Error"};return s("esri.dijit.geoenrichment._WizardPage",[t],{buttonsNode:null,progressPromises:null,buildRendering:function(){var s=this.templateString;s.length>0&&"﻿"==s[0]&&(s=s.substr(1)),this.templateString=r.substitute(i,{content:s}),this.inherited(arguments),this.layoutGrid.rows=[o.AUTO,o.AUTO,o.AUTO]},resize:function(){this.layoutGrid.resize()},_setStackingAttr:function(s){switch(s){case"stretch":this.layoutGrid.rows[1]=o.STRETCH;break;case"stack":this.layoutGrid.rows[1]=o.STACK}},showProgress:function(s,r){this.progressPromises||(this.progressPromises={});var e;e="string"==typeof r||r instanceof String?r:Math.random().toString(),this.progressPromises[e]&&this.progressPromises[e].cancel();var t=s.isResolved(),i=this;t||(this.progressPromises[e]=s,s.always(function(){delete i.progressPromises[e]}),this._setState("busy")),s.then(function(){var s=r instanceof Function?r:i[r];s.apply(i,arguments),t||i._setState("done")},function(s){"CancelError"==s.name?t||i._setState("done"):i._setState("error",s.toString())})},cancelProgress:function(s){var r=this.progressPromises&&this.progressPromises[s];r&&r.cancel()},_setState:function(s,r){if(this.progressDiv){this.progressDiv.innerHTML=r||"";for(var t in n)t==s?e.add(this.progressDiv,n[t]):e.remove(this.progressDiv,n[t])}},destroy:function(){if(this.progressPromises){for(var s in this.progressPromises)s.hasOwnProperty(s)&&this.progressPromises[s].cancel();this.progressPromises=null}this.inherited(arguments)}})});