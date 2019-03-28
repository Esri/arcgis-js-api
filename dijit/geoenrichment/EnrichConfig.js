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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/lang","dojo/dom-class","esri/tasks/geoenrichment/EnrichParameters","esri/tasks/geoenrichment/RingBuffer","./_Wizard","./EnrichOptionsPage","./DataBrowser","dojo/i18n!esri/nls/jsapi"],function(i,t,s,e,a,n,o,h,l){return i("esri.dijit.geoenrichment.EnrichConfig",[n],{enrichParams:null,geomType:null,fields:null,fieldsMap:null,allowNewColumns:!0,allowFieldTypeMismatch:!1,studyAreaCount:null,showBackButton:!0,title:l.geoenrichment.dijit.EnrichConfig.title,_nextButton:null,_dataCollections:null,_eventMap:{back:!0,finish:["params","fieldsMap","dataCollections"]},selectedIDs:null,constructor:function(){this.selectedIDs=[]},startup:function(){this.inherited(arguments),this.enrichParams||(this.enrichParams=new e),this.enrichParams.studyAreaOptions=new a,s.add(this.domNode,"EnrichConfig");var i=this.pages.d=new h({countryID:this.enrichParams.countryID,countryBox:!0,multiSelect:!0,okButton:l.geoenrichment.dijit.WizardButtons.next,title:this.title});i.on("back,cancel",t.hitch(this,this._onBack)),i.on("ok",t.hitch(this,this._applyVariables)),this._loadDataBrowser()},_onDataCollectionSelect:function(){var i=!1,t=this.pages.d.get("selection");for(var s in t)if(t[s]){i=!0;break}this._nextButton.disabled=!i},_loadDataBrowser:function(){this.pages.d.set("selection",this.selectedIDs),this.loadPage("d")},_applyVariables:function(){this._dataCollections=this.pages.d.variables.dataCollections.data,this.pages.o||(this.pages.o=new o({buffer:this.enrichParams.studyAreaOptions,geomType:this.geomType,fields:this.fields,allowNewColumns:this.allowNewColumns,allowFieldTypeMismatch:this.allowFieldTypeMismatch,studyAreaCount:this.studyAreaCount,onBack:t.hitch(this,function(){this.fieldsMap=this.pages.o.get("fieldsMap"),this._loadDataBrowser()}),onFinish:t.hitch(this,this._finish)})),this.pages.o.set("dataCollections",this._dataCollections);for(var i=this.fieldsMap||{},s={},e=this.selectedIDs=this.pages.d.get("selection"),a=0;a<e.length;a++){var n=e[a];s[n]=i[n]||""}this.fieldsMap=s,this.pages.o.set("fieldsMap",s),this.loadPage("o")},_onBack:function(){this.onBack()},onBack:function(){},_finish:function(){this.enrichParams.countryID=this.pages.d.get("countryID"),this.enrichParams.studyAreaOptions=this.pages.o.get("buffer");var i=this.fieldsMap=this.pages.o.get("fieldsMap"),s=[];this.enrichParams.variables=[];for(var e,a=0;a<this._dataCollections.length;a++){var n=this._dataCollections[a],o=!0,h=[];for(e=0;e<n.variables.length;e++){var l=n.id+"."+n.variables[e].id;t.isString(i[l])?h.push(l):o=!1}if(o)this.enrichParams.variables.push(n.id+".*"),s.push(n);else if(h.length>0){for(e=0;e<h.length;e++)this.enrichParams.variables.push(h[e]);s.push(n)}}this.onFinish(this.enrichParams,i,s)},onFinish:function(i,t,s){}})});