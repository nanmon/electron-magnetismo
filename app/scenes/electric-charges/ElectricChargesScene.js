import React from 'react';

import Sidebar from './components/sidebar/Sidebar';
import Canvas from './components/canvas/Canvas';
import './electric-charges.styles.scss';
import ChargeItem from './components/charge-item/ChargeItem';

const K = 9e9;

class ElectricChargesScene extends React.Component {

    state = {
        charges: []
    }

    onSubmitCharge = charge => {
        const charges = [...this.state.charges, charge];
        this.setState({ charges });
    }

    remove = charge => {
        const charges = [...this.state.charges];
        const index = charges.findIndex(c => c.name === charge.name);
        charges.splice(index, 1);
        this.setState({ charges });
    };

    FeFor(q) {
        let Fe = { x: 0, y: 0, q };
        this.state.charges.forEach(qi => {
            if (qi.name === q.name) return;
            const Fei = this.FeBetween(q, qi);
            Fe.x += Fei.x;
            Fe.y += Fei.y;
        });
        return Fe;
    }

    FeBetween(q1, q2) {
        const x = q1.x - q2.x;
        const y = q1.y - q2.y;
        const r2 = x*x + y*y;
        const magnitude = Math.sqrt(r2);
        const c = K*q1.charge*q2.charge/r2;
        return {
            x: c * x / magnitude,
            y: c * y / magnitude
        };
    }

    render() {
        const forces = this.state.charges.map(q => this.FeFor(q));
        return (
            <div className="ElectricCharges section" style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Sidebar onSubmit={this.onSubmitCharge}>
                    {this.state.charges.map(charge =>
                        <ChargeItem 
                            key={charge.name}
                            charge={charge} 
                            Fe={this.FeFor(charge)}
                            onRemove={() => this.remove(charge)}
                        />
                    )}
                </Sidebar>
                <Canvas 
                    charges={this.state.charges}
                    forces={forces}
                />
            </div>
        );
    }
}

export default ElectricChargesScene;