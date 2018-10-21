import React from 'react';
import InputNumber from 'rc-input-number';
import uuid from 'uuid';

export default class TierListCreateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.tierList ? props.tierList.title : '',
            description: props.tierList ? props.tierList.description :'',
            numberOfCompetition: props.tierList ? props.tierList.numberOfCompetition : 8,
            listOfCompetitors: props.tierList ?  props.tierList.listOfCompetitors : {},
            error: ''
        }
      }
      onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
      };
      onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
      }
      onNumberOfCompetitionChange = (value) => {
        const numberOfCompetition = value;
        if ( numberOfCompetition > 0 && numberOfCompetition < 51 ) {
          this.setState(() => ({ numberOfCompetition }));
        };
      };
      onCompetitorFieldsChange = (e) => {
        const competitorName = e.target.value
        const key = e.target.getAttribute('data-competitor')
        let listOfCompetitors = this.state.listOfCompetitors;
        listOfCompetitors[key] = competitorName;
        this.setState({ listOfCompetitors })
      }
      onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        if (!this.state.title || !this.state.numberOfCompetition) {
          this.setState(() => ({ error: 'Please provide a title and number of competitors'}))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
              title: this.state.title,
              description: this.state.description,
              numberOfCompetition: this.state.numberOfCompetition,
              listOfCompetitors: this.state.listOfCompetitors,
            });
        };
      };
    render() {
      const upHandler = (<div><i className="fas fa-sort-up"></i></div> )
      const downHandler = (<div><i className="fas fa-sort-down"></i></div>)
       let competitorFields = [];
       for (let i=1; i<=this.state.numberOfCompetition; i++) {
         competitorFields.push(
         <input
          className="form-field"
          type="text" 
          placeholder="Competitor Name"
          value={this.state.listOfCompetitors[i]}
          key={uuid()} 
          data-competitor={i}
          onChange={this.onCompetitorFieldsChange}
         />);
       }
        return (
            <div className="form-container">
               <form className="form" onSubmit={this.onSubmit}>
               {this.state.error && <p className="error">{this.state.error}</p>}
               <h3 className="form-title">Tier List Creation Form</h3>
                <input
                  className="input-title"
                  type="text"
                  placeholder="title" 
                  value={this.state.title}
                  onChange={this.onTitleChange}
                />
                <input 
                  className="input-description"
                  type="text"
                  placeholder="description" 
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
                />
                <label>Number Of Competition</label>
                <InputNumber 
                  value={this.state.numberOfCompetition}
                  min={1} 
                  max={50} 
                  required={true} 
                  style={{ width: 150 }}
                  onChange={this.onNumberOfCompetitionChange}
                  upHandler={upHandler}
                  downHandler={downHandler}
                />
                <div className="competitor-fields">
                {competitorFields}
                </div>
                <button className="create button"><i className="fas fa-plus-circle"></i> Create</button>
               </form>
            </div>
        
        )
    }
} 

{/* <img src="/images/up.png"></img>  */}