// import HomePage from './Home'
import { connect } from 'react-redux'
import { actions as groundActions } from '../../reducers/ground'
import {} from '../../selectors/ground'
import DetailPage from './Detail'
import { getSingleGround } from '../../sagas/ground'
const mapStateToProps = state => ({
  // grounds: state.groundReducer.get('grounds').toJS(),
  ground_info: state.groundReducer,
  ground: state.groundReducer.get('ground').toJS(),
})
const mapDispatchToProps = (dispatch, props) => {
  return {
    getSingle: id => {
      dispatch(groundActions.getSingle(id))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
