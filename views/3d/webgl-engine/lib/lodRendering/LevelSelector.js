// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../Camera"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this.thresholdScale=1,this._camera=new r.default,this._worldSpaceRadius=e,this._thresholds=t.map(function(e){return e})}return e.prototype.updateCamera=function(e){this._camera.copyFrom(e)},e.prototype.selectLevel=function(e,t){for(var r=this._camera.computeScreenPixelSizeAt(e),o=this._worldSpaceRadius*t/r,a=this._thresholds,i=-1,n=0;n<a.length;++n)o>=a[n]*this.thresholdScale&&(i=n);return i},e}();t.LevelSelector=o});