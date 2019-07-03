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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-style","dojo/dom-attr","dojo/on","dojo/dom-geometry","dijit/_TemplatedMixin","esri/layers/GraphicsLayer","esri/layers/FeatureLayer","esri/graphicsUtils","esri/renderers/SimpleRenderer","esri/renderers/jsonUtils","esri/InfoTemplate","dojo/text!./FeatureSetRenderer.html","../BaseResultRenderer","./defaultSymbol","../utils","../../AnalysisRegistry"],function(e,t,s,r,a,i,o,l,n,p,d,u,h,y,m,f,c,g,L){return e([f,l],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",templateString:m,postCreate:function(){this.inherited(arguments),this.value.features&&this.value.features.length>0?(this._displayText(),this._drawResultFeature(this.param,this.value)):(r.set(this.clearNode,"display","none"),r.set(this.exportNode,"display","none"),this.labelContent.innerHTML=this.nls.emptyResult)},destroy:function(){this.resultLayer&&this.map.removeLayer(this.resultLayer),this.inherited(arguments)},_displayText:function(){r.set(this.clearNode,"display",""),a.set(this.clearNode,"title",this.nls.clear),this.own(i(this.clearNode,"click",t.hitch(this,function(){this.resultLayer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.resultLayer.clear(),this.map.removeLayer(this.resultLayer)),r.set(this.exportNode,"display","none"),r.set(this.clearNode,"display","none"),this.labelContent.innerHTML=this.nls.cleared}))),r.set(this.exportNode,"display",""),a.set(this.exportNode,"title",this.nls.exportOutput)},_drawResultFeature:function(e,t){var r,a=g.useDynamicSchema(e,this.config);if(e.popup&&!a||(e.popup={enablePopup:!0,title:"",fields:[]}),e.popup.enablePopup&&(r=new y(e.popup.title||"${Non-Exist-Field}",this._generatePopupContent(t))),this.config.shareResults&&!a){if(!e.defaultValue||!e.defaultValue.geometryType)throw Error("Output parameter default value does not provide enough information to draw feature layer.");e.defaultValue.name=e.name;var i={layerDefinition:e.defaultValue,featureSet:null};this.resultLayer=new p(i,{id:this.widgetUID+e.name,infoTemplate:r})}else this.resultLayer=new n({id:this.widgetUID+e.name,infoTemplate:r});s.forEach(t.features,function(e){this.resultLayer.add(e)},this),this.resultLayer.title=e.label||e.name;var o=e.renderer;a||!o?t.geometryType===L.GeometryTypes.Point||t.geometryType===L.GeometryTypes.MultiPoint?o=new u(c.pointSymbol):t.geometryType===L.GeometryTypes.Line?o=new u(c.lineSymbol):t.geometryType===L.GeometryTypes.Polygon&&(o=new u(c.polygonSymbol)):o=h.fromJson(o),this.resultLayer.setRenderer(o),this._addResultLayer(e.name);try{if(t.features&&t.features.length>0&&t.features[0].geometry){var l=d.graphicsExtent(t.features);l&&(this.resultLayer.fullExtent=l.expand(1.4),this.map.setExtent(this.resultLayer.fullExtent))}}catch(e){console.error(e)}},_addResultLayer:function(e){this.map.addLayer(this.resultLayer)},_generatePopupContent:function(e){var t,r="";return t=!this.useDynamicSchema&&this.param.popup.fields&&this.param.popup.fields.length>0?this.param.popup.fields:e.fields,s.forEach(t,function(e){var t='<tr valign="top"><td class="attr-name">'+e.alias+'</td><td class="attr-value">${'+e.name+"}</td></tr>";r+=t}),'<div class="geoprocessing-popup"><table class="geoprocessing-popup-table" cellpadding="0" cellspacing="0"><tbody>'+r+"</tbody></table></div>"}})});