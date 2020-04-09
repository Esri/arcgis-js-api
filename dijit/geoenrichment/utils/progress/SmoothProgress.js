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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect"],(function(e,s){return e(null,{elasticTime:1e3,fireInterval:30,_intervalHandle:null,_progressHandle:null,_realProgress:0,_smoothProgress:0,_runAheadSpeed:25e-5,_currentSpeed:0,constructor:function(e){e.fireInterval>0&&(this.fireInterval=e.fireInterval),e.elasticTime>0&&(this.elasticTime=e.elasticTime),e.timeEstimate>0&&(this._runAheadSpeed=Math.min(this.fireInterval/e.timeEstimate,.5));var t=this;this._progressHandle=s.after(e,"onChange",(function(e){e>=1?t._finalize():t._updateProgress(e)}),!0)},start:function(){this._updateProgress(0,!0)},_updateProgress:function(e,s){this._realProgress=Math.max(e,0),(0!==this._realProgress||(this._smoothProgress=0,this._setIntervalHandle(!1),this.onChange(0),s))&&(this._setIntervalHandle(!0),this._currentSpeed=this._smoothProgress>=this._realProgress?this._runAheadSpeed:(this._realProgress-this._smoothProgress)*this.fireInterval/this.elasticTime)},_setIntervalHandle:function(e){e!==!!this._intervalHandle&&(e?this._intervalHandle=setInterval(this._tryFireProgress.bind(this),this.fireInterval):(clearInterval(this._intervalHandle),this._intervalHandle=null))},_tryFireProgress:function(){0!==this._currentSpeed&&(this._smoothProgress+=this._currentSpeed,this._smoothProgress=Math.min(1-this._runAheadSpeed,this._smoothProgress),this._smoothProgress>=this._realProgress&&(this._currentSpeed=this._runAheadSpeed),this.onChange(this._smoothProgress))},_finalize:function(){this._smoothProgress=this._realProgress=1,this.onChange(1)},onChange:function(e){},destroy:function(){this._progressHandle.remove(),this._setIntervalHandle(!1)}})}));