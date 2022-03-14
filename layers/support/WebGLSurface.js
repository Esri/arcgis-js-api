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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel"],(function(e,r,n,t,s){var o=e(null,{map:null,node:null,renderers:null,constructor:function(e){r.mixin(this,e),this.renderers=[]},destroy:function(){n.forEach(this.renderers,(function(e){e.destroy()})),this.renderers=null},getEventSource:function(){return this.node},createRenderer:function(e,r,n,t){var s=new e({surface:this,width:r,height:n,map:this.map,layer:t});return this.renderers.push(s),s},destroyRenderer:function(e){var r=n.indexOf(this.renderers,e);r>-1&&(e.destroy(),this.renderers.splice(r,1))},_createNode:function(){var e=document.createElement("div");return e.style.pointerEvents="auto",e.style.position="absolute",e}});return t("extend-esri")&&r.setObject("layers.support.WebGLSurface",o,s),o}));