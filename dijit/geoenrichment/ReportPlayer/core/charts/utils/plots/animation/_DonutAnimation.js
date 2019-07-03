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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(i,n,t,a){return i(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.t,this._animationMemo.r,this._animationMemo.s,this._animationMemo.circle,this._animationMemo.slices)},_renderAnimation:function(i,e,o,r,s){function c(){m(),o.children.forEach(function(i){i.rawNode&&(i.rawNode.style.display="")}),u._isAnimating=!1}function m(){d.forEach(function(i){o.remove(i)}),d.length=0}var u=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={t:i,r:e,s:o,circle:r,slices:s},!t.isAnimationSuspended)){var d=[];!function(){u._dataLabels.forEach(function(i){i.style.opacity=0}),o.children.forEach(function(i){i.rawNode&&(i.rawNode.style.display="none")})}(),this._isAnimating=!0,function(){n.animateProperty({duration:u.opt.animate.duration||a.duration,properties:{slice:{start:0,end:1,easing:a.easingFunc}},progressFunction:function(n,t,a){m(),u._dataLabels.forEach(function(i){i.style.opacity=a});var e;u._animationInfos.forEach(function(n,t){var o=n.func(u._getSliceValueAt(s,t,i)*a,e?e.end+e.donutGap:void 0,!0);d.push(o.shape),e=o})},endFunction:c})}()}}})});