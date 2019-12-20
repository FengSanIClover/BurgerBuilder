import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from '../../assets/styles/components/layout.module.css';

const layout = (props) => (
    <Aux>
        <div>toolbar、sidedrawer、backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
