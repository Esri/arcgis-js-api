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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dojo/dom-construct","../PlayerResizeModes","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/utils/progress/SmoothProgress"],function(e,s,i,o,t,r,n,a,h){var d=e(null,{_dataProgress:0,_areaProgresses:null,_numAreas:0,constructor:function(e){s.mixin(this,e),this.reset()},reset:function(){this._dataProgress=0,this._areaProgresses={},this._fireProgress()},setLoadDataProgress:function(e){this._dataProgress=e,this._fireProgress()},setNumAreas:function(e){this._numAreas=e},setProgressForAreaAt:function(e,s){this._areaProgresses[s]=e,this._fireProgress()},finalize:function(){return this.onDone(),r.delay(300)},_setProgress:function(e){this._currentProgress=e,this.onChange(this._currentProgress)},_fireProgress:function(){var e=.25*this._dataProgress,s=.75/this._numAreas;for(var i in this._areaProgresses)e+=s*(this._areaProgresses[i]||0);e=Math.min(1,Math.max(0,e)),this.onChange(e),this._printProgress()},_printProgress:function(){var e=[];for(var s in this._areaProgresses)e.push("#"+s+" "+(100*this._areaProgresses[s]).toFixed(0));console.log("...........LOAD PROGRESS => Data "+(100*this._dataProgress).toFixed(0)+" Areas "+e.join("; "))},onChange:function(e){},onDone:function(){}});return e(null,{_progressController:null,_initProgressController:function(){var e=this;if(this.showProgressBar){this._progressController=new d;new h(this._progressController).onChange=function(s){a.showProgressBar({value:s,node:e.domNode,position:"top"})}}},_waitingCount:0,_hideUndoHandle:null,_waitNode:null,getWaitingPromise:function(){return a.getProgressPromiseForNode(this._waitNode||this.domNode)},_showWaiting:function(e){var s=this;return this.resizeMode!==t.FIT_WINDOW?(0==this._waitingCount++&&(this._waitNode=o.create("div",{class:"esriGEReportPlayerWaitingNode"},this.domNode.parentNode),this._waitNode.style.width=this.domNode.clientWidth?this.domNode.clientWidth+"px":"",this._waitNode.style.height=this.domNode.clientHeight?this.domNode.clientHeight+"px":"",this._waitNode.style.position="relative",this._hideUndoHandle=n.hideNodeInBackground(this.domNode)),i(e).always(function(){0==--s._waitingCount&&(s._hideUndoHandle.undo(),s._hideUndoHandle=null,o.destroy(s._waitNode))}),a.showProgressPromise(this._waitNode,e,{progressClass:"esriGEReportPlayerProgress"})):this._showWaitingFullScreen(e)},_showWaitingFullScreen:function(e){return a.showProgressPromise(this.domNode,e,{progressClass:"esriGEReportPlayerProgress",onShowProgress:this._onShowWaiting.bind(this),onRemoveProgress:this._onRemoveWaiting.bind(this)})},_onShowWaiting:function(){this.normalViewDiv.style.opacity="0.01"},_onRemoveWaiting:function(){this.normalViewDiv.style.opacity=""}})});