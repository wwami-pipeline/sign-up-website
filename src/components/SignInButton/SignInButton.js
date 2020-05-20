import { Link } from '@material-ui/core';
import React from 'react';
import firebase from 'firebase';

export const SignInButton = () => 
<span style={{ color: 'white', fontSize: 18, marginTop: '1em' }}>
    <Link
        style={{
        cursor: 'pointer',
        color: 'pink',
        }}
        onClick={() => {
        var provider = new firebase.auth.OAuthProvider(
            'microsoft.com'
        );
        provider.setCustomParameters({
            // Target specific email with login hint.
            login_hint: 'netid@uw.edu',
        });
        firebase.auth().signInWithPopup(provider);
        }}
    >
        Sign In
    </Link>{' '}
    with your UW Net ID to see sign up links
</span>