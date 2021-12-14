import GoogleLogin from "react-google-login";

const SignIn = () => {
  const responseGoogle = (response) => {
    console.log(response.profileObj);
  };

  return (
    <>
      <GoogleLogin
        clientId="226199256040-eo65sui8suuvvaobu6t9p1demm1oa475.apps.googleusercontent.com"
        //buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};

export default SignIn;
