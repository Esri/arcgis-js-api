/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/label","../css","../../support/widgetUtils","../../../core/has","../../../core/Logger","../../support/jsxFactory"],(function(e,s,t,l,c,a,o){"use strict";function r(e,s){const{for:c,label:a,tabIndex:r,...n}=e;return o.tsx("div",{class:l.classes(t.LABEL,null==n?void 0:n.class),key:c,...n},o.tsx("calcite-label",{for:c,scale:"s",tabIndex:r,"disable-spacing":"true"},a),s)}e.Label=r,Object.defineProperty(e,"__esModule",{value:!0})}));
