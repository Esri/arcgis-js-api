/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t){this._texture=t,this.type="tile-texture",this._refCount=1}retain(){++this._refCount}release(){--this._refCount,0===this._refCount&&this._texture.dispose()}get texture(){return this._texture}generateMipmap(){this._texture.generateMipmap()}get descriptor(){return this._texture.descriptor}}export{t as default};
