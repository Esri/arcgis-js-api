// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(e,n,i,t,a){return e(null,{_renderAnimation:function(e,o,s,r,l){function c(){u(),d.gaugeLabelElement&&(d.gaugeLabelElement.style.display=""),s.children.forEach(function(e){e.rawNode&&(e.rawNode.style.display="")}),d._isAnimating=!1}function u(){y.forEach(function(e){s.remove(e)}),y.length=0,_.forEach(function(e){n.destroy(e)}),_.length=0}var d=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={t:e,r:o,s:s,circle:r,slices:l},!t.isAnimationSuspended)){var f,h,g,m;if(this._animationInfos.forEach(function(e){e.isSlice&&0===e.sliceIndex?f=e:e.isSlice&&1===e.sliceIndex?h=e:e.isLabel?g=e:e.isArrow&&(m=e)}),f&&h){var p=this._getSliceValueAt(l,0,e)+this._getSliceValueAt(l,1,e),y=[],_=[];!function(){d.gaugeLabelElement&&(d.gaugeLabelElement.style.display="none"),s.children.forEach(function(e){e.rawNode&&(e.rawNode.style.display="none")})}(),this._isAnimating=!0,function(){i.animateProperty({duration:d.opt.animate.duration||a.duration,properties:{slice:{start:0,end:d._getSliceValueAt(l,0,e),easing:a.easingFunc}},progressFunction:function(e,n,i){u();var t=f.func(n);y.push(t.shape);var a=h.func(p-n,t.end+t.donutGap);y.push(a.shape),g&&_.push(g.func(n,{progress:i}).element),m&&y.push(m.func(n).shape)},endFunction:c})}()}}}})});