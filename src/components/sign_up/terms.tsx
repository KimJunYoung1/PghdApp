import { Body, Button, Card, CardItem, Form, Icon, Text } from 'native-base';
import * as React from 'react';
import { termsStyles } from '../style';
import { TermsCardItem } from './terms-carditem';

export interface Props {
  reduxStore: any;
}
export interface State {
  checkAllColor: string;
  terms1Color: string;
  terms2Color: string;
  terms3Color: string;
}

let colorFlag = 0;
let colorFlag2 = 1;

export class Terms extends React.Component<Props, State> {
  public props: any;
  public state: State;
  constructor(props: Props) {
    super(props);
    this.state = {
      checkAllColor: 'black',
      terms1Color: 'black',
      terms2Color: 'black',
      terms3Color: 'black',
    };
  }

  changeColor(type: string, color: string) {
    if (type === 'all') {
      this.setState({
        checkAllColor: color,
        terms1Color: color,
        terms2Color: color,
        terms3Color: color,
      });
    } else if (type === 'terms1') {
      this.setState({
        terms1Color: color,
      });
    } else if (type === 'terms2') {
      this.setState({
        terms2Color: color,
      });
    } else if (type === 'terms3') {
      this.setState({
        terms3Color: color,
      });
    }
  }

  render() {
    this.changeColor = this.changeColor.bind(this);
    // console.log('terms.tsx 렌더');
    if (
      this.state.terms1Color === 'green' &&
      this.state.terms2Color === 'green' &&
      this.state.terms3Color === 'green' &&
      colorFlag === 0
    ) {
      this.props.reduxStore.termsCheck('all', true);
      this.changeColor('all', 'green');
      colorFlag = 1;
      colorFlag2 = 0;
    } else if (
      !(
        this.state.terms1Color === 'green' &&
        this.state.terms2Color === 'green' &&
        this.state.terms3Color === 'green'
      ) &&
      colorFlag2 === 0
    ) {
      colorFlag2 = 1;
      colorFlag = 0;
      this.setState({
        checkAllColor: 'black',
      });
    }

    return (
      <Form style={termsStyles.form}>
        <Card style={termsStyles.card}>
          <CardItem bordered>
            <Body style={[termsStyles.cardItemBody, termsStyles.allAgree]}>
              <Button
                onPress={() => {
                  if (colorFlag === 0) {
                    this.changeColor('all', 'green');
                    this.props.reduxStore.termsCheck('all', true);
                    this.props.reduxStore.btnCheck();
                    colorFlag = 1;
                    colorFlag2 = 0;
                  } else {
                    this.changeColor('all', 'black');
                    this.props.reduxStore.termsCheck('all', false);
                    this.props.reduxStore.btnCheck();
                    colorFlag = 0;
                    colorFlag2 = 1;
                  }
                }}
                style={termsStyles.allAgreeBtn}
                transparent
              >
                <Icon
                  name='checkmark-circle-outline'
                  style={[
                    termsStyles.allAgreeIcon,
                    { color: this.state.checkAllColor },
                  ]}
                />
              </Button>

              <Text style={termsStyles.allAgreeTxt}>전체동의</Text>
            </Body>
          </CardItem>
          <TermsCardItem
            text={'서비스 이용약관'}
            option={''}
            eachCheckBtn={termsStyles.checkBtn1}
            eachArrowBtn={termsStyles.arrowBtn1}
            eachIconBtn={termsStyles.iconBtn1}
            eachCheckColor={this.state.terms1Color}
            reduxStore={this.props.reduxStore}
            termsAgree={() => {
              this.changeColor('terms1', 'green');
              this.props.reduxStore.termsCheck('agreementService', true);
              this.props.reduxStore.btnCheck();
            }}
            termsDisAgree={() => {
              this.changeColor('terms1', 'black');
              this.props.reduxStore.termsCheck('agreementService', false);
              this.props.reduxStore.btnCheck();
            }}
          />
          <TermsCardItem
            text={'개인정보 수집 및 이용'}
            option={''}
            eachCheckBtn={termsStyles.checkBtn2}
            eachArrowBtn={termsStyles.arrowBtn2}
            eachIconBtn={termsStyles.iconBtn2}
            eachCheckColor={this.state.terms2Color}
            reduxStore={this.props.reduxStore}
            termsAgree={() => {
              this.changeColor('terms2', 'green');
              this.props.reduxStore.termsCheck('agreementPrivate', true);
              this.props.reduxStore.btnCheck();
            }}
            termsDisAgree={() => {
              this.changeColor('terms2', 'black');
              this.props.reduxStore.termsCheck('agreementPrivate', false);
              this.props.reduxStore.btnCheck();
            }}
          />
          <TermsCardItem
            text={'홍보 안내 수신'}
            option={' (선택)'}
            eachCheckBtn={termsStyles.checkBtn3}
            eachArrowBtn={termsStyles.arrowBtn3}
            eachIconBtn={termsStyles.iconBtn3}
            eachCheckColor={this.state.terms3Color}
            reduxStore={this.props.reduxStore}
            termsAgree={() => {
              this.changeColor('terms3', 'green');
              this.props.reduxStore.termsCheck('agreementMarketing', true);
            }}
            termsDisAgree={() => {
              this.changeColor('terms3', 'black');
              this.props.reduxStore.termsCheck('agreementMarketing', false);
            }}
          />
        </Card>
      </Form>
    );
  }
}
