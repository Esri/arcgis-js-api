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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/has","../kernel","../Color","./Renderer"],function(t,e,o,a,s,n,i,r){var d=t(r,{declaredClass:"esri.renderer.BlendRenderer",constructor:function(t){e.mixin(this,t),this.blendMode=this.blendMode||"source-over",this._supportsCanvas=!!window.CanvasRenderingContext2D,this._supportsCanvas||console.log("BlendRenderer requires a Canvas enabled Browser. Internet Explorer versions 8 and earlier do not support Canvas."),this._updateCache()},setFields:function(t){this.fields=t,this._updateCache()},setSymbol:function(t){this.symbol=t},setBlendMode:function(t){this.blendMode=t},setOpacityStops:function(t){this.opacityStops=t,this._updateCache()},setNormalizationField:function(t){this.normalizationField=t,this._updateCache()},toJson:function(){},getSymbol:function(t){var e=this.fields,a=this._dataCache,s=this._opacityInfos;if(this._supportsCanvas&&a&&s){var n,r,d=[],l={};return o.forEach(e,function(e,o){this._getColorComponent(t,s[o],a[o],!0,l),r=e.color.toRgba(),r[3]=l.value||0,n=new i(r),n._data=l.data,d.push(n)},this),d.sort(this._colorSorter),this.symbol.setColor(this._getBlendedColor(d)),this.symbol}},_colorSorter:function(t,e){var o=null!=t._data,a=null!=e._data;return o&&a?t._data-e._data:o?1:a?-1:0},_getBlendedColor:function(t){var e,a,s=this._canvas;return s||(s=this._canvas=this._createCanvas(1,1)),e=s.getContext("2d"),e.globalCompositeOperation=this.blendMode,o.forEach(t,function(t){e.fillStyle=t.toCss(!0),e.fillRect(0,0,1,1)}),a=e.getImageData(0,0,1,1).data,e.clearRect(0,0,s.width,s.height),new i([a[0],a[1],a[2],a[3]/255])},_createCanvas:function(t,e){return a.create("canvas",{width:t+"px",height:e+"px",style:"position: absolute; left: -10000px; top: 0px;"},document.body)},_updateCache:function(){var t=this.fields,e=this.opacityStops;if(this._dataCache=this._opacityInfos=null,t&&e){var a,s=this._dataCache=[],n=this._opacityInfos=[];o.forEach(t,function(t){a={field:t.field,normalizationField:this.normalizationField,stops:e},n.push(a),s.push(this._processOpacityInfo(a))},this)}}});return s("extend-esri")&&e.setObject("renderer.BlendRenderer",d,n),d});