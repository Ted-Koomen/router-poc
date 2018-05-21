import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators  } from 'redux'
import * as actions from './store/itemActions'
import Item from './Item'
class FoundItem extends Component {
  componentWillMount() {
    const { id } = this.props.match.params
    // console.log(this.props.findItem(id))
    this.props.loadFoundItem(id)
  }

  render() {
    return (
      <div>
        <h4>Here is your item: </h4>
        <Item name={this.props.foundItem.name} quantity={this.props.foundItem.quantity}/>
      </div>
    )
  }
}



const mapStateToProps = (state) => {

  return {
    foundItem: state.itemData.foundItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(FoundItem)