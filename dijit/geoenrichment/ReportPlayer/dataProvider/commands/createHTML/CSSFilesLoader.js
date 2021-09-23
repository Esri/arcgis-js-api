// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","require"],(function(e,i){return{AVENIR_FONTS:["../../../themes/fonts/AvenirNext.css"],_loadPromise:null,_loadedFiles:null,loadCssFontFiles:function(){return this._loadedFiles?this._loadedFiles:(this._loadPromise||(this._loadPromise=this._loadFiles(this.AVENIR_FONTS)),this._loadPromise)},_loadFiles:function(r){var s=this,t=new e;return i(r.map((function(e){return"dojo/text!"+e})),(function(){for(var e=[],i=0;i<arguments.length;i++){var r=arguments[i],o=function(e){for(var i=[];;){var r=e.indexOf("}");if(r<5e3){e&&i.push(e);break}i.push(e.substr(0,r+1).trim()),e=e.substr(r+1).trim()}return i};o(r).forEach((function(i){e.push(i)}))}s._loadedFiles=e,t.resolve(e)})),t.promise}}}));