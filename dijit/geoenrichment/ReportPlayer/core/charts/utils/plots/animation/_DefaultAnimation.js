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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],(function(i,n,t,a){return i(null,{_animationInfo:null,render:function(i,n){var t=this.animate;this.animate=!1;var a=this.inherited(arguments);return this.animate=t,this.animate&&(this._animationInfo={dim:i,offsets:n},this.renderAnimation()),a},renderAnimation:function(){if(this._animationInfo&&!this._animationInfo.isAnimating&&!t.isAnimationSuspended){this._animationInfo.isAnimating=!0;var i=this.getGroup();n.animateTransform({shape:i,duration:this.animate.duration||a.duration,easing:a.easingFunc,transform:[{name:"translate",start:[0,this._animationInfo.dim.height-this._animationInfo.offsets.b],end:[0,0]},{name:"scale",start:[1,0],end:[1,1]}],onEnd:function(){this._animationInfo.isAnimating=!1}.bind(this)})}}})}));