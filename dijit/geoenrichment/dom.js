// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.
define(["dojo/dom-construct","dijit/registry"],function(e,t){return{text:function(e,t){e.appendChild(document.createTextNode(t))},clear:function(e){if(e){var n=t.findWidgets(e);if(n)for(var r=0;r<n.length;r++)n[r].destroy();e.innerHTML=""}},pct:function(e){return(100*e).toFixed(2)+"%"},head:function(){return document.getElementsByTagName("head")[0]},createCols:function(t,n){for(var r=e.create("colgroup",null,t),o=0;o<n.length;o++){var c=e.create("col",null,r);n[o]&&(c.style.width=this.pct(n[o]))}}}});