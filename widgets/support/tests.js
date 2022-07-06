/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
const e=new Set;function n(n){e.add(n),n.finally((()=>e.delete(n)))}function t(){return e.size>0}export{t as hasPendingLoading,n as registerLoading};
