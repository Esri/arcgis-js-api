/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t,e,s){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._spriteInfo=s,this._filter=t.getFeatureFilter()}pushFeature(t){this._filter&&!this._filter.filter(t,this.zoom)||this._features.push(t)}hasFeatures(){return this._features.length>0}getResources(t,e,s){}}export{t as default};
