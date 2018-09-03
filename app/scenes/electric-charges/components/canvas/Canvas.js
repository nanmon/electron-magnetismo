import React from 'react';
window.d3 = require('d3');
const functionPlot = require('function-plot');

class Canvas extends React.Component {

    ref = React.createRef();

    componentDidMount() {
        functionPlot({
            target: '#canvas',
            grid: true,
            data: []
        });
    }

    componentDidUpdate() {
        this.ref.current.children[0].remove();
        const { charges, forces } = this.props;
        const points = charges.map(q => ({ 
            title: q.name,
            points: [[q.x, q.y]],
            fnType: 'points',
            graphType: 'scatter',
            color: q.charge > 0 ? 'red' : q.charge < 0 ? 'blue' : 'grey',
            attr: {
                r: Math.max(Math.log(Math.abs(q.charge || 1e-20)) + 20, 3)
            }
        }));
        const vectors = forces.filter(f => f.x !== 0 && f.y !== 0).map(f => ({
            vector: [f.x, f.y],
            offset: [f.q.x, f.q.y],
            graphType: 'polyline',
            fnType: 'vector'
        }));
        functionPlot({
            target: '#canvas',
            grid: true,
            data: [...points, ...vectors]
        });
    }


    render() {
        return (
            <div 
                id="canvas" 
                ref={this.ref}
                style={{
                    height: '100vh',
                    width: 'calc(100vw - 320px)'
                }}
            />
    );
    }
}

export default Canvas;