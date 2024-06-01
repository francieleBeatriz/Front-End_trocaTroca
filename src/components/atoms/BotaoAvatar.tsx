import React, { Component } from 'react';
import arrowRight from '../../assets/images/arrow-right.svg';
class BotaoAvatar extends Component {
    render() {
        return (
            <button id="botaoAvatar">AVATAR <img src={arrowRight}/>
            </button>
        );
    }
}
export default BotaoAvatar;