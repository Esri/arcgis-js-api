/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define((function(){"use strict";return function(){function t(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}var e=t.prototype;return e.clear=function(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]},e.update=function(t,e,n){for(const i in t)this.vertexData.set(i,t[i]);for(const i in this.vertexData)null===t[i]&&this.vertexData.delete(i);this.vertexCount=e,this.indexData=n},t}()}));
