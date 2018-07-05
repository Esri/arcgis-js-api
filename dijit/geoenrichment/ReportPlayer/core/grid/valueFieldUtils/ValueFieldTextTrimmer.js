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

define(["dojo/dom-style"],function(e){var l={_IS_RICH_TEXT_RE:/<\w/,checkValueLabelOverflow:function(a,t){var n=a;if(n.valueLabel&&void 0!==t&&l._applyNewText(n.valueLabel,t),n.valueLabel.__hasTrimmedText=!1,n.trimTextIfOverflows&&n.valueLabel&&n.valueLabel.innerHTML&&!l._IS_RICH_TEXT_RE.test(n.valueLabel.innerHTML)){var i=n.valueLabel.__untrimmedText||n.valueLabel.innerHTML;i!==n.valueLabel.innerHTML&&(n.valueLabel.innerHTML=i),n.valueLabel.__untrimmedText=i,i=i.trim();for(var u=n.domNode.clientHeight,r=e.toPixelValue(n.domNode,e.get(n.domNode,"fontSize"));;){if(n.valueLabel.clientHeight<1.5*r||-1===n.valueLabel.innerHTML.lastIndexOf(" "))return;if(n.valueLabel.clientHeight<=u)return;i=i.substr(0,i.lastIndexOf(" ")).trim(),n.valueLabel.innerHTML=i+"...",n.valueLabel.__hasTrimmedText=!0}}},_applyNewText:function(e,l){e.innerHTML!==l&&(e.innerHTML=l),delete e.__untrimmedText},getFullText:function(e){return e.valueLabel&&(e.valueLabel.__untrimmedText||e.valueLabel.innerHTML)},hasOverflowText:function(e){return e.valueLabel&&e.valueLabel.__hasTrimmedText||e.valueLabel.clientHeight>e.domNode.clientHeight}};return l});