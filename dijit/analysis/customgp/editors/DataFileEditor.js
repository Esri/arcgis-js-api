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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/dom-attr","dojo/on","dojo/Deferred","dojo/text!./DataFileEditor.html","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","esri/tasks/DataFile","esri/request","../common/dijit/ViewStack","../common/dijit/Message","../BaseEditor","dijit/form/Form","../common/dijit/URLInput"],function(e,t,i,s,o,l,n,u,a,r,d,h,c,m){var f="url:",p="itemID:",v="url",g="item";return e([m,u,a],{baseClass:"jimu-gp-editor-base jimu-gp-editor-datafile",templateString:n,editorName:"DataFileEditor",mode:v,_url:"",_itemID:null,uniqueID:null,constructor:function(){this.inherited(arguments),this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments),this.value&&this.parseDefaultValue(),s.set(this.urlEditor,"tooltip",this.param.tooltip),"setting"===this.context?(this.viewStack=null,i.set(this.fileNode,"display","none")):(this.viewStack=new h({viewType:"dom",views:[this.urlNode,this.fileNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup()),this.config.serverInfo.supportsUpload===!0&&i.set(this.modeSelection,"display",""),this.mode===g&&this.config.serverInfo.supportsUpload?(s.set(this.itemMode,"checked",!0),o.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):(s.set(this.urlMode,"checked",!0),o.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.urlEditor.set("value",this._url))},parseDefaultValue:function(){0===this.value.indexOf(p)?this.mode=g:(0===this.value.indexOf(f)&&(this._url=this.value.substring(f.length)),this.mode=v)},hasValidValue:function(){return this.mode===g?!0:this.mode===v?this.urlEditor.isValid():void 0},getValue:function(){return this.mode===v?f+this._getUrl():this.mode===g?p:""},getGPValue:function(){var e=new l,t=new r;return this.mode===v?t.url=this._getUrl():t.itemID=this.itemIDInput,t.url||t.itemID?e.resolve(t):e.resolve(null),e},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode=v,this.viewStack?this.viewStack.switchView(0):i.set(this.urlNode,"display","block")},_onItemModeSelect:function(){this.mode=g,this.viewStack?this.viewStack.switchView(1):i.set(this.urlNode,"display","none")},_onUpload:function(){s.get(this.fileInput,"value")&&this._doUpload().then(t.hitch(this,function(e){e&&new c({message:this.nls.uploadSuccess})}),function(e){var t=e.message||e;new c({message:t})})},_doUpload:function(){var e=new l,i=s.get(this.fileInput,"value");return i=i.replace(/\\/g,"/"),i=i.substr(i.lastIndexOf("/")+1),d({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(t.hitch(this,function(t){t.success&&(this.itemIDInput=t.item.itemID,s.set(this.fileInput,"value",""),s.set(this.uploadFileName,"innerHTML",i)),e.resolve(t.success)}),function(t){e.reject(t)}),e}})});