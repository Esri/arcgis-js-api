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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","../../lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/lang","dojo/i18n!../../nls/jsapi","dojo/text!./templates/RFxRasterInfoCellSizeEditor.html"],(function(e,i,t,s,a,n,l,r){return e("RFxRasterInfoCellSizeEditor",[t,s,a],{templateString:r,defaultRasterInfo:{blockHeight:256,blockWidth:2048,compressionQuality:0,compressionType:"",firstPyramidLevel:1,format:"",maximumPyramidLevel:30,packetSize:4,pixelType:-1,pyramidResamplingType:-1,type:"RasterInfo"},value:this.defaultRasterInfo,constructor:function(e){this.inherited(arguments),this._i18n=l.rasterFunctions.rfxArgs},postCreate:function(){this.inherited(arguments),this._setLabels(),this._readValues(),this.rasterInfoPixelSize.on("change",n.hitch(this,(function(e){this._onPixelSizeChange(e.x)})))},_readValues:function(){var e=this.value||this.inputArgs.RasterInfo.value;if(e){var i=e.pixelSizeX||e.pixelSizeY?e.pixelSizeX:0;this.rasterInfoPixelSize.cellSize.set("value",i)}else this.rasterInfoPixelSize.cellSize.set("value",0)},_onPixelSizeChange:function(e){if(!i.isDefined(e)||!isNaN(e)){if(0===e)this.value=this.defaultRasterInfo;else{var t=this.value||this.defaultRasterInfo;t.pixelSizeX=e,t.pixelSizeY=e}this.inputArgs.RasterInfo.value=this.value}},_setLabels:function(){this.inputArgs&&this.inputArgs.RasterInfo&&(this.cellSizeLabel.innerHTML=this.inputArgs.RasterInfo.displayName)}})}));