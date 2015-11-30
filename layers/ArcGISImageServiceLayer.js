// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../config","./DynamicMapServiceLayer","./ImageServiceLayerMixin"],function(e,i,a,t,s,r,n){var h=e([r,n],{declaredClass:"esri.layers.ArcGISImageServiceLayer",constructor:function(e,i){this._initialize(e,i),this.useMapImage=i&&i.useMapImage||!1},refresh:function(e){if(e)this.inherited(arguments);else{var i=this.disableClientCaching;this.disableClientCaching=!0,this.inherited(arguments),this.disableClientCaching=i}},exportMapImage:function(e,a){var t=s.defaults.map,r=i.mixin({size:t.width+","+t.height},this._params,e?e.toJson(this.normalization):{},{f:"json"});delete r._ts,this._exportMapImage(this._url.path+"/exportImage",r,a)}});return a("extend-esri")&&i.setObject("layers.ArcGISImageServiceLayer",h,t),h});