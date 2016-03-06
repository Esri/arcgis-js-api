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

define(["../../declare","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/sniff","dojo/on","dojo/Deferred"],function(e,t,n,i,s,o,r,d){var l=function(){var e=document.getElementsByTagName("body")[0].style;return(l=void 0!==e.animationName?function(){return"animationend"}:void 0!==e.webkitAnimationName?function(){return"webkitAnimationEnd"}:function(){})()},h=e(null,{_oldNode:null,_targets:null,_deferred:null,start:function(e,t){if(this._oldNode=t,this._deferred=new d,!l())return this.finish(),this._deferred.promise;this._targets=e,r.once(e[0].node,l(),n.hitch(this,this.finish));for(var s=0;s<e.length;s++){var o=e[s];i.add(o.node,o.classes),i.add(o.node,"Anim_Common")}return this._deferred.promise},finish:function(){if(this._targets){for(var e=0;e<this._targets.length;e++){var t=this._targets[e];i.remove(t.node,t.classes),i.remove(t.node,"Anim_Common")}this._targets=null}this._oldNode&&(s.destroy(this._oldNode),this._oldNode=null),this._deferred.resolve()}}),a=e(null,{progress:null,_items:null,_flySurfaceNode:null,constructor:function(e){this._flySurfaceNode=e,this._items=[]},start:function(e,t){var i=new h;return this._items.push(i),this.progress||(this.progress=new d),i.start(e,t).then(n.hitch(this,this._onItemFinished,i))},_onItemFinished:function(e){var n=t.indexOf(this._items,e);n>=0&&(this._items.splice(n,1),0===this._items.length&&this.progress&&(this.progress.resolve(),this.progress=null))},finish:function(){for(var e=this._items;e.length>0;)e[e.length-1].finish()},fly:function(e,t,n){var s=e.cloneNode(!0);if(n||(n=["top","left"]),!l())return s;var o=e.getBoundingClientRect(),r=this._flySurfaceNode.getBoundingClientRect();i.add(s,"Anim_FlyingObj");for(var d=0;d<n.length;d++){var h=n[d],a="right"===h||"bottom"===h?-1:1;s.style[h]=a*(o[h]-r[h])+"px"}return this._flySurfaceNode.appendChild(s),this.start([{node:s,classes:[t]}],s),s}});return a});