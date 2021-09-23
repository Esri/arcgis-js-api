/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/domUtils","../../core/Evented","../../core/Handles","../../core/watchUtils","../../core/accessorSupport/decorators/property","../../core/has","../../core/accessorSupport/decorators/cast","../../core/Logger","../../core/accessorSupport/decorators/subclass","./Component","../../widgets/support/widgetUtils"],(function(t,n,i,e,o,r,s,a,d,c,p,l,u){"use strict";const h={left:0,top:0,bottom:0,right:0},f={bottom:30,top:15,right:15,left:15},m="manual",_={ui:"esri-ui",corner:"esri-ui-corner",innerContainer:"esri-ui-inner-container",manualContainer:"esri-ui-manual-container",cornerContainer:"esri-ui-corner-container",topLeft:"esri-ui-top-left",topRight:"esri-ui-top-right",bottomLeft:"esri-ui-bottom-left",bottomRight:"esri-ui-bottom-right"};function g(t){return t&&!t._started&&"function"==typeof t.postMixInProperties&&"function"==typeof t.buildRendering&&"function"==typeof t.postCreate&&"function"==typeof t.startup}function y(t){return"object"==typeof t&&!(t instanceof l)&&!("declaredClass"in t)&&("component"in t||"index"in t||"position"in t)?t:null}function C(t,{top:n,bottom:i,left:e,right:o}){t.style.top=n,t.style.bottom=i,t.style.left=e,t.style.right=o}let v=function(n){function e(t){var i;return(i=n.call(this,t)||this)._cornerNameToContainerLookup={},i._positionNameToContainerLookup={},i._components=new Array,i._componentToKey=new Map,i._handles=new o,i.view=null,i._initContainers(),i}t._inheritsLoose(e,n);var s=e.prototype;return s.initialize=function(){this._handles.add([r.init(this,"view.padding, container",this._applyViewPadding.bind(this)),r.init(this,"padding",this._applyUIPadding.bind(this))])},s.destroy=function(){this.container=null;for(const t of this._components)t.destroy();this._components.length=0,this._handles.destroy(),this._componentToKey.clear()},s.castPadding=function(t){return"number"==typeof t?{bottom:t,top:t,right:t,left:t}:{...f,...t}},s.add=function(t,n){let i,e;if(Array.isArray(t))return void t.forEach((t=>this.add(t,n)));const o=y(t);o&&({index:i,position:n,component:t,key:e}=o),n&&"object"==typeof n&&({index:i,key:e,position:n}=n),!t||n&&!this._isValidPosition(n)||this._add(t,n,i,e)},s.remove=function(t,n){if(!t)return;if(Array.isArray(t))return t.map((t=>this.remove(t,n)));const i=this._find(t);if(i){const e=this._componentToKey;if(e.has(t)&&e.get(t)!==n)return;const o=this._components.indexOf(i);return i.node.parentNode&&i.node.parentNode.removeChild(i.node),this._componentToKey.delete(t),this._components.splice(o,1)[0]}},s.empty=function(t){if(Array.isArray(t))return t.map((t=>this.empty(t))).reduce(((t,n)=>t.concat(n)));if((t=t||m)===m){return Array.prototype.slice.call(this._manualContainer.children).filter((t=>!t.classList.contains(_.corner))).map((t=>this.remove(t)))}return this._isValidPosition(t)?Array.prototype.slice.call(this._cornerNameToContainerLookup[t].children).map(this.remove,this):null},s.move=function(t,n){if(Array.isArray(t)&&t.forEach((t=>this.move(t,n))),!t)return;let i;const e=y(t)||y(n);if(e&&(i=e.index,n=e.position,t=e.component||t),n&&!this._isValidPosition(n))return;const o=this.remove(t);o&&this.add(o,{position:n,index:i})},s.find=function(t){if(!t)return null;const n=this._findById(t);return n&&(n.widget||n.node)},s.getPosition=function(t){for(const n in this._positionNameToContainerLookup){if(this._positionNameToContainerLookup[n].contains(t))return n}return null},s._add=function(t,n,i,e){t instanceof l||(t=new l({node:t})),this._place({component:t,position:n,index:i}),this._components.push(t),e&&this._componentToKey.set(t,e)},s._find=function(t){return t?t instanceof l?this._findByComponent(t):"string"==typeof t?this._findById(t):this._findByNode(t.domNode||t):null},s._getViewPadding=function(){return this.get("view.padding")||h},s._attachContainers=function(t){t.appendChild(this._innerContainer),t.appendChild(this._manualContainer)},s._initContainers=function(){const t=document.createElement("div");t.classList.add(_.innerContainer),t.classList.add(_.cornerContainer);const n=document.createElement("div");n.classList.add(_.innerContainer),n.classList.add(_.manualContainer);const i=document.createElement("div");i.classList.add(_.topLeft),i.classList.add(_.corner),t.appendChild(i);const e=document.createElement("div");e.classList.add(_.topRight),e.classList.add(_.corner),t.appendChild(e);const o=document.createElement("div");o.classList.add(_.bottomLeft),o.classList.add(_.corner),t.appendChild(o);const r=document.createElement("div");r.classList.add(_.bottomRight),r.classList.add(_.corner),t.appendChild(r),this._innerContainer=t,this._manualContainer=n;const s=u.isRTL();this._cornerNameToContainerLookup={"top-left":i,"top-right":e,"bottom-left":o,"bottom-right":r,"top-leading":s?e:i,"top-trailing":s?i:e,"bottom-leading":s?r:o,"bottom-trailing":s?o:r},this._positionNameToContainerLookup={manual:n,...this._cornerNameToContainerLookup}},s._isValidPosition=function(t){return!!this._positionNameToContainerLookup[t]},s._place=function(t){const n=t.component,e=t.position||m,o=t.index,r=this._positionNameToContainerLookup[e],s=o>-1;if(g(n.widget)&&n.widget.startup(),!s)return void r.appendChild(n.node);const a=Array.prototype.slice.call(r.children);if(0===o)return void(r.firstChild?i.insertBefore(n.node,r.firstChild):r.appendChild(n.node));o>=a.length?r.appendChild(n.node):i.insertBefore(n.node,a[o])},s._applyViewPadding=function(){const t=this.container;t&&C(t,this._toPxPosition(this._getViewPadding()))},s._applyUIPadding=function(){const t=this._innerContainer;t&&C(t,this._toPxPosition(this.padding))},s._toPxPosition=function(t){return{top:this._toPxUnit(t.top),left:this._toPxUnit(t.left),right:this._toPxUnit(t.right),bottom:this._toPxUnit(t.bottom)}},s._toPxUnit=function(t){return 0===t?"0":t+"px"},s._findByComponent=function(t){let n,i=null;return this._components.some((e=>(n=e===t,n&&(i=e),n))),i},s._findById=function(t){let n,i=null;return this._components.some((e=>(n=e.id===t,n&&(i=e),n))),i},s._findByNode=function(t){let n,i=null;return this._components.some((e=>(n=e.node===t,n&&(i=e),n))),i},t._createClass(e,[{key:"container",set:function(t){const n=this._get("container");t!==n&&(t&&(t.classList.add(_.ui),t.classList.add(u.getCalciteThemeClass()),this._attachContainers(t)),n&&(n.classList.remove(_.ui),C(n,{top:"",bottom:"",left:"",right:""}),i.empty(n)),this._set("container",t))}},{key:"height",get:function(){const t=this.get("view.height")||0;if(0===t)return t;const n=this._getViewPadding(),i=n.top+n.bottom;return Math.max(t-i,0)}},{key:"padding",get:function(){return this._get("padding")},set:function(t){t?this._override("padding",t):this._clearOverride("padding")}},{key:"width",get:function(){const t=this.get("view.width")||0;if(0===t)return t;const n=this._getViewPadding(),i=n.left+n.right;return Math.max(t-i,0)}}]),e}(e.EventedAccessor);return n.__decorate([s.property()],v.prototype,"container",null),n.__decorate([s.property()],v.prototype,"height",null),n.__decorate([s.property({value:f})],v.prototype,"padding",null),n.__decorate([d.cast("padding")],v.prototype,"castPadding",null),n.__decorate([s.property()],v.prototype,"view",void 0),n.__decorate([s.property()],v.prototype,"width",null),v=n.__decorate([p.subclass("esri.views.ui.UI")],v),v}));
