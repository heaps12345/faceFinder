import React from 'react';
import axios from 'axios';

class Register extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
    isErr: false
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  onEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  onPasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  onSubmitSignin = async e => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      name: this.state.name
    });
    try {
      const user = await axios
        .post('https://face-finder-123.herokuapp.com/register', body, config)
        .then(res => res.data);
      // if (user.id) {
      this.props.loadUser(user);
      this.props.onRouteChange('home');
      // }
    } catch (err) {
      this.setState({ errors: err.response.data.errors });
    }
  };

  render() {
    const { onRouteChange } = this.props;
    const { errors } = this.state;
    return (
      <section className="section-form">
        <form className="signin-form">
          <h2>Register</h2>
          <div className="signin-form__group">
            <label className="signin-form__label">Name</label>
            <input type="text" className="signin-form__input" name="name" id="name" onChange={this.onNameChange} />
          </div>
          <div className="signin-form__group">
            <label className="signin-form__label">Email</label>
            <input
              type="email"
              className="signin-form__input"
              name="email-address"
              id="email-address"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="signin-form__group">
            <label className="signin-form__label">Password</label>
            <input
              type="password"
              className="signin-form__input"
              name="password"
              id="password"
              onChange={this.onPasswordChange}
            />
          </div>
          {errors && errors.length > 0 && <p className="errors">{errors[0].msg}</p>}
          <button className="signin-form__button" onClick={this.onSubmitSignin}>
            Register
          </button>
        </form>
      </section>
      // <article
      //   style={{ background: '#ecf0f1' }}
      //   className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
      // >
      //   <main className="pa4 black-80">
      //     <div className="measure">
      //       <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      //         <legend className="f1 fw6 ph0 mh0">Register</legend>
      //         <div className="mt3">
      //           <label className="db fw6 lh-copy f6" htmlFor="name">
      //             Name
      //           </label>
      //           <input
      //             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      //             type="text"
      //             name="name"
      //             id="name"
      //             onChange={this.onNameChange}
      //           />
      //         </div>
      //         <div className="mt3">
      //           <label className="db fw6 lh-copy f6" htmlFor="email-address">
      //             Email
      //           </label>
      //           <input
      //             className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      //             type="email"
      //             name="email-address"
      //             id="email-address"
      //             onChange={this.onEmailChange}
      //           />
      //         </div>
      //         <div className="mv3">
      //           <label className="db fw6 lh-copy f6" htmlFor="password">
      //             Password
      //           </label>
      //           <input
      //             className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      //             type="password"
      //             name="password"
      //             id="password"
      //             onChange={this.onPasswordChange}
      //           />
      //         </div>
      //       </fieldset>
      //       {errors && errors.length > 0 && <p className="errors">{errors[0].msg}</p>}
      //       <div className="">
      //         <input
      //           onClick={this.onSubmitSignin}
      //           className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
      //           type="submit"
      //           value="Register"
      //         />
      //       </div>
      //     </div>
      //   </main>
      // </article>
    );
  }
}

export default Register;
