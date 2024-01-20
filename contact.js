function userContactInfo() {
    let pars = {
        firstName: document.getElementById('user-first-name').value,
        lastName: document.getElementById('user-last-name').value,
        address: document.getElementById('user-address').value,
        city: document.getElementById('user-city').value,
        state: document.getElementById('user-state').value,
        zipCode: document.getElementById('user-zip-code').value,
        email: document.getElementById('user-email').value,
        comments: document.getElementById('user-comments').value,
    }
    
  const serviceId = 'service_9unwrqa';
  const emailTemplateId = 'template_hqzi6ma';
  
  emailjs.send(serviceId,emailTemplateId, pars)
  .then (
    res = () => {
        document.getElementById('user-first-name').value = '';
        document.getElementById('user-last-name').value = '';
        document.getElementById('user-address').value = '';
        document.getElementById('user-city').value = '';
        document.getElementById('user-state').value = '';
        document.getElementById('user-zip-code').value = '';
        document.getElementById('user-email').value = '';
        document.getElementById('user-comments').value = '';

      console.log(res);
    }
  )
  .catch((err) => console.log(err));
  }
 