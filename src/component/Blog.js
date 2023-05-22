import React from 'react'
import BlogImg1 from '../images/blog-img-1.png'
import BlogImg2 from '../images/blog-img-2.png'
import BlogImg3 from '../images/blog-img-3.png'

const Blog = () => {
  return (
    <div className='blog container'>
        <h2>Blogs Posts</h2>
        <hr></hr>
        <div className="card-group">
        <div className="card">
          <img className="card-img-top" src={BlogImg1} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={BlogImg2} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={BlogImg3} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog