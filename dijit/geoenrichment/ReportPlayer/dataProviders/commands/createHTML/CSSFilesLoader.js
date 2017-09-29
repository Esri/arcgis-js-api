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

define(["dojo/Deferred","require"],function(r,e){var n={AVENIR_FONTS:["../../../themes/common/fonts/AvenirNext.css"],loadCssFontFiles:function(){return this._loadFiles(this.AVENIR_FONTS)},_loadFiles:function(n){var t=new r,o="dojo/text!";return e(n.map(function(r){return o+r}),function(){function r(r){for(var e=[];;){var n=r.indexOf("}");if(5e3>n){r&&e.push(r);break}e.push(r.substr(0,n+1).trim()),r=r.substr(n+1).trim()}return e}for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];r(o).forEach(function(r){e.push(r)})}t.resolve(e)}),t.promise}};return n});