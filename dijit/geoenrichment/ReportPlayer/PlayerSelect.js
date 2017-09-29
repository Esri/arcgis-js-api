// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-class","dijit/form/Select"],function(e,t,i){return e(i,{_isBeingUpdatedFlag:null,postCreate:function(){this.inherited(arguments),t.add(this.domNode,"esriGEReportPlayerSelect")},focus:function(){},update:function(e,t){var i=this;clearTimeout(this._isBeingUpdatedFlag),this._isBeingUpdatedFlag=!0,void 0!==e&&this.set("options",e),void 0!==t&&this.set("value",t),this._isBeingUpdatedFlag=setTimeout(function(){delete i._isBeingUpdatedFlag},100)},onChange:function(){this._isBeingUpdatedFlag||this.onUserChange(this.get("value"))},onUserChange:function(e){}})});