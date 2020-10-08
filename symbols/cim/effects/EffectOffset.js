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

define(["require","exports","../../../geometry/support/jsonUtils","../CurveHelper"],(function(t,e,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EffectOffset=void 0;var s=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new r(t,e,i)},t.instance=null,t}();e.EffectOffset=s;var r=function(){function t(t,e,i){this._inputGeometries=t,this._curveHelper=new n.CurveHelper,this._offset=(void 0!==e.offset?e.offset:1)*i,this._method=e.method,this._option=e.option,this._offsetFlattenError=n.PIXEL_TOLERANCE*i,this._option}return t.prototype.next=function(){for(var t=this._inputGeometries.next();t;){if(0===this._offset)return t;if(i.isExtent(t)){if("Rounded"===this._method&&this._offset>0){var e=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];return(f=this._curveHelper.offset(e,this._offset,this._method,4,this._offsetFlattenError))?{rings:[f]}:null}if(Math.min(t.xmax-t.xmin,t.ymax-t.ymin)+2*this._offset>0)return{xmin:t.xmin-this._offset,xmax:t.xmax+this._offset,ymin:t.ymin-this._offset,ymax:t.ymax+this._offset}}if(i.isPolygon(t)){for(var n=[],s=0,r=t.rings;s<r.length;s++){var f;e=r[s];(f=this._curveHelper.offset(e,this._offset,this._method,4,this._offsetFlattenError))&&n.push(f)}if(n.length)return{rings:n}}if(i.isPolyline(t)){for(var o=[],h=0,u=t.paths;h<u.length;h++){var m=u[h],_=this._curveHelper.offset(m,this._offset,this._method,4,this._offsetFlattenError);_&&o.push(_)}if(o.length)return{paths:o}}t=this._inputGeometries.next()}return null},t}()}));