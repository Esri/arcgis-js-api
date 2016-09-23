// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["dojo/_base/lang","./Layer","./mixins/ArcGISImageService","./mixins/OperationalLayer","./mixins/PortalLayer","./mixins/ScaleRangeLayer"],function(e,r,a,i,n,l){var t={canvas2D:"2d",webGL:"webgl",expWebGL:"experimental-webgl",webGL2:"webgl2",expWebGL2:"experimental-webgl2"},s=r.createSubclass([a,i,n,l],{declaredClass:"esri.layers.ImageryLayer",viewModulePaths:{"2d":"../views/2d/layers/ImageLayerView2D","3d":"../views/3d/layers/ImageLayerView3D"},normalizeCtorArgs:function(r,a){return"string"==typeof r?e.mixin({},{url:r},a):r},load:function(){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"]}).always(this._fetchService.bind(this)))},properties:{drawMode:!0,drawType:{value:t.canvas2D,cast:function(e){return e in t?e:t.canvas2D}},legendEnabled:{json:{readFrom:["showLegend"],read:function(e,r){return null!=r.showLegend?r.showLegend:!0}}},operationalLayerType:"ArcGISImageServiceLayer",popupEnabled:{json:{readFrom:["disablePopup"],read:function(e,r){return null!=r.disablePopup?!r.disablePopup:!0}}},pixelFilter:null},redraw:function(){this.emit("redraw")},fetchImage:function(e){return this._fetchImage(e)},applyFilter:function(e){return this._applyFilter(e)}});return s});