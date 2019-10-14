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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

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

define(["dojo/_base/array","dojo/on","dojo/aspect","dijit/form/Select","dijit/form/TextBox","dijit/form/CheckBox","./common/dijit/URLInput","./editors/simpleEditors","./editors/DataFileEditor","./editors/RasterLayerEditor","./editors/SelectFeatureSetFromLayer","./editors/FieldEditor"],function(e,t,a,r,o,i,d,l,u,n,p,s){function f(e,t,a){return e.editorName&&e.dataType.indexOf("GPMultiValue")<0?e.editorName:"input"===t?c(e,a):E(e)}function c(e,t){return"GPMultiValue:GPFeatureRecordSetLayer"===e.dataType?"UnsupportEditor":e.dataType.indexOf("GPMultiValue")>-1&&e.choiceList&&e.choiceList.length>0?"MultiValueChooser":e.dataType.indexOf("GPMultiValue")>-1&&(!e.choiceList||0===e.choiceList.length)?"MultiValueEditor":"GPLong"===e.dataType?"LongNumberTextBox":"GPDouble"===e.dataType?"DoubleNumberTextBox":"GPString"===e.dataType?e.choiceList&&e.choiceList.length>0?"Select":"TextBox":"GPBoolean"===e.dataType?"CheckBox":"GPLinearUnit"===e.dataType?"LinerUnitEditor":"GPDate"===e.dataType?"DateTimeEditor":"GPDataFile"===e.dataType?"DataFileEditor":"GPRasterDataLayer"===e.dataType?"RasterLayerEditor":"GPRecordSet"===e.dataType?"SimpleJsonEditor":"GPFeatureRecordSetLayer"===e.dataType?"setting"===t?"FeatureSetEditorChooser":"draw"===e.featureSetMode?"SelectFeatureSetFromDraw":"layers"===e.featureSetMode?"SelectFeatureSetFromLayer":"url"===e.featureSetMode?"SelectFeatureSetFromUrl":"file"===e.featureSetMode?"SelectFeatureSetFromFile":"UnsupportEditor":"Field"===e.dataType?"Field":"UnsupportEditor"}function E(e){return"GPFeatureRecordSetLayer"===e.dataType?"FeatureSetResultEditor":"GPRecordSet"===e.dataType?"RecordSetEditor":"MapServiceLayer"===e.dataType?"MapServiceLayer":"ShowMessage"}function m(e){return"GPRecordSet"===e.dataType?"table":"GPDataFile"===e.dataType||"GPRasterDataLayer"===e.dataType?"link":"text"}var y,S,V={},w=[];return V.createEditor=function(t,i,c,E){var L,T=f(t,i,c),g={param:t,widgetUID:E?E.uid:void 0,widget:E?E.widget:void 0,config:E?E.config:void 0,appConfig:E?E.appConfig:void 0,map:y,nls:S,context:c,editorManager:V,style:{width:"100%"}};if("UnsupportEditor"===T)g.message="type "+t.dataType+" is not supported for now.",L=new l.UnsupportEditor(g);else if("ShowMessage"===T)g.message=m(t),L=new l.UnsupportEditor(g);else if("MapServiceLayer"===T)g.message=S.useResultMapService,L=new l.UnsupportEditor(g);else if("MultiValueChooser"===T)L=new l.MultiValueChooser(g);else if("MultiValueEditor"===T)L=new l.MultiValueEditor(g);else if("LongNumberTextBox"===T)L=new l.LongNumberEditor(g);else if("DoubleNumberTextBox"===T)L=new l.DoubleNumberEditor(g);else if("Select"===T){var F=[];void 0!==t.defaultValue&&""!==t.defaultValue||F.push({value:"",label:""}),F=F.concat(e.map(t.choiceList,function(e){return{label:e,value:e}})),g.gEditor=new r({options:F,value:void 0===t.defaultValue||""===t.defaultValue?"":t.defaultValue}),g.editorName="Select",L=new l.GeneralEditorWrapperEditor(g)}else"TextBox"===T?(g.gEditor=new o({value:void 0===t.defaultValue?"":t.defaultValue}),L=new l.GeneralEditorWrapperEditor(g)):"CheckBox"===T?L=new l.BooleanEditor(g):"LinerUnitEditor"===T?L=new l.LinerUnitEditor(g):"DateTimeEditor"===T?L=new l.DateTimeEditor(g):"URLInput"===T?(g.gEditor=new d({value:void 0===t.defaultValue?"":t.defaultValue}),L=new l.GeneralEditorWrapperEditor(g)):"ObjectUrlEditor"===T?(t.defaultValue&&"string"==typeof t.defaultValue&&(g.value=t.defaultValue),L=new l.ObjectUrlEditor(g)):"SimpleJsonEditor"===T?(t.defaultValue&&(g.value=t.defaultValue),L=new l.SimpleJsonEditor(g)):"DataFileEditor"===T?(t.defaultValue&&(g.value=t.defaultValue),L=new u(g)):"RasterLayerEditor"===T?(t.defaultValue&&(g.value=t.defaultValue),L=new n(g)):"SelectFeatureSetFromLayer"===T?(t.defaultValue&&(g.value=t.defaultValue),L=new p(g)):"GetUrlObjectFromLayer"===T?(t.defaultValue&&(g.value=t.defaultValue),L=new l.GetUrlObjectFromLayer(g)):"Field"===T?(t.defaultValue&&(g.value=t.defaultValue),L=new s(g)):(g.message="wrong editorName."+T,L=new l.UnsupportEditor(g));return t.editorDependParamName&&(L.dependParam=t.editorDependParamName),a.before(L,"destroy",function(){w.splice(w.indexOf(L),1)}),L.dependParam&&e.forEach(w,function(e){e.param.name===L.dependParam&&L.update(e.getValue())}),w.push(L),L},V.setMap=function(e){y=e},V.setNls=function(e){S=e},V});