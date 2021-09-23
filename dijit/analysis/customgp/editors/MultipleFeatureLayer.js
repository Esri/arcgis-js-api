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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Evented","dojo/on","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dijit/_TemplatedMixin","../BaseEditor","./SelectFeatureSetFromLayer","esri/dijit/analysis/utils","dojo/text!./MultipleFeatureLayer.html"],(function(e,t,a,s,i,r,n,l,o,u,h){return e([l,n,t],{templateString:h,editorName:"MultipleFeatureLayer",constructor:function(e){this.inherited(arguments),e.cssClass&&s.mixin(this.cssClass,e.cssClass),this.selectedFeatureLayers=[]},postCreate:function(){this.inherited(arguments),this.analysisLayers=this.config.analysisLayers,this.param&&this.param.filter&&this.param.filter.list?this.analysisLayers=i.filter(this.analysisLayers,(function(e){return-1!==i.indexOf(this.param.filter.list,e.geometryType)}),this):this.param&&this.param.defaultValue&&this.param.defaultValue.geometryType&&(this.analysisLayers=i.filter(this.analysisLayers,(function(e){return this.param.defaultValue&&this.param.defaultValue.geometryType===e.geometryType}),this)),this._inputParam=new o({cssClass:{featureSetSelect:"esriTableFixedLayout fullSpread esriLongLabel esriAnalysisSelect",layerChooseCtr:""},param:this.param,widgetUID:void 0,widget:this.widget,config:Object.assign({showDrawOption:!1},this.config),editorManager:null,map:this.map,style:{width:"100%"}}),this.selectLayer.appendChild(this._inputParam.domNode),this.own(this._inputParam.on("analysislayer-change",s.hitch(this,this.onSelectInputLayer)))},getSelectedLayers:function(){var e=[];return i.forEach(this.selectedFeatureLayers,(function(t){t&&e.push(u.constructAnalysisInputLyrObj(t,!0))}),this),e},getGPValue:function(){return this.wrapValueToDeferred(this.getSelectedLayers())},onSelectInputLayer:function(e){this.appendFeatureLayerToList(e.analysisLayer),this.selectedFeatureLayers.push(e.analysisLayer)},_setSelectedFeatureLayersAttr:function(e){this.selectedFeatureLayers=e},_getSelectedFeatureLayersAttr:function(e){return this.selectedFeatureLayers},_setMapAttr:function(e){this.map=e},removeLayerFromSelection:function(e){var t=e.target.parentNode,a=t.value;a&&(this.selectedFeatureLayers=i.filter(this.selectedFeatureLayers,(function(e){return e.url!=a}),this),this.featureList.removeChild(t))},appendFeatureLayerToList:function(e){var t=r.create("div",{class:"inline-block-div",value:e.url}),i=r.create("div",{class:"layer-name",innerHTML:e.name}),n=r.create("div",{class:"esriAnalysisCloseIcon"});this.own(a(n,"click",s.hitch(this,this.removeLayerFromSelection))),t.appendChild(i),t.appendChild(n),this.featureList.appendChild(t)}})}));