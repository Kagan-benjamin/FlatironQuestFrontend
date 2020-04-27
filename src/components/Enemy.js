import React from 'react';

const CELL_SIZE = 45;

class Enemy extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <div className="Enemy" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}
export default Enemy