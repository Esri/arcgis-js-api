/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(t,e,a){for(const s in t)this.vertexData.set(s,t[s]);for(const s in this.vertexData)null===t[s]&&this.vertexData.delete(s);this.vertexCount=e,this.indexData=a}}export{t as default};
