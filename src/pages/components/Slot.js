import React from 'react';

class Slot extends React.Component {
    render() {
        console.log('this.props.children', this.props.children)
        const child = this.props.children.map(item => {
            if(this.props.currentKey === item.key) {
                return item;
            }
        })
        return (
            <div>
                {child}
            </div>
        )
    }
}

export default Slot;
