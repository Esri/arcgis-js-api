define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../base/Descriptor","../../../form/Tabs","../../../form/iso/AbstractObject","../../../form/iso/ObjectReference","../gmd/citation/ResourceCitation","../gmd/citation/ResourceContact","../gmd/constraints/ResourceConstraints","../gmd/identification/ResourceDescription","../gmd/identification/ResourceThumbnail","../gmd/identification/ResourceKeywords","./ServiceResourceTab","dojo/text!./templates/ServiceIdentification.html","../../../../../kernel"],function(e,t,i,o,n,r,c,s,a,d,m,f,b,u,g,j){var R=e(o,{templateString:g});return i("extend-esri")&&t.setObject("dijit.metadata.types.iso.srv.ServiceIdentification",R,j),R});