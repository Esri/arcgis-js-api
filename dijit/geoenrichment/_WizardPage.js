// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","dojo/string","dojox/mvc/Templated","./Grid","./ProgressHandler","dojo/text!./templates/_WizardPage.html"],(function(e,t,s,r,i,n,o){return e("esri.dijit.geoenrichment._WizardPage",r,{buttonsNode:null,_progressHandler:null,buildRendering:function(){var e=this.templateString;e&&"\ufeff"==e[0]&&(e=e.substr(1)),this.templateString=s.substitute(o,{content:e}),this.inherited(arguments),this.layoutGrid.rows=[i.AUTO,i.AUTO,i.AUTO]},resize:function(){this.layoutGrid.resize()},_setStackingAttr:function(e){switch(e){case"stretch":this.layoutGrid.rows[1]=i.STRETCH;break;case"stack":this.layoutGrid.rows[1]=i.STACK}},showProgress:function(e,s){return this._progressHandler||(this._progressHandler=new n(this.progressDiv,{queryNode:this.domNode}),this.own(this._progressHandler)),e=this._progressHandler.showProgress(e,"string"==typeof s?s:""),"function"==typeof(s=s?"function"==typeof s?s:this[s]:null)&&e.then(t.hitch(this,s)),e},cancelProgress:function(e){this._progressHandler&&this._progressHandler.cancelProgress("string"==typeof e?e:"")}})}));