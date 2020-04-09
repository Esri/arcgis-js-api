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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/awaiterHelper","../../core/tsSupport/declareExtendsHelper","../../core/accessorSupport/decorators","./CreateWorkflowData","./Edits","./Workflow","./workflowUtils"],(function(e,t,i,r,n,o,a,u,f,d,s){return function(e){function t(t){var i=e.call(this,t)||this;return i.type="create",i}var d;return o(t,e),d=t,t.create=function(e,t,i){var r=new u({edits:new f,viewModel:e}),n=new d({data:r,afterCommit:i});return n._set("steps",this._createWorkflowSteps(n,t)),n},t._createWorkflowSteps=function(e,t){void 0===t&&(t="awaiting-feature-creation-info");var r=e.data,o=e.handles,a={"awaiting-feature-creation-info":function(){return{id:"awaiting-feature-creation-info",setUp:function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return r.creationInfo=null,o.add(r.viewModel.featureTemplatesViewModel.on("select",(function(e){var t=e.item;r.creationInfo={layer:t.layer,template:t.template},r.viewModel.activeWorkflow.next()})),this.id),[2]}))}))},tearDown:function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return o.remove(this.id),[2]}))}))}}},"awaiting-feature-to-create":function(){return{id:"awaiting-feature-to-create",setUp:function(){return n(this,void 0,void 0,(function(){var e,t=this;return i(this,(function(i){return(e=function(){o.add(s.setUpFeatureAdd(r.viewModel.sketchViewModel,r.creationInfo,r.viewModel.view,(function(e){r.edits.feature=e,r.viewModel.activeWorkflow.next()}),(function(){o.remove(t.id),e()})),t.id)})(),[2]}))}))},tearDown:function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return o.remove(this.id),[2]}))}))}}},"editing-new-feature":function(){return{id:"editing-new-feature",setUp:function(){return n(this,void 0,void 0,(function(){var e,t,n,a,u,f,d,l;return i(this,(function(i){switch(i.label){case 0:return e=r.edits.feature,t=r.viewModel,n=s.findLayerInfo(t.layerInfos,e.layer),a=n&&n.fieldConfig,t.featureFormViewModel.set({feature:e,fieldConfig:a}),u=s.getVisualVariableAttributes(e),[4,s.setUpGeometryUpdate(e,u,t.sketchViewModel,t.view,(function(e){var i=e.geometry,n=e.attributes;if(u.rotation){var o=u.rotation.field;t.featureFormViewModel.setValue(o,n[o])}if(u.size){o=u.size.field;t.featureFormViewModel.setValue(o,n[o])}r.edits.updateAttributes(n),r.edits.updateGeometry(i)}))];case 1:return f=i.sent(),d=f.interactive,l=f.visual,o.add([r.viewModel.featureFormViewModel.on("value-change",(function(){r.edits.updateAttributes(r.viewModel.featureFormViewModel.getValues()),e.attributes=r.edits.feature.attributes})),d,l],this.id),[2]}}))}))},tearDown:function(){return n(this,void 0,void 0,(function(){return i(this,(function(e){return r.edits.feature=null,r.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null}),o.remove(this.id),[2]}))}))}}}},u=!1,f=["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"].filter((function(e){return!!u||(u=e===t)})).map((function(e){return a[e]()}));r.viewModel.refreshCreationTemplates();var d=function(e){if(1!==e.length)return null;var t=e[0];if(!("items"in t))return t;var i=t;return 1===i.items.length?i.items[0]:null}(r.viewModel.featureTemplatesViewModel.items);if("awaiting-feature-creation-info"===f[0].id&&d){var l=d.layer,c=d.template;r.creationInfo={layer:l,template:c},f.shift()}return f},t=d=r([a.subclass("esri.widgets.Editor.CreateWorkflow")],t)}(a.declared(d))}));