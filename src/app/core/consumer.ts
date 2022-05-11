import { AtomicStore, Reducer } from "./atomic.store";

export class Cuenta {
  saldo: number;
  titulares: string[];
}

const cuenta1 = {
  saldo: 0,
  titulares: ["Manuel"],
};

function ingresar(current: Cuenta, importe: number) {
  const state = { ...current };
  state.saldo += importe;
  return state;
}
function retirar(current: Cuenta, importe: number) {
  const state = { ...current };
  state.saldo -= importe;
  return state;
}
function agregarTitular(current: Cuenta, titular: string) {
  const state = { ...current };
  state.titulares.push(titular);
  return state;
}

const reductores = new Map<string, Reducer<Cuenta>>();
reductores.set("Ingresar", ingresar);
reductores.set("Retirar", retirar);
reductores.set("AgregarTitular", agregarTitular);

const cuentaManuel = new AtomicStore<Cuenta>(cuenta1, reductores);
//cuentaManuel.set(cuenta1);
cuenta1.saldo = 99;
console.log(cuentaManuel.get()); // 0 //99
const cuenta = cuentaManuel.get();
cuenta.saldo = 9;
const cuenta2 = cuentaManuel.get();
console.log(cuenta2); // 0 //9
cuentaManuel.get$().subscribe((cuenta) => console.log(cuenta.saldo));
cuentaManuel.set({ saldo: 88 });

cuentaManuel.dispatch({ type: "Ingresar", payload: { importe: 23 } });
cuentaManuel.dispatch({ type: "Ingresar", payload: { importe: 5 } });
cuentaManuel.dispatch({ type: "Retirar", payload: { importe: 15 } });
cuentaManuel.dispatch({ type: "Ingresar", payload: { importe: 8 } });
cuentaManuel.dispatch({ type: "AgregarTitular", payload: { titular: "pepe" } });
