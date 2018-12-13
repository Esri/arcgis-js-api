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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/Accessor","../../../core/Collection","../../../core/Handles","../../../core/watchUtils","../../../core/accessorSupport/decorators","../Tip/TipItem"],function(e,t,i,n,r,p,o,s,d,c){"use strict";var l=p.ofType(c);return function(e){function t(t){var i=e.call(this)||this;return i._handles=new o,i.tips=new l,i}return i(t,e),t.prototype.initialize=function(){var e=this;this._handles.add([s.init(this,"tips",function(){e.selectedTipIndex=e.tips.length?0:-1}),s.on(this,"tips","change",function(t){return e._tipsChanged(t)})])},t.prototype.destroy=function(){this._handles.destroy(),this.tips.removeAll()},Object.defineProperty(t.prototype,"selectedTip",{get:function(){return this.tips.getItemAt(this.selectedTipIndex)||null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"selectedTipIndex",{get:function(){var e=this._get("selectedTipIndex");return"number"==typeof e?e:-1},set:function(e){var t=this._get("selectedTipIndex"),i=this.tips.length,n=e<t?"retreating":"advancing";this._set("paginationDirection",n),e=isNaN(e)||e<-1||!i?-1:(e+i)%i,this._set("selectedTipIndex",e)},enumerable:!0,configurable:!0}),t.prototype.next=function(){this.selectedTipIndex=this.selectedTipIndex+1},t.prototype.previous=function(){this.selectedTipIndex=this.selectedTipIndex-1},t.prototype._tipsChanged=function(e){var t=e.added,i=e.removed,n=e.target,r=n.length,p=r-t.length+i.length;if(p!==r){0===p&&r>0||(this.selectedTipIndex=0)}},n([d.property({readOnly:!0})],t.prototype,"paginationDirection",void 0),n([d.property({type:c,readOnly:!0,dependsOn:["selectedTipIndex","tips.length"]})],t.prototype,"selectedTip",null),n([d.property()],t.prototype,"selectedTipIndex",null),n([d.property({type:l})],t.prototype,"tips",void 0),n([d.property()],t.prototype,"next",null),n([d.property()],t.prototype,"previous",null),t=n([d.subclass("esri.widgets.TipManager.TipManagerViewModel")],t)}(d.declared(r))});