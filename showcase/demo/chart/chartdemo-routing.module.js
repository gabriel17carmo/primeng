"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var chartdemo_1 = require("./chartdemo");
var piechartdemo_1 = require("./piechart/piechartdemo");
var doughnutchartdemo_1 = require("./doughnutchart/doughnutchartdemo");
var barchartdemo_1 = require("./barchart/barchartdemo");
var linechartdemo_1 = require("./linechart/linechartdemo");
var polarareachartdemo_1 = require("./polarareachart/polarareachartdemo");
var radarchartdemo_1 = require("./radarchart/radarchartdemo");
var ChartDemoRoutingModule = (function () {
    function ChartDemoRoutingModule() {
    }
    return ChartDemoRoutingModule;
}());
ChartDemoRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: '', component: chartdemo_1.ChartDemo },
                { path: 'pie', component: piechartdemo_1.PieChartDemo },
                { path: 'doughnut', component: doughnutchartdemo_1.DoughnutChartDemo },
                { path: 'bar', component: barchartdemo_1.BarChartDemo },
                { path: 'line', component: linechartdemo_1.LineChartDemo },
                { path: 'polararea', component: polarareachartdemo_1.PolarAreaChartDemo },
                { path: 'radar', component: radarchartdemo_1.RadarChartDemo }
            ])
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], ChartDemoRoutingModule);
exports.ChartDemoRoutingModule = ChartDemoRoutingModule;
//# sourceMappingURL=chartdemo-routing.module.js.map