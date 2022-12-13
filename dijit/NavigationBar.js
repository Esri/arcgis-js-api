// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-class","dojo/dom-construct","./_TouchBase","../kernel"],(function(t,e,i,s,n,o,a,c,r,l,d,h){var _=t(null,{declaredClass:"esri.dijit.NavigationBar",_items:[],constructor:function(t,e){var s;this.container=c.byId(e),this._touchBase=d(this.container,null),this._slideDiv=l.create("div",{},this.container,"first"),this.events=[i.connect(this._touchBase,"onclick",this,this._onClickHandler)],this._items=t.items,r.add(this.container,"esriMobileNavigationBar");var n=l.create("div",{},this._slideDiv);for(s=0;s<this._items.length;s++){var o,a;switch(this._items[s].type){case"img":a=l.create("div",{class:"esriMobileNavigationItem"},n),o=l.create("img",{src:this._items[s].src.toString(),style:{width:"100%",height:"100%"}},a);break;case"span":a=l.create("div",{class:"esriMobileNavigationItem"},n),o=l.create("span",{innerHTML:this._items[s].text},a);break;case"div":a=l.create("div",{class:"esriMobileNavigationInfoPanel"},n),o=l.create("div",{innerHTML:this._items[s].text},a)}r.add(a,this._items[s].position),this._items[s].className&&r.add(o,this._items[s].className),o._index=s,o._item=this._items[s],this._items[s]._node=o}},startup:function(){this.onCreate(this._items)},destroy:function(){s.forEach(this.events,i.disconnect),this._touchBase=null,n.query("img",this.container).forEach((function(t){t._index=null,t._item=null,l.destroy(t),t=null})),this._items=null,l.destroy(this._slideDiv),l.destroy(this.container),this.container=this._slideDiv=null},getItems:function(){return this._items},select:function(t){this._markSelected(t._node,t)},onSelect:function(t){},onUnSelect:function(t){},onCreate:function(t){},_onClickHandler:function(t){if("img"===t.target.tagName.toLowerCase()){var e=t.target,i=(e._index,e._item);n.query("img",this.container).forEach((function(t){t!==e&&t._item.toggleGroup===i.toggleGroup&&this._markUnSelected(t,t._item)}),this),this._toggleNode(e,i)}},_toggleNode:function(t,e){"ON"===e.toggleState?(e.toggleState="OFF",e.src&&(t.src=e.src.toString()),this.onUnSelect(e)):(e.toggleState="ON",e.srcAlt&&(t.src=e.srcAlt),this.onSelect(e))},_markSelected:function(t,e){e.toggleState="ON",e.srcAlt&&(t.src=e.srcAlt),this.onSelect(e)},_markUnSelected:function(t,e){"ON"===e.toggleState&&(e.toggleState="OFF",e.src&&(t.src=e.src.toString()),this.onUnSelect(e))}});return o("extend-esri")&&e.setObject("dijit.NavigationBar",_,h),_}));