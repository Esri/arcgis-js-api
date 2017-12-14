// COPYRIGHT © 2017 Esri
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

define(["dojo/dom-construct","dojo/dom-style","dojo/sniff","dojox/gfx","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DomUtil"],function(e,o,r,a,t,d){var s={};return s.setScaleToCover=function(a,t,s,c){function _(){t&&t.__scaleToCoverNode&&(e.destroy(t.__scaleToCoverNode),delete t.__scaleToCoverNode)}if(c=c||0,a){var i=!t.__scaleToCoverNode||t.__scaleToCoverNode.__imageData!==s;i&&(_(),t.__scaleToCoverNode=e.create("div",{"class":"esriGEAbsoluteStretched"}),o.set(t.__scaleToCoverNode,{backgroundImage:"url("+s+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}));var n=t.__scaleToCoverNode;if(n.__angle!==c){var l=r("webkit")?"webkitTransform":"transform";n.style[l]="rotate("+c+"deg)"}n.__imageData=s,n.__angle=c,e.place(n,t,"after"),d.hide(t)}else _(),d.show(t);return t&&t.__scaleToCoverNode},s});