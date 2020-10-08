// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../geometry","../../../Graphic","../../../symbols","../../../core/maybe"],(function(e,i,r,o,t,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.GraphicsHandle=void 0;var h={red:[255,0,0],green:[0,255,0],blue:[0,0,255]},n=function(){function e(e,i){this.graphics=e,this._symbol=new t.SimpleMarkerSymbol({color:h[i],outline:{color:[255,255,255],width:2}})}return e.prototype.showPoint=function(e,i){this.remove();var t=new r.Point({x:e[0],y:e[1],z:e[2],spatialReference:i});this._graphic=new o({geometry:t,symbol:this._symbol}),this.graphics.add(this._graphic)},e.prototype.remove=function(){s.isSome(this._graphic)&&(this.graphics.remove(this._graphic),this._graphic=null)},e}();i.GraphicsHandle=n}));