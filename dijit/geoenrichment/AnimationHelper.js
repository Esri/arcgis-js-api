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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["../../declare","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/sniff","dojo/on","dojo/Deferred"],function(e,t,r,i,s,n,o,d,h){var l={supported:!(o("chrome")<29||o("ff")<23||o("safari")<6||o("ie")<10),end:function(e,t){for(var r=function(e){var r=e.type;l.end=r;for(var s in i)s!==r&&(i[s].remove(),delete i[s]);t.apply(this,arguments)},i={},s=["animationend","webkitAnimationEnd"],n=0;n<s.length;n++)i[s[n]]=d(e,s[n],r);return{remove:function(){for(var e in i)i.hasOwnProperty(e)&&i[e].remove()}}}},a=e(null,{_oldNode:null,_targets:null,_deferred:null,start:function(e,t){if(this._oldNode=t,this._deferred=new h,!l.supported)return this.finish(),this._deferred.promise;this._targets=e,d.once(e[0].node,l.end,r.hitch(this,this.finish));for(var s=0;s<e.length;s++){var n=e[s];i.add(n.node,n.classes),i.add(n.node,"Anim_Common")}return this._deferred.promise},finish:function(){if(this._targets){for(var e=0;e<this._targets.length;e++){var t=this._targets[e];i.remove(t.node,t.classes),i.remove(t.node,"Anim_Common")}this._targets=null}this._oldNode&&(s.destroy(this._oldNode),this._oldNode=null),this._deferred.resolve()}});return e(null,{progress:null,_items:null,_flySurfaceNode:null,_ltr:n.isBodyLtr(),constructor:function(e){this._flySurfaceNode=e,this._items=[]},start:function(e,t){var i=new a;return this._items.push(i),this.progress||(this.progress=new h),i.start(e,t).then(r.hitch(this,this._onItemFinished,i))},_onItemFinished:function(e){var r=t.indexOf(this._items,e);r>=0&&(this._items.splice(r,1),0===this._items.length&&this.progress&&(this.progress.resolve(),this.progress=null))},finish:function(){for(var e=this._items;e.length>0;)e[e.length-1].finish()},fly:function(e,t,r,s){if(s=s||e.cloneNode(!0),r||(r=["top",this._ltr?"left":"right"]),!l.supported)return s;var n=e.getBoundingClientRect(),o=this._flySurfaceNode.getBoundingClientRect();i.add(s,"Anim_FlyingObj");for(var d,h,a=0;a<r.length;a++){var f=r[a],u=n[f]-o[f];("right"===f||"bottom"===f)&&(u=-u),("left"===f&&!this._ltr||"right"===f&&this._ltr)&&(d=f,h=u),s.style[f]=u+"px"}return this._flySurfaceNode.appendChild(s),d&&(h+=n.width-s.getBoundingClientRect().width,s.style[d]=h+"px"),this.start([{node:s,classes:[t]}],s),s}})});