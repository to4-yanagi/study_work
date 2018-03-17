import { connect } from 'react-redux';
import { putMemberList } from '../../actions/member';
import Main from '../../components/main/index.jsx';

function mapDispatchToProps(dispatch) {
  return {
    putMemberList: (memberList) => {
      dispatch(putMemberList(memberList));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Main);
