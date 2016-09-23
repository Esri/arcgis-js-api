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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["./DisplayObject","./bitFlagUtil"],function(i,t){var e=i.createSubclass({declaredClass:"esri.views.2D.engine.Container","-chains-":{childAdded:"after",childRemoved:"after"},constructor:function(){this.children=[],this.trash={children:[],ids:{}}},tag:"inherit",_stageSetter:function(i){var t,e,n,h=this._get("stage"),s=this.children;if(this.inherited(arguments),h!==i){if(s)for(e=0,n=s.length;n>e;e++)t=s[e],t.stage=i;return this._set("stage",i)}},_numChildrenGetter:function(){return this.children.length},addChild:function(i){return this.addChildAt(i,this.children.length)},addChildAt:function(i,t){var e;return this.contains(i)?i:(e=i.parent,e&&e.removeChild(i),t=Math.min(this.children.length,t),this.children.splice(t,0,i),this.trash.ids[i.id]&&(this.trash.ids[i.id]=null,this.trash.children.splice(this.trash.children.indexOf(i),1)),this.childAdded(i,t),this.notifyChange("numChildren"),i)},childAdded:function(i,t){i.set({parent:this,stage:this.stage}),this.requestRender()},removeAllChildren:function(){for(var i=this.numChildren;i--;)this.removeChildAt(0)},removeChild:function(i){var t=this.children.indexOf(i);return t>-1?this.removeChildAt(t):i},removeChildAt:function(i){var t;return 0>i||i>=this.children.length?null:(t=this.children.splice(i,1)[0],this.trash.ids[t.id]=t,this.trash.children.push(t),this.childRemoved(t),this.notifyChange("numChildren"),t)},childRemoved:function(i){i.parent=null,i.stage=null,this.requestRender()},contains:function(i){return this.getChildIndex(i)>-1},getChildIndex:function(i){return this.children.indexOf(i)},getChildAt:function(i){return 0>i||i>this.children.length?null:this.children[i]},setChildIndex:function(i,t){var e=this.getChildIndex(i);e>-1&&(this.children.splice(e,1),this.children.splice(t,0,i),this.requestRender())},requestChildRender:function(i){i&&i.parent===this&&this.requestRender()},reflow:function(i){var t,e=this.children,n=e.length;for(i.emptyTrash(this),i.pushParent(this),t=0;n>t;t++)i.reflowChild(e[t],t);i.popParent()},render:function(e){var n=this._flags;this._renderFlag=!1,this._flags=0,n&&(t.isSet(n,i.SIZE)&&e.setSize(this.width,this.height),t.isSet(n,i.VISIBLE)&&e.setVisibility(this.visible),t.isSet(n,i.BLENDMODE)&&e.setBlendMode(this.blendMode),t.isSet(n,i.OPACITY)&&e.setOpacity(this.opacity));var h,s=this.children,r=s&&s.length||0;for(e.pushParent(this),h=0;r>h;h++)e.pushMatrix(),e.renderChild(s[h]),e.popMatrix();e.popParent()}});return e});