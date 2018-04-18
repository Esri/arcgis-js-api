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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojo/string","dojox/mvc/Templated","dojo/text!./templates/_WizardPage.html","./Grid","./ProgressHandler"],function(t,e,s,r,i,n,o){return t("esri.dijit.geoenrichment._WizardPage",r,{buttonsNode:null,_progressHandler:null,buildRendering:function(){var t=this.templateString;t&&"\ufeff"==t[0]&&(t=t.substr(1)),this.templateString=s.substitute(i,{content:t}),this.inherited(arguments),this.layoutGrid.rows=[n.AUTO,n.AUTO,n.AUTO]},resize:function(){this.layoutGrid.resize()},_setStackingAttr:function(t){switch(t){case"stretch":this.layoutGrid.rows[1]=n.STRETCH;break;case"stack":this.layoutGrid.rows[1]=n.STACK}},showProgress:function(t,s){return this._progressHandler||(this._progressHandler=new o(this.progressDiv,{queryNode:this.domNode}),this.own(this._progressHandler)),t=this._progressHandler.showProgress(t,"string"==typeof s?s:""),s=s?"function"==typeof s?s:this[s]:null,"function"==typeof s&&t.then(e.hitch(this,s)),t},cancelProgress:function(t){this._progressHandler&&this._progressHandler.cancelProgress("string"==typeof t?t:"")}})});