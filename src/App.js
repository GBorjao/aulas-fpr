import logo from './logo.svg';
import './App.css';

function App() {
  const LavaBar = [
    {
      cliente: "Vinicius",
      carro: "Mitsubishi Lancer",
      bairro: "Santa Luzia",
      mensalista: true,
      mensal_pago: true,
      Idade: 25,
      bebida: {
        quente:'whisky White-Horse',
        cerveja:'Skol'
      }
    },
    {
      cliente: "Eder",
      carro: "Chevrolet Corsa",
      bairro: "Santa Luzia",
      mensalista: true,
      mensal_pago: false,
      Idade: 23,
      bebida: {
        quente: "Whisky Ballantine's",  
        cerveja: "Cerveja Original"
      }
    },
    {
      cliente: "Debora",
      carro: "Volkswagen Gol",
      bairro: "Ouro Fino",
      mensalista: false,
      mensal_pago: false,
      idade: 18,
      bebida: {
        quente: "Agua de Coco", 
        cerveja: "Fanta Uva"
      }
    }
  ]
 
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
