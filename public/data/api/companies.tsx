// pages/api/companies.js
export default function handler(req, res) {
    const { category } = req.query;
  
    // Здесь должен быть ваш код для получения данных о компаниях.
    // Это пример статичных данных для демонстрации.
  
    const allCompanies = [
      { id: 1, name: 'Company A', address: '123 Street', latitude: 51.1657, longitude: 10.4515, category: 'IT' },
      { id: 2, name: 'Company B', address: '456 Avenue', latitude: 52.1657, longitude: 11.4515, category: 'Finance' },
      // Добавьте больше данных здесь
    ];
  
    const filteredCompanies = category ? allCompanies.filter(comp => comp.category === category) : allCompanies;
  
    res.status(200).json(filteredCompanies);
  }
  