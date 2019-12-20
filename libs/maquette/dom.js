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

define(["require","exports","./projection"],function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n={namespace:void 0,performanceLogger:function(){},eventHandlerInterceptor:void 0,styleApplyer:function(e,t,o){e.style[t]=o}};t.applyDefaultProjectionOptions=function(e){return o.extend(n,e)},t.dom={create:function(e,n){return n=t.applyDefaultProjectionOptions(n),o.createDom(e,document.createElement("div"),void 0,n),o.createProjection(e,n)},append:function(e,n,r){return r=t.applyDefaultProjectionOptions(r),o.createDom(n,e,void 0,r),o.createProjection(n,r)},insertBefore:function(e,n,r){return r=t.applyDefaultProjectionOptions(r),o.createDom(n,e.parentNode,e,r),o.createProjection(n,r)},merge:function(e,n,r){return r=t.applyDefaultProjectionOptions(r),n.domNode=e,o.initPropertiesAndChildren(e,n,r),o.createProjection(n,r)},replace:function(e,n,r){return r=t.applyDefaultProjectionOptions(r),o.createDom(n,e.parentNode,e,r),e.parentNode.removeChild(e),o.createProjection(n,r)}}});