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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","../urlUtils","../SpatialReference","../geometry/Extent","./TiledMapServiceLayer","./TileInfo"],(function(e,l,s,t,i,r,o,a,n){var c=e(a,{declaredClass:"esri.layers.OpenStreetMapLayer",constructor:function(e){this.spatialReference=new r({wkid:102100}),this.tileInfo=new n({rows:256,cols:256,dpi:96,format:"PNG8",compressionQuality:0,origin:{x:-20037508.342787,y:20037508.342787},spatialReference:{wkid:102100},lods:[{level:0,scale:591657527.591555,resolution:156543.033928},{level:1,scale:295828763.795777,resolution:78271.5169639999},{level:2,scale:147914381.897889,resolution:39135.7584820001},{level:3,scale:73957190.948944,resolution:19567.8792409999},{level:4,scale:36978595.474472,resolution:9783.93962049996},{level:5,scale:18489297.737236,resolution:4891.96981024998},{level:6,scale:9244648.868618,resolution:2445.98490512499},{level:7,scale:4622324.434309,resolution:1222.99245256249},{level:8,scale:2311162.217155,resolution:611.49622628138},{level:9,scale:1155581.108577,resolution:305.748113140558},{level:10,scale:577790.554289,resolution:152.874056570411},{level:11,scale:288895.277144,resolution:76.4370282850732},{level:12,scale:144447.638572,resolution:38.2185141425366},{level:13,scale:72223.819286,resolution:19.1092570712683},{level:14,scale:36111.909643,resolution:9.55462853563415},{level:15,scale:18055.954822,resolution:4.77731426794937},{level:16,scale:9027.977411,resolution:2.38865713397468},{level:17,scale:4513.988705,resolution:1.19432856685505},{level:18,scale:2256.994353,resolution:.597164283559817},{level:19,scale:1128.497176,resolution:.298582141647617}]}),this.fullExtent=new o({xmin:-20037508.34,ymin:-20037508.34,xmax:20037508.34,ymax:20037508.34,spatialReference:{wkid:102100}}),this.initialExtent=new o({xmin:-20037508.34,ymin:-20037508.34,xmax:20037508.34,ymax:20037508.34,spatialReference:{wkid:102100}}),this.tileServers=e&&e.tileServers||["//a.tile.openstreetmap.org","//b.tile.openstreetmap.org","//c.tile.openstreetmap.org"],this.serversLength=this.tileServers.length,this._displayLevels=e?e.displayLevels:null,this.copyright=e&&e.copyright||"Map data © OpenStreetMap contributors, CC-BY-SA",this.loaded=!0,this.onLoad(this);var l=e&&e.loadCallback;l&&l(this)},getTileUrl:function(e,l,s){var t=this.tileServers[l%this.serversLength]+"/"+e+"/"+s+"/"+l+".png";return t=i.normalize(t),t=this.addTimestampToURL(t),i.addProxy(t)}});return s("extend-esri")&&l.setObject("layers.OpenStreetMapLayer",c,t),c}));