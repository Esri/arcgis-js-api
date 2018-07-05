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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["../../declare","dojo/dom-construct","./DataBrowser/DataBrowserBase","./DataBrowser/VariableStore","./DataBrowser/_GeoenrichmentVariables","./DataBrowser/DataBrowserContentFactory","./ProgressHandler"],function(r,e,s,t,o,a,n){return r("esri.dijit.geoenrichment.DataBrowser",s,{_progressHandler:null,postCreate:function(){if(!this.variables){var s=r([t,o]);this.variables=new s}this._contentFactory||(this._contentFactory=new a),this._progressHandler||(this._progressHandler=new n(e.create("div",{},this.domNode))),this.own(this._progressHandler),this.inherited(arguments)},showProgress:function(r){return this._progressHandler.showProgress(r)}})});