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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/maybe","../../core/accessorSupport/decorators","./CreateWorkflowData","./Edits","./Workflow","./workflowUtils"],(function(e,t,i,r,n,a,o,u,f){return function(e){function t(t){var i=e.call(this,t)||this;return i.type="create",i}var u;return i.__extends(t,e),u=t,t.create=function(e,t,i){var r=new a({edits:new o,viewModel:e}),n=new u({data:r,afterCommit:i});return n._set("steps",this._createWorkflowSteps(n,t)),n},t._createWorkflowSteps=function(e,t){void 0===t&&(t="awaiting-feature-creation-info");var n=e.data,a=e.handles,o={"awaiting-feature-creation-info":function(){return{id:"awaiting-feature-creation-info",setUp:function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return n.creationInfo=null,a.add(n.viewModel.featureTemplatesViewModel.on("select",(function(e){var t=e.item;n.creationInfo={layer:t.layer,template:t.template},n.viewModel.activeWorkflow.next()})),this.id),[2]}))}))},tearDown:function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return a.remove(this.id),[2]}))}))}}},"awaiting-feature-to-create":function(){return{id:"awaiting-feature-to-create",setUp:function(){return i.__awaiter(this,void 0,void 0,(function(){var e,t;return i.__generator(this,(function(i){switch(i.label){case 0:return t=(e=a).add,[4,f.setUpFeatureAdd(n.viewModel.sketchViewModel,n.creationInfo,n.viewModel.view,(function(e){n.edits.feature=e,n.viewModel.activeWorkflow.next()}))];case 1:return t.apply(e,[i.sent(),this.id]),[2]}}))}))},tearDown:function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return a.remove(this.id),[2]}))}))}}},"editing-new-feature":function(){return{id:"editing-new-feature",setUp:function(){return i.__awaiter(this,void 0,void 0,(function(){var e,t,o,u,s,d,l,c;return i.__generator(this,(function(i){switch(i.label){case 0:return e=n.edits.feature,t=n.viewModel,o=f.findLayerInfo(t.layerInfos,e.layer),u=o&&o.fieldConfig,t.featureFormViewModel.set({feature:e,fieldConfig:u}),s=f.getVisualVariableAttributes(e),[4,f.setUpGeometryUpdate(e,s,t.sketchViewModel,t.view,(function(e){var i=e.geometry,a=e.attributes;if(r.isSome(s.rotation)){var o=s.rotation.field;t.featureFormViewModel.setValue(o,a[o])}if(r.isSome(s.size)){o=s.size.field;t.featureFormViewModel.setValue(o,a[o])}n.edits.updateAttributes(a),n.edits.updateGeometry(i)}))];case 1:return d=i.sent(),l=d.interactive,c=d.visual,a.add([n.viewModel.featureFormViewModel.on("value-change",(function(){n.edits.updateAttributes(n.viewModel.featureFormViewModel.getValues()),e.attributes=n.edits.feature.attributes})),l,c],this.id),[2]}}))}))},tearDown:function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return n.edits.feature=null,n.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null}),a.remove(this.id),[2]}))}))}}}},u=!1,s=["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"].filter((function(e){return!!u||(u=e===t)})).map((function(e){return o[e]()}));n.viewModel.refreshCreationTemplates();var d=function(e){if(1!==e.length)return null;var t=e[0];if(!("items"in t))return t;var i=t;return 1===i.items.length?i.items[0]:null}(n.viewModel.featureTemplatesViewModel.items);if("awaiting-feature-creation-info"===s[0].id&&d){var l=d.layer,c=d.template;n.creationInfo={layer:l,template:c},s.shift()}return s},t=u=i.__decorate([n.subclass("esri.widgets.Editor.CreateWorkflow")],t)}(u)}));