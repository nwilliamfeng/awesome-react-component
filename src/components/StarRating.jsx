import React, { Component } from 'react';
import '../assets/star-rating.css';


const Star = ({ size, stroke, color}) => {
    return <div className='star'  style={{ padding: 1, height: size ? size : 24, width: size ? size : 24, background: stroke ? stroke : 'gray' }}>
        <div className='star' style={{ height: size ? size - 2 : 22, width: size ? size - 2 : 22, background:  color  , marginLeft: 1, marginTop: 1 }} />

    </div>
}

export class StarRating extends Component {

    renderStars = () => {
        const { rating, color, stroke, size } = this.props;
        if (typeof rating !== 'number' || rating > 5 || rating < 0) {
            return <React.Fragment />
        }
        let result = [];
        let n = parseInt(rating);
        const d = (rating - n).toFixed(1);

        if (d > 0.3 && d < 0.7) {
            n += 0.5;
        }
        else if (d >= 0.7) {
            n += 1;
        }
        for (let i = 0; i < 5; i++) {
            const isSelected = Math.round(n) >= i + 1;
            let sColor = isSelected ? color : 'white';
            if (i + 1 - n === 0.5) {
                sColor = `-webkit-linear-gradient(left, ${color}, ${color} 50%, white 50%, white)`
            }
            result.push(<Star key={i} isSelected={isSelected} stroke={stroke} color={sColor} size={size ? size : 16} />)
        }
        return result;
    }

    handleClick=e=>{
        if(this.props.onClick!=null){
            this.props.onClick(e);
        } 
    }

    render() {
        return <div onClick={this.handleClick}>
            {this.renderStars()}
        </div>
    }
}

 