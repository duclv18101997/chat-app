const view = {};

view.setActiveScreen = (screenName) => {
  const app = document.getElementById('app');

  switch (screenName) {
    case 'loginPage':
      if (app) {
        app.innerHTML = components.loginPage;
      }

      // listen submit
      const loginForm = document.getElementById('login-form');
      if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();//cancel action mặc định của form

            const email = loginForm.email.value;  
            const password = loginForm.password.value;

            controller.validateLoginInfo(email, password);
        });
      }

      // listen click register
      const registerLink = document.getElementById('register-link');
      if (registerLink) {
        registerLink.addEventListener('click', (event) => {
          view.setActiveScreen('registerPage');
        });
      }
      // listen click forgot
      const forgotLink = document.getElementById('forgot-link');
      if(forgotLink){
        forgotLink.addEventListener('click', (event) => {
          view.setActiveScreen('resetPage');
        });
      }
      //listen click sign in with google
      const googleSign = document.getElementById('google');
      if(googleSign){
        googleSign.addEventListener('click',(event) => {
          model.signInWithGoogle();
          console.log("da nhay vao");
        });
      }

      break;

      case 'resetPage':
        if (app) {
          app.innerHTML = components.resetPage;
        }
  
        // listen submit
        const resetForm = document.getElementById('reset-form');
        if (resetForm) {
          resetForm.addEventListener('submit', (event) => {
              event.preventDefault();//cancel action mặc định của form
  
              const email = resetForm.email.value;  
              controller.validateResetInfo(email);
          });
        }
        break;
    case 'registerPage':
      if (app) {
        app.innerHTML = components.registerPage;
      }
      //listen submit
      const registerForm = document.getElementById('register-form');
      if(registerForm) {
          registerForm.addEventListener('submit', (event) => {
              event.preventDefault();
              const firstName = registerForm.firstName.value;
              const lastName = registerForm.lastName.value;
              const email = registerForm.email.value;
              const password = registerForm.password.value;
              const confirmPassword = registerForm.confirmPassword.value;
              controller.validateRegisterInfo(firstName, lastName, email, password, confirmPassword);
          });
      }

      //listen click
      const loginLink = document.getElementById('login-link');
      if(loginLink) {
          loginLink.addEventListener('click', (event) => {
              view.setActiveScreen('loginPage');
          });
      }
      break;

      case 'chatPage':
          if (app) {
            app.innerHTML = components.chatPage;
          }
          
          //listen submit
        const submitButton = document.getElementById('submit-send-button');
        if(submitButton){
          submitButton.addEventListener('submit', (event) => {
              event.preventDefault();

              const messageContainer = document.getElementById('message-container');
              if(messageContainer && submitButton.message.value){
                view.sendMessage('',submitButton.message.value);
                view.sendMessage('MindX Bot',submitButton.message.value);
                submitButton.message.value = '';
              }

          });
        }

          break;
      case 'resetPage':
            if (app) {
              app.innerHTML = components.resetPage;
            }
            break;
     
  }
};

view.renderErrorMessage = (elementId, errorMessage) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerText = errorMessage;
  }
};

view.clearRegisterInfo = () =>{
  const registerForm = document.getElementById('register-form');
  if(registerForm){
    registerForm.firstName.value= '';
    registerForm.lastName.value= '';
    registerForm.email.value= '';
    registerForm.password.value= '';
    registerForm.confirmPassword.value= '';
  }
};

view.sendMessage = (sender, messageContent) => {
        const messageContainer = document.getElementById('message-container');
        if(messageContainer){
          //create 3 div element
          const messageItem = document.createElement('div');
          const senderElement = document.createElement('div');
          const messageContentElement = document.createElement('div');
          //modify div.messageItem
          messageItem.classList.add('message-item');
          if(sender){
            messageItem.classList.add('other-message');
          }else{
            messageItem.classList.add('my-message');
          }
          //modify div.sender
          senderElement.classList.add('sender');
          if(senderElement){
            senderElement.innerText = sender;
          }
          //modify div.messageContent
          messageContentElement.classList.add('message-content');
          messageContentElement.innerText = messageContent;
          // appendChild để gắn message item thành 1 cục
          messageItem.appendChild(senderElement);
          messageItem.appendChild(messageContentElement);
          messageContainer.appendChild(messageItem);

        }
};