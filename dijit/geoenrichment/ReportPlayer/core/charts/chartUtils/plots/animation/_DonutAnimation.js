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

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(n,i,t,a,o){return n(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.run,this._animationMemo.t,this._animationMemo.r,this._animationMemo.s,this._animationMemo.circle,this._animationMemo.slices)},_renderAnimation:function(n,i,e,r,s,c){function m(){l._dataLabels.forEach(function(n){n.style.opacity=0}),r.children.forEach(function(n){n.rawNode&&(n.rawNode.style.display="none")})}function u(){d(),r.children.forEach(function(n){n.rawNode&&(n.rawNode.style.display="")}),l._isAnimating=!1}function d(){f.forEach(function(n){r.remove(n)}),f.length=0}function h(){t.animateProperty({duration:l.opt.animate.duration||o.duration,properties:{slice:{start:0,end:1,easing:o.easingFunc}},progressFunction:function(n,t,a){d(),l._dataLabels.forEach(function(n){n.style.opacity=a});var o;l._animationInfos.forEach(function(n,t){var e=n.func(l._getSliceValueAt(c,t,i)*a,o?o.end+o.donutGap:void 0,!0);f.push(e.shape),o=e})},endFunction:u})}var l=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={run:n,t:i,r:e,s:r,circle:s,slices:c},!a.isChartAnimationSuspended)){var f=[];m(),this._isAnimating=!0,h()}}})});