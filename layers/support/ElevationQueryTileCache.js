/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class t{constructor(t){this.store=t}destroy(){this.store.destroy()}get(t){return this.store.get(t)}put(t,s){this.store.put(t,s,s.values.byteLength+256)}}export{t as ElevationQueryTileCache};
