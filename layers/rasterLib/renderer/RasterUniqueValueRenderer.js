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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/ColormapFunction","../../../renderers/colorRampGenerator"],function(e,t,r,n,i){return e([r],{declaredClass:"esri.layers.rasterLib.renderer.RasterUniqueValueRenderer",rendererName:"UniqueValue",field:"",alias:"",uniqueValueInfos:null,constructor:function(e){e&&e.colormap&&(this.colormap=e.colormap,this._function=new n(e),this._function.outputPixelType="U8",this._function.renderTexture=!0)},bind:function(e){if(this.inherited(arguments),!this._function){var t=(this.raster&&this.raster.rasterInfo||this._rawRasterInfo).vat;if(!t)throw"uv renderer requires data source to have raster attribute table";var r=this.attributeField||this.field1||this.field,o=this.infos||this.uniqueValueInfos;this.defaultColor=this.defaultColor||this.defaultSymbol&&this.defaultSymbol.color;var a,s=t.fields.filter(function(e){return"value"===e.name.toLowerCase()})[0];s&&(a=s.name),r||(r=t.fields.filter(function(e){return["classname","category"].indexOf(e.name.toLowerCase())>-1})[0],r||(r=t.fields.filter(function(e){return"esriFieldTypeString"===e.type})[0]),r=r&&r.name||a,this.field=r,this.alias=r&&r.alias||a);var u,l,f,c,h,d,m=[];if(!o){for(o=[],f=t.fields.filter(function(e){return"alpha"===e.name.toLowerCase()})[0],c=t.fields.filter(function(e){return"red"===e.name.toLowerCase()})[0],h=t.fields.filter(function(e){return"green"===e.name.toLowerCase()})[0],d=t.fields.filter(function(e){return"blue"===e.name.toLowerCase()})[0],u=0;u<t.features.length;u++)l=t.features[u].attributes,o.some(function(e){e.value,l[r]})||(f&&c&&h&&d?o.push({value:l[r],alias:l[r],color:[l[c.name],l[h.name],l[d.name],l[f.name]]}):c&&h&&d?o.push({value:l[r],alias:l[r],color:[l[c.name],l[h.name],l[d.name]]}):o.push({value:l[r],alias:l[r]}));if(!(c&&h&&d)){var p=i.createRandomColorRamp({size:o.length});for(u=0;u<o.length;u++)o[u].color=p[u]}this.uniqueValueInfos=o}if(!o)throw"missing uniqueValueInfos property";o.forEach(function(e){m=m.concat(t.features.filter(function(t){return e.value==t.attributes[r]}).map(function(t){return[t.attributes[a]].concat(e.color||e.symbol&&e.symbol.color)}))}),this.defaultColor&&t.features.filter(function(e){m.some(function(t){return t[0]===e.attributes[a]})||m.push([e.attributes[a]].concat(this.defaultColor))}),this._function=new n({colormap:m}),this._function.outputPixelType="U8",this._function.renderTexture=!0,this._function.setProcessingContext(this._processingContext)}},draw2D:function(e){return e=this._clonePixelData(e),e=this._function._colorize(e)},drawGL:function(e){this._function._colorizeGL(e)},toJson:function(e){var t={field:this.field,uniqueValueInfos:this.uniqueValueInfos,defaultColor:this.defaultColor};return e&&(t.colormap=this.colormap),{rendererName:this.rendererName,rendererArguments:t}}})});