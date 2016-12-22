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

define(["./UpsampleInfo","../support/PreallocArray"],function(t,r){function e(t){this.q=new r(t||100),this._last=null,this.done=!0}function n(t){this.q=new r(t||100),this.done=!0}var i=12756274*Math.PI;e.prototype.reset=function(t){this.q.clear(),t&&this.q.pushEither(t),this._last=null,this.done=0===this.q.length},e.prototype.skip=function(){this._last=null,0===this.q.length&&(this.done=!0)},e.prototype.next=function(){if(this.done)return null;if(null!==this._last){var t=this._last.children;if(t[0])for(var r=4;r>=0;r--){var e=t[r];e&&this.q.push(e)}this._last=null}return this._last=this.q.pop(),0!==this.q.length||this._last.children[0]||(this.done=!0),this._last},n.prototype.reset=function(t){this.q.clear(),this.q.pushEither(t);for(var r=0;r<this.q.length;)for(var e=this.q.data[r++],n=0;4>n;n++){var i=e.children[n];i&&this.q.push(i)}this.done=0===this.q.length},n.prototype.next=function(){var t=this.q.pop();return this.done=0===this.q.length,t};var s={li2lat:function(t,r){var e=-Math.PI+2*Math.PI*r/(1<<t);return 2*Math.atan(Math.exp(e))-.5*Math.PI},lj2lon:function(t,r){return-Math.PI+2*Math.PI*r/(1<<t)},lij2webMerc:function(t,r,e){return[-.5*i+i*e/(1<<t),-.5*i+i*r/(1<<t)]},lij2str:function(t,r,e){return t+"/"+r+"/"+e},tile2str:function(t){return t.lij[0]+"/"+t.lij[1]+"/"+t.lij[2]},latLon2WebMercator:function(t,r,e){t>1.570796?t=1.570796:-1.570796>t&&(t=-1.570796),e[0]=6378137*r,e[1]=3189068.5*Math.log((1+Math.sin(t))/(1-Math.sin(t)))},traverseTilesPreorder:function(t,r,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)s._traverseTilesPreorder(t[i],r,e,n);else s._traverseTilesPreorder(t,r,e,n)},_traverseTilesPreorder:function(t,r,e,n){n=r.call(e,t,n);for(var i=0;4>i;i++){var l=t.children[i];l&&s.traverseTilesPreorder(l,r,e,n)}},traverseTilesPostorder:function(t,r,e){if(Array.isArray(t))for(var n=0;n<t.length;n++)s._traverseTilesPostorder(t[n],r,e);else s._traverseTilesPostorder(t,r,e)},_traverseTilesPostorder:function(t,r,e){for(var n=0;4>n;n++){var i=t.children[n];i&&s.traverseTilesPostorder(i,r,e)}r.call(e,t)},IteratorPreorder:e,IteratorPostorder:n,fallsWithinLayer:function(t,r,e){var n=r.layer,i=n.fullExtent,s=t.extent;if(e){if(s[0]<i.xmin||s[1]<i.ymin||s[2]>i.xmax||s[3]>i.ymax)return!1}else if(i.xmin>s[2]||i.ymin>s[3]||i.xmax<s[0]||i.ymax<s[1])return!1;var l=t.parentSurface.tilingScheme.levels[t.lij[0]].scale;return n.minScale>0&&l>1.00000001*n.minScale?!1:l>=.99999999*n.maxScale},isPosWithinTile:function(t,r){var e=t.extent;return r[0]>=e[0]&&r[1]>=e[1]&&r[0]<=e[2]&&r[1]<=e[3]},getTileNLevelsUp:function(t,r){for(;r>0;)t=t.parent,r--;return t},nextTileInAncestry:function(t,r){var e=t.lij[0]-r.lij[0]-1,n=t.lij[1]>>e,i=t.lij[2]>>e,s=0;return 1&n&&(s+=2),1&i&&(s+=1),r.children[s]},computeUpsampleInfoForAncestor:function(r,e){for(var n=1,i=0,s=0;r!==e;)if(n*=.5,i*=.5,s*=.5,1&r.lij[2]&&(i+=.5),0===(1&r.lij[1])&&(s+=.5),r=r.parent,null==r)throw new Error("tile was not a descendant of ancestorTile");var l=t.Pool.acquire();return l.init(e,i,s,n),l}};return s});