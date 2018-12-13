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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/OnDemandSelect","../../dataProvider/supportClasses/AreasInfoTemplateBuilder","./ComparisonListUtil","esri/dijit/geoenrichment/utils/DeviceUtil","esri/dijit/geoenrichment/utils/TooltipUtil"],function(e,t,i,s,n,o,a,r,d){var u=e(n.itemRenderers.DefaultItemRenderer,{createLabelNode:!0,fields:null,addFeatureMessage:null,featureIsAlreadyAddedMessage:null,removeFeatureMessage:null,canAddFeatures:!1,canRemoveFeatures:!1,_createImageNode:function(e,n){var o=this;if(e.isArea){if(this.fields&&!r.isMobileDevice()){var a=s.create("div",{class:"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_infoIcon"},n);d.setTooltipToNode(a,function(){return o._buildGeographyTooltip(e)},{isComplexTooltip:!0})}if(this.canRemoveFeatures){var u=s.create("div",{class:"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_removeButton"},n);this.isAdded(e)&&this.canRemoveFeature(e)?(t(u,"click",function(t){t.stopPropagation(),o.onRemoveFeature(e)}),d.setTooltipToNode(u,this.removeFeatureMessage)):i.add(u,"disabled")}if(this.canAddFeatures){var l=s.create("div",{class:"esriGESpaceBeforeBig dijitInline esriGEComparisonSelect_addButton"},n);this.isAdded(e)?(i.add(l,"disabled"),d.setTooltipToNode(l,this.featureIsAlreadyAddedMessage)):(t(l,"click",function(t){t.stopPropagation(),o.onAddFeature(e)}),d.setTooltipToNode(l,this.addFeatureMessage))}}},_buildGeographyTooltip:function(e){var t=this.fields.map(function(t){return{label:t.label,value:t.formatFunction(e.attributes[t.name])}});return o.buildAttributesTable(null,t,{padding:10,maxHeight:document.body.clientHeight-40})},isAdded:function(e){},onAddFeature:function(e){},canRemoveFeature:function(e){},onRemoveFeature:function(e){}});return e(n,{listClass:"esriGEOnDemandSelectSpacedOut esriGEOnDemandSelectVeryTallList600",fields:null,addFeatureMessage:null,featureIsAlreadyAddedMessage:null,removeFeatureMessage:null,canAddFeatures:!1,canRemoveFeatures:!1,showTitleForSingleGroup:!1,buildRendering:function(){var e=this;r.isMobileDevice()&&(this.listClass+=" esriGEComparisonSelectListMobile");var t=new u;t.fields=this.fields,t.addFeatureMessage=this.addFeatureMessage,t.featureIsAlreadyAddedMessage=this.featureIsAlreadyAddedMessage,t.canAddFeatures=this.canAddFeatures,t.isAdded=function(t){return e.isFeatureAdded(t.levelId,t.value)},t.onAddFeature=function(t){e.closePopup(),e.onAddFeature(t.levelId,t.value)},t.canRemoveFeatures=this.canRemoveFeatures,t.removeFeatureMessage=this.removeFeatureMessage,t.canRemoveFeature=function(t){return e.canRemoveFeature(t.levelId,t.value)},t.onRemoveFeature=function(t){e.closePopup(),e.onRemoveFeature(t.levelId,t.value)},this.itemRenderer=t,this.inherited(arguments)},setGroups:function(e){this.set("options",a.getOptionsFromGroups(e,{hideTitleForSingleGroup:!this.showTitleForSingleGroup}))},setFeatures:function(e){this.set("options",a.getListOptionsFromFeatures(e))},setDefaultValue:function(e){var t=a.getDefaultOptionValue(this.options);return this.set("value",t),e&&e.emitEvent&&this.onChange(),t},isFeatureAdded:function(e,t){return!1},canRemoveFeature:function(e,t){return!0},onChange:function(){var e=this.getSelectedItem();e&&this.onFeatureSelected(e.levelId,e.value)},getFeatureIndexById:function(e){return a.getFeatureIndexInOptionsById(this.options,e)},selectFeatureByIndex:function(e){var t=a.getOptionValueByFeatureIndex(this.options,e||0);return this.set("value",t),t},getNumFeatures:function(){return a.getNumFeaturesFromOptions(this.options)},getSelectedAttributes:function(){var e=this.getSelectedItem();return e&&e.attributes},onFeatureSelected:function(e,t){},onAddFeature:function(e,t){},onRemoveFeature:function(e,t){}})});