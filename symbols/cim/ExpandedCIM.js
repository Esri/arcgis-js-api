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

define(["require","exports","../../views/2d/engine/webgl/enums","../../views/2d/engine/webgl/materialKey/MaterialKey"],(function(e,t,r,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExpandedCIM=void 0;var n={marker:r.WGLGeometryType.MARKER,fill:r.WGLGeometryType.FILL,line:r.WGLGeometryType.LINE,text:r.WGLGeometryType.TEXT},i=function(){function e(e,t,r){this.layers=e,this.data=t,this.hash=this._createHash(),this.rendererKey=r;for(var i=0,y=e;i<y.length;i++){var o=y[i],s=n[o.type];o.materialKey=a.createMaterialKey(s,this.rendererKey,!1,!1)}}return Object.defineProperty(e.prototype,"type",{get:function(){return"expanded-cim"},enumerable:!1,configurable:!0}),e.prototype._createHash=function(){for(var e="",t=0,r=this.layers;t<r.length;t++){e+=r[t].templateHash}return e},e}();t.ExpandedCIM=i}));