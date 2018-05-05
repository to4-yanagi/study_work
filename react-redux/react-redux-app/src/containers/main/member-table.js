import { connect } from 'react-redux';
import MemberTable from '../../components/main/member-table.jsx';

function mapStateToProps(state) {
  return {
    memberList: state.member.memberList
  };
}

export default connect(
  mapStateToProps
)(MemberTable);
