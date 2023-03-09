import React from 'react'

const Contact = () => {
  return (
    <div id='contact-section'className="container w-75 my-5 py-5">
        <h1 className="display-4 text-center">Let's work together!</h1>
        <form action="#home">
            <div className="row">
                <div className="form-group col-md-6 mb-3">
                    <label className="form-label" for="name">Name</label>
                    <input type="name" name="q" id="name" className="form-control" placeholder="Your Name Here"/>
                </div>
                <div className="form-group col-md-6 mb-3">
                    <label className="form-label" for="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="janedoe@email.com"/>
                </div>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" placeholder="Write message here!" rows="5"></textarea>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-success px-5 ">Send!</button>
            </div>

        </form>
    </div>
  )
}

export default Contact