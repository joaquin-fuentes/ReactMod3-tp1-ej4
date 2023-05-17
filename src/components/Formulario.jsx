import {Form, Button} from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const Formulario = () => {
    return (
        <section>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="tarea">
                    <Form.Control type="text" placeholder="Ingrese una tarea" />
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