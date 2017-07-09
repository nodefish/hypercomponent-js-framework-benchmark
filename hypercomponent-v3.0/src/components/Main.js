'use strict';

const HyperComponent = require('hypercomponent');
import { Store } from '../Store';
import { Row } from './Row';

var startTime;
var lastMeasure;
var startMeasure = function(name) {
    startTime = performance.now();
    lastMeasure = name;
}

const stopMeasure = function() {
    var last = lastMeasure;
    if (lastMeasure) {
        window.setTimeout(function() {
            lastMeasure = null;
            const stop = performance.now();
            const duration = 0;
            console.log(last + " took " + (stop - startTime));
        }, 0);
    }
}

export class Main extends HyperComponent {
    constructor(props) {
        super(props);
        this.state = { store: new Store() };
        this.start = 0;
        this.length = 0;
        window.app = this;
    }
    printDuration() {
        stopMeasure();
    }
    componentDidUpdate() {
        this.printDuration();
    }
    componentDidMount() {
        this.printDuration();
    }
    run() {
        startMeasure("run");
        this.state.store.run();
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    add() {
        startMeasure("add");
        this.state.store.add();
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    update() {
        startMeasure("update");
        this.state.store.update();
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    select(id) {
        startMeasure("select");
        this.state.store.select(id);
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    delete(id) {
        startMeasure("delete");
        this.state.store.delete(id);
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    runLots() {
        startMeasure("runLots");
        this.state.store.runLots();
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    clear() {
        startMeasure("clear");
        this.state.store.clear();
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }
    swapRows() {
        startMeasure("swapRows");
        this.state.store.swapRows();
        this.setState({ store: this.state.store });
        this.componentDidUpdate();
    }

    render() {
        /*
        const rows = this.state.store.data.map(d => this.wire(d)
            `<tr class="${d.id === this.state.store.selected ? 'danger':''}">
                <td class='col-md-1'>${d.id}</td>
                <td class='col-md-4'>
                    <a onclick="${this.select.bind(this, d.id)}">${d.label}</a>
                </td>
                <td class='col-md-1'>
                    <a onclick="${this.delete.bind(this, d.id)}"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>
                </td>
                <td class='col-md-6'></td>
            </tr>`
        );
        */

        return this.html `
            <div class='container'>
                <div class='jumbotron'>
                    <div class='row'>
                        <div class='col-md-6'>
                            <h1>HyperComponent v3</h1>
                        </div>
                        <div class='col-md-6'>
                            <div class='row'>
                                <div class='col-sm-6 smallpad'>
                                    <button type='button' class='btn btn-primary btn-block' id='run' onclick="${this.run.bind(this)}">Create 1,000 rows</button>
                                </div>
                                <div class='col-sm-6 smallpad'>
                                    <button type='button' class='btn btn-primary btn-block' id='runlots' onclick="${this.runLots.bind(this)}">Create 10,000 rows</button></div>
                                <div class='col-sm-6 smallpad'>
                                    <button type='button' class='btn btn-primary btn-block' id='add' onclick="${this.add.bind(this)}">Append 1,000 rows</button>
                                </div>
                                <div class='col-sm-6 smallpad'>
                                    <button type='button' class='btn btn-primary btn-block' id='update' onclick="${this.update.bind(this)}">Update every 10th row</button>
                                </div>
                                <div class='col-sm-6 smallpad'>
                                    <button type='button' class='btn btn-primary btn-block' id='clear' onclick="${this.clear.bind(this)}">Clear</button>
                                </div>
                                <div class='col-sm-6 smallpad'>
                                    <button type='button' class='btn btn-primary btn-block' id="swaprows" onclick="${this.swapRows.bind(this)}">Swap Rows</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table class='table table-hover table-striped test-data'>
                    <tbody>
                        ${this.child(Row, {parent: this, store: this.state.store})}
                    </tbody>
                </table>
                <span class='preloadicon glyphicon glyphicon-remove' aria-hidden='true'></span>
            </div>`;
    }
}