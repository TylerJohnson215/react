import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button 
      onClick={handleShow} 
      class="block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          + Add Employee
      </button> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    setName('');
                    setRole('');
                    setImg('');
                    props.newEmployee(name, role, img)
                  }}
                  id='editmodal' 
                  class="w-full max-w-sm"
                  >
                  <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label 
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                        for="name">
                      Name
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="name" 
                        placeHolder='Rufus'
                        type="text" 
                        value={name}
                        onChange={(e)=> {setName(e.target.value)}}
                      />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label 
                      class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                      for="role">
                      Role
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="role" 
                        placeHolder='Intern'
                        type="text" 
                        value={role}
                        onChange={(e)=> {setRole(e.target.value)}}
                      />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                      <label 
                        class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                        for="img">
                      Image URL
                      </label>
                    </div>
                    <div class="md:w-2/3">
                      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="img" 
                        placeHolder='https://google.com'
                        type="text" 
                        value={img}
                        onChange={(e)=> {setImg(e.target.value)}}
                      />
                    </div>
                </div>
                  <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3"></div>
                  </div>
              </form>
        </Modal.Body>
        <Modal.Footer>
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" 
            onClick={handleClose}
            form="editmodal"
            > 
              Add 
            </button>
          <button 
            className="bg-slate-400 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded" 
            onCLick={handleClose}
            > 
              Close 
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
