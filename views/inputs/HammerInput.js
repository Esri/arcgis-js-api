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

define(["../../core/hammerExtended","../../core/declare","dojo/aspect"],function(e,t,r){var n={drag:{event:"drag",action:"pan",button:0},click:{event:"click",action:"tap",threshold:5,posThreshold:20,interval:185,exclusiveTo:["double-click"]},"right-click":{event:"right-click",action:"tap",button:2},altdrag:{event:"altdrag",action:"pan",button:2,exclusiveTo:["drag"]},pinch:{threshold:.01,firesWith:["drag","rotation"]},rotation:{threshold:5,firesWith:["drag","pinch"]},hold:{time:350},swipe:{firesWith:["drag"]},scroll:!0,"double-click":{event:"double-click",action:"tap",taps:2,threshold:30,posThreshold:30,firesWith:["click"]}},i=/\s*,\s*/g,a=t(null,{gestures:null,manager:null,constructor:function(t){var n=function(e){e.preventDefault()};t.addEventListener("selectstart",n,!1),t.addEventListener("dragstart",n,!1),t.addEventListener("contextmenu",n,!1),this.manager=new e.Manager(t),this.gestures={},r.after(this.manager,"add",this._emitAdd.bind(this.manager),!0)},on:function(e,t){var r=this.manager,a=n[e];if(i.test(e)){var s=this;return e.split(i).forEach(function(e){s.on(e,t)}),{remove:function(){r.off(e.replace(i," "),t)}}}if("input"!=e&&!r.get(e)&&a&&this.addGesture({action:a.action||e,event:a.event||e,rules:a===!0?void 0:a}),this.gestures&&this.gestures[e]||"input"==e){"input"==e&&(e="hammer.input"),r.on(e,t);var o={remove:function(){r.off(e,t)}};return o}return!1},addGesture:function(t){if(!t)return!1;var n=t.action,i=t.event,a=t.rules,s=a&&a.firesWith,o=a&&a.exclusiveTo;if(n="hold"==n?"Press":n&&n.slice(0,1).toUpperCase()+n.slice(1),e[n]&&"function"==typeof e[n]){var u=new e[n](a);return this.gestures[i||n]=u,this.manager&&this.manager.add(u),r.around(u,"recognizeWith",this._checkGestureLinks.bind(u)),r.around(u,"requireFailure",this._checkGestureLinks.bind(u)),s&&(Array.isArray(s)||(s=[s]),u.recognizeWith(s)),o&&u.requireFailure(o),!0}return console.warn("no such action to base the new gesture on"),!1},removeGesture:function(e){return this.manager&&this.manager.remove(e)},configureGesture:function(e,t){return this.manager&&this.manager.set(e,t)},_checkGestureLinks:function(e){var t=this,r=this.manager;return e=e.bind(t),function(t){return function(r){var n=t&&t.get(r);if(n||Array.isArray(r))e(r);else{var i=function(n){var a=n.gesture;r==a.options.event&&(e(r),t.off("add",i))};t.on("add",i)}}}(r)},_emitAdd:function(e){this.emit("add",{gesture:e})}});return a});