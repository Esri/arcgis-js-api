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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","./RasterRenderer","../function/ColormapFunction","../../../renderers/colorRampGenerator"],(function(e,t,r,n,i){return e([r],{declaredClass:"esri.layers.rasterLib.renderer.RasterUniqueValueRenderer",rendererName:"UniqueValue",field:"",alias:"",uniqueValueInfos:null,constructor:function(e){e&&e.colormap&&(this.colormap=e.colormap,this._function=new n(e),this._function.outputPixelType="U8",this._function.renderTexture=!0)},bind:function(e){if(this.inherited(arguments),!this._function){var t=(this.raster&&this.raster.rasterInfo||this._rawRasterInfo).vat;if(!t)throw"uv renderer requires data source to have raster attribute table";var r,o=this.attributeField||this.field1||this.field,a=this.infos||this.uniqueValueInfos;this.defaultColor=this.defaultColor||this.defaultSymbol&&this.defaultSymbol.color;var s=t.fields.filter((function(e){return"value"===e.name.toLowerCase()}))[0];s&&(r=s.name),o||((o=t.fields.filter((function(e){return["classname","category"].indexOf(e.name.toLowerCase())>-1}))[0])||(o=t.fields.filter((function(e){return"esriFieldTypeString"===e.type}))[0]),o=o&&o.name||r,this.field=o,this.alias=o&&o.alias||r);var u,l,f,c,h,d,m=[];if(!a){for(a=[],f=t.fields.filter((function(e){return"alpha"===e.name.toLowerCase()}))[0],c=t.fields.filter((function(e){return"red"===e.name.toLowerCase()}))[0],h=t.fields.filter((function(e){return"green"===e.name.toLowerCase()}))[0],d=t.fields.filter((function(e){return"blue"===e.name.toLowerCase()}))[0],u=0;u<t.features.length;u++)l=t.features[u].attributes,a.some((function(e){e.value,l[o]}))||(f&&c&&h&&d?a.push({value:l[o],alias:l[o],color:[l[c.name],l[h.name],l[d.name],l[f.name]]}):c&&h&&d?a.push({value:l[o],alias:l[o],color:[l[c.name],l[h.name],l[d.name]]}):a.push({value:l[o],alias:l[o]}));if(!(c&&h&&d)){var p=i.createRandomColorRamp({size:a.length});for(u=0;u<a.length;u++)a[u].color=p[u]}this.uniqueValueInfos=a}if(!a)throw"missing uniqueValueInfos property";a.forEach((function(e){m=m.concat(t.features.filter((function(t){return e.value==t.attributes[o]})).map((function(t){return[t.attributes[r]].concat(e.color||e.symbol&&e.symbol.color)})))})),this.defaultColor&&t.features.filter((function(e){m.some((function(t){return t[0]===e.attributes[r]}))||m.push([e.attributes[r]].concat(this.defaultColor))})),this._function=new n({colormap:m}),this.colormap=m,this._function.outputPixelType="U8",this._function.renderTexture=!0,this._function.setProcessingContext(this._processingContext)}},draw2D:function(e){return e=this._clonePixelData(e),e=this._function._colorize(e)},drawGL:function(e){this._function._colorizeGL(e)},toJson:function(e){var t={field:this.field,uniqueValueInfos:this.uniqueValueInfos,defaultColor:this.defaultColor};return e&&(t.colormap=this.colormap),{rendererName:this.rendererName,rendererArguments:t}},toCommonRendererJson:function(){return{type:"uniqueValue",field1:this.attributeField||this.field1||this.field,uniqueValueInfos:(this.infos||this.uniqueValueInfos).map((function(e){return{value:e.value,label:e.alias+"",symbol:{color:3===e.color.length?e.color.concat([255]):e.color,type:"esriSFS",style:"esriSFSSolid"}}}))}}})}));