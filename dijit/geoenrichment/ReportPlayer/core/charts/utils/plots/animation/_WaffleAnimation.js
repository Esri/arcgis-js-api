// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],(function(n,i,t,e,o){return n(null,{_animationMemo:null,_isAnimating:!1,renderAnimation:function(){!this._isAnimating&&this._animationMemo&&this._renderAnimation(this._animationMemo.s)},_renderAnimation:function(n){var a=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={s:n},!e.isAnimationSuspended)){var s=[];a.valueLabelElements.forEach((function(n){n.style.display="none"})),this._isAnimating=!0,a._animationInfos.forEach((function(n,e){t.animateProperty({duration:a.opt.animate.duration||o.duration,properties:{slice:{start:0,end:1}},progressFunction:function(t,o,a){n.isShape?n.func(a):n.isLabel&&(s[e]&&i.destroy(s[e]),s[e]=n.func(a))},endFunction:r})}))}function r(){s.forEach((function(n){i.destroy(n)})),a.valueLabelElements.forEach((function(n){n.style.display=""})),a._isAnimating=!1}}})}));