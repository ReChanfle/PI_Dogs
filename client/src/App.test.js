import { render, screen } from '@testing-library/react';
import App from './App';
import Card from './components/Card';
import Cards from './components/Cards';
import Detail from './components/Detail';

xtest('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe("El Componente debe existir", ()=>{
  it("Debe ser una funcion", ()=>{expect(typeof Card).toBe("function")})
})



describe("El Componente debe existir", ()=>{
  it("Debe ser una funcion", ()=>{expect(typeof Cards).toBe("function")})
})



describe("El Componente debe existir", ()=>{
  it("Debe ser una funcion", ()=>{expect(typeof Detail).toBe("function")})
})



