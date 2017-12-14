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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/Deferred","require"],function(e,r){var s={AVENIR_FONTS:["../../../themes/common/fonts/AvenirNext.css"],_loadPromise:null,_loadedFiles:null,loadCssFontFiles:function(){return this._loadedFiles?this._loadedFiles:(this._loadPromise||(this._loadPromise=this._loadFiles(this.AVENIR_FONTS)),this._loadPromise)},_loadFiles:function(s){var o=this,i=new e,t="dojo/text!";return r(s.map(function(e){return t+e}),function(){function e(e){for(var r=[];;){var s=e.indexOf("}");if(5e3>s){e&&r.push(e);break}r.push(e.substr(0,s+1).trim()),e=e.substr(s+1).trim()}return r}for(var r=[],s=0;s<arguments.length;s++){var t=arguments[s];e(t).forEach(function(e){r.push(e)})}o._loadedFiles=r,i.resolve(r)}),i.promise}};return s});