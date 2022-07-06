/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
class e{constructor(e,t=[]){this.eventType=e,this.keyModifiers=t}matches(e){if(e.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;const t=e.modifiers;for(const i of this.keyModifiers)if(!t.has(i))return!1;return!0}}export{e as EventMatch};
