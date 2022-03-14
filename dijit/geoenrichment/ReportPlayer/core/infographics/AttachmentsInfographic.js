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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","esri/dijit/geoenrichment/utils/InvokeUtil","esri/dijit/geoenrichment/ImageNavigator"],(function(e,t,i,n,o,a,r,s,h,u){var g;return t([r,s],{templateString:"<div data-dojo-attach-point='viewDiv'></div>",viewModel:null,theme:null,currentFeatureIndex:null,imageNavigator:null,_currentInfographicJson:null,_updatePromise:null,postCreate:function(){this.inherited(arguments),this.imageNavigator=new u({showNotes:!0,showThumbnails:!1,canEditNotes:!1,canRemoveNotes:!1,loadFullImages:!0,canShowViewer:!0}).placeAt(this.viewDiv),this.own(this.imageNavigator)},getRenderPromise:function(){var e=this;return o(this._updatePromise).then((function(){return e.imageNavigator.getRenderPromise()}))},updateInfographic:function(e){var t=this;if(this.domNode)return this._currentInfographicJson=e,e.style.backgroundColor&&a.set(this.viewDiv,"backgroundColor",e.style.backgroundColor),this._resizeContent(),["showNotes","showThumbnails"].forEach((function(i){void 0!==e[i]&&(t.imageNavigator[i]=e[i])})),this._updatePromise=h.invoke(this,"_doUpdateContent",50)},_doUpdateContent:function(){if(this.domNode){var t=this.viewModel.dynamicReportInfo?this.viewModel.dynamicReportInfo.attachmentsStore:g||(g={_loadLogo:function(){var t=new n;return e(["../supportClasses/images/DefaultAttachment"],(function(e){t.resolve(e)})),t.promise},getImages:function(){var e=this;return[{description:"Esri headquarters in Redlands CA, summer time",getThumbnail:function(){return e._loadLogo()}},{description:"Sample image",getThumbnail:function(){return e._loadLogo()}},{description:"Sample image",getThumbnail:function(){return e._loadLogo()}}]}});return t&&t.supportsMultipleAreas&&t.setCurrentAnalysisAreaIndex(this.currentFeatureIndex),this.imageNavigator.update(t,{useCircularMask:this._currentInfographicJson.useCircularMask,alwaysShowCaptions:this._currentInfographicJson.alwaysShowCaptions,scaleToCover:this._currentInfographicJson.scaleToCover,imageIndex:this._currentInfographicJson.defaultImageIndex})}},_resizeContent:function(){this.domNode&&this.width&&(this._currentInfographicJson.style.width=this.width,this._currentInfographicJson.style.height=this.height,a.set(this.viewDiv,{width:this.width+"px",height:this.height+"px"}),this.imageNavigator.setHeight(this.height))},width:null,height:null,resize:function(e,t){return void 0!==e&&(this.width=e,this.height=t),h.invoke(this,"_resizeContent",50)},hasScroll:function(){return this.imageNavigator.isAllImagesShown()},changeScroll:function(e,t){this.imageNavigator.allImagesList.domNode.scrollLeft+=e,this.imageNavigator.allImagesList.domNode.scrollTop+=t},notifyShown:function(){this.resize()},notifyPanelScaleChanged:function(e){if(e){var t=1/e;this.imageNavigator.showAllImagesButton.style.transformOrigin="100% 0%",this.imageNavigator.showAllImagesButton.style.transform="scale("+t+")",this.imageNavigator.showAllImagesButton.style["webkit-transform"]="scale("+t+")"}},toJson:function(){return i.clone(this._currentInfographicJson)},getVisualState:function(){return{type:this._currentInfographicJson.type,imageIndex:this.imageNavigator.getImageIndex()}},setVisualState:function(e){var t=this;if(e&&"number"==typeof e.imageIndex)return o(this._updatePromise,(function(){return t.imageNavigator.setImageIndex(e.imageIndex)}))}})}));