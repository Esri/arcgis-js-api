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
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/json","dojo/has","../kernel","../config","../request","./ServiceGeneratedFeatureCollection"],function(e,t,o,r,i,s,a,n){var c=e([n],{declaredClass:"esri.layers.GeoRSSLayer",serviceUrl:location.protocol+"//utility.arcgis.com/sharing/rss",constructor:function(){s.defaults.geoRSSService&&(this.serviceUrl=s.defaults.geoRSSService),this._createLayer()},parse:function(){return this._io=a({url:this.serviceUrl,content:{url:this.url,refresh:this.loaded?!0:void 0,outSR:this._outSR?o.toJson(this._outSR.toJson()):void 0},callbackParamName:"callback"}),this._io},_initLayer:function(){this.inherited(arguments),this.loaded||(this.loaded=!0,this.onLoad(this))}});return r("extend-esri")&&t.setObject("layers.GeoRSSLayer",c,i),c});