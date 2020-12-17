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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","../sniff","../kernel","../lang","../symbols/PictureMarkerSymbol","../Color","./Renderer"],(function(t,e,n,r,i,o,s,a,l,u){var c=t([u],{declaredClass:"esri.renderer.HeatmapRenderer",colors:null,blurRadius:10,maxPixelIntensity:100,minPixelIntensity:0,field:null,fieldOffset:null,colorStops:null,constructor:function(t){this._supportsCanvas=!!window.CanvasRenderingContext2D,this._supportsCanvas?("string"==typeof t&&(t=JSON.parse(t)),e.mixin(this,t),this._canvas=null,this.colors||this.colorStops||(this.colorStops=[{ratio:0,color:"rgba(255, 140, 0, 0)"},{ratio:.75,color:"rgba(255, 140, 0, 1)"},{ratio:.9,color:"rgba(255, 0,   0, 1)"}]),this.gradient=this._generateGradient(this.colorStops||this.colors)):console.log("The HeatmapRenderer requires a Canvas enabled Browser.  IE8 and less does not support Canvas.")},getSymbol:function(t){if(!this._supportsCanvas)return!1;var e=t.attributes.imageData,n=t.attributes.size;if(!n)return null;var r=this._getContext(n[0],n[1]),i=r.getImageData(0,0,n[0],n[1]);if(window.ArrayBuffer&&e instanceof ArrayBuffer?e=window.Uint8ClampedArray?new Uint8ClampedArray(e):new Uint8Array(e):e.BYTES_PER_ELEMENT&&1!==e.BYTES_PER_ELEMENT&&(e=window.Uint8ClampedArray?new Uint8ClampedArray(e.buffer):new Uint8Array(e.buffer)),window.CanvasPixelArray&&i.data instanceof window.CanvasPixelArray)for(var o=i.data,s=o.length;s--;)o[s]=e[s];else i.data.set(e);return r.putImageData(i,0,0),new a(r.canvas.toDataURL(),n[0],n[1])},setColors:function(t){return t&&(t instanceof Array||t.colors)&&(this.gradient=this._generateGradient(t.colors||t),this.colors=t),this},setColorStops:function(t){return t&&(t instanceof Array||t.colorStops)&&(this.gradient=this._generateGradient(t.colorStops||t),this.colorStops=t),this},setMaxPixelIntensity:function(t){return this.maxPixelIntensity=t,this},setMinPixelIntensity:function(t){return this.minPixelIntensity=t,this},setField:function(t){return this.field=t,this},setFieldOffset:function(t){return this.fieldOffset=t,this},setBlurRadius:function(t){return this.blurRadius=t,this},getStats:function(){},getHistogramData:function(){},toJson:function(){var t=e.mixin(this.inherited(arguments),{type:"heatmap",blurRadius:this.blurRadius,colorStops:this._colorsToStops(this.colorStops||this.colors),maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity,field:this.field});return null!=this.fieldOffset&&(t.fieldOffset=this.fieldOffset),n.forEach(t.colorStops,(function(t){t.color=l.toJsonColor(t.color)})),s.fixJson(t)},_getContext:function(t,e){return this._canvas?(this._canvas.width=t,this._canvas.height=e):this._canvas=this._initCanvas(t,e),this._canvas.getContext("2d")},_initCanvas:function(t,e){var n=r.create("canvas",{id:"hm_canvas-"+Math.floor(1e3*Math.random()),style:"position: absolute; left: 0px; top: -10000px;"},null);return n.width=t,n.height=e,document.body.appendChild(n),n},_generateGradient:function(t,e){e||(e=512);for(var n,r=this._colorsToStops(t),i=this._getContext(1,e||512),o=i.createLinearGradient(0,0,0,e),s=0;s<r.length;s++)n=r[s],o.addColorStop(n.ratio,n.color.toCss(!0));return i.fillStyle=o,i.fillRect(0,0,1,e),i.getImageData(0,0,1,e).data},_colorsToStops:function(t){var e=[];if(!t[0])return e;if(null!=t[0].ratio)e=n.map(t,(function(t){return{ratio:t.ratio,color:this._toColor(t.color)}}),this);else if(null!=t[0].value){var r,i,o=1/0,s=-1/0;for(i=0;i<t.length;i++){var a=t[i].value;a<o&&(o=a),a>s&&(s=a)}r=s-o,this.maxPixelIntensity=s,this.minPixelIntensity=o,e=n.map(t,(function(t){var e=t.value,n=this._toColor(t.color);return{value:e,ratio:(e-o)/r,color:n}}),this)}else{var l=t.length-1;e=n.map(t,(function(t,e){return{color:this._toColor(t),ratio:e/l}}),this)}return e},_toColor:function(t){return t.toRgba||t.declaredClass||(t=new l(t)),t}});return i("extend-esri")&&e.setObject("renderer.HeatmapRenderer",c,o),c}));