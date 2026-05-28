import { ToastContainer } from "react-toastify";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";
import { usePatientStore } from "./store";

function App() {
  const activeId = usePatientStore((state) => state.activeId);

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes{" "}
          <span className="text-indigo-700">Veterinarias</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm key={activeId || "new"} />
          <PatientsList />
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
