// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/encoding/digests/_base","../kernel","../config","./DynamicMapServiceLayer","./ImageServiceLayerMixin"],(function(e,r,t,s,i,a,n,h){var o=e([n,h],{declaredClass:"esri.layers.ArcGISRenderingImageServiceLayer",rasterType:{rft:"rft",rasterObject:"rasterObj",url:"url"},constructor:function(e,r){this.type=r.type;var t=this._processRasterParam(r.raster);t&&(e=e+"?raster="+t,this._initialize(e,r),this.useMapImage=r&&r.useMapImage||!1)},_processRasterParam:function(e){if(e){if(this.type===this.rasterType.rft||this.type===this.rasterType.rasterObject){"object"==typeof e&&(e=JSON.stringify(e));var r=s.stringToWord(e);return s.wordToBase64(r)}return e}},refresh:function(e){if(!0===e)this.inherited(arguments);else{var r=this.disableClientCaching;this.disableClientCaching=!0,this.inherited(arguments),this.disableClientCaching=r}},setRaster:function(e){var r=this._processRasterParam(e);this._url.query.raster=r,this._params.raster=r,this.refresh(!0)},setRenderer:function(e,r){this.renderer=e,this.onRendererChange(),r||this.refresh(!0)},exportMapImage:function(e,t){var s=a.defaults.map,i=r.mixin({size:s.width+","+s.height},this._params,e?e.toJson(this.normalization):{},{f:"json"});delete i._ts,this._exportMapImage(this._url.path+"/exportImage",i,t)}});return t("extend-esri")&&r.setObject("layers.ArcGISRenderingImageServiceLayer",o,i),o}));