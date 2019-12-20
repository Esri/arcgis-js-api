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

define(["require","exports","./object","@dojo/framework/shim/string"],function(e,t,r,n){function i(e,t){return e.replace(c,"object"==typeof t?function(e,n){return r.getDeepValue(n,t)}:function(e,r){return t(r)})}function o(e){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,function(e){return"\\"+e})}function u(e){for(var t=0,r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return t}Object.defineProperty(t,"__esModule",{value:!0});var c=/\{([^\}]+)\}/g;t.endsWith=n.endsWith,t.startsWith=n.startsWith,t.replace=i,t.escapeRegExpString=o,t.numericHash=u});