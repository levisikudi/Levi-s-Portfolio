import React from 'react'

const Contact = () => {
  return (
    <div className="container">
        <h1 className="display-4 text-center">Let's work together!</h1>
        <form action="#home">
            <div className="row">
                <div className="form-group col-md-6 mb-3">
                    <label className="form-label" for="name">Name</label>
                    <input type="name" name="q" id="name" className="form-control" placeholder="Your Name Here"/>
                </div>
                <div className="form-group col-md-6 mb-3">
                    <label className="form-label" for="email">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="johndoe@email.com"/>
                </div>
            </div>
            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-success">Send!</button>

        </form>
    </div>
  )
}

export default Contact