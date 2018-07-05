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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/sniff","dojo/dom-construct"],function(e,n){var r,t={};return t.getOuterHTML=function(t){if(t.outerHTML)return t.outerHTML;if(!t.parentNode)return"";var o=t.parentNode;r=r||n.create("div",null,document.body);var d=t.nextSibling;t.parentNode.removeChild(t),r.appendChild(t);var i=t.parentNode.innerHTML;if(e("ie")||e("trident")){var a=i.match(/<svg.*?>/)[0],l=a.length,u=a.match(/xmlns=".*?"/g);u&&2===u.length&&(a=a.replace(/xmlns=".*?"/,""),i=a+i.substr(l))}return i=i.replace('"none meet"','"none"'),r.removeChild(t),d?d.parentNode.insertBefore(t,d):o.appendChild(t),i},t});