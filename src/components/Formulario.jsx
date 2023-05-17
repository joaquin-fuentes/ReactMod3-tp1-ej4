import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';
import { useState } from 'react';

const Formulario = () => {

    const [tarea, setTarea] = useState("");
    const [listadoTareas, setListadoTareas] = useState([]);

    return (
        <section>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text"  placeholder="Ingrese una tarea"
                    onChange={(e)=> setTarea(e.target.value)}
                    value={tarea} />
                    {/* Agregar evento submit para guardar tarea en listado de tareas */}
                 
                    <Button variant="primary" type="submit" className='mx-2'>
                       Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </section>
    );
};

export default Formulario;