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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["./libs/hammer/hammer"],function(t){function e(){T.apply(this,arguments)}t.INPUT_TYPE_TOUCH="touch",t.INPUT_TYPE_PEN="pen",t.INPUT_TYPE_MOUSE="mouse",t.INPUT_TYPE_KINECT="kinect";var n={mousedown:t.INPUT_START,mousemove:t.INPUT_MOVE,mouseup:t.INPUT_END,wheel:t.INPUT_MOVE},s={pointerdown:t.INPUT_START,pointermove:t.INPUT_MOVE,pointerup:t.INPUT_END,pointercancel:t.INPUT_CANCEL,pointerout:t.INPUT_CANCEL,wheel:t.INPUT_MOVE},o={2:t.INPUT_TYPE_TOUCH,3:t.INPUT_TYPE_PEN,4:t.INPUT_TYPE_MOUSE,5:t.INPUT_TYPE_KINECT};t.prototype._emit=function(){return t.prototype.emit}(),t.prototype.emit=function(t,e){e.cancelled=!1,e.cancel=function(){e.srcEvent.preventDefault(),e.srcEvent.stopImmediatePropagation(),e.cancelled=!0},this._emit(t,e)},t.extend(t.MouseInput.prototype,{_lastButton:null,handler:function(e){var s=n[e.type];s&t.INPUT_START&&(0===e.button||2===e.button)?(this.pressed=!0,this._lastButton=e.button):s&t.INPUT_MOVE&&"wheel"===e.type&&(this.pressed=!0,e.preventDefault()),s&t.INPUT_MOVE&&null!=this._lastButton&&e.which!==this._lastButton+1&&(s=t.INPUT_END),this.pressed&&this.allow&&(s&t.INPUT_END&&(this.pressed=!1,this._lastButton=null),this.callback(this.manager,s,{pointers:[e],changedPointers:[e],pointerType:t.INPUT_TYPE_MOUSE,srcEvent:e,button:e.button,scrollDelta:e.deltaY&&-1*e.deltaY}))}}),t.extend(t.PointerEventInput.prototype,{handler:function(e){var n=this.store,r=!1,i=!1,p=null,T=e.type.toLowerCase().replace("ms",""),l=s[T],u=o[e.pointerType]||e.pointerType,a=u==t.INPUT_TYPE_TOUCH,_=t.inArray(n,e.pointerId,"pointerId");l&t.INPUT_START&&(0===e.button||2===e.button||a)?(0>_&&(i=!0),this.pressed=!0,p=this._lastButton=e.button):l&t.INPUT_MOVE&&"wheel"===e.type?(0>_&&(i=!0),this.pressed=!0,r=!0,e.preventDefault()):l&t.INPUT_MOVE&&this.pressed?p=this._lastButton:l&(t.INPUT_END|t.INPUT_CANCEL)&&(r=!0,this.pressed=!1,p=e.button),i===!0&&(n.push(e),_=n.length-1),0>_||(n[_]=e,this.callback(this.manager,l,{pointers:n,changedPointers:[e],pointerType:u,srcEvent:e,button:p,scrollDelta:e.deltaY&&-1*e.deltaY}),r&&(n.splice(_,1),this._lastButton=this.pressed=!1))}});var r=t.AttrRecognizer.prototype.attrTest,i=t.Tap.prototype.process,p=function(e){var n;return n=e.pointerType!=t.INPUT_TYPE_MOUSE||null==this.options.button?null:this.options.button,null===n||e.button===n};t.extend(t.AttrRecognizer.prototype,{_attrTest:r,_btnTest:p,attrTest:function(t){return this._attrTest(t)&&this._btnTest(t)}}),t.extend(t.Tap.prototype.defaults,{button:0}),t.extend(t.Tap.prototype,{_btnTest:p,_tapProcess:i,process:function(e){return this._btnTest(e)?this._tapProcess(e):t.STATE_FAILED}}),t.extend(t.Pan.prototype,{process:function(e){var n=this._super.process.call(this,e);return n>=t.STATE_CANCELLED&&(n=t.STATE_FAILED),n}});var T=t.AttrRecognizer;return t.inherit(e,T,{defaults:{event:"scroll",threshold:0,pointers:0},getTouchAction:function(){return[t.TOUCH_ACTION_COMPUTE]},attrTest:function(t){return this._super.attrTest.call(this,t)&&Math.abs(t.scrollDelta)>this.options.threshold},process:function(e){var n=this._super.process.call(this,e);return n>=t.STATE_CANCELLED&&(n=t.STATE_FAILED),n}}),t.Scroll=e,t});