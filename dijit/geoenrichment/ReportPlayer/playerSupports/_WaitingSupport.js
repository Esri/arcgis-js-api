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

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-construct","../PlayerResizeModes","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/utils/progress/SmoothProgress"],function(e,i,s,t,o,r,n,a,h){var d=e(null,{_dataProgress:0,_areaProgresses:null,_numAreas:0,constructor:function(e){i.mixin(this,e),this.reset()},reset:function(){this._dataProgress=0,this._areaProgresses={},this._fireProgress()},setLoadDataProgress:function(e){this._dataProgress=e,this._fireProgress()},setNumAreas:function(e){this._numAreas=e},setProgressForAreaAt:function(e,i){this._areaProgresses[i]=e,this._fireProgress()},finalize:function(){return this.onDone(),r.delay(300)},_setProgress:function(e){this._currentProgress=e,this.onChange(this._currentProgress)},_fireProgress:function(){var e=.25*this._dataProgress,i=.75/this._numAreas;for(var s in this._areaProgresses)e+=i*(this._areaProgresses[s]||0);e=Math.min(1,Math.max(0,e)),this.onChange(e),this._printProgress()},_printProgress:function(){return},onChange:function(e){},onDone:function(){}});return e(null,{_progressController:null,_initProgressController:function(){var e=this;if(this.showProgressBar){this._progressController=new d;new h(this._progressController).onChange=function(i){a.showProgressBar({value:i,node:e.domNode,position:"top"})}}},_waitingCount:0,_hideUndoHandle:null,_waitNode:null,getWaitingPromise:function(){return a.getProgressPromiseForNode(this._waitNode||this.domNode)},_showWaiting:function(e){var i=this;return this.resizeMode!==o.FIT_WINDOW?(0==this._waitingCount++&&(this._waitNode=t.create("div",{class:"esriGEReportPlayerWaitingNode"},this.domNode.parentNode),this._waitNode.style.width=this.domNode.clientWidth?this.domNode.clientWidth+"px":"",this._waitNode.style.height=this.domNode.clientHeight?this.domNode.clientHeight+"px":"",this._waitNode.style.position="relative",this._hideUndoHandle=n.hideNodeInBackground(this.domNode)),s(e).always(function(){0==--i._waitingCount&&(i._hideUndoHandle.undo(),i._hideUndoHandle=null,t.destroy(i._waitNode))}),a.showProgressPromise(this._waitNode,e,{progressClass:"esriGEReportPlayerProgress"})):this._showWaitingFullScreen(e)},_showWaitingFullScreen:function(e){return a.showProgressPromise(this.domNode,e,{progressClass:"esriGEReportPlayerProgress",onShowProgress:this._onShowWaiting.bind(this),onRemoveProgress:this._onRemoveWaiting.bind(this)})},_onShowWaiting:function(){this.normalViewDiv.style.opacity="0.01",this.sidePageNavigator.style.opacity="0.01"},_onRemoveWaiting:function(){this.normalViewDiv.style.opacity="",this.sidePageNavigator.style.opacity=""}})});