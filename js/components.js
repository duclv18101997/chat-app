const components = {};

components.welcomePage = `
    <div>Welcome to MindX Chats</div>
`;

components.loginPage = `
<div id='background'>
<div id="login-screen">
    <div id="login-form-container">
        <h2>MindX Chats</h2>
        <form id="login-form">
            <div class="input-text form">
                <input type="text" name="email" placeholder="Email">
                <div id="email-error-message" class="error-message"></div>
            </div>
            <div class="input-text form">
                <input type="password" name="password" placeholder="Password">
                <div id="password-error-message" class="error-message"></div>
            </div>
            <div id="submit-content-google" class="form">
                <a href="#" id="forgot-link">Forgot your password?</a>
                <a href="#" id="google"><img border="0" src="../image/search.png" width="25" height="25"></a>
            </div>
            <div id="login-button" class="form">
                <input type="submit" name="" value="Login">
            </div>
            <div id="submit-content" class="form">
                <a href="#" id="register-link">Dont' have an account? Register</a>
            </div>
        </form>
    </div>
</div>
</div>
`;

components.registerPage = `
<div id='background'>
<div id="register-screen">
            <h2>MindX Chats</h2>
            <form id="register-form">
                <div class="div-form">
                    <div id="first-name-input" class="wrapper-form inline">
                        <input type="text" name="firstName" placeholder="First name">
                        <div id="error-first-name-message" class="error-message"></div>
                    </div>
                    <div id="last-name-input" class="wrapper-form inline">
                        <input type="text" name="lastName"  placeholder="Last name">
                        <div id="error-last-name-message" class="error-message"></div>
                    </div>
                </div>
                <div id="email-input" class="wrapper-form div-form">
                    <input type="text" name="email"  placeholder="Email">
                    <div id="error-email-message" class="error-message"></div>
                </div>
                <div id="password-input" class="wrapper-form div-form">
                    <input type="password" name="password"  placeholder="Password">
                    <div id="error-password-message" class="error-message"></div>
                </div>
                <div id="confirm-password-input" class="wrapper-form div-form">
                    <input type="password" name="confirmPassword"  placeholder="Confirm password">
                    <div id="error-confirm-password-message" class="error-message"></div>
                </div>
                <div id="submit-content" class="div-form">
                    <a href="#" id="login-link">Already have an account? Login</a>
                    <input type="submit"  value="Register">
                </div>
            </form>
        </div>
        </div>
`;

components.resetPage = `
<div id='background'>
<div id="login-screen">
<div id="login-form-container">
    <h2>MindX Chats</h2>
    <form id="reset-form">
        <div class="input-text form">
            <input type="text" name="email" placeholder="Enter email to reset password">
            <div id="email-error-message" class="error-message"></div>
        </div>
        <div id="submit-content" class="form">
            <input type="submit" name="" value="Reset">
        </div>
    </form>
</div>
</div>
</div>
`;

components.chatPage = `
<div id='chat-screen' class="chat-screen">
           <div class="header">MindX Chats</div>
           <div class="chat-container">
               <div class="conversation-name">
                   <h3>Hello World</h3>
               </div>
               <div  id ='message-container' class="message-container">
               <div class ='message-item my-message'>
               <div class ='sender'></div>
               <div class ='message-content'></div>
               </div>
               <div class ='message-item other-message'>
               <div class ='sender'></div>
               <div class ='message-content'></div>
               </div>
               </div>
               <div class="message-form-container">
                   <form id= "submit-send-button">
                       <input 
                       class="message-input"
                       id = "input-text"
                       type="text"
                       placeholder="Type a message....."
                       name="message"
                       />
                       <input
                       class="send-button"
                       type="submit"
                       value="Send"
                       />
                   </form>
               </div>
           </div>
       </div>
`;