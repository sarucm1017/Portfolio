import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage
                id='site-web'
                defaultMessage='websites'
              />
            </NavLink>
            {/* <NavLink to="/project/app" offset={-150} duration={500}>
              Apps
            </NavLink> */}
            {/* <NavLink to="/project/game" offset={-150} duration={500}>
              <FormattedMessage
                id='games'
                defaultMessage='games'
              />
            </NavLink> */}
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./employeeManagement.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./bootstrap.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./Blog.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./contactlist.png`)} className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
              <img src={proyectsImg(`./float_image.png`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
              <img src={proyectsImg(`./float_image.png`)} alt="" className="projects__img" />
            </a>
          </div>
        </section>
      </main>

      <Modal
        estado={estadoModal17}
        cambiarEstado={cambiarEstadoModal17}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./employeeManagement.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-17-p1'
                  defaultMessage='Employee Management system.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-17-p2'
                  defaultMessage='An employee management system using javascript for frontend node.js express for backend. User autentication using Jwt and Session'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://employeemanagementnode.onrender.com" target="_blank">https://employeemanagement.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal14}
        cambiarEstado={cambiarEstadoModal14}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./bootstrap.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-14-p1'
                  defaultMessage='Bootstrap Form.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-14-p2'
                  defaultMessage='BootStrap form implementation using Bootstrap  Html ans css.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://bootstrap-form.onrender.com" target="_blank">https://BootStrapForm.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal15}
        cambiarEstado={cambiarEstadoModal15}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./Blog.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-15-p1'
                  defaultMessage='Blog Project.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-15-p2'
                  defaultMessage='Blog project using react Javascript html and css.here we can create a blog and display that blog.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://react-project-blog-frontend-saru-cms-projects.vercel.app/" target="_blank">https://BlogProject.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />  
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />                
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal16}
        cambiarEstado={cambiarEstadoModal16}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./contactlist.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-16-p1'
                  defaultMessage='Contact-List.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-16-p2'
                  defaultMessage='Contact list project using React Redux. In this project we can create edit and delete the  contact.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://frontend-contactlist-saru-cms-projects.vercel.app/" target="_blank">https://contactlist.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal13}
        cambiarEstado={cambiarEstadoModal13}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./float_image.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-13-p1'
                  defaultMessage='Landing page using Float.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-13-p2'
                  defaultMessage='Implemented A landing page using Html Float .'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://html-float-project.onrender.com" target="_blank">https://float-project.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal12}
        cambiarEstado={cambiarEstadoModal12}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./float_image.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-12-p1'
                  defaultMessage='Landing page using Flex.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-12-p2'
                  defaultMessage='Created a Landing page Responsive website using Html flex.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://html-flex-responsive.onrender.com" target="_blank">https://flex-responsive.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;