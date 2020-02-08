// import HomePage from './Home'
import { connect } from 'react-redux'
import { actions as groundActions } from '../../reducers/ground'
import {
  getVisibleGround,
  getVisibleGroundFilteredByKeyword,
  getVisibleGroundSearchByKeyword,
  getVisibleGroundSortByKeyword,
} from '../../selectors/ground'
import { toJS } from 'immutable'
import Home from './Home'


const mapStateToProps = state => ({
  // grounds: state.groundReducer.get('grounds').toJS(),
  ground_info: state.groundReducer,
  grounds: getVisibleGround(state.groundReducer),
  ground_filter: getVisibleGroundFilteredByKeyword(state.groundReducer),
  ground_search: getVisibleGroundSearchByKeyword(state.groundReducer),
  ground_sort: getVisibleGroundSortByKeyword(state.groundReducer),
})
const mapDispatchToProps = (dispatch, props) => {
  return {
    getGrounds: () => {
      dispatch(groundActions.getList())
    },
    getSingle: id => {
      dispatch(groundActions.getSingle(id))
    },
    setFilterValue: value => {
      dispatch(groundActions.setFilterValue(value))
    },
    setSearchValue: value => {
      dispatch(groundActions.setSearchValue(value))
    },
    setSortValue: value => {
      dispatch(groundActions.setSortValue(value))
    },
    handleFilter: value => {
      dispatch(groundActions.handleFilterAPI(value))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
