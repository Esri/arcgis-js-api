// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

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

define(["dojo/_base/array","dojo/on","dojo/aspect","dijit/form/Select","dijit/form/TextBox","dijit/form/CheckBox","./common/dijit/URLInput","./editors/simpleEditors","./editors/DataFileEditor","./editors/RasterLayerEditor","./editors/SelectFeatureSetFromLayer"],function(e,t,a,r,o,i,d,u,l,n,p){function s(e,t,a){return e.editorName&&e.dataType.indexOf("GPMultiValue")<0?e.editorName:"input"===t?c(e,a):f(e,a)}function c(e,t){return"GPMultiValue:GPFeatureRecordSetLayer"===e.dataType?"UnsupportEditor":e.dataType.indexOf("GPMultiValue")>-1&&e.choiceList&&e.choiceList.length>0?"MultiValueChooser":e.dataType.indexOf("GPMultiValue")>-1&&(!e.choiceList||0===e.choiceList.length)?"MultiValueEditor":"GPLong"===e.dataType?"LongNumberTextBox":"GPDouble"===e.dataType?"DoubleNumberTextBox":"GPString"===e.dataType?e.choiceList&&e.choiceList.length>0?"Select":"TextBox":"GPBoolean"===e.dataType?"CheckBox":"GPLinearUnit"===e.dataType?"LinerUnitEditor":"GPDate"===e.dataType?"DateTimeEditor":"GPDataFile"===e.dataType?"DataFileEditor":"GPRasterDataLayer"===e.dataType?"RasterLayerEditor":"GPRecordSet"===e.dataType?"SimpleJsonEditor":"GPFeatureRecordSetLayer"===e.dataType?"setting"===t?"FeatureSetEditorChooser":"draw"===e.featureSetMode?"SelectFeatureSetFromDraw":"layers"===e.featureSetMode?"SelectFeatureSetFromLayer":"url"===e.featureSetMode?"SelectFeatureSetFromUrl":"file"===e.featureSetMode?"SelectFeatureSetFromFile":"UnsupportEditor":"UnsupportEditor"}function f(e){return"GPFeatureRecordSetLayer"===e.dataType?"FeatureSetResultEditor":"GPRecordSet"===e.dataType?"RecordSetEditor":"MapServiceLayer"===e.dataType?"MapServiceLayer":"ShowMessage"}function m(e){var t;return t="GPRecordSet"===e.dataType?"table":"GPDataFile"===e.dataType||"GPRasterDataLayer"===e.dataType?"link":"text"}var E,y,S={},L=[];return S.createEditor=function(t,i,c,f){var w,T=s(t,i,c),V={param:t,widgetUID:f?f.uid:void 0,config:f?f.config:void 0,appConfig:f?f.appConfig:void 0,map:E,nls:y,context:c,editorManager:S,style:{width:"100%"}};return"UnsupportEditor"===T?(V.message="type "+t.dataType+" is not supported for now.",w=new u.UnsupportEditor(V)):"ShowMessage"===T?(V.message=m(t),w=new u.UnsupportEditor(V)):"MapServiceLayer"===T?(V.message=y.useResultMapService,w=new u.UnsupportEditor(V)):"MultiValueChooser"===T?w=new u.MultiValueChooser(V):"MultiValueEditor"===T?w=new u.MultiValueEditor(V):"LongNumberTextBox"===T?w=new u.LongNumberEditor(V):"DoubleNumberTextBox"===T?w=new u.DoubleNumberEditor(V):"Select"===T?(V.gEditor=new r({options:e.map(t.choiceList,function(e){return{label:e,value:e}}),value:void 0===t.defaultValue?"":t.defaultValue}),V.editorName="Select",w=new u.GeneralEditorWrapperEditor(V)):"TextBox"===T?(V.gEditor=new o({value:void 0===t.defaultValue?"":t.defaultValue}),w=new u.GeneralEditorWrapperEditor(V)):"CheckBox"===T?w=new u.BooleanEditor(V):"LinerUnitEditor"===T?w=new u.LinerUnitEditor(V):"DateTimeEditor"===T?w=new u.DateTimeEditor(V):"URLInput"===T?(V.gEditor=new d({value:void 0===t.defaultValue?"":t.defaultValue}),w=new u.GeneralEditorWrapperEditor(V)):"ObjectUrlEditor"===T?(t.defaultValue&&"string"==typeof t.defaultValue&&(V.value=t.defaultValue),w=new u.ObjectUrlEditor(V)):"SimpleJsonEditor"===T?(t.defaultValue&&(V.value=t.defaultValue),w=new u.SimpleJsonEditor(V)):"DataFileEditor"===T?(t.defaultValue&&(V.value=t.defaultValue),w=new l(V)):"RasterLayerEditor"===T?(t.defaultValue&&(V.value=t.defaultValue),w=new n(V)):"SelectFeatureSetFromLayer"===T?(t.defaultValue&&(V.value=t.defaultValue),w=new p(V)):"GetUrlObjectFromLayer"===T?(t.defaultValue&&(V.value=t.defaultValue),w=new u.GetUrlObjectFromLayer(V)):(V.message="wrong editorName."+T,w=new u.UnsupportEditor(V)),t.editorDependParamName&&(w.dependParam=t.editorDependParamName),a.before(w,"destroy",function(){L.splice(L.indexOf(w),1)}),w.dependParam&&e.forEach(L,function(e){e.param.name===w.dependParam&&w.update(e.getValue())}),L.push(w),w},S.setMap=function(e){E=e},S.setNls=function(e){y=e},S});