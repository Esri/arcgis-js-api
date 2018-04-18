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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../../declare","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/sniff","dojo/on","dojo/Deferred"],function(e,t,o,r,n,i,s,d,h){var l={supported:!(s("chrome")<29||s("ff")<23||s("safari")<6||s("ie")<10),end:function(e,t){for(var o=function(e){var o=e.type;l.end=o;for(var n in r)n!==o&&(r[n].remove(),delete r[n]);t.apply(this,arguments)},r={},n=["animationend","webkitAnimationEnd"],i=0;i<n.length;i++)r[n[i]]=d(e,n[i],o);return{remove:function(){for(var e in r)r.hasOwnProperty(e)&&r[e].remove()}}}},f=e(null,{_oldNode:null,_targets:null,_deferred:null,start:function(e,t){if(this._oldNode=t,this._deferred=new h,!l.supported)return this.finish(),this._deferred.promise;this._targets=e,d.once(e[0].node,l.end,o.hitch(this,this.finish));for(var n=0;n<e.length;n++){var i=e[n];r.add(i.node,i.classes),r.add(i.node,"Anim_Common")}return this._deferred.promise},finish:function(){if(this._targets){for(var e=0;e<this._targets.length;e++){var t=this._targets[e];r.remove(t.node,t.classes),r.remove(t.node,"Anim_Common")}this._targets=null}this._oldNode&&(this.onNodePreDestroy(this._oldNode),n.destroy(this._oldNode),this._oldNode=null),this._deferred.resolve()},onNodePreDestroy:function(e){}});return e(null,{progress:null,_items:null,_flySurfaceNode:null,_ltr:i.isBodyLtr(),constructor:function(e){this._flySurfaceNode=e,this._items=[]},start:function(e,t){var r=this,n=new f;return n.onNodePreDestroy=function(e){r.onNodePreDestroy(e)},this._items.push(n),this.progress||(this.progress=new h),n.start(e,t).then(o.hitch(this,this._onItemFinished,n))},_onItemFinished:function(e){var o=t.indexOf(this._items,e);o>=0&&(this._items.splice(o,1),0===this._items.length&&this.progress&&(this.progress.resolve(),this.progress=null))},finish:function(){for(var e=this._items;e.length>0;)e[e.length-1].finish()},fly:function(e,t,o,n){if(n=n||e.cloneNode(!0),o||(o=["top",this._ltr?"left":"right"]),!l.supported)return n;var i=e.getBoundingClientRect(),s=this._flySurfaceNode.getBoundingClientRect();r.add(n,"Anim_FlyingObj");for(var d,h,f=0;f<o.length;f++){var a=o[f],u=i[a]-s[a];"right"!==a&&"bottom"!==a||(u=-u),("left"===a&&!this._ltr||"right"===a&&this._ltr)&&(d=a,h=u),n.style[a]=u+"px"}return this._flySurfaceNode.appendChild(n),d&&(h+=i.width-n.getBoundingClientRect().width,n.style[d]=h+"px"),this.start([{node:n,classes:[t]}],n),n},onNodePreDestroy:function(e){}})});