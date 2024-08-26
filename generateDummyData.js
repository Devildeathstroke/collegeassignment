const fs = require('fs');

const generateDummyData = () => {
  const colleges = [];

  for (let i = 0; i < 1000; i++) {
    colleges.push({
      id: i + 1, // Unique ID
      name: `College ${i + 1}`,
      rating: (Math.random() * 5).toFixed(1),
      fees: Math.floor(Math.random() * 50000) + 10000,
      userReview: (Math.random() * 5).toFixed(1),
      featured: Math.random() < 0.5,
    });
  }

  return colleges;
};

const data = generateDummyData();
fs.writeFileSync('colleges.json', JSON.stringify(data, null, 2));
console.log('Dummy data generated successfully.');
