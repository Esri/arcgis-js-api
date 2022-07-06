/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e{constructor(){this.declaredRootClass="esri.arcade.featureSetCollection",this._layerById={},this._layerByName={}}add(e,t,a){this._layerById[t]=a,this._layerByName[e]=a}async featureSetByName(e,t=!0,a=["*"]){return void 0===this._layerByName[e]?null:this._layerByName[e]}async featureSetById(e,t=!0,a=["*"]){return void 0===this._layerById[e]?null:this._layerById[e]}castToText(){return"object, FeatureSetCollection"}}export{e as default};
