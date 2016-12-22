// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/dom-construct","../../core/Accessor","../../core/HandleRegistry","../../core/requestAnimationFrame","../../views/2d/input/handlers/DragZoom"],function(t,e,i,n,r,a){var o={container:"esri-zoom-box__container",overlay:"esri-zoom-box__overlay",background:"esri-zoom-box__overlay-background",box:"esri-zoom-box__outline"},s={zoom:"Shift",counter:"Ctrl"};return i.createSubclass({declaredClass:"esri.views.ui.ZoomBox",constructor:function(){this._event={x:0,y:0,width:0,height:0},this._handles=new n,this._redraw=this._redraw.bind(this)},initialize:function(){this.inputManager.installHandlers("zoombox",[new a(this.view,"primary",[s.zoom]),new a(this.view,"primary",[s.zoom,s.counter])])},destroy:function(){this.view=null},_container:null,_overlay:null,_backgroundShape:null,_boxShape:null,_handles:null,_event:null,properties:{view:{set:function(t){var e=this._get("view");this._handles.removeAll(),this._destroyOverlay(e),this._set("view",t)}},inputManager:null,css:o,interacting:{readOnly:!0,value:!1}},start:function(t){this._createContainer(),this._createOverlay(),this._set("interacting",!0)},update:function(e){t.mixin(this._event,e),this._rafId||(this._rafId=r(this._redraw))},end:function(t){var e=this.view,i=e.toMap(t.x+.5*t.width,t.y+.5*t.height),n=Math.min(t.width/e.width,t.height/e.height);-1===t.direction&&(n=1/n),this._destroyOverlay(),this._set("interacting",!1),e.goTo({center:i,scale:e.scale*n})},_updateBox:function(t,e,i,n){var r=this._boxShape;r.setAttributeNS(null,"x",t),r.setAttributeNS(null,"y",e),r.setAttributeNS(null,"width",i),r.setAttributeNS(null,"height",n),r.setAttributeNS(null,"class",o.box)},_updateBackground:function(t,e,i,n){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,n,this.view.width,this.view.height))},_createContainer:function(){var t=e.create("div",{className:o.container});this.view.root.appendChild(t),this._container=t},_createOverlay:function(){var t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",o.background);var n=document.createElementNS("http://www.w3.org/2000/svg","rect"),r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.setAttributeNS(null,"class",o.overlay),r.appendChild(i),r.appendChild(n),this._container.appendChild(r),this._backgroundShape=i,this._boxShape=n,this._overlay=r},_destroyOverlay:function(t){t=t||this.view,this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null},_toSVGPath:function(t,e,i,n,r,a){var o=e,s=t,h=t+i,l=e+n;return"M 0 0 L "+r+" 0 L "+r+" "+a+" L 0 "+a+" ZM "+s+" "+o+" L "+s+" "+l+" L "+h+" "+l+" L "+h+" "+o+" Z"},_redraw:function(){if(this._rafId=null,this._overlay){var t=this._event;this._updateBox(t.x,t.y,t.width,t.height),this._updateBackground(t.x,t.y,t.width,t.height),this._rafId=r(this._redraw)}}})});