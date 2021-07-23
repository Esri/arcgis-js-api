// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","../PlayerResizeModes","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/utils/progress/SmoothProgress"],(function(e,i,t,s,o,r,n,a,d,h){var l=e(null,{_dataProgress:0,_areaProgresses:null,_numAreas:0,constructor:function(e){i.mixin(this,e),this.reset()},reset:function(){this._dataProgress=0,this._areaProgresses={},this._fireProgress()},setLoadDataProgress:function(e){this._dataProgress=e,this._fireProgress()},setNumAreas:function(e){this._numAreas=e},setProgressForAreaAt:function(e,i){this._areaProgresses[i]=e,this._fireProgress()},finalize:function(){return this.onChange(1),n.delay(300)},_fireProgress:function(){var e=.25*this._dataProgress,i=.75/this._numAreas;for(var t in this._areaProgresses)e+=i*(this._areaProgresses[t]||0);e=Math.min(1-1e-6,Math.max(0,e)),this.onChange(e),this._printProgress()},_printProgress:function(){},onChange:function(e){}});return e(null,{_progressController:null,_initProgressController:function(){var e=this;this.showProgressBar&&(this._progressController=new l,new h(this._progressController).onChange=function(i){d.showProgressBar({value:i,node:e.domNode,position:"top"})})},_waitingCount:0,_hideUndoHandle:null,_waitNode:null,getWaitingPromise:function(){return d.getProgressPromiseForNode(this._waitNode||this.domNode)},_showWaiting:function(e,i){var s=this;return this.isPlayerOnServer?e:(this.onWaitingShown(e),this.resizeMode!==r.FIT_WINDOW?(0==this._waitingCount++&&(this._updateElementsVisibility(),this._waitNode=o.create("div",{class:"esriGEReportPlayerWaitingNode"},this.domNode.parentNode),this._waitNode.style.width=this.domNode.clientWidth?this.domNode.clientWidth+"px":"",this._waitNode.style.height=this.domNode.clientHeight?this.domNode.clientHeight+"px":"",this._waitNode.style.position="relative",this._hideUndoHandle=a.hideNodeInBackground(this.domNode)),t(e).finally((function(){0==--s._waitingCount&&(s._hideUndoHandle.remove(),s._hideUndoHandle=null,o.destroy(s._waitNode),s._updateElementsVisibility())})),d.showProgressPromise(this._waitNode,e,{progressClass:"esriGEReportPlayerProgress"})):this._showWaitingFullScreen(e,i))},_showWaitingFullScreen:function(e,i){return d.showProgressPromise(this.domNode,e,{progressClass:"esriGEReportPlayerProgress",onShowProgress:function(){this._waitingCount++,this._updateElementsVisibility()}.bind(this),onRemoveProgress:function(){if(this.domNode){this._waitingCount--,this._updateElementsVisibility();var e=this.getCurrentReportContainer();e&&!e.__isBeingAnimated&&(e.__isBeingAnimated=!0,e.domNode&&s.add(e.domNode,"esriGEReportPlayer_fadeIn1000"),e.notifyShown(),n.delay(1500).then((function(){e.__isBeingAnimated=!1,e.domNode&&s.remove(e.domNode,"esriGEReportPlayer_fadeIn1000")})))}}.bind(this)})},onWaitingShown:function(e){}})}));