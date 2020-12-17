// COPYRIGHT © 2020 Esri
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

define(["dojo/dom-construct","dojo/dom-style","dojo/sniff","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,o,r,a){var t={setScaleToCover:function(t,s,c,d){function _(){s&&s.__scaleToCoverNode&&(e.destroy(s.__scaleToCoverNode),delete s.__scaleToCoverNode)}if(d=d||0,t){(!s.__scaleToCoverNode||s.__scaleToCoverNode.__imageData!==c)&&(_(),s.__scaleToCoverNode=e.create("div",{class:"esriGEAbsoluteStretched"}),o.set(s.__scaleToCoverNode,{backgroundImage:"url("+c+")",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}));var n=s.__scaleToCoverNode;if(n.__angle!==d){var i=r("webkit")?"webkitTransform":"transform";n.style[i]=0!==d?"rotate("+d+"deg)":""}n.__imageData=c,n.__angle=d,e.place(n,s,"after"),a.hide(s)}else _(),a.show(s);return s&&s.__scaleToCoverNode}};return t}));