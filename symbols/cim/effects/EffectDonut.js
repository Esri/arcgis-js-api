/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../geometry/support/jsonUtils","../CurveHelper"],(function(t,e,i){"use strict";let n=function(){function t(){}return t.local=function(){return null===t.instance&&(t.instance=new t),t.instance},t.prototype.execute=function(t,e,i){return new s(t,e,i)},t}();n.instance=null;let s=function(){function t(t,e,n){switch(this._inputGeometries=t,this._curveHelper=new i.CurveHelper,this._width=(void 0!==e.width?e.width:2)*n,e.method){case"Mitered":default:this._method="Mitered";break;case"Bevelled":this._method="Bevelled";break;case"Rounded":case"TrueBuffer":this._method="Rounded";break;case"Square":this._method="Square"}this._option=e.option,this._offsetFlattenError=i.PIXEL_TOLERANCE*n}return t.prototype.next=function(){let t=this._inputGeometries.next();for(;t;){if(e.isExtent(t)&&this._width>0){if(Math.min(t.xmax-t.xmin,t.ymax-t.ymin)-2*this._width<0)return t;const e=[];return e.push([[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]),e.push([[t.xmin+this._width,t.ymin+this._width],[t.xmax-this._width,t.ymin+this._width],[t.xmax-this._width,t.ymax-this._width],[t.xmin+this._width,t.ymax-this._width],[t.xmin+this._width,t.ymin+this._width]]),{rings:e}}if(e.isPolygon(t)&&this._width>0){const e=[];for(const i of t.rings){const t=this._curveHelper.calculatePathLength(i),n=this._curveHelper.offset(i,this._width,this._method,4,this._offsetFlattenError);n&&(t<0&&n.reverse(),e.push(n))}if(e.length)return{rings:e}}t=this._inputGeometries.next()}return null},t}();t.EffectDonut=n,Object.defineProperty(t,"__esModule",{value:!0})}));
