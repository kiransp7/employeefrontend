import 'bootstrap/dist/css/bootstrap.min.css';
import GetEmployees from './Componets/getEmployees';
import DeleteEmployee from './Componets/deleteEmployee';
import RegisterEmployee from './Componets/registerEmployee';

function App() {

  const handleRefresh = () => {
    window.location.reload();
  };


  return (
    <>
     <hr></hr>
     <h1 style={{textAlign:'center'}} className='text-info'> Employee Mangenment System</h1>
    <hr></hr>

      <RegisterEmployee></RegisterEmployee>
      <br/><hr/> <br/>
      <GetEmployees></GetEmployees>
      <br/><hr/> <br/>
      <DeleteEmployee></DeleteEmployee>



    </>
  );
}

export default App;
