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

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/ColormapFunction","../function/RemapFunction"],(function(e,t,r,n,o){return e([r],{declaredClass:"esri.layers.rasterLib.renderer.RasterClassBreaksRenderer",rendererName:"ClassBreaks",renderTexture:!0,constructor:function(e){e=e||{},this._function=new o(e),this._function.outputPixelType="U8";var t=e.classBreakInfos,r=e.minValue;null!=r&&t&&(this._function.functionArguments.colorBreaks=this._getSortedColorBreaks(r,t))},bind:function(e){this.inherited(arguments),this.isColormapFunction=!1;var r=this.raster&&this.raster.rasterInfo||this._rawRasterInfo,o=r&&r.vat;if(o&&"u8"===r.pixelType.toLowerCase()&&this.classBreakInfos){var a,s=this.field,i=o.fields.filter((function(e){return"value"===e.name.toLowerCase()}))[0];i&&(a=i.name);var u=o.features.sort((function(e,t){return parseFloat(e.attributes[s])-parseFloat(t.attributes[s])}))[0].attributes[s];this.isColormapFunction=!0;var l=[],c=this.field,f=this.classBreakInfos;f.forEach((function(e,t){o.features.forEach((function(r){var n=f[t-1]&&f[t-1].classMaxValue||u;if(r.attributes[c]<=e.classMaxValue&&(r.attributes[c]>n||r.attributes[c]===u)){var o=e.symbol.color;l.some((function(e){return e[0]===r.attributes[a]}))||l.push([r.attributes[a]].concat(o))}}))})),this._function=new n({colormap:l}),this.colormap=l,this._function.outputPixelType="U8",this._function.renderTexture=!0}this._function&&this._function.setProcessingContext(t.mixin({useProcessedData:!0},this._processingContext))},draw2D:function(e){return this.isColormapFunction?(this._updateColormapParameters(),e=this._clonePixelData(e),e=this._function._colorize(e)):(this._updateRemapParameters(),this._function._remap(e))},drawGL:function(e){this.isColormapFunction?(this._updateColormapParameters(),this._function._colorizeGL(e)):(this._function.renderTexture=!0,this._updateRemapParameters(),this._function._remapGL(e))},toJson:function(){var e=this._function.toJson().rasterFunctionArguments;return{rendererName:this.rendererName,rendererArguments:e}},toCommonRendererJson:function(){var e,t=this.classBreakInfos,r=this.colorBreaks;if(null==t&&r)for(t=[],e=0;e<r.length-1;e++)t.push({classMaxValue:r[e+1].value,symbol:{color:r[e].mappedColor,type:"esriSFS",style:"esriSFSSolid"},label:r[e].value+" - "+r[e+1].value});return{type:"classBreaks",field:"Value",minValue:null!=this.minValue?this.minValue:r[0].value,classBreakInfos:t}},_updateRemapParameters:function(){var e=this.classBreakInfos,t=this.minValue;null!=t&&e&&(this._function.functionArguments.colorBreaks=this._getSortedColorBreaks(t,e))},_getSortedColorBreaks:function(e,t){var r,n=t.map((function(e){return{maxValue:e.classMaxValue,color:e.symbol.color}})).sort((function(e,t){return e.maxValue-t.maxValue})),o=[{value:e,mappedColor:n[0].color}];for(r=0;r<n.length;r++)o.push({value:n[r].maxValue,mappedColor:r===n.length-1?n[r].color:n[r+1].color});return o},_updateColormapParameters:function(){this._function.functionArguments.colormap=this.colormap,this._function.interpolation=this.interpolation}})}));