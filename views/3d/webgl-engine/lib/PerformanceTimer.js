// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./Util"],function(t,e,i){var r=function(){function t(t){this._filterSampleIndex=0,this._lastTime=NaN,this._totalTime=0,this._numMeasurements=0,this._filterSamples=new Array(t),this.reset(),this._filterSize=t}return t.prototype.reset=function(){this._filterSampleIndex=0;for(var t=0;t<this._filterSize;t++)this._filterSamples[t]=NaN},t.prototype.start=function(){this._tsStart=i.performance.now()},t.prototype.stop=function(){var t=i.performance.now();return this._lastTime=t-this._tsStart,this._totalTime+=this._lastTime,this._numMeasurements++,this._filterSize&&(this._filterSamples[this._filterSampleIndex]=this._lastTime,this._filterSampleIndex=(this._filterSampleIndex+1)%this._filterSize),this._lastTime},t.prototype.getLast=function(){return this._lastTime},t.prototype.getLastFiltered=function(){for(var t=0,e=0;e<this._filterSamples.length;e++)t+=this._filterSamples[e];return t/this._filterSamples.length},t.prototype.getAverage=function(){return this._totalTime/this._numMeasurements},t.prototype.getTotal=function(){return this._totalTime},t.prototype.getNumMeasurements=function(){return this._numMeasurements},t}();return r});