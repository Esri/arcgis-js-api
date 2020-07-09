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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../geometry/support/jsonUtils","../CurveHelper"],(function(t,e,i,n){Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new r(t,e,i)},t.instance=null,t}();e.EffectDonut=h;var r=function(){function t(t,e,i){switch(this._inputGeometries=t,this._curveHelper=new n.CurveHelper,this._width=(void 0!==e.width?e.width:2)*i,e.method){case"Mitered":default:this._method="Mitered";break;case"Bevelled":this._method="Bevelled";break;case"Rounded":case"TrueBuffer":this._method="Rounded";break;case"Square":this._method="Square"}this._option=e.option,this._offsetFlattenError=n.PIXEL_TOLERANCE*i,this._option}return t.prototype.next=function(){for(var t=this._inputGeometries.next();t;){if(i.isExtent(t))if(this._width>0)return Math.min(t.xmax-t.xmin,t.ymax-t.ymin)-2*this._width<0?t:((n=[]).push([[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]),n.push([[t.xmin+this._width,t.ymin+this._width],[t.xmax-this._width,t.ymin+this._width],[t.xmax-this._width,t.ymax-this._width],[t.xmin+this._width,t.ymax-this._width],[t.xmin+this._width,t.ymin+this._width]]),{rings:n});if(i.isPolygon(t)&&this._width>0){for(var e=[],n=[],h=0,r=t.rings;h<r.length;h++){var s=r[h],o=this._curveHelper.calculatePathLength(s);o>0&&e.push(s);var u=this._curveHelper.offset(s,this._width,this._method,4,this._offsetFlattenError);u&&(o<0&&u.reverse(),n.push(u)),o<0&&e.push(s)}if(n.length)return{rings:n}}t=this._inputGeometries.next()}return null},t}()}));