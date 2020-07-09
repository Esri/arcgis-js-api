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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/watchUtils","../../../core/accessorSupport/decorators","../../Widget","../support/LayerTreeNode","../../support/widget"],(function(e,t,i,o,s,l,r,n){var d={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"},a="esri-building-disciplines-tree-node",c={base:""+a,root:a+"--root",leaf:a+"--leaf",label:a+"__label",checkbox:a+"__checkbox",checkboxChecked:a+"__checkbox--checked esri-icon-check-mark",checkboxIndeterminate:a+"__checkbox--indeterminate esri-icon-minus",collapseToggle:a+"__collapse-toggle esri-icon-right",collapseToggleCollapsed:a+"__collapse-toggle--collapsed",children:a+"__children",level:function(e){return a+"--level-"+e}};return function(e){function t(t){var i=e.call(this,t)||this;return i.messages=d,i._childWidgets=[],i._updateChildWidgets=function(){i._destroyChildWidgets(),i._childWidgets=i.node.children.toArray().reverse().map((function(e){return new l({node:e,messages:i.messages})}))},i}var l;return i.__extends(t,e),l=t,t.prototype.initialize=function(){this.own(o.on(this,"node.children","after-changes",this._updateChildWidgets,this._updateChildWidgets,this._updateChildWidgets),this.watch("messages",this._updateChildWidgets))},t.prototype.destroy=function(){this._destroyChildWidgets()},t.prototype.render=function(){var e,t=this.node,i=t.isRoot,o=t.isLeaf;return t.isDiscipline&&o?[]:n.tsx("div",{key:t.id,class:this.classes(c.base,c.level(t.level),(e={},e[c.root]=i,e[c.leaf]=o,e)),bind:this,onkeydown:this._onKeydown,tabIndex:o?null:0,role:"treeitem","aria-expanded":t.collapsed?"false":"true"},n.tsx("label",{bind:this,class:c.label,onclick:this._onCheckboxToggle},this._renderCollapseToggle(),this._renderCheckbox(),n.tsx("span",null,t.title)),this._renderChildren(t))},t.prototype._renderCheckbox=function(){var e,t,i,o=this.node.visible,s=!0===o,l=null===o,r=s?null===(t=this.messages)||void 0===t?void 0:t.hideSublayer:null===(i=this.messages)||void 0===i?void 0:i.showSublayer;return n.tsx("button",{bind:this,class:this.classes(c.checkbox,(e={},e[c.checkboxChecked]=s,e[c.checkboxIndeterminate]=l,e)),onclick:this._onCheckboxToggle,role:"checkbox","aria-checked":s?"true":"false","aria-label":r,title:r})},t.prototype._renderCollapseToggle=function(){var e,t,i;if(!this.node.hasChildren)return[];var o=this.node.collapsed,s=o?null===(t=this.messages)||void 0===t?void 0:t.expand:null===(i=this.messages)||void 0===i?void 0:i.collapse;return n.tsx("div",{bind:this,class:this.classes(c.collapseToggle,(e={},e[c.collapseToggleCollapsed]=o,e)),onclick:this._onCollapseToggle,"aria-label":s,title:s})},t.prototype._renderChildren=function(e){return!e.hasChildren||e.collapsed?[]:n.tsx("div",{class:c.children},this._childWidgets.map((function(e){return e.render()})))},t.prototype._onKeydown=function(e){switch(e.key){case"Space":case"Enter":if(!e.target.classList.contains(c.base))return;e.stopPropagation(),this.node.toggleVisibility();break;case"ArrowLeft":e.stopPropagation(),this.node.toggleCollapsed(!n.isRTL());break;case"ArrowRight":e.stopPropagation(),this.node.toggleCollapsed(!!n.isRTL())}},t.prototype._onCheckboxToggle=function(e){e.preventDefault(),e.stopPropagation(),this.node.toggleVisibility()},t.prototype._onCollapseToggle=function(e){e.preventDefault(),e.stopPropagation(),this.node.toggleCollapsed()},t.prototype._destroyChildWidgets=function(){this._childWidgets.forEach((function(e){return e.destroy()})),this._childWidgets=[]},i.__decorate([s.property({type:r.LayerTreeNode}),n.renderable(["node.hasChildren","node.isDiscipline","node.level","node.title","node.visible"])],t.prototype,"node",void 0),i.__decorate([s.property(),n.renderable()],t.prototype,"messages",void 0),i.__decorate([s.property(),n.renderable()],t.prototype,"_childWidgets",void 0),t=l=i.__decorate([s.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesNode")],t)}(l)}));