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
// See http://js.arcgis.com/3.17/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/url","dojo/sniff","dojo/string","../config","../kernel","../request","../urlUtils","../SpatialReference","../geometry/Extent","./TiledMapServiceLayer","./TileInfo"],function(e,l,s,t,i,o,r,a,n,u,c,h,v,d){var f=e(v,{declaredClass:"esri.layers.WebTiledLayer",constructor:function(e,a){a||(a={}),this.urlTemplate=e;var v=new h(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new c({wkid:102100})),f=new h(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,new c({wkid:102100}));if(this.initialExtent=a.initialExtent||v,this.fullExtent=a.fullExtent||f,a.tileInfo)this.tileInfo=a.tileInfo;else{var b=[{level:0,resolution:156543.033928,scale:591657527.591555},{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.14929107082380833,scale:564.248588},{level:21,resolution:.07464553541190416,scale:282.124294},{level:22,resolution:.03732276770595208,scale:141.062147},{level:23,resolution:.01866138385297604,scale:70.5310735}],g=new d({dpi:96,rows:256,cols:256,origin:{x:-20037508.342787,y:20037508.342787},spatialReference:{wkid:102100},lods:b});this.tileInfo=g}this.spatialReference=new c(this.tileInfo.spatialReference.toJson()),this.copyright=a.copyright||"";var m=new t(e),y=m.scheme+"://"+m.authority+"/";if(this.urlPath=e.substring(y.length),this.tileServers=a.tileServers||[],-1===m.authority.indexOf("{subDomain}")&&this.tileServers.push(y),a.subDomains&&a.subDomains.length>0&&m.authority.split(".").length>1){this.subDomains=a.subDomains;var p;s.forEach(a.subDomains,function(e){m.authority.indexOf("${subDomain}")>-1?p=m.scheme+"://"+o.substitute(m.authority,{subDomain:e})+"/":m.authority.indexOf("{subDomain}")>-1&&(p=m.scheme+"://"+m.authority.replace(/\{subDomain\}/gi,e)+"/"),this.tileServers.push(p)},this)}this.tileServers=s.map(this.tileServers,function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}),this._levelToLevelValue=[],s.forEach(this.tileInfo.lods,function(e){this._levelToLevelValue[e.level]=e.levelValue||e.level},this);var w=l.hitch(this,function(){this.loaded=!0,this.onLoad(this)});if(i("chrome")){var T=this.getTileUrl(0,0,0),x=r.defaults.io,S="with-credentials"===x.useCors?u.canUseXhr(T,!0):-1,D=S>-1?x.corsEnabledServers[S]:null;D&&D.withCredentials?n({url:T,handleAs:"arraybuffer"}).addBoth(function(){w()}):w()}else w()},getTileUrl:function(e,l,s){e=this._levelToLevelValue[e];var t=this.tileServers[l%this.tileServers.length]+o.substitute(this.urlPath,{level:e,col:s,row:l});return t=t.replace(/\{level\}/gi,e).replace(/\{row\}/gi,l).replace(/\{col\}/gi,s),t=this.addTimestampToURL(t),u.addProxy(t)}});return i("extend-esri")&&l.setObject("layers.WebTiledLayer",f,a),f});