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

define(["require","exports","../../../geometry/support/jsonUtils","../CurveHelper"],(function(e,i,t,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.EffectBuffer=void 0;var r=function(){function e(){}return e.local=function(){return null===e.instance&&(e.instance=new e),e.instance},e.prototype.execute=function(e,i,t){return new s(e,i,t)},e.instance=null,e}();i.EffectBuffer=r;var s=function(){function e(e,i,t){this._inputGeometries=e,this._curveHelper=new n.CurveHelper,this._size=(void 0!==i.size?i.size:1)*t,this._offsetFlattenError=n.PIXEL_TOLERANCE*t}return e.prototype.next=function(){for(var e=this._inputGeometries.next();e;){if(t.isExtent(e))if(this._size>0){var i=[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]];if(f=this._curveHelper.offset(i,this._size,"Rounded",4,this._offsetFlattenError))return{rings:[f]}}else{if(!(this._size<0))return e;if(Math.min(e.xmax-e.xmin,e.ymax-e.ymin)+2*this._size>0)return{xmin:e.xmin-this._size,xmax:e.xmax+this._size,ymin:e.ymin-this._size,ymax:e.ymax+this._size}}if(t.isPolygon(e)){if(0===this._size)return e;for(var n=[],r=0,s=e.rings;r<s.length;r++){var f;i=s[r];(f=this._curveHelper.offset(i,this._size,"Rounded",4,this._offsetFlattenError))&&n.push(f)}if(n.length)return{rings:n}}if(t.isPolyline(e)&&this._size>0){n=[];for(var o=0,u=e.paths;o<u.length;o++){var h=u[o];if(h&&h.length>1){var a=this._curveHelper.offset(h,this._size,"Rounded",4,this._offsetFlattenError),l=this._curveHelper.offset(h,-this._size,"Rounded",4,this._offsetFlattenError);if(a&&l){for(var _=l.length-1;_>=0;_--)a.push(l[_]);a.push([a[0][0],a[0][1]]),n.push(a)}}}if(n.length)return{rings:n}}t.isPoint(e)&&this._size,e=this._inputGeometries.next()}return null},e}()}));