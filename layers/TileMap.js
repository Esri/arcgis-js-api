// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/io-query","../request","../urlUtils"],(function(e,l,t,i,a,r,o){return e(null,{declaredClass:"esri.layers.TileMap",constructor:function(e){this.layer=e,this._tileMaps={}},getTile:function(e,l,t,i,a){var r={id:i,level:e,row:l,col:t},o=this._getResamplingBudget();if(o>0){var n={tile:r,requestedTile:r,callback:a,resamplingBudget:o};this._process(n)}else(a||this.callback).call(this,r,r)},statusOf:function(e,l,t){var i,a=this._getResamplingBudget(),r={level:e,row:l,col:t};if(0===a)return 1;for(;a>=0;){if(i=this._tileToTileMap(r),!this._tileMaps[i.uid])return-1;if(!(i=this._tileMaps[i.uid]).promise.isFulfilled())return-1;if(this._isTileAvailable(r,i))return 1;if(!(r=this._parentTile(r)))return 0;a--}return 0},style:function(e,l){if(e.level!==l.level||e.row!==l.row||e.col!==l.col){for(var t,i,a,r=this.layer.tileInfo,o=r.lods,n=r.cols,s=r.rows,u=o.length-1;!t||!i;)t||o[u].level!==e.level||(t=o[u]),i||o[u].level!==l.level||(i=o[u]),u--;a=Math.round(t.resolution/i.resolution);var c=l.col%a*n*-1,d=l.row%a*s*-1,h={width:n*a+"px",height:s*a+"px",margin:d+"px 0 0 "+c+"px","will-change":"transform"},f=0===c?0:-1*c,p=f+n,v=0===d?0:-1*d,g=v+s;return h.clip="rect("+v+"px,"+p+"px,"+g+"px,"+f+"px)",h}},_process:function(e){var t=e.tile,i=this._tileToTileMap(t),a=this._parentTile(t);this._getTileMap(i).then(l.hitch(this,(function(l){i=l,this._isTileAvailable(t,i)?(e.callback||this.callback).call(this,t,e.requestedTile):e.resamplingBudget>0&&a?(e.resamplingBudget--,e.tile=a,this._process(e)):(e.callback||this.callback).call(this,e.requestedTile,e.requestedTile)})),l.hitch(this,(function(){(e.callback||this.callback).call(this,e.requestedTile,e.requestedTile)})))},_getTileMap:function(e){var t,a,o,n,s=null;return this._tileMaps[e.uid]?t=(e=this._tileMaps[e.uid]).promise:(this._tileMaps[e.uid]=e,a=new i,r({url:this._getTileMapUrl(e.level,e.row,e.col),handleAs:"json",content:{f:"json"},callbackParamName:"callback",timeout:3e3,load:function(t){if(l.mixin(e,t),e.data&&e.data.length>0){if(1===(n=e.data.length))s=e.data[0];else for(s=e.data[0],o=1;o<n;o++)if(e.data[o]!==s){s=null;break}null!==s&&(delete e.data,e.value=s),null==e.valid&&(e.valid=!0)}a.resolve(e)},error:function(t){t&&422===t.code?(l.mixin(e,{location:{top:e.row,left:e.col,width:8,height:8},valid:!0,value:0}),a.resolve(e)):a.reject()}}),t=e.promise=a.promise),t},_parentTile:function(e){var l,i,a,r=this.layer.tileInfo.lods,o=null;return t.some(r,(function(t,a){return e.level===t.level&&(l=t,i=a,!0)})),i>0&&(a=r[i-1],o={id:e.id,level:a.level,row:Math.floor(e.row*l.resolution/a.resolution+.01),col:Math.floor(e.col*l.resolution/a.resolution+.01)}),o},_tileToTileMap:function(e){var l=8*Math.floor(e.row/8),t=8*Math.floor(e.col/8);return{uid:e.level+"_"+l+"_"+t,level:e.level,row:l,col:t}},_isTileAvailable:function(e,l){var t,i,a;return l.valid?void 0!==l.value?a=l.value:(t=l.location.left,i=l.location.top,a=(a=(e.row-i)*l.location.width+(e.col-t))<l.data.length?l.data[a]:0):a=0,a},_getTileMapUrl:function(e,l,t){var i=this.layer,r=i.tileServers,o=i._getToken(),n=i._url.query,s=(r?r[l%r.length]:i._url.path)+"/tilemap/"+e+"/"+l+"/"+t+"/8/8";return n&&(s+="?"+a.objectToQuery(n)),!o||n&&n.token||(s+=(-1===s.indexOf("?")?"?":"&")+"token="+o),s=i.addTimestampToURL(s)},_getResamplingBudget:function(){var e=this.layer,l=0;return e.resampling&&null==(l=e._resamplingTolerance)&&(l=e.tileInfo.lods.length),l}})}));