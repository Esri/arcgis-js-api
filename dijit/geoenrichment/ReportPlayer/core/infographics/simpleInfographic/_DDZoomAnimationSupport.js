// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/on","dojo/keys","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./SimpleInfographicViewModes","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MouseUtil","esri/dijit/geoenrichment/utils/animation/AnimationUtil","esri/dijit/geoenrichment/utils/DelayUtil","../../../ReportPlayerState"],function(e,i,o,t,n,d,r,a,l,s,c,m,u){var h=200,D=200;return e(null,{_ddZoomScreen:null,_ddZoomScreenClass:null,_currentTriggerButtonBox:null,_closeZoomedDDWhenClickedOutside:!0,_showZoomTransition:function(e,i,o){function n(e){e?(l.show(_.dataDrillingViewDiv),_.dataDrillingViewDiv.parentNode!==document.body&&document.body.appendChild(_.dataDrillingViewDiv),_._getDDZoomViewZIndex()&&r.set(_.dataDrillingViewDiv,"zIndex",_._getDDZoomViewZIndex())):(_.dataDrillingViewDiv.parentNode===document.body&&document.body.removeChild(_.dataDrillingViewDiv),l.hide(_.dataDrillingViewDiv))}function s(){var i=e!==a.VIEW_MAIN;n(i),_._setZoomScreen(i,!1),_._setCloseHandlers(i),u.isViewingDataDrillingZoom=i,_._mode=e,t[e===a.VIEW_DATA_DRILLING?"add":"remove"](_.domNode,"isDrillingData"),t.remove(_.domNode,"isShowingAnimation"),_.onViewModeChanged(e)}var _=this;if(this._mode!==e){if(this._currentTriggerButtonBox=o?d.position(o):this._currentTriggerButtonBox,t.add(this.domNode,"isShowingAnimation"),t.add(this.dataDrillingViewDiv,"isZoomAnimation"),!i)return void s();n(!0);var g=e===a.VIEW_DATA_DRILLING,w=this._getDataDrillingPanelDimensions();r.set(this.dataDrillingViewDiv,{width:w.w+"px",height:w.h+"px"}),this._setZoomScreen(g,!0);var v;return g?(v=c.animateResize({duration:h,domNode:this.dataDrillingViewDiv,fromBox:this._currentTriggerButtonBox,startScaleX:.7,startScaleY:.7,fromOffset:{x:"c",y:"c"},toBox:{x:(document.body.clientWidth-w.w)/2,y:(document.body.clientHeight-w.h)/2,w:w.w,h:w.h},onEnd:s}),c.animateFadeIn({domNode:this.dataDrillingViewDiv,duration:h/2})):(v=c.animateResize({duration:D,domNode:this.dataDrillingViewDiv,toBox:this._currentTriggerButtonBox,endScaleX:.7,endScaleY:.7,toOffset:{x:"c",y:"c"},onEnd:s}),c.animateFadeOut({domNode:this.dataDrillingViewDiv,duration:D/2})),v.then(function(){return m.delay(100)})}},_setZoomScreen:function(e,i){function o(){d._ddZoomScreen&&n.destroy(d._ddZoomScreen),d._ddZoomScreen=null}var d=this;e!==!!this._ddZoomScreen&&(e?(this._ddZoomScreen=n.create("div",{"class":"esriGEAbsoluteStretched simpleInfographic_dataDrillingViewDivScreen"},this.dataDrillingViewDiv,"before"),this._getDDZoomViewZIndex()&&r.set(this._ddZoomScreen,"zIndex",this._getDDZoomViewZIndex()),this._ddZoomScreenClass&&t.add(this._ddZoomScreen,this._ddZoomScreenClass),i&&c.animateFadeIn({domNode:this._ddZoomScreen,duration:h/2})):i?c.animateFadeOut({domNode:this._ddZoomScreen,duration:D/2,onEnd:o}):o())},_clickOutsideHandler:null,_keyboardHandler:null,_setCloseHandlers:function(e){var t=this;this._clickOutsideHandler&&this._clickOutsideHandler.remove(),this._clickOutsideHandler=null,this._keyboardHandler&&this._keyboardHandler.remove(),this._keyboardHandler=null,e&&(this._closeZoomedDDWhenClickedOutside&&(this._clickOutsideHandler=i(document.body,"click",function(){s.isMouseOver(t.dataDrillingViewDiv,{checkAllChildren:!0})||t._setViewMode(a.VIEW_MAIN,!0)})),this._keyboardHandler=i(document.body,"keyup",function(e){e.keyCode===o.ESCAPE&&t._setViewMode(a.VIEW_MAIN,!0)}))},_getDDZoomViewZIndex:function(){return null}})});