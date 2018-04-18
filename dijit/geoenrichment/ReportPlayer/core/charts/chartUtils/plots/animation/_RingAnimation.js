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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(n,i,t,o,e){return n(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.run,this._animationMemo.t,this._animationMemo.r,this._animationMemo.s,this._animationMemo.circle,this._animationMemo.slices)},_renderAnimation:function(n,i,a,r,s,m){function c(){u(),r.children.forEach(function(n){n.rawNode&&(n.rawNode.style.display="")}),h._isAnimating=!1}function u(){d.forEach(function(n){r.remove(n)}),f.forEach(function(n){r.remove(n)})}var h=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={run:n,t:i,r:a,s:r,circle:s,slices:m},!o.isChartAnimationSuspended)){var d=[],f=[];!function(){r.children.forEach(function(n){n.rawNode&&(n.rawNode.style.display="none")})}(),this._isAnimating=!0,function(){h._animationInfos.forEach(function(n,i){t.animateProperty({duration:h.opt.animate.duration||e.duration,properties:{slice:{start:0,end:m[i],easing:e.easingFunc}},progressFunction:function(t,o){d[i]&&r.remove(d[i]),f[i]&&r.remove(f[i]);var e=n.func(o);d[i]=e.shape,f[i]=e.bgShape},endFunction:c})})}()}}})});