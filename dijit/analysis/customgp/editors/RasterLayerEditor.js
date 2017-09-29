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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-style","dojo/dom-attr","dojo/on","dojo/Deferred","dojo/text!./RasterLayerEditor.html","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","esri/tasks/RasterData","esri/request","../common/dijit/ViewStack","../common/dijit/Message","../BaseEditor","dijit/form/TextBox","dijit/form/ValidationTextBox"],function(t,e,i,s,o,r,a,l,n,u,d,h,m,c,f){var p="url:",g="format:",v="itemID:",I="url",w="item",_=/^(ht|f)tps?:\/\/[^\s\.]+(\.[^\s\.]+)*((\/|\.)[^\s\.]+)+\/?$/;return t([f,n,u],{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",templateString:l,editorName:"RasterLayerEditor",mode:I,_url:"",_format:"",_itemID:null,uniqueID:null,constructor:function(){this.inherited(arguments),this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments),this.value&&this.parseDefaultValue(),o.set(this.urlEditor,"regExp",_.toString()),o.set(this.urlEditor,"tooltip",this.param.tooltip),"setting"===this.context?(this.viewStack=null,s.set(this.fileNode,"display","none")):(this.viewStack=new m({viewType:"dom",views:[this.urlNode,this.fileNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup()),this.config.serverInfo.supportsUpload&&s.set(this.modeSelection,"display",""),this.mode===w&&this.config.serverInfo.supportsUpload?(o.set(this.itemMode,"checked",!0),r.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):(o.set(this.urlMode,"checked",!0),r.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.rasterFormatInput.set("value",this._format),this.urlEditor.set("value",this._url))},parseDefaultValue:function(){var t;0===this.value.indexOf(v)?this.mode=w:((0===this.value.indexOf(p)||0===this.value.indexOf(g))&&(t=this.value.split(","),i.forEach(t,function(t){0===t.indexOf(p)?this._url=t.substring(p.length):t.indexOf(0===g)&&(this._format=t.substring(g.length))},this)),this.mode=I)},hasValidValue:function(){return this.mode===w?!0:this.mode===I?this.urlEditor.isValid():void 0},getValue:function(){return this.mode===I?p+this._getUrl()+","+g+this.rasterFormatInput.get("value"):this.mode===w?v:""},getGPValue:function(){var t=new a,e=new d;return this.mode===I?(e.url=this._getUrl(),e.format=this.rasterFormatInput.get("value")):e.itemID=this.itemIDInput,e.url||e.itemID?t.resolve(e):t.resolve(null),t},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode=I,this.viewStack?this.viewStack.switchView(0):s.set(this.urlNode,"display","block")},_onItemModeSelect:function(){this.mode=w,this.viewStack?this.viewStack.switchView(1):s.set(this.urlNode,"display","none")},_onUpload:function(){if(o.get(this.fileInput,"value")){var t=o.get(this.fileInput,"value");t=t.replace(/\\/g,"/"),t=t.substr(t.lastIndexOf("/")+1),h({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(e.hitch(this,function(e){e.success&&(this.itemIDInput=e.item.itemID,o.set(this.fileInput,"value",""),o.set(this.uploadFileName,"innerHTML",t),new c({message:this.nls.uploadSuccess}))}),e.hitch(this,function(t){var e=t.message||t;new c({message:e})}))}}})});