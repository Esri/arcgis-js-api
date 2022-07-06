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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/config","dojo/has","dojox/encoding/digests/_base","../kernel","../config","../request","../deferredUtils","./DynamicMapServiceLayer","./ImageServiceLayerMixin"],(function(e,i,r,t,s,n,a,o,l,h,d,c){var f=e([d,c],{declaredClass:"esri.layers.ArcGISRenderingImageServiceLayer",rasterType:{rft:"rft",rasterObject:"rasterObj",url:"url"},constructor:function(e,i){this.type=i.type;var r=this._processRasterParam(i.raster);r&&(e=e+"?raster="+r,this._initialize(e,i),this.useMapImage=i&&i.useMapImage||!1)},_processRasterParam:function(e){if(e){if(this.type===this.rasterType.rft||this.type===this.rasterType.rasterObject){"object"==typeof e&&(e=JSON.stringify(e));var i=n.stringToWord(e);return n.wordToBase64(i)}return e}},refresh:function(e){if(!0===e)this.inherited(arguments);else{var i=this.disableClientCaching;this.disableClientCaching=!0,this.inherited(arguments),this.disableClientCaching=i}},setRaster:function(e){var i=this._processRasterParam(e);this._url.query.raster=i,this._params.raster=i,this.refresh(!0)},setRenderer:function(e,i){this.renderer=e,this.onRendererChange(),i||this.refresh(!0)},exportMapImage:function(e,r){var t=o.defaults.map,s=i.mixin({size:t.width+","+t.height},this._params,e?e.toJson(this.normalization):{},{f:"json"});delete s._ts,this._exportMapImage(this._url.path+"/exportImage",s,r)},getMultidimensionalInfo:function(){var e=this._url.path+"/multiDimensionalInfo",s=new r(h._dfdCanceller);if(this._multidimensionalInfo)return s.resolve(this._multidimensionalInfo),s;if(!this.loaded||this.version>=10.3&&this.hasMultidimensions)s._pendingDfd=l({url:e,content:i.mixin(this._params,{f:"json",token:this._getToken()}),handleAs:"json",callbackParamName:"callback"}),s._pendingDfd.then(i.hitch(this,(function(e){this._multidimensionalInfo=e.multidimensionalInfo,s.callback(e.multidimensionalInfo)})),(function(e){s.errback(e)}));else{var n=new Error("Layer does not support multidimensional info");n.log=!!t.isDebug,s.errback(n)}return s}});return s("extend-esri")&&i.setObject("layers.ArcGISRenderingImageServiceLayer",f,a),f}));