/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e{constructor(e){this.gain=e}update(e){this.hasFilteredValue?this.filteredValue=(1-this.gain)*this.filteredValue+this.gain*e:this.filteredValue=e}reset(){this.filteredValue=void 0}get hasFilteredValue(){return void 0!==this.filteredValue}}export{e as FilteredValue};
