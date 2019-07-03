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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["esri/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/sniff","dojo/on","esri/dijit/geoenrichment/Deferred"],function(e,t,o,r,i,n,s,d,h){var l={supported:!(s("chrome")<29||s("ff")<23||s("safari")<6||s("ie")<10),end:function(e,t){for(var o=function(e){var o=e.type;l.end=o;for(var i in r)i!==o&&(r[i].remove(),delete r[i]);t.apply(this,arguments)},r={},i=["animationend","webkitAnimationEnd"],n=0;n<i.length;n++)r[i[n]]=d(e,i[n],o);return{remove:function(){for(var e in r)r.hasOwnProperty(e)&&r[e].remove()}}}},f=e(null,{_oldNode:null,_targets:null,_deferred:null,start:function(e,t){if(this._oldNode=t,this._deferred=new h,!l.supported)return this.finish(),this._deferred.promise;this._targets=e,d.once(e[0].node,l.end,o.hitch(this,this.finish));for(var i=0;i<e.length;i++){var n=e[i];r.add(n.node,n.classes),r.add(n.node,"Anim_Common")}return this._deferred.promise},finish:function(){if(this._targets){for(var e=0;e<this._targets.length;e++){var t=this._targets[e];t.node&&(r.remove(t.node,t.classes),r.remove(t.node,"Anim_Common"))}this._targets=null}this._oldNode&&(this.onNodePreDestroy(this._oldNode),i.destroy(this._oldNode),this._oldNode=null),this._deferred.resolve()},onNodePreDestroy:function(e){}});return e(null,{progress:null,_items:null,_flySurfaceNode:null,_ltr:n.isBodyLtr(),constructor:function(e){this._flySurfaceNode=e,this._items=[]},start:function(e,t){var r=this,i=new f;return i.onNodePreDestroy=function(e){r.onNodePreDestroy(e)},this._items.push(i),this.progress||(this.progress=new h),i.start(e,t).then(o.hitch(this,this._onItemFinished,i))},_onItemFinished:function(e){var o=t.indexOf(this._items,e);o>=0&&(this._items.splice(o,1),0===this._items.length&&this.progress&&(this.progress.resolve(),this.progress=null))},finish:function(){for(var e=this._items;e.length>0;)e.pop().finish()},fly:function(e,t,o,i){if(i=i||e.cloneNode(!0),o||(o=["top",this._ltr?"left":"right"]),!l.supported)return i;var n=e.getBoundingClientRect(),s=this._flySurfaceNode.getBoundingClientRect();r.add(i,"Anim_FlyingObj");for(var d,h,f=0;f<o.length;f++){var a=o[f],u=n[a]-s[a];"right"!==a&&"bottom"!==a||(u=-u),("left"===a&&!this._ltr||"right"===a&&this._ltr)&&(d=a,h=u),i.style[a]=u+"px"}return this._flySurfaceNode.appendChild(i),d&&(h+=n.width-i.getBoundingClientRect().width,i.style[d]=h+"px"),this.start([{node:i,classes:[t]}],i),i},onNodePreDestroy:function(e){}})});