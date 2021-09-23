/**
 * This class allows you to display custom content for each {@link module:esri/widgets/LayerList/ListItem}
 * in the {@link module:esri/widgets/LayerList} widget. ListItemPanel objects typically aren't constructed.
 * Rather, they are modified using the {@link module:esri/widgets/LayerList#listItemCreatedFunction listItemCreatedFunction}
 * property in the {@link module:esri/widgets/LayerList} widget.
 *
 * A common scenario for using ListItemPanel is to display a {@link module:esri/widgets/Legend} widget within
 * each list item.
 *
 * @module esri/widgets/LayerList/ListItemPanel
 * @since 4.7
 * @noconstructor
 *
 * @example
 * const layerList = new LayerList({
 *   view: view,
 *   listItemCreatedFunction: function(event){
 *     const item = event.item;
 *     // displays the legend for each layer list item
 *     item.panel = {
 *       content: "legend"
 *     };
 *   }
 * });
 *
 * @see module:esri/widgets/LayerList
 * @see module:esri/widgets/LayerList/ListItem
 * @see {@link module:esri/widgets/LayerList/ListItem#panel ListItem.panel}
 */

// esri.core
import Handles from "esri/../core/Handles";
import { IdentifiableMixin } from "esri/../core/Identifiable";
import * as watchUtils from "esri/../core/watchUtils";

// esri.core.accessorSupport
import { property, subclass } from "esri/../core/accessorSupport/decorators";

// esri.widgets
import Legend from "esri/Legend";
import Widget from "esri/Widget";

// esri.widgets.LayerList
import ListItem from "esri/widgets/ListItem";

// esri.widgets.support
import { VNode } from "esri/support/interfaces";
import { isWidget, tsx } from "esri/support/widget";

type ListItemPanelContent = "legend" | Widget | HTMLElement | String;
type ListItemPanelContents = ListItemPanelContent | ListItemPanelContent[];

const CSS = {
  base: "esri-layer-list-panel",
  content: "esri-layer-list-panel__content",
  contentLegend: "esri-layer-list-panel__content--legend",
  contentString: "esri-layer-list-panel__content--string",
  contentElement: "esri-layer-list-panel__content--html-element",
  contentWidget: "esri-layer-list-panel__content--widget"
};

const LEGEND_REGISTRY_KEY = "legends";

@subclass("esri.widgets.LayerList.ListItemPanel")
class ListItemPanel extends IdentifiableMixin(Widget) {
  /**
   * @constructor
   * @alias module:esri/widgets/LayerList/ListItemPanel
   */
  constructor(value?: any, parentNode?: string | Element) {
    super(value, parentNode);
  }

  protected override initialize(): void {
    this.own([
      watchUtils.init<ListItemPanelContents>(this, "content", (content) =>
        this._createLegend(content)
      )
    ]);
  }

  override destroy(): void {
    const { _legend } = this;

    _legend && _legend.destroy();

    this._legend = null;
  }

  //--------------------------------------------------------------------------
  //
  //  Variables
  //
  //--------------------------------------------------------------------------

  private _legend: Legend = null;

  private _handles = new Handles();

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------

  //----------------------------------
  //  className
  //----------------------------------

  /**
   * Adds a CSS class used to style a node that represents the panel. Clicking the node will
   * open and close the panel. Typically, an icon font is used for this property.
   * [Esri Icon Fonts](../guide/esri-icon-font/index.html) are
   * automatically made available and can be used to represent this content.
   * To use one of these provided icon fonts, you must
   * prefix the class name with `esri-`. For example, the default icon font is `esri-icon-layer-list`.
   *
   * @type {string}
   * @name className
   * @instance
   * @default esri-icon-layer-list
   */
  @property()
  get className(): string {
    const { image } = this;
    const firstWidget = this._getFirstWidget();
    return this._get("className") || (!image && firstWidget) ? firstWidget.iconClass : "";
  }
  set className(value: string) {
    if (value === undefined) {
      this._clearOverride("className");
      return;
    }

    this._override("className", value);
  }

  //----------------------------------
  //  content
  //----------------------------------

  /**
   * The content displayed in the ListItem panel. This can be raw text, a
   * {@link module:esri/widgets/Widget} instance, an HTML Element, or an array
   * of any of those elements.
   *
   * If the text `legend` is used, then an instance of the {@link module:esri/widgets/Legend}
   * widget is placed in the content.
   *
   * @name content
   * @instance
   * @type { module:esri/widgets/Widget | HTMLElement | String | Array }
   *
   * @example
   * const layerList = new LayerList({
   *   view: view,
   *   listItemCreatedFunction: function(event){
   *     const item = event.item;
   *     // displays the legend for each layer list item
   *     item.panel = {
   *       content: "legend"
   *     };
   *   }
   * });
   */
  @property()
  content: ListItemPanelContents = null;

  //----------------------------------
  //  image
  //----------------------------------

  /**
   * The URL or data URI of an image used to represent the panel.
   * This property will be used as a background image for the node.
   * If neither `image` nor `className` are specified, a default icon
   * ![default icon](../assets/img/guide/whats-new/41/default-action.png) will display.
   *
   * @name image
   * @instance
   * @type {string}
   */
  @property()
  image: string = null;

  //----------------------------------
  //  listItem
  //----------------------------------

  /**
   * The panel's parent ListItem that represents a layer in the map.
   *
   * @name listItem
   * @instance
   * @type {module:esri/widgets/LayerList/ListItem}
   */
  @property()
  listItem: ListItem = null;

  //----------------------------------
  //  title
  //----------------------------------

