
(function(){

let app = {
  components: [
    {
      runF: function() {
        this.name = "navbar";
        this.belongs = "all";
        this.code = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <a class="navbar-brand" href="main.html">
                Portfolio
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <i class="material-icons">menu</i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="main.html">Home</a>
                    <a class="nav-item nav-link active" href="about.html">About</a>
                </div>
            </div>
        </nav>
        `;
      },
    },
    {
      runF: function() {
        this.name = "content";
        this.belongs = "home";
        this.code = `
        <div class="jumbotron">
          <h1></h1>
        </div>
        `;
      },
    },
    {
      runF: function() {
        this.name = "content";
        this.belongs = "about";
        this.code = `
        <div class="container p-5">
            <h1>About</h1>

            <p>Welcome - this is a test project build by <a href="https://github.com/xalhub" target="_blank" title="GitHub Profile">@xalhub</a>. Made with JavaScript & Bootstrap.</p>
        </div>
        `;
      },
    },
  ],

  // run app
  run: function() {
    for (let i = 0; i < this.components.length; i++) {
      this.components[i].runF();
      if (this.components[i].runF) {
        switch (this.components[i].belongs) {
          case "all":
            document.body.innerHTML += this.components[i].code;
          break;

          case (this.components[i].belongs):
            if (document.URL.includes(this.components[i].belongs+".html")) {
              document.body.innerHTML += this.components[i].code;
            }
          break;
        }
      }
    }

  },
};

app.run();

})();
