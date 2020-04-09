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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],(function(n,i,e,t){return n(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.s,this._animationMemo.slices)},_renderAnimation:function(n,o){var a=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={s:n,slices:o},!e.isAnimationSuspended)){var r=[],s=[];n.children.forEach((function(n){n.rawNode&&(n.rawNode.style.display="none")})),this._isAnimating=!0,a._animationInfos.forEach((function(e,c){i.animateProperty({duration:a.opt.animate.duration||t.duration,properties:{slice:{start:0,end:o[c],easing:t.easingFunc}},progressFunction:function(i,t){r[c]&&n.remove(r[c]),s[c]&&n.remove(s[c]);var o=e.func(t);r[c]=o.shape,s[c]=o.bgShape},endFunction:m})}))}function m(){r.forEach((function(i){n.remove(i)})),s.forEach((function(i){n.remove(i)})),n.children.forEach((function(n){n.rawNode&&(n.rawNode.style.display="")})),a._isAnimating=!1}}})}));