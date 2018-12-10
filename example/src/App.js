import React, { Component } from 'react';
import {
  AppContainer,
  EmailInput,
  Image,
  Position,
  Spacing,
  Text,
  /* eslint-disable no-unused-vars */
  Button,
  Heading,
  Hiperlink,
  Label,
  PasswordInput,
  TextInput
  /* eslint-enable no-unused-vars */
} from 'meganui';
import { Banner } from './Banner';
import { Column } from './Column';
import { Footer } from './Footer';
import { LabelPassword } from './LabelPassword';
import { LinkedInLoginButton } from './LinkedInLoginButton';
import { LoginForm } from './LoginForm';
import { Row } from './Row';
import LoginButton from './LoginButton';

export default class App extends Component {

  render() {
    return (
      <AppContainer>
        <Row>
          <Column>
            <Banner>
            </Banner>
          </Column>
          <Column>
            <LoginForm>
              <Spacing position="top" size="auto">
                <Position center>
                  <Image height="72px" src="logotype.png"/>
                </Position>
              </Spacing>
              <Spacing position="bottom" size="big"/>
              <Spacing position="bottom">
                <Label id="emailLabel" labelFor="email">Email</Label>
                <EmailInput id="email" labelledBy="emailLabel"
                  hint="your.name@example.com"
                  required={true}
                  requirementsText="Please, enter a valid e-mail address, including the @ symbol"
                  size="big" />
              </Spacing>
              <Spacing position="bottom" size="bigger">
                <LabelPassword>
                  <Label id="passwordLabel" labelFor="password">Password</Label>
                  <Text size="small">
                    <Hiperlink href="#">Forgot password?</Hiperlink>
                  </Text>
                </LabelPassword>
                <PasswordInput id="password" labelledBy="passwordLabel"
                  hint="Enter your password"
                  required={true}
                  requirementsText="Please, enter your password"
                  size="big" />
              </Spacing>
              <Spacing position="bottom">
                <LoginButton/>
              </Spacing>
              <Spacing position="bottom" size="big">
                <LinkedInLoginButton/>
              </Spacing>
              <Position center>
                <Text size="small">
                  Don't have an account? <Hiperlink href="#">Get started</Hiperlink>
                </Text>
              </Position>
              <Footer>
                <Text element="small">
                  Vulpi, made with <Text color="primary">❤</Text> in San Pedro Valley, © 2018.
                </Text>
              </Footer>
            </LoginForm>
          </Column>
        </Row>
      </AppContainer>
    )
  }
}
