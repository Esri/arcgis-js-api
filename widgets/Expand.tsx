/**
 * The Expand widget acts as a clickable button for opening a widget
 *
 * @module esri/widgets/Expand
 * @beta
 * @since 4.3
 *
 * @see [Expand.tsx (widget view)]({{ JSAPI_BOWER_URL }}/widgets/Expand.tsx)
 * @see [Expand.scss]({{ JSAPI_BOWER_URL }}/themes/base/widgets/_Expand.scss)
 * @see [Sample - Expand widget](../sample-code/widgets-expand/index.html)
 * @see module:esri/widgets/Expand/ExpandViewModel
 * @see module:esri/views/ui/DefaultUI
 *
 * @example
 * // LayerList
 * layerList = new LayerList({
 *   container: document.createElement("div"),
 *   view: view
 * });
 * layerListExpand = new Expand({
 *   expandIconClass: "esri-icon-layer-list",  // see https://developers.arcgis.com/javascript/latest/guide/esri-icon-font/
 *   // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
 *   view: view,
 *   content: layerList.domNode
 * });
 * view.ui.add(layerListExpand, "top-right");
 */

/// <amd-dependency path="../core/tsSupport/declareExtendsHelper" name="__extends" />
/// <amd-dependency path="../core/tsSupport/decorateHelper" name="__decorate" />

import { aliasOf, subclass, declared, property } from "../core/accessorSupport/decorators";

import Widget = require("./Widget");

import {
  accessibleHandler,
  renderable,
  join,
  tsx
} from "./support/widget";

import * as i18nCommon from "dojo/i18n!../nls/common";

import ExpandViewModel = require("./Expand/ExpandViewModel");

import View = require("../views/View");

import _WidgetBase = require("dijit/_WidgetBase");

type ContentSource = string | HTMLElement | Widget | _WidgetBase;

const CSS = {
  base: "esri-expand esri-widget",
  container: "esri-expand__container",
  containerExpanded: "esri-expand__container--expanded",
  panel: "esri-expand__panel",
  button: "esri-widget-button",
  text: "esri-icon-font-fallback-text",
  icon: "esri-collapse__icon",
  iconExpanded: "esri-expand__icon--expanded",
  iconNumber: "esri-expand__icon-number",
  iconNumberExpanded: "esri-expand__icon-number--expanded",
  expandIcon: "esri-icon-expand",
  collapseIcon: "esri-icon-collapse",
  content: "esri-expand__content",
  contentExpanded: "esri-expand__content--expanded",
  expandMask: "esri-expand__mask",
  expandMaskExpanded: "esri-expand__mask--expanded"
};

function isWidget(value: any): value is Widget {
  return value && value.isInstanceOf && value.isInstanceOf(Widget);
}

function isWidgetBase(value: any): value is _WidgetBase {
  // naive type check

  return value &&
    typeof value.postMixInProperties === "function" &&
    typeof value.buildRendering === "function" &&
    typeof value.postCreate === "function" &&
    typeof value.startup === "function";
}

@subclass("esri.widgets.Expand")
class Expand extends declared(Widget) {

  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------

  /**
   * @constructor
   * @alias module:esri/widgets/Expand
   * @extends module:esri/widgets/Widget
   * @param {Object} [properties] - See the [properties](#properties-summary) for a list of all the properties
   *                                that may be passed into the constructor.
   */
  constructor(params?: any) {
    super();
  }

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  autoCollapse
  //----------------------------------

  /**
   * Automatically collapses the expand widget instance when the view's
   * {@link module:esri/views/View#viewpoint viewpoint} updates.
   *
   * @name autoCollapse
   * @instance
   * @type {boolean}
   * @default false
   */
  @aliasOf("viewModel.autoCollapse")
  autoCollapse = false;

  //----------------------------------
  //  collapseIconClass
  //----------------------------------

