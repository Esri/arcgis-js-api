// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["../../../geometry/Extent","../../../core/HandleRegistry","../../../layers/support/ExportImageParameters","../engine/Bitmap","../viewpointUtils","./LayerView2D"],function(e,t,i,a,s,r){var n=r.createSubclass({declaredClass:"esri.views.2d.layers.DynamicLayerView2D",constructor:function(e){this._update=this._update.bind(this),this._hdls=new t,this._hdls.add(this.watch("view.state.version,view.stationary,suspended",this._update))},destroy:function(){this._hdls.destroy(),this._hdls=null,this._exportImageParameters&&(this._exportImageParameters.layer=null,this._exportImageParameters.destroy(),this._exportImageParameters=null)},getPopupData:function(e){var t=this.view.scale,i=this.layer.allSublayers.filter(function(e){var i=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;return e.popupTemplate&&e.visible&&i&&a});return i.map(function(t){var i=t.createQuery();return i.geometry=e,i.outFields=this.getTemplateOutFields(t.popupTemplate),t.queryFeatures(i).then(function(e){return e.features})},this)},getTemplateOutFields:function(e){if(!e||!e.fieldInfos)return["*"];var t=[];return e.fieldInfos.forEach(function(e){var i=e.fieldName&&e.fieldName.toLowerCase();i&&"shape"!==i&&0!==i.indexOf("relationships/")&&t.push(e.fieldName)}),t},_update:function(){if(this.view.stationary&&!this.suspended){var t=this.view,r=t.state,n=this.layer,o=r.size.concat();this._imagePromise&&(this._imagePromise.cancel(),this._imagePromise=null),n.version<10.3&&s.getOuterSize(o,r.viewpoint,o),o[0]=Math.min(o[0],n.maxImageWidth||2048),o[1]=Math.min(o[1],n.maxImageHeight||2048),this.updating=!0,this._exportImageParameters?this._exportImageParameters.scale!==r.scale&&(this._exportImageParameters.scale=r.scale):(this._exportImageParameters=new i({layer:this.layer,scale:r.scale}),this._hdls.add(this._exportImageParameters.watch("version",function(e){this._imageVersion!==e&&(this._imageVersion=e,this._update())}.bind(this)))),this._imageVersion=this._exportImageParameters.version,this._imagePromise=n.fetchImage({extent:s.getExtent(new e,r.viewpoint,o),width:o[0],height:o[1],rotation:r.rotation,exportImageParameters:this._exportImageParameters}),this._imagePromise.then(function(e){var t=e.options,i=this.container;this._imagePromise=null,this.view.stationary&&!this.suspended&&(i.removeAllChildren(),i.addChild(new a({coords:[t.extent.center.x,t.extent.center.y],resolution:t.extent.width/t.width,size:[.5*t.width,.5*t.height],source:e.img,rotation:-t.rotation})))}.bind(this),function(e){"cancel"!==e.dojoType&&(this.container.removeAllChildren(),this._imagePromise=null)}.bind(this)).always(function(){this.updating=!1}.bind(this))}}});return n});