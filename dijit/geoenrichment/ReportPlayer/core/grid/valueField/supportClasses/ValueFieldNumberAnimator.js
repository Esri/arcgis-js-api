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

define(["esri/dijit/geoenrichment/utils/animation/Animator","esri/dijit/geoenrichment/ReportPlayer/ReportPlayerState"],function(n,e){return{animateNumber:function(i,t,o){e.isAnimationSuspended||(i.set("value","0"),i.__numberAnimation&&i.__numberAnimation.stop(),i.__numberAnimation=n.animateProperty({duration:375,properties:{p:{start:0,end:t,easing:"quadOut"}},progressFunction:function(n,e,r){i.domNode&&i.set("value",o(t*r))},endFunction:function(){delete i.__numberAnimation}}))}}});