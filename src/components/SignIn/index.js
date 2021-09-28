import React from 'react';

import { Container, Pane, Header, Button, Email, Password} from '../SignIn/styles/SignInForm'

export default function SignInForm(){

    return(

        <SignInForm.Container>     
            <SignInForm.Pane>
                <SignInForm.Header>Sign In</SignInForm.Header>
                <SignInForm.Email type="email" pattern="[^ @]*@[^ @]*" placeholder="Email or phone number"/>
                <SignInForm.Password type="password"  placeholder="Password"/>
                <SignInForm.Button>Sign in</SignInForm.Button>
                

            </SignInForm.Pane>
        </SignInForm.Container>

    )


}

SignInForm.Container = ({children, ...restProps}) => (<Container{...restProps}>{children}</Container>)

SignInForm.Pane = ({children, ...restProps}) => (<Pane{...restProps}>{children}</Pane>)

SignInForm.Email = ({children, ...restProps}) => (<Email{...restProps}>{children}</Email>)

SignInForm.Password = ({children, ...restProps}) => (<Password{...restProps}>{children}</Password>)

SignInForm.Header = ({children, ...restProps}) => (<Header{...restProps}>{children}</Header>)

SignInForm.Button = ({children, ...restProps}) => (<Button{...restProps}>{children}</Button>)
