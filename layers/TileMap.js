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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Deferred","dojo/io-query","../request","../urlUtils","../sniff"],function(e,l,i,t,a,r,o,n){var s=n("esri-iphone");return e(null,{declaredClass:"esri.layers.TileMap",constructor:function(e){this.layer=e,this._tileMaps={}},getTile:function(e,l,i,t,a){var r={id:t,level:e,row:l,col:i},o=this._getResamplingBudget();if(o>0){var n={tile:r,requestedTile:r,callback:a,resamplingBudget:o};this._process(n)}else(a||this.callback).call(this,r,r)},statusOf:function(e,l,i){var t,a=this._getResamplingBudget(),r={level:e,row:l,col:i};if(0===a)return 1;for(;a>=0;){if(t=this._tileToTileMap(r),!this._tileMaps[t.uid])return-1;if(t=this._tileMaps[t.uid],!t.promise.isFulfilled())return-1;if(this._isTileAvailable(r,t))return 1;if(!(r=this._parentTile(r)))return 0;a--}return 0},style:function(e,l){if(e.level!==l.level||e.row!==l.row||e.col!==l.col){for(var i,t,a,r=this.layer.tileInfo,o=r.lods,n=r.cols,u=r.rows,c=o.length-1;!i||!t;)i||o[c].level!==e.level||(i=o[c]),t||o[c].level!==l.level||(t=o[c]),c--;a=Math.round(i.resolution/t.resolution);var d=l.col%a*n*-1,h=l.row%a*u*-1,f={width:n*a+"px",height:u*a+"px",margin:h+"px 0 0 "+d+"px","will-change":"transform"};if(s){var p=0===d?0:-1*d,v=p+n,g=0===h?0:-1*h,_=g+u;f.clip="rect("+g+"px,"+v+"px,"+_+"px,"+p+"px)"}return f}},_process:function(e){var i=e.tile,t=this._tileToTileMap(i),a=this._parentTile(i);this._getTileMap(t).then(l.hitch(this,function(l){t=l,this._isTileAvailable(i,t)?(e.callback||this.callback).call(this,i,e.requestedTile):e.resamplingBudget>0&&a?(e.resamplingBudget--,e.tile=a,this._process(e)):(e.callback||this.callback).call(this,e.requestedTile,e.requestedTile)}),l.hitch(this,function(){(e.callback||this.callback).call(this,e.requestedTile,e.requestedTile)}))},_getTileMap:function(e){var i,a,o,n,s=null;return this._tileMaps[e.uid]?(e=this._tileMaps[e.uid],i=e.promise):(this._tileMaps[e.uid]=e,a=new t,r({url:this._getTileMapUrl(e.level,e.row,e.col),handleAs:"json",content:{f:"json"},callbackParamName:"callback",timeout:3e3,load:function(i){if(l.mixin(e,i),e.data&&e.data.length>0){if(1===(n=e.data.length))s=e.data[0];else for(s=e.data[0],o=1;o<n;o++)if(e.data[o]!==s){s=null;break}null!==s&&(delete e.data,e.value=s),null==e.valid&&(e.valid=!0)}a.resolve(e)},error:function(i){i&&422===i.code?(l.mixin(e,{location:{top:e.row,left:e.col,width:8,height:8},valid:!0,value:0}),a.resolve(e)):a.reject()}}),i=e.promise=a.promise),i},_parentTile:function(e){var l,t,a,r=this.layer.tileInfo,o=r.lods,n=null;return i.some(o,function(i,a){return e.level===i.level&&(l=i,t=a,!0)}),t>0&&(a=o[t-1],n={id:e.id,level:a.level,row:Math.floor(e.row*l.resolution/a.resolution+.01),col:Math.floor(e.col*l.resolution/a.resolution+.01)}),n},_tileToTileMap:function(e){var l=8*Math.floor(e.row/8),i=8*Math.floor(e.col/8);return{uid:e.level+"_"+l+"_"+i,level:e.level,row:l,col:i}},_isTileAvailable:function(e,l){var i,t,a;return l.valid?void 0!==l.value?a=l.value:(i=l.location.left,t=l.location.top,a=(e.row-t)*l.location.width+(e.col-i),a=a<l.data.length?l.data[a]:0):a=0,a},_getTileMapUrl:function(e,l,i){var t=this.layer,r=t.tileServers,o=t._getToken(),n=t._url.query,s=(r?r[l%r.length]:t._url.path)+"/tilemap/"+e+"/"+l+"/"+i+"/8/8";return n&&(s+="?"+a.objectToQuery(n)),!o||n&&n.token||(s+=(-1===s.indexOf("?")?"?":"&")+"token="+o),s=t.addTimestampToURL(s)},_getResamplingBudget:function(){var e=this.layer,l=0;return e.resampling&&(null!==(l=e._resamplingTolerance)&&void 0!==l||(l=e.tileInfo.lods.length)),l}})});