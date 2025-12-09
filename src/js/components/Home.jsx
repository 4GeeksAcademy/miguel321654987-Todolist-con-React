import React, { useState } from 'react';

const Home = () => {

	const [tareas, setTareas] = useState([]);
	const [inputTemporal, setInputTemporal] = useState('');

	const handleKeyDown = (event) => {
		// Verificamos si la tecla es 'Enter' Y el input no está vacío
		if (event.key === 'Enter' && inputTemporal.trim() !== '') {
			event.preventDefault(); // Previene el comportamiento por defecto (p. ej. recargar la página)
			const nuevaTarea = { id: Date.now(), label: inputTemporal.trim() };
			setTareas([...tareas, nuevaTarea]);
			setInputTemporal(''); // Limpiamos el input
		}
	};

	const removeTarea = (id) => {
		const tareasRestantes = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasRestantes);
	};

	return (
		<div className="p-5">
			<h1>LISTA DE TAREAS</h1>
			<div className="border border-blue">
				<ul id="listaDeTareas" className="list-group mb-0 rounded-0">

					{/* CORRECCIÓN CLAVE: onKeyDown debe ser un atributo del input */}
					<li className="list-group-item">
						<input
							type="text"
							className="form-control"
							placeholder="¿Qué necesitas hacer hoy?"
							value={inputTemporal}
							onChange={(e) => setInputTemporal(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</li>

					{tareas.length > 0 ? (
						tareas.map((item) => (
							<li
								key={item.id}
								className="list-group-item d-flex justify-content-between align-items-center task-item-hover"
							>
								<p className="m-0">{item.label}</p>

								<button
									className="btn btn-danger btn-sm delete-btn"
									onClick={() => removeTarea(item.id)}
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
