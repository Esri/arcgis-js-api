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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/dom-style"],function(e,t){return e(null,{trimTextIfOverflows:!1,_checkValueLabelOverflow:function(e){if(this.valueLabel&&void 0!==e&&(this.valueLabel.innerHTML=e,delete this.valueLabel.__untrimmedText),this.trimTextIfOverflows&&this.valueLabel&&this.valueLabel.innerHTML&&!this._IS_RICH_TEXT_RE.test(this.valueLabel.innerHTML)){var i=this.valueLabel.__untrimmedText||this.valueLabel.innerHTML;i!=this.valueLabel.innerHTML&&(this.valueLabel.innerHTML=i),this.valueLabel.__untrimmedText=i,i=i.trim();for(var l=this.domNode.clientHeight,a=t.toPixelValue(this.domNode,t.get(this.domNode,"fontSize"));;){if(this.valueLabel.clientHeight<1.5*a)return;if(this.valueLabel.clientHeight<=l)return;i=i.substr(0,i.lastIndexOf(" ")).trim(),this.valueLabel.innerHTML=i+"..."}}}})});