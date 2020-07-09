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

define(["esri/dijit/geoenrichment/utils/animation/AnimationUtil","esri/dijit/geoenrichment/utils/DelayUtil"],(function(e,t){var i={};return i.animateTo=function(i){if(!i._isAnimatedTo){i._isAnimatedTo=!0;var n=e.animateResize({duration:300,domNode:i.domNode,startScaleX:.3,startScaleY:.3,fromOffset:{x:"c",y:"c"},toBox:{x:0,y:0,w:document.body.clientWidth,h:document.body.clientHeight}});return e.animateFadeIn({domNode:i.domNode,duration:300}),n.then((function(){return t.delay(100)}))}},i.animateFrom=function(i){if(i._isAnimatedTo){i._isAnimatedTo=!1;var n=e.animateResize({duration:300,domNode:i.domNode,endScaleX:.3,endScaleY:.3,toOffset:{x:"c",y:"c"},toBox:{x:(document.body.clientWidth-300)/2,y:(document.body.clientHeight-200)/2,w:300,h:200}});return e.animateFadeOut({domNode:i.domNode,duration:300}),n.then((function(){return t.delay(100)}))}},i}));