// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./object"],function(t,e,n){function r(t,e){return t.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,function(t,r){if(""===r)return"$";var i=n.getDeepValue(r,e),o=null==i?"":i;if(void 0===o)throw new Error('could not find key "'+r+'" in template');return o.toString()})}return function(){function t(e,n,i){this instanceof t&&(this.name=e,this.message=n&&r(n,i)||"",this.details=i)}return t.prototype.toString=function(){return"["+this.name+"]: "+this.message},t}()});