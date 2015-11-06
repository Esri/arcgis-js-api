// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/has","dojo/string","../kernel","../urlUtils","../SpatialReference","../geometry/Extent","./TiledMapServiceLayer","./TileInfo"],function(e,l,t,i,s,o,r,a,n,u,h,c){var v=e(h,{declaredClass:"esri.layers.WebTiledLayer",constructor:function(e,l){l||(l={}),this.urlTemplate=e;var s=new u(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new n({wkid:102100})),r=new u(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new n({wkid:102100}));if(this.initialExtent=l.initialExtent||s,this.fullExtent=l.fullExtent||r,l.tileInfo)this.tileInfo=l.tileInfo;else{var a=[{level:0,resolution:156543.033928,scale:591657527.591555},{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176}],h=new c({dpi:96,rows:256,cols:256,origin:{x:-20037508.342787,y:20037508.342787},spatialReference:{wkid:102100},lods:a});this.tileInfo=h}this.spatialReference=new n(this.tileInfo.spatialReference.toJson()),this.copyright=l.copyright||"";var v=new i(e),d=v.scheme+"://"+v.authority+"/";if(this.urlPath=e.substring(d.length),this.tileServers=l.tileServers||[],-1===v.authority.indexOf("{subDomain}")&&this.tileServers.push(d),l.subDomains&&l.subDomains.length>0&&v.authority.split(".").length>1){this.subDomains=l.subDomains;var f;t.forEach(l.subDomains,function(e){v.authority.indexOf("${subDomain}")>-1?f=v.scheme+"://"+o.substitute(v.authority,{subDomain:e})+"/":v.authority.indexOf("{subDomain}")>-1&&(f=v.scheme+"://"+v.authority.replace(/\{subDomain\}/gi,e)+"/"),this.tileServers.push(f)},this)}this.tileServers=t.map(this.tileServers,function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}),this._levelToLevelValue=[],t.forEach(this.tileInfo.lods,function(e){this._levelToLevelValue[e.level]=e.levelValue||e.level},this),this.loaded=!0,this.onLoad(this)},getTileUrl:function(e,l,t){e=this._levelToLevelValue[e];var i=this.tileServers[l%this.tileServers.length]+o.substitute(this.urlPath,{level:e,col:t,row:l});return i=i.replace(/\{level\}/gi,e).replace(/\{row\}/gi,l).replace(/\{col\}/gi,t),i=this.addTimestampToURL(i),a.addProxy(i)}});return s("extend-esri")&&l.setObject("layers.WebTiledLayer",v,r),v});