/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import r from"./Collection.js";function n(n,t,i=r){return t||(t=new i),t===n||(t.removeAll(),e(n)?t.addMany(n):n&&t.add(n)),t}function t(r){return r}function e(r){return r&&(Array.isArray(r)||"items"in r&&Array.isArray(r.items))}export{t as castForReferenceSetter,n as referenceSetter};