  /**
   * The title of the panel. By default, this title matches the
   * {@link module:esri/widgets/ListItem#title ListItem's title}. Changing this
   * value will not change the title of the ListItem in the LayerList.
   *
   * @name title
   * @instance
   * @type {string}
   */
  @property()
  get title(): string {
    const firstWidget = this._getFirstWidget();
    return this._get("title") || firstWidget ? firstWidget.label : "";
  }
  set title(value: string) {
    if (value === undefined) {
      this._clearOverride("title");
      return;
    }

    this._override("title", value);
  }

  //----------------------------------
  //  open
  //----------------------------------

  /**
   * Indicates if the panel's content is open and visible to the user. This is
   * different from the
   * [visible](#visible) property, which is used for toggling the visibility of the icon
   * used to control whether the content is expanded or collapsed.
   *
   * @name open
   * @instance
   * @type {boolean}
   * @default false
   *
   * @example
   * const layerList = new LayerList({
   *   view: view,
   *   listItemCreatedFunction: function(event){
   *     const item = event.item;
   *     // displays the legend for each layer list item
   *     // The legend is open by default, but the user
   *     // is prevented from collapsing that content
   *     item.panel = {
   *       content: "legend",
   *       open: true,
   *       visible: false
   *     };
   *   }
   * });
   */
  @property()
  open = false;

  //----------------------------------
  //  visible
  //----------------------------------

  /**
   * Indicates if the node containing the [image](#image) or [icon font](#className)
   * is visible to the user. Setting this value to `false` will prevent the user from
   * toggling the visibility of the panel's content. Use [open](#open) to programmatically set
   * the visibility of the panel's content.
   *
   * @name visible
   * @instance
   * @type {boolean}
   * @default true
   *
   * @example
   * const layerList = new LayerList({
   *   view: view,
   *   listItemCreatedFunction: function(event){
   *     const item = event.item;
   *     // displays the legend for each layer list item
   *     // The legend is open by default, but the user
   *     // is prevented from collapsing that content
   *     item.panel = {
   *       content: "legend",
   *       open: true,
   *       visible: false
   *     };
   *   }
   * });
   */
  @property()
  override visible = true;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  override render(): VNode {
    return <div class={CSS.base}>{this._renderContents()}</div>;
  }

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private _renderContent(content: ListItemPanelContent): VNode {
    const { _legend, listItem } = this;

    if (!content) {
      return null;
    }

    if (content === "legend") {
      const canRender = listItem && listItem.view && listItem.layer && _legend;

      return canRender ? (
        <div class={this.classes(CSS.content, CSS.contentLegend)} key={_legend}>
          {_legend.render()}
        </div>
      ) : null;
    }

    if (typeof content === "string") {
      return (
        <div
          class={this.classes(CSS.content, CSS.contentString)}
          key={content}
          innerHTML={content}
        />
      );
    }

    if (isWidget(content)) {
      return (
        <div class={this.classes(CSS.content, CSS.contentWidget)} key={content}>
          {content.render()}
        </div>
      );
    }

    if (content instanceof HTMLElement) {
      return (
        <div
          class={this.classes(CSS.content, CSS.contentElement)}
          key={content}
          bind={content}
          afterCreate={this._attachToNode}
        />
      );
    }

    return null;
  }

  private _renderContents(): VNode {
    const { content } = this;

    if (Array.isArray(content)) {
      return content.map((contentItem) => this._renderContent(contentItem));
    }

    return this._renderContent(content);
  }

  private _getLegendOptions(listItem: ListItem): object {
    if (!listItem) {
      return undefined;
    }

    const { layer, view } = listItem;

    if (!layer || !view) {
      return undefined;
    }

    return {
      view,
      layerInfos: [
        {
          layer,
          title: ""
        }
      ]
    };
  }

  private _createLegend(content: ListItemPanelContents): void {
    const hasLegend = this._hasLegend(content);

    if (!hasLegend || this._legend) {
      return;
    }

    import("../Legend").then(({ default: LegendModule }) => {
      const { _handles, listItem } = this;

      const legend = new LegendModule(this._getLegendOptions(listItem));

      this._legend = legend;
      this.notifyChange("className");
      this.notifyChange("title");

      const legendHandle = watchUtils.init(this, ["listItem.view", "listItem.layer"], () =>
        this._updateLegend(legend)
      );

      _handles.add(legendHandle, LEGEND_REGISTRY_KEY);

      this.scheduleRender();
    });
  }

  private _hasLegend(content: ListItemPanelContents): boolean {
    const legendType = "legend";
    if (content === legendType) {
      return true;
    }

    return Array.isArray(content) ? content.some((item) => item === legendType) : false;
  }

  private _attachToNode(this: HTMLElement, node: HTMLElement): void {
    node.appendChild(this);
  }

  private _updateLegend(legend: Legend): void {
    const { listItem } = this;

    if (!listItem) {
      return;
    }

    const { layer, view } = listItem;

    legend.view = view;
    legend.layerInfos = [
      {
        layer,
        title: null
      }
    ];

    this.scheduleRender();
  }

  private _getWidget(content: ListItemPanelContents): Widget {
    if (content === "legend") {
      return this._legend;
    }

    if (isWidget(content)) {
      return content;
    }

    return null;
  }

  private _getFirstWidget(): Widget {
    const { content } = this;

    if (Array.isArray(content)) {
      let firstWidget: Widget = null;
      content.some((contentItem) => {
        const contentWidget = this._getWidget(contentItem);

        if (contentWidget) {
          firstWidget = contentWidget;
        }

        return !!contentWidget;
      });

      return firstWidget;
    }

    return this._getWidget(content);
  }
}

export default ListItemPanel;
