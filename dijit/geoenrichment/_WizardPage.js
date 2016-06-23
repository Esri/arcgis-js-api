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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/on","dojo/string","dojo/dom-class","dojo/dom-construct","dojox/mvc/Templated","dijit/layout/ContentPane","dojo/text!./templates/_WizardPage.html","./Grid","./ProgressHandler"],function(t,e,s,o,r,i,n,d,a,l,u){return t("esri.dijit.geoenrichment._WizardPage",n,{buttonsNode:null,_progressHandler:null,buildRendering:function(){var t=this.templateString;t&&"﻿"==t[0]&&(t=t.substr(1)),this.templateString=o.substitute(a,{content:t}),this.inherited(arguments),this._progressHandler||(this._progressHandler=new u(this.progressDiv,{queryNode:this.domNode})),this.own(this._progressHandler),this.layoutGrid.rows=[l.AUTO,l.AUTO,l.AUTO]},resize:function(){this.layoutGrid.resize()},_setStackingAttr:function(t){switch(t){case"stretch":this.layoutGrid.rows[1]=l.STRETCH;break;case"stack":this.layoutGrid.rows[1]=l.STACK}},showProgress:function(t,s){return t=this._progressHandler.showProgress(t,"string"==typeof s?s:""),s=s?"function"==typeof s?s:this[s]:null,"function"==typeof s&&t.then(e.hitch(this,s)),t},cancelProgress:function(t){this._progressHandler.cancelProgress("string"==typeof t?t:"")},addButtons:function(t){var e;if(!this.buttonsNode){var o,r=this.layoutGrid.getChildren();for(e=0;e<r.length;e++)2==r[e].row&&(o=r[e]);o||(o=new d({row:2,"class":"Wizard_BottomPane"}),this.layoutGrid.addChild(o)),this.buttonsNode=i.create("div",{"class":"Wizard_Buttons"},o.domNode)}var n={};for(e=0;e<t.length;e++){var a=t[e],l=i.create("button",{"class":"Wizard_Button",innerHTML:a.label||""},this.buttonsNode);a.id&&(n[a.id]=l),a.onClick&&s(l,"click",a.onClick)}return n}})});