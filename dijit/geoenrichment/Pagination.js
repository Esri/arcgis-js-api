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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["../../declare","dojo/_base/lang","dojox/mvc/Templated","dojo/aspect","dojo/dom-class","dojo/dom-geometry","dojo/dom-construct","dojo/on","dgrid/List","dijit/_WidgetBase","./AnimationHelper","dojo/text!./templates/Pagination.html","dijit/layout/ContentPane"],function(t,e,i,n,s,o,r,a,l,h,d,c){var u=t("esri.dijit.geoenrichment.Pagination",[h,i],{templateString:c,items:null,paneNode:null,_pageCount:0,_pageSize:0,currentPage:0,minRows:1,minColumns:1,scrollAnim:null,constructor:function(){this.inherited(arguments),this.scrollAnim=new d},buildRendering:function(){this.inherited(arguments)},resize:function(){function t(){return l.clientWidth>u.w*d.minColumns}function i(){return l.clientHeight>u.h*d.minRows}function n(){return l.scrollHeight-2>l.clientHeight&&i()||l.scrollWidth-2>l.clientWidth&&t()}this.scrollAnim.finish();var s=this.items||[],l=this.itemsNode.parentNode,h=this.itemsNode.firstChild;h||(h=r.create("div",null,this.itemsNode));for(var d=this,c=h.childNodes,u=c.length>=1?o.getMarginBox(h.firstChild):{h:0,w:0,fake:!0};!n()&&c.length<s.length;){var g=this.createItemContainer();a(g,"click",e.hitch(this,this.onItemClick,g)),h.appendChild(g),u.fake&&(u=o.getMarginBox(h.firstChild))}for(;n()&&c.length>1||c.length>s.length;)r.destroy(h.lastChild);var m=this._pageSize=c.length,f=this._pageCount=0===m?0:Math.ceil(s.length/m);this.currentPage=this._coerceCurrentPage(this.currentPage);for(var C=0,p=m*this.currentPage;m>C&&p<s.length;)this.updateItemContainer(c[C],s[p]),C++,p++;for(;m>C;)r.destroy(h.lastChild),C++;var _=this.bulletsNode;if(_.innerHTML="",f>1)for(var P=0;f>P;P++){var v=r.create("span",{"class":"Pagination_Bullet",innerHTML:"&bull;"},_);a(v,"click",e.hitch(this,this.set,"currentPage",P))}this._updateNavigationControls()},createItemContainer:function(){},updateItemContainer:function(){},onItemClick:function(t){this.onSelect(t)},_coerceCurrentPage:function(t){return 0>t?t=0:t>=this._pageCount&&(t=this._pageCount-1),t},_updateNavigationControls:function(){var t=this.currentPage;this.backNode&&(this.backNode.style.display=t>0?"":"none"),this.forwardNode&&(this.forwardNode.style.display=t<this._pageCount-1?"":"none");for(var e=this.bulletsNode.childNodes,i=0;i<e.length;i++)i==t?s.add(e[i],"Pagination_BulletCurrent"):s.remove(e[i],"Pagination_BulletCurrent")},_setCurrentPageAttr:function(t){if(t=this._coerceCurrentPage(t),this.currentPage!==t){this.scrollAnim.finish();for(var i=this.items||[],n=this.itemsNode,s=0,o=this._pageSize*t,l=this.itemsNode.firstChild,h=r.create("div");s<this._pageSize&&o<i.length;){var d=this.createItemContainer();a(d,"click",e.hitch(this,this.onItemClick,d)),this.updateItemContainer(d,i[o]),h.appendChild(d),s++,o++}t===this.currentPage+1?(n.appendChild(h),this._slideAnim(n,l,["Pagination_SlideAnim","Anim_SlideLeft"])):t===this.currentPage-1?(n.insertBefore(h,n.firstChild),this._slideAnim(n,l,["Pagination_SlideAnim","Anim_SlideRight"])):(n.appendChild(h),this.scrollAnim.start([{node:l,classes:["Pagination_FadeAnim","Anim_FadeOut"]},{node:h,classes:["Pagination_FadeAnim","Anim_FadeIn"]}],l)),this.currentPage=t,this._updateNavigationControls()}},_slideAnim:function(t,e,i){t.parentNode.style.overflow="hidden",this.scrollAnim.start([{node:t,classes:i}],e).then(function(){t.parentNode.style.overflow=""})},_back:function(){this.set("currentPage",this.currentPage-1)},_forward:function(){this.set("currentPage",this.currentPage+1)},_onSelect:function(t){this.set("selectedItems",[t]),this.onSelect()},onSelect:function(){}});return u});