import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ProfileRoot } from '../components/sign_up/profile-root.tsx';
import { Signup } from '../components/sign_up/sign-up.tsx';
// android test 및 apk를 만들때는 꼭 mypage-root.android.tsx로 변경해주시길 바랍니다.
import { MypageRoot } from '../components/my_page/mypage-root.android.tsx';
import { actionCreators } from './index';
import { MyProfile } from '../components/my_profile/myprofile-root.tsx';
import { SignIn } from '../components/sign_in/sign-in-root.tsx';

function mapStateToProps(state) {
  const {
    email,
    emailCheck,
    password,
    passwordCheck,
    nickname,
    nicknameCheck,
    agreementService,
    agreementServiceAt,
    agreementPrivate,
    agreementPrivateAt,
    agreementMarketing,
    agreementMarketingAt,
    btnDisabled,
    btnColor,
    emailFocus,
    passwordFocus,
    nicknameFocus,
    permitEmail,
    permitNickname,
    id,
    userWallet,
    gender,
    birthDate,
    relationship,
    clientId,
    clientSecret,
    failMessageEmailCheck,
    failMessagePasswordCheck
  } = state;
  return {
    email,
    emailCheck,
    password,
    passwordCheck,
    nickname,
    nicknameCheck,
    agreementService,
    agreementServiceAt,
    agreementPrivate,
    agreementPrivateAt,
    agreementMarketing,
    agreementMarketingAt,
    btnDisabled,
    btnColor,
    emailFocus,
    passwordFocus,
    nicknameFocus,
    permitEmail,
    permitNickname,
    id,
    userWallet,
    gender,
    birthDate,
    relationship,
    clientId,
    clientSecret,
    failMessageEmailCheck,
    failMessagePasswordCheck
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSignupState: bindActionCreators(
      actionCreators.changeSignupStateAction,
      dispatch
    ),
    inputCheck: bindActionCreators(actionCreators.inputCheckAction, dispatch),
    changeFocus: bindActionCreators(actionCreators.changeFocusAction, dispatch),
    termsCheck: bindActionCreators(actionCreators.termsCheckAction, dispatch),
    btnCheck: bindActionCreators(actionCreators.btnCheckAction, dispatch),
    permit: bindActionCreators(actionCreators.permitAction, dispatch),
    changeProfileState: bindActionCreators(
      actionCreators.changeProfileStateAction,
      dispatch
    ),
    changeSignInState: bindActionCreators(
      actionCreators.changeSignInStateAction,
      dispatch
    )
  };
}

export const reduxSignin = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
export const reduxSignup = connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
export const reduxProfileRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileRoot);
export const reduxMypageRoot = connect(
  mapStateToProps,
  mapDispatchToProps
)(MypageRoot);
export const reduxMyProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile);
