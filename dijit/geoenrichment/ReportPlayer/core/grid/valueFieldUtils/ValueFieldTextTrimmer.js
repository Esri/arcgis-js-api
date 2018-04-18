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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-style"],function(e){var l={_IS_RICH_TEXT_RE:/<\w/,checkValueLabelOverflow:function(a,n){var t=a;if(t.valueLabel&&void 0!==n&&(t.valueLabel.innerHTML!==n&&(t.valueLabel.innerHTML=n),delete t.valueLabel.__untrimmedText),t.trimTextIfOverflows&&t.valueLabel&&t.valueLabel.innerHTML&&!l._IS_RICH_TEXT_RE.test(t.valueLabel.innerHTML)){var i=t.valueLabel.__untrimmedText||t.valueLabel.innerHTML;i!==t.valueLabel.innerHTML&&(t.valueLabel.innerHTML=i),t.valueLabel.__untrimmedText=i,i=i.trim();for(var r=t.domNode.clientHeight,u=e.toPixelValue(t.domNode,e.get(t.domNode,"fontSize"));;){if(t.valueLabel.clientHeight<1.5*u||-1===t.valueLabel.innerHTML.lastIndexOf(" "))return;if(t.valueLabel.clientHeight<=r)return;i=i.substr(0,i.lastIndexOf(" ")).trim(),t.valueLabel.innerHTML=i+"..."}}}};return l});