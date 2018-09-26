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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/aspect","../DelayUtil"],function(e,s,r){return e(null,{elasticTime:1e3,fireInterval:30,runAheadSpeed:25e-5,_intervalHandle:null,_progressH:null,_doneH:null,_realProgress:0,_smoothProgress:0,_currentSpeed:0,constructor:function(e){var r=this;this._progressH=s.after(e,"onChange",function(e){r._updateProgress(e)},!0),this._doneH=s.after(e,"onDone",function(e){r.finalize()},!0)},_setIntervalHandle:function(e){e&&this._intervalHandle||(e?this._intervalHandle=setInterval(this._tryFireProgress.bind(this),this.fireInterval):(clearInterval(this._intervalHandle),this._intervalHandle=null))},_updateProgress:function(e){return this._realProgress=e,this._realProgress<=0?(this._smoothProgress=0,this._currentSpeed=0,this._setIntervalHandle(!1),void this.onChange(0)):(this._setIntervalHandle(!0),this._smoothProgress>=this._realProgress?void(this._currentSpeed=this.runAheadSpeed):void(this._currentSpeed=(this._realProgress-this._smoothProgress)*this.fireInterval/this.elasticTime))},_tryFireProgress:function(){0!==this._currentSpeed&&(this._smoothProgress+=this._currentSpeed,this._smoothProgress=Math.min(1,this._smoothProgress),this._smoothProgress>=this._realProgress&&(this._currentSpeed=this.runAheadSpeed),this.onChange(this._smoothProgress))},finalize:function(){return this._smoothProgress=1,this.onChange(this._smoothProgress),r.delay(100)},onChange:function(e){},destroy:function(){this._progressH.remove(),this._doneH.remove(),this._setIntervalHandle(!1)}})});