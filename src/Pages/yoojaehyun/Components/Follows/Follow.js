import React, { Component } from 'react';

class Follow extends Component {
    render() {
        return (
            <>
                {this.props.productList.map((item) => {
                    return (
                        <figure key={item.id}>
                            <span className='recom__img'>
                                <img src={item.imgUrl} alt={item.userName} />
                            </span>
                            <span className='d_block'>{item.userName.split(" ")[0].slice(0,6) + "..."}</span>
                        </figure>
                    );
                })}
            </>
        );
    }
}

export default Follow;
