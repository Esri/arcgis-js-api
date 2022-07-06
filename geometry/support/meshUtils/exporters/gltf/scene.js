/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class d{constructor(){this.name="",this._nodes=[]}addNode(d){if(this._nodes.includes(d))throw new Error("Node already added");this._nodes.push(d)}forEachNode(d){this._nodes.forEach(d)}}export{d as Scene};
