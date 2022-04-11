// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","./GeographicTransformationStep"],(function(t,i,n){return function(){function t(t){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,t&&t.steps)for(var i=0,e=t.steps;i<e.length;i++){var s=e[i];s instanceof n?this.steps.push(s):this.steps.push(new n({wkid:s.wkid,wkt:s.wkt,isInverse:s.isInverse}))}}return t.cacheKey=function(t,i){return[void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==i.wkid&&null!==i.wkid?i.wkid.toString():"-1",void 0!==i.wkt&&null!==i.wkt?i.wkt.toString():""].join(",")},t.fromGE=function(i){for(var e=new t,s="",r=0,o=i.steps;r<o.length;r++){var h=o[r],c=n.fromGE(h);e.steps.push(c),s+=c.uid.toString()+","}return e._cached_projection={},e._gtlistentry=null,e._chain=s,e},t.prototype.getInverse=function(){var i=new t;i.steps=[];for(var n=this.steps.length-1;n>=0;n--){var e=this.steps[n];i.steps.push(e.getInverse())}return i},t.prototype.getGTListEntry=function(){for(var t="",i=0,n=this.steps;i<n.length;i++){t+=n[i].uid.toString()+","}return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry},t.prototype.assignCachedGe=function(i,n,e){this._cached_projection[t.cacheKey(i,n)]=e},t.prototype.getCachedGeTransformation=function(i,n){for(var e="",s=0,r=this.steps;s<r.length;s++){e+=r[s].uid.toString()+","}e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e);var o=this._cached_projection[t.cacheKey(i,n)];return void 0===o?null:o},t}()}));