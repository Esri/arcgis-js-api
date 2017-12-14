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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","esri/dijit/geoenrichment/utils/DelayUtil","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/WaitingUtil","esri/dijit/geoenrichment/utils/progress/SmoothProgress"],function(s,r,e,o,i,t){var n=.25,a=.75,h=s(null,{_dataProgress:0,_areaProgresses:null,_numAreas:0,constructor:function(s){r.mixin(this,s),this.reset()},reset:function(){this._dataProgress=0,this._areaProgresses={},this._fireProgress()},setLoadDataProgress:function(s){this._dataProgress=s,this._fireProgress()},setNumAreas:function(s){this._numAreas=s},setProgressForAreaAt:function(s,r){this._areaProgresses[r]=s,this._fireProgress()},finalize:function(){return this.onDone(),e.delay(300)},_setProgress:function(s){this._currentProgress=s,this.onChange(this._currentProgress)},_fireProgress:function(){var s=n*this._dataProgress,r=a/this._numAreas;for(var e in this._areaProgresses)s+=r*(this._areaProgresses[e]||0);s=Math.min(1,Math.max(0,s)),this.onChange(s),this._printProgress()},_printProgress:function(){var s=[];for(var r in this._areaProgresses)s.push("#"+r+" "+(100*this._areaProgresses[r]).toFixed(0));console.log("...........LOAD PROGRESS => Data "+(100*this._dataProgress).toFixed(0)+" Areas "+s.join("; "))},onChange:function(s){},onDone:function(){}});return s(null,{_progressController:null,_initProgressController:function(){var s=this;if(this.showProgressBar){this._progressController=new h;var r=new t(this._progressController);r.onChange=function(r){i.showProgressBar({value:r,node:s.domNode,position:"top"})}}},_showWaiting:function(s){return i.showProgressPromise(this.domNode,s,{progressClass:"esriGEReportPlayerProgress",onShowProgress:this._onShowWaiting.bind(this),onRemoveProgress:this._onRemoveWaiting.bind(this)})},_onShowWaiting:function(){this.normalViewDiv.style.opacity="0.01"},_onRemoveWaiting:function(){this.normalViewDiv.style.opacity=""}})});