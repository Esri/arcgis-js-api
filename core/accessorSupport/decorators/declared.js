/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../has","../../Logger","../../deprecate"],(function(e,r,t,s){"use strict";function n(e,...n){if(n.length>0)throw new Error("Multi-inheritance unsupported since 4.16");return r("esri-deprecation-warnings")&&s.deprecated(t.getLogger("esri.core.accessorSupport.decorators"),"'extends declared(superclass)' syntax",{version:"4.16",see:"https://arcg.is/T8fr4"}),e}e.declared=n,Object.defineProperty(e,"__esModule",{value:!0})}));
