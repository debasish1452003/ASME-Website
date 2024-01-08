import React from "react";
import Layout from "../components/Layouts/Layout";
import { Link } from "react-router-dom";
// import BgVideo from "../components/dummy/BgVideo";

const Projects = () => {
  return (
    <Layout>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        soluta, illum quo officia ex possimus inventore quaerat nesciunt,
        dolores, porro neque molestias aspernatur sunt error culpa voluptas
        similique quisquam distinctio tenetur! Nostrum quasi enim magni qui
        culpa laudantium. Iure ipsam, qui molestiae, fuga pariatur quasi aliquam
        ipsum molestias ratione, ea aperiam minus laudantium quae distinctio
        temporibus nulla a sunt ut explicabo culpa modi ex neque quibusdam quos.
        Voluptatibus nihil ab possimus necessitatibus maxime amet ullam rem
        porro quasi doloremque atque reprehenderit officiis incidunt deleniti
        praesentium mollitia obcaecati repellendus unde, odio voluptate soluta
        impedit quaerat, vero nulla? Placeat rem aliquam sapiente.
      </p>
      {/* <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link class="dropdown-item" to="#">
            Action
          </Link>
          <Link class="dropdown-item" to="#">
            Another action
          </Link>
          <Link class="dropdown-item" to="#">
            Something else here
          </Link>
        </div>
      </div> */}

      <div class="dropdown" style={{ height: "100vh" }}>
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <button class="dropdown-item" type="button">
            Action
          </button>
          <button class="dropdown-item" type="button">
            Another action
          </button>
          <button class="dropdown-item" type="button">
            Something else here
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
