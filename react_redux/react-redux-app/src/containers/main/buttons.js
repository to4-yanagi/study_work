import { connect } from 'react-redux';
import { putMemberList } from '../../actions/member';
import Buttons from '../../components/main/buttons.jsx';

function mapStateToProps(state) {
  return {
    memberList: state.member.memberList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    putMemberList: (memberList) => {
      dispatch(putMemberList(memberList));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
