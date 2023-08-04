const $form = document.querySelector("#form");

class ATM {
  constructor() {
    this.cardnumber = "190500";
    this.pin = "1905";
    this.balance = 15000;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      alert("No tienes suficiente dinero.");
      return;
    }

    this.balance -= amount;
    alert("Has retirado " + amount + " RD pesos.");
  }

  deposit(amount) {
    this.balance = parseInt(this.balance) + parseInt(amount);
    alert("Has depositado " + amount + " RD pesos.");
  }

  checkBalance() {
    alert("Tu saldo es de " + this.balance + " pesos.");
  }
}

const atm = new ATM();

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  if ($form.cardnumber.value !== atm.cardnumber || $form.pin.value !== atm.pin)
    return alert("Las credenciales no son correctas");

  const action = $form.querySelector("input[name=action]:checked")?.value;

  switch (action) {
    case "withdraw":
      atm.withdraw(prompt("¿Cuánto dinero desea retirar?"));
      break;
    case "deposit":
      atm.deposit(prompt("¿Cuánto dinero desea depositar?"));
      break;
    case "checkbalance":
      atm.checkBalance();
      break;
    default:
      alert("la opcion seleccionada no existe");
      break;
  }
});
