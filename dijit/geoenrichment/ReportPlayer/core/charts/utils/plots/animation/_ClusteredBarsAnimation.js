// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],(function(n,i,a,t){return n(null,{_animateBar:function(n){if(!n.isAnimating&&!a.isAnimationSuspended){var e=n.shape,r=n.hoffset,s=n.hsize;0===s&&(s=1),i.animateTransform({shape:e,duration:this.animate.duration||t.duration,easing:t.easingFunc,transform:[{name:"translate",start:[r-r/s,0],end:[0,0]},{name:"scale",start:[1/s,1],end:[1,1]}],onEnd:function(){n.isAnimating=!1}})}},renderAnimation:function(){this._animationInfos&&this._animationInfos.forEach((function(n){this._animateBar(n)}),this)}})}));