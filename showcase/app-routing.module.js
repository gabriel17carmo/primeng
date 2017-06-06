"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var homepage_component_1 = require("./homepage.component");
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: '', component: homepage_component_1.HomePageComponent },
                { path: 'setup', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./setup/setup.module')['SetupModule']);
                        });
                    }); } },
                { path: 'theming', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./theming/theming.module')['ThemingModule']);
                        });
                    }); } },
                { path: 'accordion', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/accordion/accordiondemo.module')['AccordionDemoModule']);
                        });
                    }); } },
                { path: 'autocomplete', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/autocomplete/autocompletedemo.module')['AutoCompleteDemoModule']);
                        });
                    }); } },
                { path: 'blockui', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/blockui/blockuidemo.module')['BlockUIDemoModule']);
                        });
                    }); } },
                { path: 'captcha', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/captcha/captchademo.module')['CaptchaDemoModule']);
                        });
                    }); } },
                { path: 'breadcrumb', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/breadcrumb/breadcrumbdemo.module')['BreadcrumbDemoModule']);
                        });
                    }); } },
                { path: 'button', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/button/buttondemo.module')['ButtonDemoModule']);
                        });
                    }); } },
                { path: 'calendar', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/calendar/calendardemo.module')['CalendarDemoModule']);
                        });
                    }); } },
                { path: 'carousel', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/carousel/carouseldemo.module')['CarouselDemoModule']);
                        });
                    }); } },
                { path: 'chart', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/chart/chartdemo.module')['ChartDemoModule']);
                        });
                    }); } },
                { path: 'checkbox', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/checkbox/checkboxdemo.module')['CheckboxDemoModule']);
                        });
                    }); } },
                { path: 'chips', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/chips/chipsdemo.module')['ChipsDemoModule']);
                        });
                    }); } },
                { path: 'codehighlighter', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/codehighlighter/codehighlighterdemo.module')['CodeHighlighterDemoModule']);
                        });
                    }); } },
                { path: 'confirmdialog', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/confirmdialog/confirmdialogdemo.module')['ConfirmDialogDemoModule']);
                        });
                    }); } },
                { path: 'contextmenu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/contextmenu/contextmenudemo.module')['ContextMenuDemoModule']);
                        });
                    }); } },
                { path: 'datagrid', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/datagrid/datagriddemo.module')['DataGridDemoModule']);
                        });
                    }); } },
                { path: 'datalist', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/datalist/datalistdemo.module')['DataListDemoModule']);
                        });
                    }); } },
                { path: 'datascroller', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/datascroller/datascrollerdemo.module')['DataScrollerDemoModule']);
                        });
                    }); } },
                { path: 'datatable', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/datatable/datatabledemo.module')['DataTableDemoModule']);
                        });
                    }); } },
                { path: 'defer', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/defer/deferdemo.module')['DeferDemoModule']);
                        });
                    }); } },
                { path: 'dialog', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/dialog/dialogdemo.module')['DialogDemoModule']);
                        });
                    }); } },
                { path: 'dragdrop', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/dragdrop/dragdropdemo.module')['DragDropDemoModule']);
                        });
                    }); } },
                { path: 'dropdown', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/dropdown/dropdowndemo.module')['DropdownDemoModule']);
                        });
                    }); } },
                { path: 'editor', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/editor/editordemo.module')['EditorDemoModule']);
                        });
                    }); } },
                { path: 'fieldset', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/fieldset/fieldsetdemo.module')['FieldsetDemoModule']);
                        });
                    }); } },
                { path: 'fileupload', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/fileupload/fileuploaddemo.module')['FileUploadDemoModule']);
                        });
                    }); } },
                { path: 'galleria', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/galleria/galleriademo.module')['GalleriaDemoModule']);
                        });
                    }); } },
                { path: 'gmap', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/gmap/gmapdemo.module')['GMapDemoModule']);
                        });
                    }); } },
                { path: 'grid', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/grid/griddemo.module')['GridDemoModule']);
                        });
                    }); } },
                { path: 'growl', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/growl/growldemo.module')['GrowlDemoModule']);
                        });
                    }); } },
                { path: 'inplace', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/inplace/inplacedemo.module')['InplaceDemoModule']);
                        });
                    }); } },
                { path: 'inputmask', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/inputmask/inputmaskdemo.module')['InputMaskDemoModule']);
                        });
                    }); } },
                { path: 'inputswitch', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/inputswitch/inputswitchdemo.module')['InputSwitchDemoModule']);
                        });
                    }); } },
                { path: 'inputtext', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/inputtext/inputtextdemo.module')['InputTextDemoModule']);
                        });
                    }); } },
                { path: 'inputtextarea', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/inputtextarea/inputtextareademo.module')['InputTextareaDemoModule']);
                        });
                    }); } },
                { path: 'lightbox', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/lightbox/lightboxdemo.module')['LightboxDemoModule']);
                        });
                    }); } },
                { path: 'listbox', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/listbox/listboxdemo.module')['ListboxDemoModule']);
                        });
                    }); } },
                { path: 'megamenu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/megamenu/megamenudemo.module')['MegaMenuDemoModule']);
                        });
                    }); } },
                { path: 'menu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/menu/menudemo.module')['MenuDemoModule']);
                        });
                    }); } },
                { path: 'menubar', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/menubar/menubardemo.module')['MenubarDemoModule']);
                        });
                    }); } },
                { path: 'menumodel', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/menumodel/menumodeldemo.module')['MenuModelDemoModule']);
                        });
                    }); } },
                { path: 'messages', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/messages/messagesdemo.module')['MessagesDemoModule']);
                        });
                    }); } },
                { path: 'multiselect', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/multiselect/multiselectdemo.module')['MultiSelectDemoModule']);
                        });
                    }); } },
                { path: 'orderlist', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/orderlist/orderlistdemo.module')['OrderListDemoModule']);
                        });
                    }); } },
                { path: 'overlaypanel', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/overlaypanel/overlaypaneldemo.module')['OverlayPanelDemoModule']);
                        });
                    }); } },
                { path: 'paginator', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/paginator/paginatordemo.module')['PaginatorDemoModule']);
                        });
                    }); } },
                { path: 'panel', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/panel/paneldemo.module')['PanelDemoModule']);
                        });
                    }); } },
                { path: 'panelmenu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/panelmenu/panelmenudemo.module')['PanelMenuDemoModule']);
                        });
                    }); } },
                { path: 'password', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/password/passworddemo.module')['PasswordDemoModule']);
                        });
                    }); } },
                { path: 'picklist', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/picklist/picklistdemo.module')['PickListDemoModule']);
                        });
                    }); } },
                { path: 'progressbar', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/progressbar/progressbardemo.module')['ProgressBarDemoModule']);
                        });
                    }); } },
                { path: 'radiobutton', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/radiobutton/radiobuttondemo.module')['RadioButtonDemoModule']);
                        });
                    }); } },
                { path: 'rating', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/rating/ratingdemo.module')['RatingDemoModule']);
                        });
                    }); } },
                { path: 'responsive', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/responsive/responsivedemo.module')['ResponsiveDemoModule']);
                        });
                    }); } },
                { path: 'schedule', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/schedule/scheduledemo.module')['ScheduleDemoModule']);
                        });
                    }); } },
                { path: 'selectbutton', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/selectbutton/selectbuttondemo.module')['SelectButtonDemoModule']);
                        });
                    }); } },
                { path: 'slidemenu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/slidemenu/slidemenudemo.module')['SlideMenuDemoModule']);
                        });
                    }); } },
                { path: 'slider', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/slider/sliderdemo.module')['SliderDemoModule']);
                        });
                    }); } },
                { path: 'spinner', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/spinner/spinnerdemo.module')['SpinnerDemoModule']);
                        });
                    }); } },
                { path: 'splitbutton', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/splitbutton/splitbuttondemo.module')['SplitButtonDemoModule']);
                        });
                    }); } },
                { path: 'steps', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/steps/stepsdemo.module')['StepsDemoModule']);
                        });
                    }); } },
                { path: 'tabmenu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/tabmenu/tabmenudemo.module')['TabMenuDemoModule']);
                        });
                    }); } },
                { path: 'tabview', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/tabview/tabviewdemo.module')['TabViewDemoModule']);
                        });
                    }); } },
                { path: 'terminal', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/terminal/terminaldemo.module')['TerminalDemoModule']);
                        });
                    }); } },
                { path: 'tieredmenu', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/tieredmenu/tieredmenudemo.module')['TieredMenuDemoModule']);
                        });
                    }); } },
                { path: 'togglebutton', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/togglebutton/togglebuttondemo.module')['ToggleButtonDemoModule']);
                        });
                    }); } },
                { path: 'toolbar', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/toolbar/toolbardemo.module')['ToolbarDemoModule']);
                        });
                    }); } },
                { path: 'tooltip', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/tooltip/tooltipdemo.module')['TooltipDemoModule']);
                        });
                    }); } },
                { path: 'tree', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/tree/treedemo.module')['TreeDemoModule']);
                        });
                    }); } },
                { path: 'treetable', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/treetable/treetabledemo.module')['TreeTableDemoModule']);
                        });
                    }); } },
                { path: 'tristatecheckbox', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/tristatecheckbox/tristatecheckboxdemo.module')['TriStateCheckboxDemoModule']);
                        });
                    }); } },
                { path: 'validation', loadChildren: function () { return new Promise(function (resolve) {
                        require.ensure([], function (require) {
                            resolve(require('./demo/validation/validationdemo.module')['ValidationDemoModule']);
                        });
                    }); } }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map