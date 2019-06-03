import React, { Component } from 'react';
import Tilt from 'react-tilt';

class Profile extends Component {
  state = {
    currentPassword: '',
    newPassword: ''
  };

  onCurrentPasswordChange = e => {
    this.setState({ currentPassword: e.target.value });
  };

  onNewPasswordChange = e => {
    this.setState({ newPassword: e.target.value });
  };

  handleChangePassword = () => {
    fetch('https://face-finder-123.herokuapp.com/changepassword', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        userEmail: this.props.email,
        currentPassword: this.state.currentPassword,
        newPassword: this.state.newPassword
      })
    });
  };

  handleDeleteProfile = () => {
    fetch('https://face-finder-123.herokuapp.com/delete', {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        userEmail: this.props.email
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data === 'account deleted') {
          this.props.onRouteChange('signout');
        }
      });
  };

  render() {
    const { name } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <div className="f1 fw6 ph0 mh0">{name.toUpperCase()}</div>

            <div className="center">
              <br />

              <div className="Tilt-inner pa3">
                <img alt="profilepic" src={`https://robohash.org/${name}?size=150x150`} />
              </div>

              <br />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Current Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="cpassword"
                id="cpassword"
                onChange={this.onCurrentPasswordChange}
              />
            </div>

            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                New Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="npassword"
                id="npassword"
                onChange={this.onNewPasswordChange}
              />
            </div>

            <div className="">
              <input
                onClick={this.handleChangePassword}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Change Password"
              />
            </div>

            <br />
            <br />
            <br />

            <div className="">
              <input
                onClick={this.handleDeleteProfile}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Delete Account"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Profile;
