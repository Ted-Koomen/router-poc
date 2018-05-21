import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Item from './Item'
import * as actions from './store/itemActions'
class Home extends Component { 


  componentWillMount() {
    this.props.loadItems()
    console.log(this.props)
  }
  renderItems = () => {
    const { items } = this.props
    if(this.hasItems()) {
      return items.map(item => {
        return (
          <Item name={item.name} quantity={item.quantity} id={item.id}/>
        )
      }) 
    }
  }

  hasItems = () => {
    return this.props.items.length > 0 ? true : false
  }


  render() {
    return (
      <div>
        <h1>This is the Home Page</h1>
        <h3>Here are Items: </h3>
        {this.hasItems()}
        {this.renderItems()}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.itemData.items
  }
)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)