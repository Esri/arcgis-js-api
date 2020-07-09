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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-construct","esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState","./_defaults"],(function(e,n,i,t,a){return e(null,{_renderAnimation:function(e,o,s,r,l){var c,u,d,h,f=this;if(this._animationInfos.length&&this.opt.animate&&(this._animationMemo={t:e,r:o,s:s,circle:r,slices:l},!t.isAnimationSuspended&&(this._animationInfos.forEach((function(e){e.isSlice&&0===e.sliceIndex?c=e:e.isSlice&&1===e.sliceIndex?u=e:e.isLabel?d=e:e.isArrow&&(h=e)})),c&&u))){var g=this._getSliceValueAt(l,0,e)+this._getSliceValueAt(l,1,e),m=[],p=[];f.gaugeLabelElement&&(f.gaugeLabelElement.style.display="none"),s.children.forEach((function(e){e.rawNode&&(e.rawNode.style.display="none")})),this._isAnimating=!0,i.animateProperty({duration:f.opt.animate.duration||a.duration,properties:{slice:{start:0,end:f._getSliceValueAt(l,0,e),easing:a.easingFunc}},progressFunction:function(e,n,i){_();var t=c.func(n);m.push(t.shape);var a=u.func(g-n,t.end+t.donutGap);m.push(a.shape),d&&p.push(d.func(n,{progress:i}).element),h&&m.push(h.func(n).shape)},endFunction:y})}function y(){_(),f.gaugeLabelElement&&(f.gaugeLabelElement.style.display=""),s.children.forEach((function(e){e.rawNode&&(e.rawNode.style.display="")})),f._isAnimating=!1}function _(){m.forEach((function(e){s.remove(e)})),m.length=0,p.forEach((function(e){n.destroy(e)})),p.length=0}}})}));