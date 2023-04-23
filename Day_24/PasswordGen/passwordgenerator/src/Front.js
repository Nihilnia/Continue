export function DaFront() {
  return (
    <section class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              class="card bg-dark text-white"
              style={{ "border-radius": "1rem" }}
            >
              <div class="card-body p-5 text-center">
                <div class="mb-md-5 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2">Random Password Generator</h2>
                  <p class="text-white-50 mb-5">
                    Let' s create a completely random pass!
                  </p>

                  <div class="form-outline form-white mb-4">
                    <div class="form-outline">
                      <input type="text" id="inpLength" class="form-control" />
                      <label class="form-label" for="form12">
                        Password length
                      </label>
                    </div>
                  </div>
                  <div class="form-outline form-white mb-4">
                    <div class="form-outline">
                      <div class="form-check">
                        <label class="form-check-label" for="flexRadioDefault1">
                          {" "}
                          Include lowercase letters
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="pwLowercase"
                        />
                      </div>
                      <div class="form-check">
                        <label class="form-check-label" for="flexRadioDefault1">
                          {" "}
                          Include uppercase letters
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="pwUppercase"
                        />
                      </div>
                      <div class="form-check">
                        <label class="form-check-label" for="flexRadioDefault1">
                          {" "}
                          Include numbers
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="pwNumbers"
                        />
                      </div>
                      <div class="form-check">
                        <label class="form-check-label" for="flexRadioDefault1">
                          {" "}
                          Include symbols
                        </label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="pwSymbols"
                        />
                      </div>

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          {" "}
                          Include lowercase letters{" "}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      class="form-control form-control-lg"
                    />
                    <label class="form-label" for="typePasswordX">
                      Password
                    </label>
                  </div>
                  <button
                    id="btnGenerate"
                    class="btn btn-outline-light btn-lg px-5"
                    type="submit"
                  >
                    Generate
                  </button>
                  <br />
                  <br />

                  <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    <a href="#!" class="text-white">
                      <i class="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="#!" class="text-white">
                      <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                    </a>
                    <a href="#!" class="text-white">
                      <i class="fab fa-google fa-lg"></i>
                    </a>
                  </div>
                </div>

                <div>
                  <p class="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DaFront;
