# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

per cambiare sceda aperta posso usare opacity con un timer così che diventa opaca solo quella attiva (usando state?)
all placeholders should go in favor of values taken from actual data


        let retrievedProjects = JSON.parse(localStorage.getItem('projectsJson'));
        
        function updateLocalStorage() {
        localStorage.setItem('projectsJson', JSON.stringify(projects));
    }
