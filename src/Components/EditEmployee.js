import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <button onClick={handleShow} class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Update
      </button> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
          <Modal.Body>
          <form onSubmit={(e) => {
            handleClose();
            e.preventDefault();
            props.updateEmployee(props.id, name, role)
          }}
            id='editmodal' class="w-full max-w-sm">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                   Name
                  </label>
                </div>
              <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="name" 
                  type="text" 
                  value={name}
                  onChange={(e)=> {setName(e.target.value)}}
                   />
              </div>
             </div>
             <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                   Role
                  </label>
                </div>
              <div class="md:w-2/3">
                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                  id="role" 
                  type="text" 
                  value={role}
                  onChange={(e)=> {setRole(e.target.value)}}
                   />
              </div>
             </div>
             <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
              </div>
            </div>
          </form>
          </Modal.Body>
        <Modal.Footer>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
            form="editmodal"
            > 
              Update 
            </button>
          <button 
            className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" 
            form="editmodal"
            onCLick={handleClose}
            > 
              Close 
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;
