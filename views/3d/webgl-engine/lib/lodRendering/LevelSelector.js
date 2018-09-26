// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../Camera"],function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){this._camera=new r,this._worldSpaceRadius=e,this._thresholds=t.map(function(e){return e})}return e.prototype.updateCamera=function(e){this._camera.copyFrom(e)},e.prototype.selectLevel=function(e,t){for(var r=this._camera.computePixelSizeAt(e),o=this._worldSpaceRadius*t/r,i=this._thresholds,a=-1,n=0;n<i.length;++n)o>=i[n]&&(a=n);return a},e}();t.LevelSelector=o});