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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../../../../core/declare","dojo/_base/lang"],function(s,e){var t=function(){this.requests=[]},i=s(null,{constructor:function(s){e.mixin(this,s),this._scales=[],this._scaleBins={},this._levelToScale={};var t=s.tileInfo.lods;t.forEach(function(s){this._levelToScale[s.level]=s.scale},this),this._requestIds={}},_minScale:0,_maxScale:-1,_scales:null,_scaleBins:null,_levelToScale:null,_requestIds:null,add:function(s,e){if(!this.contains(s)){var i=this._levelToScale[e.tile.level];this._maxScale<this._minScale?this._minScale=this._maxScale=i:(i<this._minScale&&(this._minScale=i),i>this._maxScale&&(this._maxScale=i));var l=this._scaleBins[i];l||(this._scales.push(i),this._scales.sort(this._sortNumbers),l=this._scaleBins[i]=new t),l.requests.push(e),this._requestIds[s]=e}},get:function(s){var e,t,i,l,n,a=[],c=this.state.scale,h=this.state.x,r=this.state.y,_=this._scales,o=this.tileInfo;for(null==s&&(s=1);a.length<s&&this._minScale<=this._maxScale;){if(i=this._scaleBins[c],!i){if(c<this._minScale)c=this._minScale;else if(c>this._maxScale)c=this._maxScale;else for(l=1,n=_.length;n>l;l++)c<_[l]&&(c=c-_[l-1]<_[l]-c?_[l-1]:_[l]);i=this._scaleBins[c]}for(t=1/c/o.size[1],e=1/c/o.size[0],i.requests.sort(this._sortRequests((h-o.origin.x)*e,(o.origin.y-r)*t));a.length<s&&i.requests.length>0;)a.push(this._remove(i,c,i.requests[0]))}return a},contains:function(s){return void 0!==this._requestIds[s]},remove:function(s){var e,t,i=this._requestIds[s];return i&&(e=this._levelToScale[i.tile.level],t=this._scaleBins[e],this._remove(t,e,i)),i},isEmpty:function(){return this._minScale>this._maxScale},_remove:function(s,e,t){return s.requests.splice(s.requests.indexOf(t),1),s.requests.length||(this._scales.splice(this._scales.indexOf(e),1),delete this._scaleBins[e],this._scales.sort(),this._scales.length>0?(this._minScale=this._scales[0],this._maxScale=this._scales[this._scales.length-1]):(this._minScale=0,this._maxScale=-1)),delete this._requestIds[t.id],t},_sortNumbers:function(s,e){return s-e},_sortRequests:function(s,e){return function(t,i){return t=t.tile,i=i.tile,Math.sqrt((s-t.c)*(s-t.c)+(e-t.row)*(e-t.row))-Math.sqrt((s-i.c)*(s-i.c)+(e-i.row)*(e-i.row))}}});return i});