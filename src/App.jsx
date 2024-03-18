import "./App.css";
import Job from "./components/Job";

function App() {
  return (
    <>
      <header>
        <h1>The Job Board</h1>
      </header>
      <body>
        <div className="container">
          <Job
            className="red"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />
          <Job
            className="green"
            title="Agent de Sécurité - Pantin"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
          <Job
            className="yellow"
            title="Responsable d'Atelier (H/F)"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Job
            className="blue"
            title="Chef de Projets"
            contractType="CDD"
            country="France"
            city="Paris"
          />
          <Job
            className="beige"
            title="Développeur React.js"
            contractType="CDI"
            country="France"
            city="Paris"
          />
          <Job
            className="red"
            title="Sales Associate Stockholm"
            contractType="CDI"
            country="Suède"
            city="Stockholm"
          />
          <Job
            className="green"
            title="Vendeur/se - Crans Montana"
            contractType="CDI"
            country="Suisse"
            city="Crans-Montana"
          />
          <Job
            className="yellow"
            title="CRM & Data quality Analyst"
            contractType="CDI"
            country="USA"
            city="New york"
          />
          <Job
            className="blue"
            title="Infirmier"
            contractType="CDI"
            country="France"
            city="Pantin"
          />
        </div>
      </body>
      <footer>
        <p>
          Made with Reacteur by
          <a href="https://github.com/MohaDby"> Mohamed diaby</a>
        </p>
      </footer>
    </>
  );
}

export default App;
