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

define(["dojo/Deferred","require"],function(e,o){return{AVENIR_FONTS:["../../../themes/common/fonts/AvenirNext.css"],_loadPromise:null,_loadedFiles:null,loadCssFontFiles:function(){return this._loadedFiles?this._loadedFiles:(this._loadPromise||(this._loadPromise=this._loadFiles(this.AVENIR_FONTS)),this._loadPromise)},_loadFiles:function(i){var r=this,s=new e;return o(i.map(function(e){return"dojo/text!"+e}),function(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];(function(e){for(var o=[];;){var i=e.indexOf("}");if(i<5e3){e&&o.push(e);break}o.push(e.substr(0,i+1).trim()),e=e.substr(i+1).trim()}return o})(i).forEach(function(o){e.push(o)})}r._loadedFiles=e,s.resolve(e)}),s.promise}}});