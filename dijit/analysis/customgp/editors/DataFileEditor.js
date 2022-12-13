// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/array","dojo/dom-style","dojo/dom-attr","dojo/_base/json","dojo/on","dojo/Deferred","dojo/text!./DataFileEditor.html","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","esri/tasks/DataFile","esri/request","../common/dijit/ViewStack","../common/dijit/Message","./SelectFeatureSetFromLayer","../../ItemTypes","../BaseEditor","dijit/form/Form","../common/dijit/URLInput"],(function(e,t,i,s,l,a,o,r,n,d,h,u,c,m,p,f,g,v,y){return e([y,h,u],{baseClass:"jimu-gp-editor-base jimu-gp-editor-datafile",templateString:d,editorName:"DataFileEditor",mode:"url",_url:"",_itemID:null,uniqueID:null,constructor:function(e){this.inherited(arguments),this.chooseLayerName="GPRasterDataLayer"===e.param.dataType?e.nls.useImageServiceLayer:e.nls.useBrowseLayerPortal,this.uniqueID=(new Date).getTime()},postCreate:function(){if(this.inherited(arguments),this.value&&this.parseDefaultValue(),a.set(this.urlEditor,"tooltip",this.param.tooltip),this.config.showDrawOption=!1,this.selectFeature=new g({cssClass:{featureSetSelect:"esriTableFixedLayout fullSpread esriLongLabel esriAnalysisSelect",layerChooseCtr:""},param:{},widgetUID:void 0,widget:this.widget,config:this.config,appConfig:this.appConfig,map:this.map,nls:this.i18n,editorManager:this.editorManager,style:{width:"100%"}}),this.selectFeature.defaultItemTypes=[v.FILE,v.DOC,v.IMG,v.PDF,v.CSVS],this.selectFeature.availableItemTypeFilters=[v.FILE,v.DOC,v.IMG,v.PDF,v.CSVS],this.ImgSvclayerNode.appendChild(this.selectFeature.domNode),"setting"===this.context?(this.viewStack=null,l.set(this.fileNode,"display","none")):(this.viewStack=new p({viewType:"dom",views:[this.urlNode,this.fileNode,this.ImgSvclayerNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup()),!0===this.config.serverInfo.supportsUpload&&l.set(this.modeSelection,"display",""),"item"===this.mode&&this.config.serverInfo.supportsUpload?(a.set(this.itemMode,"checked",!0),r.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):"layer"===this.mode?(a.set(this.selectMode,"checked",!0),r.emit(this.selctMode,"click",{cancelable:!0,bubble:!0})):(a.set(this.urlMode,"checked",!0),r.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.urlEditor.set("value",this._url)),this.param.filter&&this.param.filter.type&&"file"===this.param.filter.type.toLowerCase()&&this.param.filter.list&&this.param.filter.list.length>0){var e=s.map(this.param.filter.list,(function(e){return"."+e}));i.setAttr(this.fileInput,"accept",e.join(","))}},parseDefaultValue:function(){0===this.value.indexOf("itemID:")?this.mode="item":(0===this.value.indexOf("url:")&&(this._url=this.value.substring("url:".length)),this.mode="url")},hasValidValue:function(){return"item"===this.mode||("layer"===this.mode?!(!this.selectFeature||!this.selectFeature.getSelectedLayer()):"url"===this.mode?this.urlEditor.isValid():void 0)},getValue:function(){return"url"===this.mode?"url:"+this._getUrl():"item"===this.mode?"itemID:":""},getGPValue:function(){var e=new n,t=new c;return"url"===this.mode?t.url=this._getUrl():"layer"===this.mode?t.url=this.selectFeature.getSelectedLayer()&&this.selectFeature.getSelectedLayer().url:t.itemID=this.itemIDInput,t.url||t.itemID?e.resolve(t):e.resolve(null),e},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode="url",this.viewStack?this.viewStack.switchView(0):l.set(this.urlNode,"display","block")},_onItemModeSelect:function(){this.mode="item",this.viewStack?this.viewStack.switchView(1):(l.set(this.urlNode,"display","none"),l.set(this.ImgSvclayerNode,"display","none"))},_onSelectModeClick:function(){this.mode="layer",this.viewStack?this.viewStack.switchView(2):(l.set(this.urlNode,"display","none"),l.set(this.ImgSvclayerNode,"display","block"))},_onUpload:function(){a.get(this.fileInput,"value")&&this._doUpload().then(t.hitch(this,(function(e){e&&new f({message:this.nls.uploadSuccess})})),(function(e){var t=e.message||e;new f({message:t})}))},_doUpload:function(){var e=new n,i=a.get(this.fileInput,"value");return i=(i=i.replace(/\\/g,"/")).substr(i.lastIndexOf("/")+1),m({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(t.hitch(this,(function(t){t.success&&(this.itemIDInput=t.item.itemID,a.set(this.fileInput,"value",""),a.set(this.uploadFileName,"innerHTML",i)),e.resolve(t.success)})),(function(t){e.reject(t)})),e}})}));