  /**
   * Icon font used to style the Expand button.
   *
   * @see [Guide - Esri Icon Font](../guide/esri-icon-font/index.html)
   *
   * @since 4.4
   * @name collapseIconClass
   * @instance
   * @type {string}
   */
  @property()
  @renderable()
  collapseIconClass: string = "";

  //----------------------------------
  //  content
  //----------------------------------

  /**
   * The content to display within the expanded Expand widget.
   *
   * @example
   * // A. specify content with a widget
   *    var searchWidget = new Search({
   *      view: view
   *    });
   *
   *    var expand = new Expand({
   *      expandIconClass: "esri-icon-search",
   *      view: view,
   *      content: searchWidget
   *    });
   *    view.ui.add(expand, "bottom-left");
   *
   * @example
   * // B. specify content with a string (of HTML)
   *    content: "Hi, I can have <input placeholder='HTML'/>!"
   *
   * @example
   * // C. specify content with a DOM node
   *    var node = domConstruct.create("div", {
   *      innerHTML: "I'm a a real node!"
   *    });
   *
   *    var expand = new Expand({
   *      expandIconClass: "esri-icon-right-arrow",
   *      view: view,
   *      content: node
   *    });
   *    view.ui.add(expand, "top-right");
   *
   * @example
   * // D. specify content with a Dijit
   *    var button = new Button({  // "dijit/form/Button"
   *      label: "I'm a dijit!"
   *    });
   *    button.startup();
   *
   *    var expand = new Expand({
   *      expandIconClass: "esri-icon-right-arrow",
   *      expanded: true,
   *      view: view,
   *      content: button
   *    });
   *    view.ui.add(expand, "top-left");
   *
   * @name content
   * @instance
   * @type {Node | string | module:esri/widgets/Widget}
   */
  @property()
  @renderable()
  content: ContentSource = "";

  //----------------------------------
  //  expanded
  //----------------------------------

  /**
   * Whether the widget is currently expanded or not.
   *
   * @name expanded
   * @instance
   * @type {boolean}
   * @default false
   * @readonly
   */
  @aliasOf("viewModel.expanded")
  @renderable()
  expanded = false;

  //----------------------------------
  //  iconNumber
  //----------------------------------

  /**
   * A number to display at the corner of the widget to indicate the number of, for example, open issues or unread notices.
   *
   * ![expand widget icon number](../assets/img/apiref/widgets/expand-with-iconnumber.png)
   *
   * @name iconNumber
   * @instance
   * @type {string}
   */
  @property()
  @renderable()
  iconNumber: number = 0;

  //----------------------------------
  //  expandIconClass
  //----------------------------------

  /**
   * Icon font used to style the Expand button.
   *
   * @see [Guide - Esri Icon Font](../guide/esri-icon-font/index.html)
   *
   * @name expandIconClass
   * @instance
   * @type {string}
   */
  @property()
  @renderable()
  expandIconClass: string = "";

  //----------------------------------
  //  expandTooltip
  //----------------------------------

  /**
   * Tooltip to display to indicate Expand widget can be expanded.
   *
   * @name expandTooltip
   * @instance
   * @type {string}
   * @default "Expand" (English locale)
   */
  @property()
  @renderable()
  expandTooltip: string = "";

  //----------------------------------
  //  collapseTooltip
  //----------------------------------

  /**
   * Tooltip to display to indicate Expand widget can be collapsed.
   *
   * @name collapseTooltip
   * @instance
   * @type {string}
   * @default "Collapse" (English locale)
   */
  @property()
  @renderable()
  collapseTooltip: string = "";

  //----------------------------------
  //  view
  //----------------------------------

  /**
   * A reference to the {@link module:esri/views/MapView} or {@link module:esri/views/SceneView}. Set this to link the widget to a specific view.
   *
   * @name view
   * @instance
   * @type {(module:esri/views/MapView | module:esri/views/SceneView)}
   */
  @aliasOf("viewModel.view")
  @renderable()
  view: View = null;

