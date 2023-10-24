import Navbar from "../Navbar/Navbar";

const Contacto = () => {
  return (
    <div>
      <Navbar />
      <section className="slide-in-fwd-center">
        
        <div className="container  mt-5 mb-5 ">
          <div className="row m-0">
            <div className="col-md-3 bg-custom p-0 d-flex text-center  mx-auto justify-content-center flex-column">
              <h3 className="mb-2 text-white">Informacion</h3>
              <div className="info text-light .fs-6">
                Roosvelt 2341
                <p>castellblanch.com</p>
               1154795500
                <div className="social-icons"></div>
              </div>
            </div>
            <div className="col-md-8 p-0 bg-custom2 pt-4 pb-4">
           
              <form className="w-100 p-4" action="#">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Nombre"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Mensaje"
                        required
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-custom btn-lg btn-block mt-3"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
  
};

export default Contacto;
