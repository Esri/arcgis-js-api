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

define(["dojo/_base/declare","dojo/when","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil"],function(e,i,t,s,r){return e(null,{_arrangeHeaderControls:function(){if(r.show(this.playerHeader),r.hide(this.infographicsSelectDiv),r[this.showAreaTitle?"show":"hide"](this.areaTitleInnerDiv),this.showAreaTitle){s.set(this.areaTitleInnerDiv,{position:"",right:""});var e=t.position(this.areaTitleInnerDiv),i=t.position(this.areasSelectDiv),o=t.position(this.zoomSelectDiv),n=this.isSlidesView?1e6:o.x-i.w-50,a=e.x+e.w+50;a>n&&s.set(this.areaTitleInnerDiv,{position:"relative",right:a-n+"px"}),s.set(this.areasSelectDiv,"left",Math.min(a,n)+"px")}else s.set(this.areasSelectDiv,"left","20px")},resize:function(){return i(this.inherited(arguments),function(){this._arrangeHeaderControls()}.bind(this))}})});