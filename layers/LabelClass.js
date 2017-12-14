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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../lang","../symbols/TextSymbol","../symbols/ShieldLabelSymbol"],function(e,l,n,r,t,i,a,o){var s="__begin__",m="__end__",b=new RegExp(s,"ig"),c=new RegExp(m,"ig"),f=new RegExp("^"+s,"i"),v=new RegExp(m+"$","i"),S='"',P=S+" + ",h=" + "+S,p=e(null,{declaredClass:"esri.layers.LabelClass",labelPlacement:null,labelExpression:null,format:null,fieldInfos:null,useCodedValues:null,symbol:null,maxScale:0,minScale:0,where:null,sizeInfo:null,_labelPlacementLookup:{"above-center":"esriServerPointLabelPlacementAboveCenter","above-left":"esriServerPointLabelPlacementAboveLeft","above-right":"esriServerPointLabelPlacementAboveRight","below-center":"esriServerPointLabelPlacementBelowCenter","below-left":"esriServerPointLabelPlacementBelowLeft","below-right":"esriServerPointLabelPlacementBelowRight","center-center":"esriServerPointLabelPlacementCenterCenter","center-left":"esriServerPointLabelPlacementCenterLeft","center-right":"esriServerPointLabelPlacementCenterRight","above-after":"esriServerLinePlacementAboveAfter","above-along":"esriServerLinePlacementAboveAlong","above-before":"esriServerLinePlacementAboveBefore","above-start":"esriServerLinePlacementAboveStart","above-end":"esriServerLinePlacementAboveEnd","below-after":"esriServerLinePlacementBelowAfter","below-along":"esriServerLinePlacementBelowAlong","below-before":"esriServerLinePlacementBelowBefore","below-start":"esriServerLinePlacementBelowStart","below-end":"esriServerLinePlacementBelowEnd","center-after":"esriServerLinePlacementCenterAfter","center-along":"esriServerLinePlacementCenterAlong","center-before":"esriServerLinePlacementCenterBefore","center-start":"esriServerLinePlacementCenterStart","center-end":"esriServerLinePlacementCenterEnd","always-horizontal":"esriServerPolygonPlacementAlwaysHorizontal"},constructor:function(e){if(e){l.mixin(this,e),this._labelPlacementLookup.hasOwnProperty(this.labelPlacement)||(this.labelPlacement=i.valueOf(this._labelPlacementLookup,e.labelPlacement)),e.format&&(this.format=e.format),e.fieldInfos&&(this.fieldInfos=e.fieldInfos),e.symbol&&("esriSHD"===e.symbol.type?this.symbol=new o(e.symbol):this.symbol=new a(e.symbol));var n=this.sizeInfo;n&&(n.minSize&&(n.minSize=r.pt2px(n.minSize)),n.maxSize&&(n.maxSize=r.pt2px(n.maxSize)))}},getSymbol:function(){return this.symbol},toJson:function(){var e=this.sizeInfo;e&&(e=l.mixin({},e),e.minSize&&(e.minSize=r.px2pt(e.minSize)),e.maxSize&&(e.maxSize=r.px2pt(e.maxSize)));var n=i.fixJson(this.labelExpressionInfo&&l.clone(this.labelExpressionInfo));this._processLabelExpressionInfo(n);var t={name:this.name,labelExpression:this.labelExpression,labelExpressionInfo:n,format:this.format||void 0,fieldInfos:this.fieldInfos||void 0,useCodedValues:this.useCodedValues,maxScale:this.maxScale,minScale:this.minScale,where:this.where,sizeInfo:e||void 0,labelPlacement:this._labelPlacementLookup.hasOwnProperty(this.labelPlacement)?this._labelPlacementLookup[this.labelPlacement]:this.labelPlacement,symbol:this.symbol&&this.symbol.toJson()};return i.fixJson(t)},_processLabelExpressionInfo:function(e){e&&e.value&&(e.expression=this._convertTemplatedStringToArcade(e.value))},_convertTemplatedStringToArcade:function(e){var n;return e&&(n=l.replace(e,function(e,l){return s+'$feature["'+l+'"]'+m}),n=f.test(n)?n.replace(f,""):S+n,n=v.test(n)?n.replace(v,""):n+S,n=n.replace(b,P).replace(c,h)),n}});return n("extend-esri")&&l.setObject("layers.LabelClass",p,t),p});