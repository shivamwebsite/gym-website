import { React, useState } from 'react'
import "./contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    messg: ""
  });


  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);

    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  };

  const sendfeedback = async (e) => {
    e.preventDefault();
    const {fname,email,mobile,messg} = udata;
    // console.log(udata)
    const res = await fetch("https://gym-website-backend-of83.onrender.com/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        fname,email,mobile,messg
        // fname, email, mobile, messg
      })
    });

    const data = await res.json();
    // console.log(data);
    // console.log(udata)
    if (res.status === 422 || !data) {
      // alert("no data");
      toast.warn("Please fill all the details 👎!", {
        position: "top-center",
      })
    }  else if (res.status === 424) {
      // alert("no data");
      toast.warn("Invalid Phone number 👎!", {
        position: "top-center",
      })
      setUdata({ ...udata,mobile: ""});
    } else if (res.status === 425) {
      // alert("no data");
      toast.warn("Email is not register 👎!", {
        position: "top-center",
      })
      setUdata({ ...udata,email: ""});
    }else {
      // alert("data succesfully added");
      toast.success("Thank you for your response 😃!", {
        position: "top-center",
      })
      setUdata({ ...udata, fname: "", email: "", mobile: "", messg: "" });
    }
    // alert("feedback sended")
  }

  return (
    <>
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <section id="maincontact">
        <div class="container10">
          <iframe width="100%" height="800px" frameborder="0" marginheight="0" marginwidth="0" title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%kolkata(west bengal)+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="contactcontain">
          <form method='POST'>
            <h2>Feedback</h2>
            <p>Feel free to ask anything about it.</p>
            <div class="contactinside">
              <label htmlFor="fname">Name</label><br />
              <input type="text" class="contactinput" onChange={adddata}
                value={udata.fname} name='fname' id="fname" placeholder='shivam-shaw' />
            </div>
            <div class="contactinside">
              <div>
                <label htmlFor="email">Email</label><br />
                <input type="email" class="contactinput" onChange={adddata}
                  value={udata.email}
                  name="email" id="email" placeholder='eg:-shivam-shaw@gmail.com' />
              </div>
            </div>
            <div class="contactinside">
              <label htmlFor="mobile">Mobile No.</label><br />
              <input type="number" class="contactinput" onChange={adddata}
                value={udata.mobile}
                name="mobile" id="mobile" placeholder='10 digit number' />
            </div>
            <div class="inside">
              <label htmlFor="messg">Message</label><br />
              <textarea type="text" class="contactinput" onChange={adddata}
                value={udata.messg} name="messg" id="messg"></textarea>
            </div>
            <button type='submit' className="contactbtn" onClick={sendfeedback}>Send Message</button>
            <p>Thank You For Your Response ! </p>
          </form>
          </div>
          
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Contact
