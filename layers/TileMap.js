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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/io-query","../request","../urlUtils","../sniff"],function(e,l,t,i,r,a,o,n){var s=n("esri-iphone");return e(null,{declaredClass:"esri.layers.TileMap",constructor:function(e){this.layer=e,this._tileMaps={}},getTile:function(e,l,t,i,r){var a={id:i,level:e,row:l,col:t},o=this._getResamplingBudget();if(o>0){var n={tile:a,requestedTile:a,callback:r,resamplingBudget:o};this._process(n)}else(r||this.callback).call(this,a,a)},statusOf:function(e,l,t){var i,r=this._getResamplingBudget(),a={level:e,row:l,col:t};if(0===r)return 1;for(;r>=0;){if(i=this._tileToTileMap(a),!this._tileMaps[i.uid])return-1;if(i=this._tileMaps[i.uid],!i.promise.isFulfilled())return-1;if(this._isTileAvailable(a,i))return 1;if(!(a=this._parentTile(a)))return 0;r--}return 0},style:function(e,l){if(e.level!==l.level||e.row!==l.row||e.col!==l.col){for(var t,i,r,a=this.layer.tileInfo,o=a.lods,n=a.cols,u=a.rows,c=o.length-1;!t||!i;)t||o[c].level!==e.level||(t=o[c]),i||o[c].level!==l.level||(i=o[c]),c--;r=Math.round(t.resolution/i.resolution);var h=l.col%r*n*-1,d=l.row%r*u*-1,f={width:n*r+"px",height:u*r+"px",margin:d+"px 0 0 "+h+"px","will-change":"transform"};if(s){var p=0===h?0:-1*h,v=p+n,_=0===d?0:-1*d,g=_+u;f.clip="rect("+_+"px,"+v+"px,"+g+"px,"+p+"px)"}return f}},_process:function(e){var t=e.tile,i=this._tileToTileMap(t),r=this._parentTile(t);this._getTileMap(i).then(l.hitch(this,function(l){i=l,this._isTileAvailable(t,i)?(e.callback||this.callback).call(this,t,e.requestedTile):e.resamplingBudget>0&&r?(e.resamplingBudget--,e.tile=r,this._process(e)):(e.callback||this.callback).call(this,e.requestedTile,e.requestedTile)}),l.hitch(this,function(){(e.callback||this.callback).call(this,e.requestedTile,e.requestedTile)}))},_getTileMap:function(e){var t,r,o,n,s=null;return this._tileMaps[e.uid]?(e=this._tileMaps[e.uid],t=e.promise):(this._tileMaps[e.uid]=e,r=new i,a({url:this._getTileMapUrl(e.level,e.row,e.col),handleAs:"json",callbackParamName:"callback",timeout:3e3,load:function(t){if(l.mixin(e,t),e.data&&e.data.length>0){if(1===(n=e.data.length))s=e.data[0];else for(s=e.data[0],o=1;o<n;o++)if(e.data[o]!==s){s=null;break}null!==s&&(delete e.data,e.value=s)}r.resolve(e)},error:function(e){r.reject()}}),t=e.promise=r.promise),t},_parentTile:function(e){var l,i,r,a=this.layer.tileInfo,o=a.lods,n=null;return t.some(o,function(t,r){return e.level===t.level&&(l=t,i=r,!0)}),i>0&&(r=o[i-1],n={id:e.id,level:r.level,row:Math.floor(e.row*l.resolution/r.resolution+.01),col:Math.floor(e.col*l.resolution/r.resolution+.01)}),n},_tileToTileMap:function(e){var l=8*Math.floor(e.row/8),t=8*Math.floor(e.col/8);return{uid:e.level+"_"+l+"_"+t,level:e.level,row:l,col:t}},_isTileAvailable:function(e,l){var t,i,r;return l.valid?void 0!==l.value?r=l.value:(t=l.location.left,i=l.location.top,r=(e.row-i)*l.location.width+(e.col-t),r=r<l.data.length?l.data[r]:0):r=0,r},_getTileMapUrl:function(e,l,t){var i=this.layer,a=i.tileServers,o=i._getToken(),n=i._url.query,s=(a?a[l%a.length]:i._url.path)+"/tilemap/"+e+"/"+l+"/"+t+"/8/8";return n&&(s+="?"+r.objectToQuery(n)),!o||n&&n.token||(s+=(-1===s.indexOf("?")?"?":"&")+"token="+o),s=i.addTimestampToURL(s)},_getResamplingBudget:function(){var e=this.layer,l=0;return e.resampling&&(null!==(l=e._resamplingTolerance)&&void 0!==l||(l=e.tileInfo.lods.length)),l}})});