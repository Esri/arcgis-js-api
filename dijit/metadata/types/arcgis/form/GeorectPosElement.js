define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel","../../../form/OpenElement","dojo/i18n!../../../nls/i18nArcGIS","dojo/i18n!../../../nls/i18nBase"],function(e,a,n,t,i,r,o,s){var l=e([r],{postCreate:function(){this.inherited(arguments)},beforeValidateValue:function(e,t,i){var r=null===i||0===a.trim(i).length;if(!r){var l=!0,d=i.split(" ");if(n.some(d,function(e){try{var n=!1,t=Number(a.trim(e));"undefined"!=typeof t&&null!==t&&!isNaN(t)&&isFinite(t)&&(n=!0),n||(l=!1)}catch(i){console.error(i),l=!1}return l?void 0:!0}),!l){var c=s.validation.pattern,f=o.hints.listOfDoubles;t.isValid=!1,t.message=c.replace("{label}",t.label).replace("{message}",f)}}}});return t("extend-esri")&&a.setObject("dijit.metadata.types.arcgis.form.GeorectPosElement",l,i),l});