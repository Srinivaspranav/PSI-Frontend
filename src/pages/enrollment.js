import React from 'react';
import '../Style/Enrollment.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../Style/scrollbar.css';

const Enrollment = () => {
  return (
    <div className="enrollment-container">
      <NavBar />
      <div className="enrollment-section">
        <h1>Club Enrollment Form</h1>
        <div className='form-box'>
          <div className='form-field'><p>FullName:</p><input type='text' /></div>
          <div className='form-field'><p>Email ID:</p><input type='text' /></div>
          <div className='form-field'><p>Institution:</p><input type='text' /></div>
          <div className='form-field'><p>Phone Number:</p><input type='text' /></div>
          <div className='form-field'><p>City:</p><input type='text' /></div>
          <div className='form-field'><p>Select Clubs:</p><input type='dropbox' /></div><br></br>
          <textarea
            style={{
              height: "200px",
              width: "91%",
              marginTop: "4%",
              marginRight:'0%',
              border: "dashed",
              backgroundColor: "#002333", 
              color: "#ffffff" 
            }}
            placeholder='How can we Help you?'
          ></textarea>
          <div style={{ marginTop: "1%", marginLeft: "0%" ,width:'100%'}}>
          <input style={{ marginLeft: "-17%" }} id='t&c' type='checkbox' required /><label for="t&c" style={{ marginLeft: "-14.9%", color: "#00FF84" }}>I have read Dr.Pallemsetty Innovations Privacy Policy and agree to the terms and conditions.</label>
          </div>
          <button className='submit-btn'>SUBMIT</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enrollment;
