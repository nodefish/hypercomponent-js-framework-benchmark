'use strict';

const HyperComponent = require('hypercomponent');

export class Row extends HyperComponent {
    constructor(props) {
        super(props);
        this.parent = this.props.parent;
    }
    //  shouldComponentUpdate(nextProps, nextState) {
    //    return nextProps.data !== this.props.data || nextProps.styleClass !== this.props.styleClass;
    //  }
    //	componentDidUpdate() {
    //		window.rowsUpdated++;
    //	}
    //	componentDidMount() {
    //		window.rowsMounted++;
    //	}
    select(id) {
        this.parent.select.bind(this.parent, id)();
    }
    delete(id) {
        return this.parent.delete.bind(this.parent, id);
    }

    render() {
        const store = this.props.store;
        const data = store.data;
        return this.html `<tr class="${data.id === store.selected ? 'danger':''}">
                  <td class='col-md-1'>${data.id}</td>
                  <td class='col-md-4'>
                      <a onclick="${this.select.bind(this, data.id)}">${data.label}</a>
                  </td>
                  <td class='col-md-1'>
                      <a onclick="${this.delete.bind(this, data.id)}"><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a>
                  </td>
                  <td class='col-md-6'></td>
              </tr>`
    }
}