import React, { Component } from 'react'

export default class SearchBar extends Component {

  formDefaultRender = (Event) => {
    Event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.formDefaultRender} >
        <div className='form-row mb-5' >
          <div className='col-12' >
            <input
              onChange={this.props.searchMedicineProps}
              type='text'
              className='form-control'
              placeholder='Search a medicine'></input>
          </div>
        </div>
      </form>
    )
  }
}

