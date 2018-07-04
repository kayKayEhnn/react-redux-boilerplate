import { connect } from 'react-redux'

import { increment, decrement } from '../actions/'
import Counter from '../components/Counter'

const mapStateToProps = state => ({ count: state.count })

const mapDispatchToProps = { increment, decrement }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
