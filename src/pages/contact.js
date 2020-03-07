import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/common'


const Contact = () => (
  <Layout>
    <div className="container">
      <h1 className="title">Contact</h1>
      <h2 className="subtitle">Send us a message!</h2>
      <form name="contact" method="post" data-netlify="true"  data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <ul className="form-style">
          <li>
            <label>Full Name <span className="required">*</span></label>
            <input name="name" minLength="2" className="field-long"></input>
          </li>
          <li>
              <label>Email <span className="required">*</span></label>
              <input type="email" name="email" className="field-long" />
          </li>
          <li>
              <label>Subject</label>
              <select name="subject" className="field-select">
              <option value="Enquiry">Enquiry</option>
              <option value="Help">Help</option>
              </select>
          </li>
          <li>
              <label>Your Message <span className="required">*</span></label>
              <textarea name="message" id="message" className="field-long field-textarea" maxLength="200"></textarea>
          </li>
          <li>
              <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  </Layout>)

export default Contact

