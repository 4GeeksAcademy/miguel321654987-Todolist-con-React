import React, { useState } from 'react';

const Home = () => {

	const [tareas, setTareas] = useState([]);
	const [inputTemporal, setInputTemporal] = useState('');

	const eventoChange = (event) => {
		setInputTemporal(event.target.value);
	}

	const eventoKeyDown = (event) => {
		if (event.key === 'Enter') {
			const nuevaTarea = { id: crypto.randomUUID(), label: inputTemporal };

			setTareas([
				...tareas,
				nuevaTarea
			]);

			setInputTemporal(''); 
		}
	};

	const borrarTarea = (id) => {
		const nuevasTareasFiltradas = tareas.filter(tarea => tarea.id !== id);
		setTareas(nuevasTareasFiltradas);
	};

	return (
		<div className="p-5">
			<h1>LISTA DE TAREAS</h1>
			<div className="border border-blue">
				<ul id="listaDeTareas" className="list-group mb-0 rounded-0">
					<li className="list-group-item">
						<input
							type="text"
							className="form-control"
							placeholder="¿Qué necesitas hacer hoy?"
							value={inputTemporal}
							onChange={eventoChange}
							onKeyDown={eventoKeyDown}
						/>
					</li>

					{tareas.length > 0 ? (

						tareas.map((tarea) => (
							<li key={tarea.id}
								className="list-group-item d-flex justify-content-between align-items-center elemento-hover"
							>
								<p className="m-0">{tarea.label}</p>

								<button
									className="boton-borrar btn btn-danger btn-sm"
									onClick={() => borrarTarea(tarea.id)}
								>
									<i className="fa-solid fa-trash-can"></i>
								</button>
							</li>
						))

					) : (

						<li className="list-group-item position-relative">
							<p className="m-0">No hay tareas, añadir tareas</p>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
