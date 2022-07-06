/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(){this._data=new Map,this._miss=0,this._hit=0,this.initialized=!0}init(){return Promise.resolve()}async get(t,s){return this._data.has(t)?(this._hit++,this._data.get(t)):(this._miss++,null)}destroy(){}put(t,s){return this._data.set(t,s),Promise.resolve()}remove(t){return this._data.delete(t),Promise.resolve()}getHitRate(){return this._hit/(this._hit+this._miss)}}export{t as IDBMockCache};
