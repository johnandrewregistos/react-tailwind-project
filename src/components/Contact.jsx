import React from 'react'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variant'

import { useState, useRef } from 'react';

export const Contact = () => {
// start of email function
const validEmail = (email) => {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

const getFormData = (form) => {
  var elements = form.elements;

  var fields = Object.keys(elements).filter(function(k) {
        return (elements[k].name !== "honeypot");
  }).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });

  var formData = {};
  fields.forEach(function(name){
    var element = elements[name];
    formData[name] = element.value;
    if (element.length) {
      var data = [];
      for (var i = 0; i < element.length; i++) {
        var item = element.item(i);
        if (item.checked || item.selected) {
          data.push(item.value);
        }
      }
      formData[name] = data.join(', ');
    }
  });

  // add form-specific values into the data
  formData.formDataNameOrder = JSON.stringify(fields);
  formData.formGoogleSheetName = form.dataset.sheet || "Sheet1"; // default sheet name
  formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(formData);
  return formData;
}

const handleFormSubmit = (event) => {
  event.preventDefault();           
  var form = event.target;
  var data = getFormData(form);         
  if( data.email && !validEmail(data.email) ) {   
    var invalidEmail = form.querySelector(".email-invalid");
    if (invalidEmail) {
      invalidEmail.style.display = "block";
      return false;
    }
  } else {
    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        var formElements = form.querySelector(".form-elements")
        if (formElements) {
          formElements.style.display = "none"; // hide form
        }
        var thankYouMessage = form.querySelector(".thankyou_message");
        if (thankYouMessage) {
          thankYouMessage.style.display = "block";
        }
        return;
    };
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
}

const disableAllButtons = (form) => {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  };

  const formRef = useRef(null);
  const [msg, setMsg] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbxNt5AxzCK5QnHZZQnPBAQ_xAvMbWu83Ae7gcniVfjPKbw3Rkw4RpaZ0n7oKojTwSTd/exec";
    const formData = new FormData(formRef.current);
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        setMsg("Message sent successfully!");
        setTimeout(function () {
          setMsg("");
        }, 5000);
        formRef.current.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };
//     End of email function

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/** Text */}
          <motion.div variants={fadeIn('right', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/** Form */}
          <motion.form variants={fadeIn('left', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.3 }} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start' action="https://script.google.com/macros/s/AKfycbxNt5AxzCK5QnHZZQnPBAQ_xAvMbWu83Ae7gcniVfjPKbw3Rkw4RpaZ0n7oKojTwSTd/exec" method="POST" data-email="registosandrew@gmail.com" name="submit-to-google-sheet" onSubmit={handleSubmit} ref={formRef}>
            <input type="text" name='name' className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder='Your Name'/>
            <input type="text" name='email' className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder='Your Email'/>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' name="message" id="" placeholder='Your Message'></textarea>
            <span className='font-bold uppercase text-accent' id='msg'>{msg}</span>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
