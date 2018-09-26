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

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(["dojo/_base/array","dojo/on","dojo/aspect","dijit/form/Select","dijit/form/TextBox","dijit/form/CheckBox","./common/dijit/URLInput","./editors/simpleEditors","./editors/DataFileEditor","./editors/RasterLayerEditor","./editors/SelectFeatureSetFromLayer"],function(e,t,a,r,o,i,d,u,l,n,p){function s(e,t,a){return e.editorName&&e.dataType.indexOf("GPMultiValue")<0?e.editorName:"input"===t?c(e,a):f(e)}function c(e,t){return"GPMultiValue:GPFeatureRecordSetLayer"===e.dataType?"UnsupportEditor":e.dataType.indexOf("GPMultiValue")>-1&&e.choiceList&&e.choiceList.length>0?"MultiValueChooser":e.dataType.indexOf("GPMultiValue")>-1&&(!e.choiceList||0===e.choiceList.length)?"MultiValueEditor":"GPLong"===e.dataType?"LongNumberTextBox":"GPDouble"===e.dataType?"DoubleNumberTextBox":"GPString"===e.dataType?e.choiceList&&e.choiceList.length>0?"Select":"TextBox":"GPBoolean"===e.dataType?"CheckBox":"GPLinearUnit"===e.dataType?"LinerUnitEditor":"GPDate"===e.dataType?"DateTimeEditor":"GPDataFile"===e.dataType?"DataFileEditor":"GPRasterDataLayer"===e.dataType?"RasterLayerEditor":"GPRecordSet"===e.dataType?"SimpleJsonEditor":"GPFeatureRecordSetLayer"===e.dataType?"setting"===t?"FeatureSetEditorChooser":"draw"===e.featureSetMode?"SelectFeatureSetFromDraw":"layers"===e.featureSetMode?"SelectFeatureSetFromLayer":"url"===e.featureSetMode?"SelectFeatureSetFromUrl":"file"===e.featureSetMode?"SelectFeatureSetFromFile":"UnsupportEditor":"UnsupportEditor"}function f(e){return"GPFeatureRecordSetLayer"===e.dataType?"FeatureSetResultEditor":"GPRecordSet"===e.dataType?"RecordSetEditor":"MapServiceLayer"===e.dataType?"MapServiceLayer":"ShowMessage"}function m(e){return"GPRecordSet"===e.dataType?"table":"GPDataFile"===e.dataType||"GPRasterDataLayer"===e.dataType?"link":"text"}var E,y,S={},w=[];return S.createEditor=function(t,i,c,f){var L,V=s(t,i,c),T={param:t,widgetUID:f?f.uid:void 0,widget:f?f.widget:void 0,config:f?f.config:void 0,appConfig:f?f.appConfig:void 0,map:E,nls:y,context:c,editorManager:S,style:{width:"100%"}};if("UnsupportEditor"===V)T.message="type "+t.dataType+" is not supported for now.",L=new u.UnsupportEditor(T);else if("ShowMessage"===V)T.message=m(t),L=new u.UnsupportEditor(T);else if("MapServiceLayer"===V)T.message=y.useResultMapService,L=new u.UnsupportEditor(T);else if("MultiValueChooser"===V)L=new u.MultiValueChooser(T);else if("MultiValueEditor"===V)L=new u.MultiValueEditor(T);else if("LongNumberTextBox"===V)L=new u.LongNumberEditor(T);else if("DoubleNumberTextBox"===V)L=new u.DoubleNumberEditor(T);else if("Select"===V){var g=[];void 0!==t.defaultValue&&""!==t.defaultValue||g.push({value:"",label:""}),g=g.concat(e.map(t.choiceList,function(e){return{label:e,value:e}})),T.gEditor=new r({options:g,value:void 0===t.defaultValue||""===t.defaultValue?"":t.defaultValue}),T.editorName="Select",L=new u.GeneralEditorWrapperEditor(T)}else"TextBox"===V?(T.gEditor=new o({value:void 0===t.defaultValue?"":t.defaultValue}),L=new u.GeneralEditorWrapperEditor(T)):"CheckBox"===V?L=new u.BooleanEditor(T):"LinerUnitEditor"===V?L=new u.LinerUnitEditor(T):"DateTimeEditor"===V?L=new u.DateTimeEditor(T):"URLInput"===V?(T.gEditor=new d({value:void 0===t.defaultValue?"":t.defaultValue}),L=new u.GeneralEditorWrapperEditor(T)):"ObjectUrlEditor"===V?(t.defaultValue&&"string"==typeof t.defaultValue&&(T.value=t.defaultValue),L=new u.ObjectUrlEditor(T)):"SimpleJsonEditor"===V?(t.defaultValue&&(T.value=t.defaultValue),L=new u.SimpleJsonEditor(T)):"DataFileEditor"===V?(t.defaultValue&&(T.value=t.defaultValue),L=new l(T)):"RasterLayerEditor"===V?(t.defaultValue&&(T.value=t.defaultValue),L=new n(T)):"SelectFeatureSetFromLayer"===V?(t.defaultValue&&(T.value=t.defaultValue),L=new p(T)):"GetUrlObjectFromLayer"===V?(t.defaultValue&&(T.value=t.defaultValue),L=new u.GetUrlObjectFromLayer(T)):(T.message="wrong editorName."+V,L=new u.UnsupportEditor(T));return t.editorDependParamName&&(L.dependParam=t.editorDependParamName),a.before(L,"destroy",function(){w.splice(w.indexOf(L),1)}),L.dependParam&&e.forEach(w,function(e){e.param.name===L.dependParam&&L.update(e.getValue())}),w.push(L),L},S.setMap=function(e){E=e},S.setNls=function(e){y=e},S});