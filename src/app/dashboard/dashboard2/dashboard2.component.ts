import { Component } from '@angular/core';
import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from "ng-chartist";
import { MainService } from '../../shared/services/main.service';
import * as _ from 'lodash'
import * as chartsData from '../../shared/data/chartjs';
declare var require: any;

const data: any = require('../../shared/data/chartist.json');



export interface Chart {
    type: ChartType;
    data: Chartist.IChartistData;
    options?: any;
    responsiveOptions?: any;
    events?: ChartEvent;
}

@Component({
    selector: 'app-dashboard2',
    templateUrl: './dashboard2.component.html',
    styleUrls: ['./dashboard2.component.scss']
})

export class Dashboard2Component {
    // Line chart configuration Starts
    WidgetlineChart: Chart = {
        type: 'Line', data: data['WidgetlineChart2'],
        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 50,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true
        },
    };
    // Line chart configuration Ends

    // Line chart configuration Starts
    WidgetlineChart1: Chart = {
        type: 'Line', data: data['WidgetlineChart3'],
        options: {
            axisX: {
                showGrid: false,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 50,
                showLabel: false,
                offset: 0,
            },
            fullWidth: true,
            chartPadding: { top: 0, right: 0, bottom: 10, left: 0 }
        },
        events: {
            created(data: any): void {

                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'widgradient',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(255, 255, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(56, 184, 242, 1)'
                });

            },

        },
    };
    // Line chart configuration Ends

    // Line chart configuration Starts
    WidgetlineChart2: Chart = {
        type: 'Line', data: data['WidgetlineChart'],
        options: {
            axisX: {
                showGrid: true,
                showLabel: false,
                offset: 0,
            },
            axisY: {
                showGrid: false,
                low: 40,
                showLabel: false,
                offset: 0,
            },
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            fullWidth: true
        },
        events: {
            created(data: any): void {

                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'widgradient1',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-color': 'rgba(0, 201, 255,1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-color': 'rgba(17,228,183, 1)'
                });
            },

        },
    };
    // Line chart configuration Ends

    // Donut chart configuration Starts
    DonutChart1: Chart = {
        type: 'Pie',
        data: data['DashboardDonut'],
        options: {
            donut: true,
            donutWidth: 3,
            startAngle: 0,
            chartPadding: 25,
            labelInterpolationFnc: function (value) {
                return '\ue9c9';
            }
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    if (data.index === 0) {
                        data.element.attr({
                            dx: data.element.root().width() / 2,
                            dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                            class: 'ct-label',
                            'font-family': 'feather'
                        });
                    } else {
                        data.element.remove();
                    }
                }
            }
        }
    };
    // Donut chart configuration Ends

    // Donut chart configuration Starts
    DonutChart2: Chart = {
        type: 'Pie',
        data: data['DashboardDonut'],
        options: {
            donut: true,
            donutWidth: 3,
            startAngle: 90,
            chartPadding: 25,
            labelInterpolationFnc: function (value) {
                return '\ue9e7';
            }
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    if (data.index === 0) {
                        data.element.attr({
                            dx: data.element.root().width() / 2,
                            dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                            class: 'ct-label',
                            'font-family': 'feather'
                        });
                    } else {
                        data.element.remove();
                    }
                }
            }
        }
    };
    // Donut chart configuration Ends

    // Donut chart configuration Starts
    DonutChart3: Chart = {
        type: 'Pie',
        data: data['DashboardDonut'],
        options: {
            donut: true,
            donutWidth: 3,
            startAngle: 270,
            chartPadding: 25,
            labelInterpolationFnc: function (value) {
                return '\ue964';
            }
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    if (data.index === 0) {
                        data.element.attr({
                            dx: data.element.root().width() / 2,
                            dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                            class: 'ct-label',
                            'font-family': 'feather'
                        });
                    } else {
                        data.element.remove();
                    }
                }
            }
        }
    };
    // Donut chart configuration Ends

    // Line area chart configuration Starts
    lineAreaChart: Chart = {
        type: 'Line',
        data: data['lineArea3'],
        options: {
            low: 0,
            showArea: true,
            fullWidth: true,
            onlyInteger: true,
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            axisX: {
                showGrid: false
            }
        },
        events: {
            created(data: any): void {
                var defs = data.svg.elem('defs');
                defs.elem('linearGradient', {
                    id: 'gradient',
                    x1: 0,
                    y1: 1,
                    x2: 0,
                    y2: 0
                }).elem('stop', {
                    offset: 0,
                    'stop-opacity': '0.2',
                    'stop-color': 'rgba(255, 255, 255, 1)'
                }).parent().elem('stop', {
                    offset: 1,
                    'stop-opacity': '0.2',
                    'stop-color': 'rgba(38, 198, 218, 1)'
                });
            },
            draw(data: any): void {

                var circleRadius = 6;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: 'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
            }
        },
    };
    // Line area chart configuration Ends

    // Line chart configuration Starts
    lineChart2: Chart = {
        type: 'Line', data: data['line2'],
        options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            fullWidth: true,
        },
        responsiveOptions: [
            ['screen and (max-width: 640px) and (min-width: 381px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }],
            ['screen and (max-width: 380px)', {
                axisX: {
                    labelInterpolationFnc: function (value, index) {
                        return index % 3 === 0 ? value : null;
                    }
                }
            }]
        ],
        events: {
            draw(data: any): void {
                var circleRadius = 6;
                if (data.type === 'point') {
                    var circle = new Chartist.Svg('circle', {
                        cx: data.x,
                        cy: data.y,
                        r: circleRadius,
                        class: 'ct-point-circle'
                    });
                    data.element.replace(circle);
                }
                else if (data.type === 'label') {
                    // adjust label position for rotation
                    const dX = data.width / 2 + (30 - data.width)
                    data.element.attr({ x: data.element.attr('x') - dX })
                }
            }
        },

    };
    // Line chart configuration Ends

    // Line chart configuration Starts
    lineChart1: Chart = {
        type: 'Line', data: data['line1'],
        options: {
            axisX: {
                showGrid: false,
            },
            axisY: {
                low: 0,
                scaleMinSpace: 50,
            },
            fullWidth: true
        },
        events: {
            draw(data: any): void {
                if (data.type === 'label') {
                    // adjust label position for rotation
                    const dX = data.width / 2 + (30 - data.width)
                    data.element.attr({ x: data.element.attr('x') - dX })
                }
            }
        },
    };
    // Line chart configuration Ends

    // Doughnut
    doughnutChartLabels: string[] = ['Case', 'Death', 'Recovered', 'Positive']
    doughnutChartData = []
    doughnutChartType = chartsData.doughnutChartType;
    doughnutChartColors = chartsData.doughnutChartColors;
    doughnutChartOptions = chartsData.doughnutChartOptions;

    totalCases: any
    toatalDeath: any
    totalRecovered: any
    active_cases: any
    statewise: any
    statewiseData: any
    districtdata: any
    districtlist = []
    selectedDistId: number;
    selectedDistName: string
    statedata: any
    selecteddistdata: any
    dist_name: any
    dist_totalCases: any
    dist_toatalDeath: any
    dist_totalRecovered: any
    dist_active_cases: any
    constructor(private mainService: MainService) {

    }
    ngOnInit() {
        // this.getIndianCases()
        this.getStateWiseData()
    }
    getIndianCases() {
        let country = 'india'
        setTimeout(() => {
            this.mainService.getRecordByCountry(country).subscribe(res => {
                if (res) {
                    this.totalCases = res['report'].cases
                    this.toatalDeath = res['report'].deaths
                    this.totalRecovered = res['report'].recovered
                    this.active_cases = res['report'].active_cases[0].currently_infected_patients
                }
            })
        }, 100);
    }
    getStateWiseData() {
        setTimeout(() => {
            this.mainService.getIndianDetails().subscribe(res => {
                if (res) {
                    this.statewise = res['statewise']
                    this.totalCases = this.statewise[0].confirmed
                    this.toatalDeath = this.statewise[0].deaths
                    this.totalRecovered = this.statewise[0].recovered
                    this.active_cases = this.statewise[0].active
                    this.statewiseData = _.find(this.statewise, { state: 'Total' })
                    this.doughnutChartData.push(this.totalCases, this.toatalDeath, this.totalRecovered, this.active_cases)

                }
            })
        }, 10);
    }

    getStateData(code) {
        this.doughnutChartData = []
        this.districtlist = []
        let tempDistList = [];
        this.statewiseData = _.find(this.statewise, { state: code });
        this.doughnutChartData.push(this.statewiseData.confirmed, this.statewiseData.deaths, this.statewiseData.recovered, this.statewiseData.active)
        setTimeout(() => {
            this.mainService.getIndiaStateDistDetails().subscribe(res => {
                if (res) {
                    this.districtdata = _.find(res, { state: code })
                    for (let i = 0; i < this.districtdata['districtData'].length; i++) {
                        tempDistList.push({ 'id': i, 'name': this.districtdata['districtData'][i]['district'] })
                    }
                    this.districtlist = tempDistList
                }
            })
        }, 100);

    }
    chartHovered(e) {

    }
    chartClicked(e) { }
    getDistDetails(name) {
        this.selecteddistdata = _.find(this.districtdata['districtData'], { district: name });
        this.dist_name = this.selecteddistdata.district
        this.dist_totalCases = this.selecteddistdata.confirmed
    }
    scrollTo() {
        var elmnt = document.getElementById("statistics");
        elmnt.scrollIntoView();
    }
}