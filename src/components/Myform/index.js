function Myform(){
        return (
            <form id="login-form">
            <input type="text" name="username" id="username-field" className="login-form-field" placeholder="Username"/>
            <input type="password" name="password" id="password-field" className="login-form-field" placeholder="Password"/>
            <input type="submit" value="Login" id="login-form-submit"/>
          </form>
        )
}

export default Myform;