  //----------------------------------
  //  viewModel
  //----------------------------------

  /**
   * The view model for this widget. This is a class that contains all the logic
   * (properties and methods) that controls this widget's behavior. See the
   * {@link module:esri/widgets/Expand/ExpandViewModel} class to access
   * all properties and methods on the widget.
   *
   * @name viewModel
   * @instance
   * @type {module:esri/widgets/Expand/ExpandViewModel}
   * @autocast
   */
  @property({
    type: ExpandViewModel
  })
  @renderable("viewModel.state")
  viewModel: ExpandViewModel = new ExpandViewModel();

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /**
   * Expand the widget.
   *
   * @method
   */
  public expand(): void {
    this.viewModel.expanded = true;
  }

  /**
   * Collapse the widget.
   *
   * @method
   */
  public collapse(): void {
    this.viewModel.expanded = false;
  }

  /**
   * Toggle the widget by expanding it if it's collapsed, or collapsing it if it's expanded.
   *
   * @method
   */
  public toggle(): void {
    this.viewModel.expanded = !this.viewModel.expanded;
  }

  render() {
    const expanded = this.viewModel.expanded;

    const expandTooltip = this.expandTooltip || i18nCommon.expand;
    const collapseTooltip = this.collapseTooltip || i18nCommon.collapse;
    const title = expanded ? collapseTooltip : expandTooltip;
    const collapseIconClass = this.collapseIconClass || CSS.collapseIcon;
    const expandIconClass = this.expandIconClass || CSS.expandIcon;

    const expandIconClasses = {
      [CSS.iconExpanded]: expanded,
      [collapseIconClass]: expanded,
      [expandIconClass]: !expanded
    };

    const containerExpanded = {
      [CSS.containerExpanded]: expanded
    };

    const contentClasses = {
      [CSS.contentExpanded]: expanded
    };

    const maskClasses = {
      [CSS.expandMaskExpanded]: expanded
    };

    const iconNumber = this.iconNumber;

    const badgeNumberNode = iconNumber && !expanded ? (
      <span key={"expand__icon-number"}
        class={CSS.iconNumber}>{iconNumber}</span>
    ) : null;

    const expandedBadgeNumberNode = iconNumber && expanded ? (
      <span key={"expand__expand-icon-number"}
        class={join(CSS.iconNumber, CSS.iconNumberExpanded)}>{iconNumber}</span>
    ) : null;

    return (
      <div class={CSS.base}>
        <div
          bind={this}
          onclick={this._toggle}
          class={CSS.expandMask}
          classes={maskClasses}></div>
        <div class={CSS.container} classes={containerExpanded}>
          <div class={CSS.panel}>
            <div bind={this}
              onclick={this._toggle}
              onkeydown={this._toggle}
              aria-label={title}
              title={title}
              role="button"
              tabindex="0"
              class={CSS.button}>
              {badgeNumberNode}
              <span aria-hidden="true" class={CSS.icon} classes={expandIconClasses} />
              <span class={CSS.text}>{title}</span>
            </div>
            {expandedBadgeNumberNode}
          </div>
          <div class={CSS.content} classes={contentClasses} bind={this}>
            {this._renderContent()}
          </div>
        </div>
      </div>
    );
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  @accessibleHandler()
  private _toggle() {
    this.toggle();
  }

  private _renderContent(): any {
    const content = this.content;

    if (typeof content === "string") {
      return <div innerHTML={content} />;
    }

    if (isWidget(content)) {
      return content.render();
    }

    if (content instanceof HTMLElement) {
      return <div bind={content} afterCreate={this._attachToNode} />;
    }

    if (isWidgetBase(content)) {
      return <div bind={content.domNode} afterCreate={this._attachToNode} />;
    }

    return null;
  }

  private _attachToNode(this: HTMLElement, node: HTMLElement) {
    const content: HTMLElement = this;
    node.appendChild(content);
  }
}

export = Expand;
