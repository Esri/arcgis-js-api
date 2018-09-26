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

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],function(e,n,i,t,a){return e(null,{_renderAnimation:function(e,o,s,r,l,c){function u(){d(),f._gaugeLabelElement&&(f._gaugeLabelElement.style.display=""),r.children.forEach(function(e){e.rawNode&&(e.rawNode.style.display="")}),f._isAnimating=!1}function d(){y.forEach(function(e){r.remove(e)}),y.length=0,A.forEach(function(e){n.destroy(e)}),A.length=0}var f=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={run:e,t:o,r:s,s:r,circle:l,slices:c},!t.isAnimationSuspended)){var h,m,p,g;if(this._animationInfos.forEach(function(e){e.isSlice&&0===e.sliceIndex?h=e:e.isSlice&&1===e.sliceIndex?m=e:e.isLabel?p=e:e.isArrow&&(g=e)}),h&&m){var _=this._getSliceValueAt(c,0,o)+this._getSliceValueAt(c,1,o),y=[],A=[];!function(){f._gaugeLabelElement&&(f._gaugeLabelElement.style.display="none"),r.children.forEach(function(e){e.rawNode&&(e.rawNode.style.display="none")})}(),this._isAnimating=!0,function(){i.animateProperty({duration:f.opt.animate.duration||a.duration,properties:{slice:{start:0,end:f._getSliceValueAt(c,0,o),easing:a.easingFunc}},progressFunction:function(n,i,t){d();var a=h.func(i);y.push(a.shape);var o=m.func(_-i,a.end+a.donutGap);y.push(o.shape),p&&A.push(p.func(i,e[0].tooltip.formatFunc(e[0].tooltip.value*t)).element),g&&y.push(g.func(i).shape)},endFunction:u})}()}}}})});