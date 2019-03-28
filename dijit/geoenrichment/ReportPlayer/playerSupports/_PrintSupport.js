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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/when","../printing/PrintableContainer"],function(n,i,t){return n(null,{_getPrintableContainer:function(n){var e=this,r=new t(this,this._viewModel);return n.onShowWaiting=function(n){e._showWaiting(n)},i(r.initialize(n),function(n){return n||i(r.stop(),function(){return null})})},_getPrintDialogSettings:function(){return new t(this,this._viewModel).getPrintDialogSettings()}})});