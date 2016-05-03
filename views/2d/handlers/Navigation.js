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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../../../core/declare","dojo/keys","../../../core/sniff","../../inputs/Handler","../../2d/viewpointUtils"],function(t,i,e,n,o){var a=t(n,{declaredClass:"esri.views.2d.handlers.Navigation",constructor:function(){this.mouseRotate!==!1&&null!=this.mouseRotate&&(this.altdrag=this._altdrag)},_scrollAccum:0,_scrollTimeout:null,_lastPosition:null,_canZoom:!0,mouseRotate:e("mac")?i.META:i.CTRL,mouseZoomOut:i.SHIFT,mouseWheelZoom:!0,drag:function(t){var i=t.deltaX,e=t.deltaY,n=t.lastEvent,a=n?n.deltaX-i:-i,s=n?e-n.deltaY:e,c=this.view,r=t.eventType;if(r==this._phaseDict.START&&(c.interacting=!0),r>=this._phaseDict.END)c.interacting=!1,this._coords=this._lastPosition=null;else{if(c.interacting||(c.interacting=!0),0===a&&0===s)return;this._hasRotateKey(t.srcEvent)?this._altdrag(t):c.viewpoint=o.translateBy(this.viewpoint,c.viewpoint,[a||0,s||0])}},"double-click":function(t){var i=t.srcEvent.shiftKey?.5:2,e=this.view,n=t.screenPoint;e.interacting=!1,e.goTo(this._scaleAndRotateViewpoint(n.x,n.y,i))},pinch:function(t){var i=this.view,e=t.lastEvent,n=t.scale,o=t.rotation,a=t.eventType;if(1!==n||0!==o){var s=t.screenPoint;o=e?o-e.rotation:o,n=e?n/e.scale:n;var c=Math.abs(1-n),r=Math.abs(o/90);if(a>=this._phaseDict.END)return i.interacting=!1,i.constraints._zoom.enabled=!0,void i.goTo(i.viewpoint);i.interacting===!1&&(i.interacting=!0,i.constraints._zoom.enabled=!1),c>=r&&1!==n?i.viewpoint=this._scaleAndRotateViewpoint(s.x,s.y,n):r>c&&0!==o&&(i.viewpoint=this._scaleAndRotateViewpoint(s.x,s.y,n,o))}},scroll:function(t){if(this.mouseWheelZoom){var i,e=this.view,n=t.scrollDelta,o=t.screenPoint.x,a=t.screenPoint.y;if(0===n||n===-0)return;this._canZoom&&(i=0>n?.5:2,this._canZoom=!1,e.interacting=!1,e.goTo(this._scaleAndRotateViewpoint(o,a,i)),this._scrollTimeout=setTimeout(function(){this._canZoom=!0}.bind(this),100))}},click:function(t){t.mapPoint=this.view.toMap(t.screenPoint)},hold:function(t){this.view.emit("hold",t)},altdrag:function(){},_altdrag:function(t){var i=t.deltaX,e=t.deltaY,n=t.lastEvent,a=n?n.deltaX-i:-i,s=n?n.deltaY-e:e,c=this.view,r=0,l=t.eventType,h=t.screenPoint.x,d=t.screenPoint.y,v=[h,d];if(l==this._phaseDict.START&&(c.interacting=!0),l>=this._phaseDict.END)c.interacting=!1,this._coords=this._lastPosition=null;else{if(c.interacting||(c.interacting=!0),0===a&&0===s)return;var u=c.state.paddedScreenCenter;r=o.angleBetween(u,this._lastPosition||v,v),c.viewpoint=o.rotateBy(this.viewpoint,c.content.viewpoint,r);var p=this._lastPosition;this._lastPosition=v,this._coords=p}},_contextStop:function(t){t.preventDefault()},_scaleAndRotateViewpoint:function(t,i,e,n){var a=this.view,s=[t,i],c=[];o.getPaddingScreenTranslation(c,a.size,a.padding);var r=a.animation?a.animation.target:a.viewpoint;return s[0]+=c[0],s[1]+=c[1],void 0==n?o.scaleBy(this.viewpoint,r,e,s,a.size):o.scaleAndRotateBy(this.viewpoint,r,e,n,s,a.content.size)},_hasRotateKey:function(t){var n=e("mac")?i.META:i.CTRL,o=!1;return n===!1?o:(t.altKey&&n==i.ALT?o=!0:t.ctrlKey&&n==i.CTRL?o=!0:t.metaKey&&n==i.META?o=!0:t.shiftKey&&n==i.SHIFT&&(o=!0),o)}});return a});