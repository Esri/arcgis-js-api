/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";var t;e.ClientType=void 0,(t=e.ClientType||(e.ClientType={}))[t.ELEVATION=0]="ELEVATION",t[t.BASEMAP=1]="BASEMAP",t[t.I3S_INDEX=2]="I3S_INDEX",t[t.I3S_DATA=3]="I3S_DATA",t[t.SYMBOLOGY=4]="SYMBOLOGY";const n=(()=>{const t=new Array;return t[e.ClientType.ELEVATION]=10,t[e.ClientType.BASEMAP]=10,t[e.ClientType.I3S_INDEX]=10,t[e.ClientType.I3S_DATA]=10,t[e.ClientType.SYMBOLOGY]=5,t})(),l=30;e.downloadSlotsPerClient=n,e.maxDownloadSlots=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
