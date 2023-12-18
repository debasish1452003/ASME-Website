import React from 'react';
import Layout from "../components/Layouts/Layout";
import "../style/aboutus.css";


const Aboutus = () => {
  return (
    <Layout title={"ASME-NITRKL Aboutus"}>
      <div className='bg'>
        <div className="aboutUsContent">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ea? Totam eius accusantium non vitae, corporis, nulla, aut iusto delectus assumenda reprehenderit nobis nisi esse laudantium! Ab reiciendis, qui beatae nihil aspernatur neque totam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ullam tenetur, aspernatur earum sed harum suscipit quod modi voluptas, nemo rerum corrupti vitae veritatis tempore reiciendis fugit iste. Cumque provident odio esse consectetur tempora optio repellat minus, autem rerum temporibus beatae, exercitationem voluptatum officia reprehenderit fugiat veritatis enim doloremque placeat?</p>
        </div>
        <div className='right_content'>
        <h4 className='h4_left'>Passion in the new Human powered vehicle</h4>
        <h4 className='h4_right'>High-Quality design craft</h4>
        </div>
      </div>
    </Layout>
  )
}

export default Aboutus
