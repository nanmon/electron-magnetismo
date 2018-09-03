import React from 'react';
import _ from 'lodash';

class Sidebar extends React.Component {

    chargesAdded = 0;

    state = {
        x: { value: 0 },
        y: { value: 0 },
        charge: { value: 0 }
    }

    onChange(field) {
        return e => {
            const value = e.currentTarget.value;
            let error = null;
            if (value !== 0 && !value) error = "NaN";
            this.setState({ [field]: { value, error } });
        }
    }

    submit = () => {
        const hasError = _.findKey(this.state, 'error');
        if (hasError) return;
        this.props.onSubmit({
            name: 'q' + (this.chargesAdded++),
            x: Number(this.state.x.value),
            y: Number(this.state.y.value),
            charge: Number(this.state.charge.value)
        });
        this.setState({
            x: { value: 0 },
            y: { value: 0 },
            charge: { value: 0 }
        })
    }

    render() {
        return (
            <div className="Sidebar" style={{width: "320px"}}>
                <div className="media new-charge">
                    <div className="media-content">
                        {/* <div className="field">
                            <div className="control">
                                <input 
                                    className="input is-small" 
                                    value={this.state.name.value}
                                    onChange={this.onChange('name')}
                                />
                            </div>
                        </div> */}
                        <div className="field has-addons" style={{maxWidth: "320px"}}>
                            <div className="control">
                                <button className="button is-static is-small">
                                    q{this.chargesAdded} = 
                                </button>
                            </div>
                            <div className="control">
                                <input 
                                    className="input is-small" 
                                    value={this.state.charge.value}
                                    onChange={this.onChange('charge')}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-static is-small">
                                    C, (
                                </button>
                            </div>
                            <div className="control">
                                <input 
                                    className="input is-small" 
                                    value={this.state.x.value}
                                    onChange={this.onChange('x')}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-static is-small">
                                    m,
                                </button>
                            </div>
                            <div className="control">
                                <input 
                                    className="input is-small" 
                                    value={this.state.y.value}
                                    onChange={this.onChange('y')}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-static is-small">
                                    m)
                                </button>
                            </div>
                        </div>
                        <button className="button is-small" onClick={this.submit}>Agregar carga</button>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default Sidebar;