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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./GeographicTransformationStep"],(function(t,i,e){"use strict";return function(){function t(t){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,t&&t.steps)for(var i=0,n=t.steps;i<n.length;i++){var s=n[i];s instanceof e?this.steps.push(s):this.steps.push(new e({wkid:s.wkid,wkt:s.wkt,isInverse:s.isInverse}))}}return t.cacheKey=function(t,i){return[void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==i.wkid&&null!==i.wkid?i.wkid.toString():"-1",void 0!==i.wkt&&null!==i.wkt?i.wkt.toString():""].join(",")},t.fromGE=function(i){for(var n=new t,s="",r=0,o=i.steps;r<o.length;r++){var h=o[r],c=e.fromGE(h);n.steps.push(c),s+=c.uid.toString()+","}return n._cached_projection={},n._gtlistentry=null,n._chain=s,n},t.prototype.getInverse=function(){var i=new t;i.steps=[];for(var e=this.steps.length-1;e>=0;e--){var n=this.steps[e];i.steps.push(n.getInverse())}return i},t.prototype.getGTListEntry=function(){for(var t="",i=0,e=this.steps;i<e.length;i++){t+=e[i].uid.toString()+","}return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry},t.prototype.assignCachedGe=function(i,e,n){this._cached_projection[t.cacheKey(i,e)]=n},t.prototype.getCachedGeTransformation=function(i,e){for(var n="",s=0,r=this.steps;s<r.length;s++){n+=r[s].uid.toString()+","}n!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=n);var o=this._cached_projection[t.cacheKey(i,e)];return void 0===o?null:o},t}()}));