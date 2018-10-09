import React from 'react';
import InputNumber from 'rc-input-number';

export default class PowerRankingCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
               <form action="#">
                   <h3>Power Ranking Creation Form</h3>
                   <input placeholder="title" type="text"/>
                   <input placeholder="description" type="text"/>
                   <InputNumber defaultValue={8} min={1} max={50} required={true} style={{ width: 100 }}/>
                   <button>Create</button>
               </form>
            </div>
        )
    }
} 