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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/on","dojo/has","../kernel"],(function(e,r,t,o,i,n){function s(e){"object"!=typeof e&&(e=new Error(e)),e.grid=this,o.emit(this.domNode,"dgrid-error",{grid:this,error:e,cancelable:!0,bubbles:!0})&&console.error(e)}var c=e(null,{_trackError:function(e){var i;"string"==typeof e&&(e=r.hitch(this,e));try{i=e()}catch(e){s.call(this,e)}return t.when(i,r.hitch(this,(function(){o.emit(this.domNode,"refresh",{cancelable:!0,bubbles:!0})})),r.hitch(this,s))}});return i("extend-esri")&&r.setObject("dijit._RefreshMixin",c,n),c}));