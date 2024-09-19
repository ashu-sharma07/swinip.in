import { useEffect, useState } from "react";
import "./App.css";

const organisations = [
  {
    organisation_id: 182,
    name: "Appetit Homely Food",
    subdomain: "appetit",
  },
  {
    organisation_id: 206,
    name: "Vision Space",
    subdomain: "vision",
  },
  {
    organisation_id: 204,
    name: "Punya Dhara",
    subdomain: "punya",
  },
  {
    organisation_id: 101,
    name: "Ganpati Dummy Org",
    subdomain: "ganpati",
  },
];

function App() {
  const [subdomain, setSubDomain] = useState("");
  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) setSubDomain(arr[0]);
  }, []);
  const requestedOrganisation = organisations.find(
    (organisation) => organisation.subdomain === subdomain,
  );
  return (
    <div className="app">
      {subdomain ? (
        requestedOrganisation ? (
          <div>
            <h1>Organisation Id</h1>
            <h3>{requestedOrganisation.organisation_id}</h3>
            <h1>Organisation Name</h1>
            <h3>{requestedOrganisation.name}</h3>
          </div>
        ) : (
          <h1>Organisation Not Found</h1>
        )
      ) : (
        <div>
          <h1>Default Wendor Customer App</h1>
        </div>
      )}
    </div>
  );
}

export default App;
