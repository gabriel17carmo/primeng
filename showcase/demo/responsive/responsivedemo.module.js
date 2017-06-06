"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var responsivedemo_1 = require("./responsivedemo");
var responsivedemo_routing_module_1 = require("./responsivedemo-routing.module");
var inputtext_1 = require("../../../components/inputtext/inputtext");
var inputtextarea_1 = require("../../../components/inputtextarea/inputtextarea");
var calendar_1 = require("../../../components/calendar/calendar");
var autocomplete_1 = require("../../../components/autocomplete/autocomplete");
var splitbutton_1 = require("../../../components/splitbutton/splitbutton");
var dropdown_1 = require("../../../components/dropdown/dropdown");
var password_1 = require("../../../components/password/password");
var listbox_1 = require("../../../components/listbox/listbox");
var radiobutton_1 = require("../../../components/radiobutton/radiobutton");
var dialog_1 = require("../../../components/dialog/dialog");
var panel_1 = require("../../../components/panel/panel");
var datatable_1 = require("../../../components/datatable/datatable");
var datagrid_1 = require("../../../components/datagrid/datagrid");
var carousel_1 = require("../../../components/carousel/carousel");
var orderlist_1 = require("../../../components/orderlist/orderlist");
var picklist_1 = require("../../../components/picklist/picklist");
var menu_1 = require("../../../components/menu/menu");
var panelmenu_1 = require("../../../components/panelmenu/panelmenu");
var tabview_1 = require("../../../components/tabview/tabview");
var tree_1 = require("../../../components/tree/tree");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var ResponsiveDemoModule = (function () {
    function ResponsiveDemoModule() {
    }
    return ResponsiveDemoModule;
}());
ResponsiveDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            responsivedemo_routing_module_1.ResponsiveDemoRoutingModule,
            inputtext_1.InputTextModule,
            inputtextarea_1.InputTextareaModule,
            calendar_1.CalendarModule,
            autocomplete_1.AutoCompleteModule,
            splitbutton_1.SplitButtonModule,
            password_1.PasswordModule,
            dropdown_1.DropdownModule,
            listbox_1.ListboxModule,
            radiobutton_1.RadioButtonModule,
            dialog_1.DialogModule,
            panel_1.PanelModule,
            datatable_1.DataTableModule,
            datagrid_1.DataGridModule,
            carousel_1.CarouselModule,
            orderlist_1.OrderListModule,
            picklist_1.PickListModule,
            menu_1.MenuModule,
            panelmenu_1.PanelMenuModule,
            tree_1.TreeModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            responsivedemo_1.ResponsiveDemo
        ]
    })
], ResponsiveDemoModule);
exports.ResponsiveDemoModule = ResponsiveDemoModule;
//# sourceMappingURL=responsivedemo.module.js.map