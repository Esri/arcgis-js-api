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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel"],function(e,t,r,n){var i={};return i={findFeatures:function(e,r,n){var i=r.objectIdField,o=r.graphics,a=t.filter(o,function(r){return t.some(e,function(e){return r.attributes[i]===e.objectId})});return n?void n(a):a},getSelection:function(e){var r=[];return t.forEach(e,function(e){var n=e.getSelectedFeatures();t.forEach(n,function(e){r.push(e)})}),r}},r("extend-esri")&&e.setObject("dijit.editing.Util.LayerHelper",i,n),i});