// App shell — single view (Terminal).

function App() {
  return <window.Terminal />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
