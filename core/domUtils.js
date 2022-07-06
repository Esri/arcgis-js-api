/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
function e(e){return"string"==typeof e?document.getElementById(e):e}function t(e){for(;e.hasChildNodes();)e.removeChild(e.firstChild)}function n(e,t){const n=t.parentNode;n&&(n.lastChild===t?n.appendChild(e):n.insertBefore(e,t.nextSibling))}function o(e,t){const n=t.parentNode;n&&n.insertBefore(e,t)}function r(e,t){for(;;){const n=e.firstChild;if(!n)break;t.appendChild(n)}}function i(e){e.parentNode&&e.parentNode.removeChild(e)}const l=(()=>{if("function"==typeof Element.prototype.closest)return(e,t)=>e.closest(t);const e=Element.prototype.matches||Element.prototype.msMatchesSelector;return(t,n)=>{let o=t;do{if(e.call(o,n))return o;o=o.parentElement}while(null!==o&&1===o.nodeType);return null}})();export{e as byId,l as closest,t as empty,n as insertAfter,o as insertBefore,i as remove,r as reparent};
