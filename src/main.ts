type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
    id: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    temperatura: number;
    frecuenciaCardiaca: number;
    especialidad: Especialidad;
    edad: number;
}

const pacientes: Pacientes[] = [
    {
        id: 1,
        nombre: "John",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Medico de familia",
        edad: 44,
    },
    {
        id: 2,
        nombre: "Jane",
        apellidos: "Doe",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 70,
        especialidad: "Medico de familia",
        edad: 43,
    },
    {
        id: 3,
        nombre: "Junior",
        apellidos: "Doe",
        sexo: "Male",
        temperatura: 36.8,
        frecuenciaCardiaca: 90,
        especialidad: "Pediatra",
        edad: 8,
    },
    {
        id: 4,
        nombre: "Mary",
        apellidos: "Wien",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 120,
        especialidad: "Medico de familia",
        edad: 20,
    },
    {
        id: 5,
        nombre: "Scarlett",
        apellidos: "Somez",
        sexo: "Female",
        temperatura: 36.8,
        frecuenciaCardiaca: 110,
        especialidad: "Cardiólogo",
        edad: 30,
    },
    {
        id: 6,
        nombre: "Brian",
        apellidos: "Kid",
        sexo: "Male",
        temperatura: 39.8,
        frecuenciaCardiaca: 80,
        especialidad: "Pediatra",
        edad: 11,
    },
];

// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra");
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter(paciente => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados. Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;

    if(pacientes.some(paciente => paciente.frecuenciaCardiaca > 100 && paciente.temperatura >39)){
        activarProtocolo = true;
    };

    return activarProtocolo;
};

console.log(activarProtocoloUrgencia(pacientes));

// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
    ): Pacientes[] => {
        pacientes.forEach(paciente => {
            if (paciente.especialidad === "Pediatra") {
                paciente.especialidad = "Medico de familia";
            }
        })
        return pacientes;
    };

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    return pacientes.some(paciente => paciente.especialidad === "Pediatra");
};

console.log(hayPacientesDePediatria(pacientes));


//Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {  
    let conteo : NumeroPacientesPorEspecialidad= {
        medicoDeFamilia: 0,
        pediatria: 0,
        cardiologia: 0,
    }

    pacientes.forEach(paciente => {
        if (paciente.especialidad === "Cardiólogo") {
            conteo.cardiologia += 1;
        } else if (paciente.especialidad === "Medico de familia") {
            conteo.medicoDeFamilia +=1;
        } else if (paciente.especialidad === "Pediatra") {
            conteo.pediatria +=1;
        }
    })
    return conteo;
};
console.log(cuentaPacientesPorEspecialidad(pacientes));