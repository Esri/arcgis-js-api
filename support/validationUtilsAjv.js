/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function t(t,e=10){const n={};let l=t.map(a).map(((t,a)=>({e:t,i:a}))).sort((({e:t,i:a},{e,i:n})=>{const l=t.dataPath?t.dataPath.split(".").length:0,r=e.dataPath?e.dataPath.split(".").length:0;return l===r?a-n:r-l})).map((({e:t})=>`${t.dataPath?t.dataPath+": ":""}${t.message}`)).filter((t=>{const a=!n[t];return n[t]=!0,a}));if(l.length>e){const t="("+(l.length-e)+" more...)";l=l.slice(0,e),l.push(t)}return l}function a(t,a=5){if(e(t.params)){let e=t.params.allowedValues;if(e){if(e=e.map((t=>JSON.stringify(t))),e.length>a){const t="("+(e.length-a)+" more...)";e=e.slice(0,a),e.push(t)}t.message="should be equal to one of: "+e.join(", ")}}else n(t.params)&&(t.message="should NOT have additional property: "+t.params.additionalProperty);return t}function e(t){return null!=(t&&t.allowedValues)}function n(t){return null!=(t&&t.additionalProperty)}export{t as convertAjvErrors};