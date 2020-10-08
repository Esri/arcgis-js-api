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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./object"],(function(t,e,n){"use strict";return function(){function t(e,i,r){var s;(this.name=e,this.details=r,this.message=void 0,this instanceof t)&&(this.message=i&&(s=r,i.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(t,e){if(""===e)return"$";var i=n.getDeepValue(e,s),r=null==i?"":i;if(void 0===r)throw new Error('could not find key "'+e+'" in template');return r.toString()})))||"")}return t.prototype.toString=function(){return"["+this.name+"]: "+this.message},t}()}));