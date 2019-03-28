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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(n,i,t,e){return n(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.s,this._animationMemo.slices)},_renderAnimation:function(n,o){function a(){r(),n.children.forEach(function(n){n.rawNode&&(n.rawNode.style.display="")}),s._isAnimating=!1}function r(){m.forEach(function(i){n.remove(i)}),c.forEach(function(i){n.remove(i)})}var s=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={s:n,slices:o},!t.isAnimationSuspended)){var m=[],c=[];!function(){n.children.forEach(function(n){n.rawNode&&(n.rawNode.style.display="none")})}(),this._isAnimating=!0,function(){s._animationInfos.forEach(function(t,r){i.animateProperty({duration:s.opt.animate.duration||e.duration,properties:{slice:{start:0,end:o[r],easing:e.easingFunc}},progressFunction:function(i,e){m[r]&&n.remove(m[r]),c[r]&&n.remove(c[r]);var o=t.func(e);m[r]=o.shape,c[r]=o.bgShape},endFunction:a})})}()}}})});