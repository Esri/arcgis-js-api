// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../lang","../symbols/TextSymbol","../symbols/ShieldLabelSymbol"],(function(e,n,l,r,t,i,a,o){var s=new RegExp("__begin__","ig"),m=new RegExp("__end__","ig"),b=new RegExp("^__begin__","i"),c=new RegExp("__end__$","i"),f=e(null,{declaredClass:"esri.layers.LabelClass",labelPlacement:null,labelExpression:null,format:null,fieldInfos:null,useCodedValues:null,symbol:null,maxScale:0,minScale:0,where:null,sizeInfo:null,_labelPlacementLookup:{"above-center":"esriServerPointLabelPlacementAboveCenter","above-left":"esriServerPointLabelPlacementAboveLeft","above-right":"esriServerPointLabelPlacementAboveRight","below-center":"esriServerPointLabelPlacementBelowCenter","below-left":"esriServerPointLabelPlacementBelowLeft","below-right":"esriServerPointLabelPlacementBelowRight","center-center":"esriServerPointLabelPlacementCenterCenter","center-left":"esriServerPointLabelPlacementCenterLeft","center-right":"esriServerPointLabelPlacementCenterRight","above-after":"esriServerLinePlacementAboveAfter","above-along":"esriServerLinePlacementAboveAlong","above-before":"esriServerLinePlacementAboveBefore","above-start":"esriServerLinePlacementAboveStart","above-end":"esriServerLinePlacementAboveEnd","below-after":"esriServerLinePlacementBelowAfter","below-along":"esriServerLinePlacementBelowAlong","below-before":"esriServerLinePlacementBelowBefore","below-start":"esriServerLinePlacementBelowStart","below-end":"esriServerLinePlacementBelowEnd","center-after":"esriServerLinePlacementCenterAfter","center-along":"esriServerLinePlacementCenterAlong","center-before":"esriServerLinePlacementCenterBefore","center-start":"esriServerLinePlacementCenterStart","center-end":"esriServerLinePlacementCenterEnd","always-horizontal":"esriServerPolygonPlacementAlwaysHorizontal"},constructor:function(e){if(e){n.mixin(this,e),this._labelPlacementLookup.hasOwnProperty(this.labelPlacement)||(this.labelPlacement=i.valueOf(this._labelPlacementLookup,e.labelPlacement)),e.format&&(this.format=e.format),e.fieldInfos&&(this.fieldInfos=e.fieldInfos),e.symbol&&("esriSHD"===e.symbol.type?this.symbol=new o(e.symbol):this.symbol=new a(e.symbol));var l=this.sizeInfo;l&&(l.minSize&&(l.minSize=r.pt2px(l.minSize)),l.maxSize&&(l.maxSize=r.pt2px(l.maxSize)))}},getSymbol:function(){return this.symbol},toJson:function(){var e=this.sizeInfo;e&&((e=n.mixin({},e)).minSize&&(e.minSize=r.px2pt(e.minSize)),e.maxSize&&(e.maxSize=r.px2pt(e.maxSize)));var l=i.fixJson(this.labelExpressionInfo&&n.clone(this.labelExpressionInfo));this._processLabelExpressionInfo(l);var t={name:this.name,labelExpression:this.labelExpression,labelExpressionInfo:l,format:this.format||void 0,fieldInfos:this.fieldInfos||void 0,useCodedValues:this.useCodedValues,maxScale:this.maxScale,minScale:this.minScale,where:this.where,sizeInfo:e||void 0,labelPlacement:this._labelPlacementLookup.hasOwnProperty(this.labelPlacement)?this._labelPlacementLookup[this.labelPlacement]:this.labelPlacement,symbol:this.symbol&&this.symbol.toJson()};return i.fixJson(t)},_processLabelExpressionInfo:function(e){e&&e.value&&(e.expression=this._convertTemplatedStringToArcade(e.value))},_convertTemplatedStringToArcade:function(e){var l;return e&&(l=n.replace(e,(function(e,n){return'__begin__$feature["'+n+'"]__end__'})),l=b.test(l)?l.replace(b,""):'"'+l,l=(l=c.test(l)?l.replace(c,""):l+'"').replace(s,'" + ').replace(m,' + "')),l}});return l("extend-esri")&&n.setObject("layers.LabelClass",f,t),f}));
