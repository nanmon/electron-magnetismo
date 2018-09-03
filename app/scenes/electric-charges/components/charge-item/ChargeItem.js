import React from 'react';

class ChargeItem extends React.Component {
    render() {
        const { charge, Fe, onRemove } = this.props
        return (
            <div className="media">
                <div className="media-content">
                    {charge.name} = {charge.charge}C, ({charge.x}m, {charge.y}m)
                    <br/>
                    Fe_{charge.name} = ({Fe.x}, {Fe.y})N
                </div>
                <div className="media-right">
                    <button className="delete" onClick={onRemove}/>
                </div>
            </div>
        );
    }
}

export default ChargeItem;