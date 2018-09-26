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

define(["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/Tapestry"],function(e,n,t){return e(t,{_toDetailView:function(e){this.inherited(arguments),this.onExpandedStateChanged()},collapseContent:function(){this._mainTable&&n.remove(this._mainTable,"clicked"),this._toMainView(),this.onExpandedStateChanged()},onExpandedStateChanged:function(){}})});