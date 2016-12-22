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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../core/Accessor","../../core/arrayUtils","../FeatureLayer"],function(e,t,r){var a=e.createSubclass({declaredClass:"esri.layers.mixins.PopupUtils",_featureLayers:[],getPopupData:function(e){var t=this.getFeatureLayerFromSublayers(this.layer.allSublayers),r=t.map(function(t){return t.load().then(function(t){return t.queryFeatures(e).then(function(e){return e.features})})});return r},checkFeatureLayer:function(e){var a=t.find(this._featureLayers,function(t){return t.id===e.id});if(a){var u=JSON.stringify(a.popupTemplate),i=JSON.stringify(e.popupTemplate);u!==i&&(a.outFields=this.getTemplateOutFields(e.popupTemplate),a.popupTemplate=e.popupTemplate)}else this._featureLayers.push(new r({url:e.url,id:e.id,outFields:this.getTemplateOutFields(e.popupTemplate),popupTemplate:e.popupTemplate}))},getFeatureLayerFromSublayers:function(e){var t=[];e.forEach(function(e){e.visible&&e.popupTemplate&&(t.push(e.id),this.checkFeatureLayer(e))},this);var r=this._featureLayers.filter(function(e){return t.indexOf(e.id)>-1});return r},getTemplateOutFields:function(e){var t=[];return e.fieldInfos.forEach(function(e){var r=e.fieldName&&e.fieldName.toLowerCase();r&&"shape"!==r&&0!==r.indexOf("relationships/")&&t.push(e.fieldName)}),t}});return a});