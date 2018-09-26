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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(i,n,t,a){return i(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.run,this._animationMemo.t,this._animationMemo.r,this._animationMemo.s,this._animationMemo.circle,this._animationMemo.slices)},_renderAnimation:function(i,e,o,r,s,c){function m(){u(),r.children.forEach(function(i){i.rawNode&&(i.rawNode.style.display="")}),d._isAnimating=!1}function u(){h.forEach(function(i){r.remove(i)}),h.length=0}var d=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={run:i,t:e,r:o,s:r,circle:s,slices:c},!t.isAnimationSuspended)){var h=[];!function(){d._dataLabels.forEach(function(i){i.style.opacity=0}),r.children.forEach(function(i){i.rawNode&&(i.rawNode.style.display="none")})}(),this._isAnimating=!0,function(){n.animateProperty({duration:d.opt.animate.duration||a.duration,properties:{slice:{start:0,end:1,easing:a.easingFunc}},progressFunction:function(i,n,t){u(),d._dataLabels.forEach(function(i){i.style.opacity=t});var a;d._animationInfos.forEach(function(i,n){var o=i.func(d._getSliceValueAt(c,n,e)*t,a?a.end+a.donutGap:void 0,!0);h.push(o.shape),a=o})},endFunction:m})}()}}})});