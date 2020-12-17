// COPYRIGHT © 2020 Esri
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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/html","dojo/has","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","../kernel","../domUtils","../InfoWindowBase"],(function(t,i,s,o,e,h,n,d,r,c,a,_,l,u,f){var p=t([f],{declaredClass:"esri.dijit.InfoWindowLite",constructor:function(t,s){i.mixin(this,t);var o=this.domNode=n.byId(s);o.id=this.id||_.getUniqueId(this.declaredClass),d.add(o,"simpleInfoWindow"),this._title=r.create("div",{class:"title"},o),this._content=r.create("div",{class:"content"},o),this._close=r.create("div",{class:"close"},o)},domNode:null,anchor:"upperright",fixedAnchor:null,coords:null,isShowing:!0,width:250,height:150,title:"Info Window",_bufferWidth:10,_bufferHeight:10,startup:function(){this._anchors=[p.ANCHOR_UPPERRIGHT,p.ANCHOR_LOWERRIGHT,p.ANCHOR_LOWERLEFT,p.ANCHOR_UPPERLEFT],this.resize(this.width,this.height),this.hide(),this._closeConnect=s.connect(this._close,"onclick",this,this.hide)},destroy:function(){this.isShowing&&this.hide(),this.destroyDijits(this._title),this.destroyDijits(this._content),s.disconnect(this._closeConnect),r.destroy(this.domNode),this.domNode=this._title=this._content=this._anchors=this._closeConnect=null},setTitle:function(t){return t?d.remove(this._title,"empty"):d.add(this._title,"empty"),this.destroyDijits(this._title),this.__setValue("_title",t),this},setContent:function(t){return t?d.remove(this._title,"empty"):d.add(this._title,"empty"),this.destroyDijits(this._content),this.__setValue("_content",t),this},setFixedAnchor:function(t){t&&-1===o.indexOf(this._anchors,t)||(this.fixedAnchor=t,this.isShowing&&this.show(this.mapCoords||this.coords,t),this.onAnchorChange(t))},show:function(t,i){t&&(t.spatialReference?(this.mapCoords=t,t=this.coords=this.map.toScreen(t,!0)):(this.mapCoords=null,this.coords=t),i&&-1!==o.indexOf(this._anchors,i)||(i=this._getAnchor(t)),i=this.anchor=this.fixedAnchor||i,u.show(this.domNode),this._adjustContentArea(),this._adjustPosition(t,i),this.isShowing=!0,arguments[2]||this.onShow())},hide:function(){u.hide(this.domNode),this.isShowing=!1,arguments[1]||this.onHide()},move:function(t,i){i?t=this.coords.offset(t.x,t.y):(this.coords=t,this.mapCoords&&(this.mapCoords=this.map.toMap(t))),this._adjustPosition(t,this.anchor)},resize:function(t,i){this.width=t,this.height=i,a.set(this.domNode,{width:t+"px",height:i+"px"}),a.set(this._close,{left:t-2+"px",top:"-12px"}),this._adjustContentArea(),this.coords&&this._adjustPosition(this.coords,this.anchor),this.onResize(t,i)},onShow:function(){this.__registerMapListeners(),this.startupDijits(this._title),this.startupDijits(this._content)},onHide:function(){this.__unregisterMapListeners()},onResize:function(){},onAnchorChange:function(){},setMap:function(t){this.inherited(arguments),r.place(this.domNode,t.root)},_adjustContentArea:function(){var t=c.getContentBox(this.domNode),i=e.coords(this._title),s=e.coords(this._content),o=c.getContentBox(this._content),h=s.h-o.h;a.set(this._content,{height:t.h-i.h-h+"px"})},_getAnchor:function(t){var i=this.map;return i&&t?(t.y<i.height/2?"lower":"upper")+(t.x<i.width/2?"right":"left"):"upperright"},_adjustPosition:function(t,i){var s=Math.round(t.x),o=Math.round(t.y),h=this._bufferWidth,n=this._bufferHeight,d=e.coords(this.domNode);switch(i){case p.ANCHOR_UPPERLEFT:s-=d.w+h,o-=d.h+n;break;case p.ANCHOR_UPPERRIGHT:s+=h,o-=d.h+n;break;case p.ANCHOR_LOWERRIGHT:s+=h,o+=n;break;case p.ANCHOR_LOWERLEFT:s-=d.w+h,o+=n}a.set(this.domNode,{left:s+"px",top:o+"px"})}});return i.mixin(p,{ANCHOR_UPPERRIGHT:"upperright",ANCHOR_LOWERRIGHT:"lowerright",ANCHOR_LOWERLEFT:"lowerleft",ANCHOR_UPPERLEFT:"upperleft"}),h("extend-esri")&&i.setObject("dijit.InfoWindowLite",p,l),p}));