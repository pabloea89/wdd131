const products = [
    { id: "fc-1888", 
      name: "Flux Capacitor", 
      averagerating: 4.5 
    },

    { id: "fc-2050", 
      name: "Power Laces", 
      averagerating: 4.7 
    },
    { id: "fs-1987", 
      name: "Time Circuits", 
      averagerating: 3.5 
    },
    { id: "ac-2000", 
      name: "Low Voltage Reactor", 
      averagerating: 3.9 
    },
    { id: "jj-1969", 
      name: "Warp Equalizer", 
      averagerating: 5.0
     }
  ];
  
  document.addEventListener("DOMContentLoaded", () => {
      const productSelect = document.getElementById("product");
      products.forEach(product => {
          let option = document.createElement("option");
          option.value = product.id;
          option.textContent = `${product.name} (Rating: ${product.averagerating})`;
          productSelect.appendChild(option);
      });
  });

  const currentYear = new Date().getFullYear();
  const lastModified= document.lastModified;
  
  document.getElementById('currentyear').textContent = `${currentYear} | Pablo Acuna | Argentina`;
  document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
