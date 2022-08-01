import React from 'react';
import { Spring } from 'react-spring';

export default function Comp1() {
    return (
        <Spring 
        form={{ opacity: 0 ,marginTop:-500}}
        to={{ opacity: 1  ,marginTop:0}}
        >
            {
                props => (
                    <div style={props}>
                        <div style={c1Style}>
                            <h1 >Component</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste, deserunt libero aperiam rerum iusto eligendi laudantium aliquam ducimus voluptatem illo debitis laboriosam sint sapiente cum. Totam eligendi iste reprehenderit.</p>
                        </div>
                    </div>
                )
            }
        </Spring>
    )
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'

}