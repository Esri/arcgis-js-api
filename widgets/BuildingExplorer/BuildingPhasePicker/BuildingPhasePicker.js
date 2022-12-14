/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{isNone as s,unwrapOr as t,unwrap as r,isSome as o}from"../../../core/maybe.js";import{watch as i,initial as a}from"../../../core/reactiveUtils.js";import{property as n}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as h}from"../../../core/accessorSupport/decorators/subclass.js";import c from"../../Widget.js";import{isRTL as l}from"../../support/widgetUtils.js";import{tsx as u}from"../../support/jsxFactory.js";const p={nextPhase:"nextPhase",previousPhase:"previousPhase",currentPhase:"{{value}}"},d="esri-building-phase-picker",_={container:`${d}`,phasesContainer:`${d}__phases-container`,phase:`${d}__phase`,phaseActive:`${d}__phase--active`,phaseCurrent:`${d}__phase--current`,divider:`${d}__divider`,dividerActive:`${d}__divider--active`,arrowLeft:`${d}__arrow-left`,arrowRight:`${d}__arrow-right`};let v=class extends c{constructor(e,t){super(e,t),this._phasesContainer=null,this._shouldScrollCurrentPhaseIntoView=!0,this._shouldFocusCurrentPhase=!1,this._onKeyDown=e=>{const{vm:s}=this;switch(e.key){case"ArrowDown":case"ArrowLeft":e.stopPropagation(),e.preventDefault(),s.previous(),this._shouldFocusCurrentPhase=!0;break;case"ArrowUp":case"ArrowRight":e.stopPropagation(),e.preventDefault(),s.next(),this._shouldFocusCurrentPhase=!0}},this._onArrowLeftClick=()=>{this.vm.previous()},this._onArrowRightClick=()=>{this.vm.next()},this._onPhasesContainerAfterCreate=e=>{this._phasesContainer=e,requestAnimationFrame(this._scrollOrFocusPhase)},this._scrollOrFocusPhase=()=>{const e=this._phasesContainer;if(this.destroyed||s(e))return;const t=e.querySelector(`.${_.phaseCurrent}`);if(t){if(this._shouldScrollCurrentPhaseIntoView){const s=e.offsetWidth,r=t.offsetLeft,o=t.offsetWidth;e.scrollLeft=-s/2+r-o/2,this._shouldScrollCurrentPhaseIntoView=!1}this._shouldFocusCurrentPhase&&(t.focus(),this._shouldFocusCurrentPhase=!1)}}}initialize(){this.own([i((()=>[this._currentPhase,this._phasesContainer,this.container]),(()=>{this._shouldScrollCurrentPhaseIntoView=!0,requestAnimationFrame(this._scrollOrFocusPhase)}),a)])}get _phases(){return this.vm.allowedValues}get _currentPhase(){const{vm:e}=this;return e.enabled?e.value:null}render(){if(this._phases.length<2)return u("div",{key:"no-phases"});const{vm:e,container:s,messages:r}=this,{previousPhase:o,nextPhase:i}=t(r,p),a=l(s);return u("div",{class:this.classes("esri-widget",_.container),key:this,onkeydown:this._onKeyDown},u("button",{type:"button",class:a?_.arrowRight:_.arrowLeft,disabled:!e.hasPrevious,"aria-label":o,title:o,onclick:this._onArrowLeftClick}),u("div",{class:_.phasesContainer,afterCreate:this._onPhasesContainerAfterCreate},this._renderPhaseButtons()),u("button",{type:"button",class:a?_.arrowLeft:_.arrowRight,disabled:!e.hasNext,"aria-label":i,title:i,onclick:this._onArrowRightClick}))}_renderPhaseButtons(){const e=this._phases,s=this._currentPhase,t=[];for(let r=0;r<e.length;++r){const i=e[r],a={phase:i,active:!!o(s)&&i<=s,current:!!o(s)&&i===s};r>0&&t.push(this._renderDivider(a)),t.push(this._renderPhaseButton(a))}return t}_renderPhaseButton({phase:e,active:s,current:t}){const{vm:o}=this,i=r(o.getValueLabel(e));return u("button",{key:`phase-${e}`,class:this.classes(_.phase,{[_.phaseActive]:s,[_.phaseCurrent]:t}),"aria-label":i,title:i,onclick:()=>o.select(e),type:"button"},e)}_renderDivider({phase:e,active:s}){return u("div",{key:`phase-divider-${e}`,class:this.classes(_.divider,{[_.dividerActive]:s})})}};e([n({nonNullable:!0})],v.prototype,"vm",void 0),e([n()],v.prototype,"messages",void 0),e([n()],v.prototype,"_phases",null),e([n()],v.prototype,"_currentPhase",null),e([n()],v.prototype,"_phasesContainer",void 0),v=e([h("esri.widgets.BuildingExplorer.BuildingPhasePicker.BuildingPhasePicker")],v);const P=v;export{P as default};