import React from 'react';

const contactos = [
  { id: 1, nombre: 'Victoria', apellido: "Perez", telefono: '123-456-7890' },
  { id: 2, nombre: 'Maria', apellido: "Gomez", telefono: '987-654-3210' },
  { id: 3, nombre: 'Pedro', apellido: "Garcia", telefono: '545-001-9815' },
  { id: 4, nombre: 'Julieta', apellido: "Ponce", telefono: '198-010-1910' },
  { id: 5, nombre: 'Gabriel', apellido: "Fernandez", telefono: '391-088-6510' },
  { id: 6, nombre: 'Nicolas', apellido: "Guzman", telefono: '416-941-2241' },

 
];

const Contacto = ({ nombre, apellido, telefono }) => (
  <div>
    <h3>{nombre} {apellido}</h3>
    <p>Telefono: {telefono}</p>
  </div>
);

const Agenda = () => (
  <div className="contacto">
    {contactos.map(contacto => (
      <Contacto
        key={contacto.id}
        nombre={contacto.nombre}
        apellido={contacto.apellido}
        telefono={contacto.telefono}
      />
    ))}
  </div>
);

export default Agenda;
{}
