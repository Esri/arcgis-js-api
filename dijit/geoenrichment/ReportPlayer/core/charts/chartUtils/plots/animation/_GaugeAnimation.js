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

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(e,n,i,t,a){return e(null,{_renderAnimation:function(e,o,s,r,l,c){function u(){m._gaugeLabelElement&&(m._gaugeLabelElement.style.display="none"),r.children.forEach(function(e){e.rawNode&&(e.rawNode.style.display="none")})}function d(){f(),m._gaugeLabelElement&&(m._gaugeLabelElement.style.display=""),r.children.forEach(function(e){e.rawNode&&(e.rawNode.style.display="")}),m._isAnimating=!1}function f(){E.forEach(function(e){r.remove(e)}),E.length=0,v.forEach(function(e){n.destroy(e)}),v.length=0}function h(){i.animateProperty({duration:m.opt.animate.duration||a.duration,properties:{slice:{start:0,end:m._getSliceValueAt(c,0,o),easing:a.easingFunc}},progressFunction:function(n,i,t){f();var a=p.func(i);E.push(a.shape);var o=g.func(A-i,a.end+a.donutGap);E.push(o.shape),_&&v.push(_.func(i,e[0].tooltip.formatFunc(e[0].tooltip.value*t)).element),y&&E.push(y.func(i).shape)},endFunction:d})}var m=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={run:e,t:o,r:s,s:r,circle:l,slices:c},!t.isChartAnimationSuspended)){var p,g,_,y;if(this._animationInfos.forEach(function(e){e.isSlice&&0===e.sliceIndex?p=e:e.isSlice&&1===e.sliceIndex?g=e:e.isLabel?_=e:e.isArrow&&(y=e)}),p&&g){var A=this._getSliceValueAt(c,0,o)+this._getSliceValueAt(c,1,o),E=[],v=[];u(),this._isAnimating=!0,h()}}}})});