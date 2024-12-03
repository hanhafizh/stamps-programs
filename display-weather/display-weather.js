// Ambil API dari .env
require("dotenv").config();
const fetch = require("node-fetch");

// Fungsi untuk mendapatkan prakiraan cuaca 5 hari
const getWeatherForecast = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Menyimpan data cuaca per hari
    const dailyData = [];

    new Set(
      data.list.map((item) => {
        // Mengonversi timestamp menjadi objek Date
        const date = new Date(item.dt * 1000);

        // Mengubah tanggal menjadi format 'short'
        const dateString = date.toLocaleDateString("en-GB", {
          weekday: "short",
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        const temp = item.main.temp.toFixed(2);

        // Check data dan tampilkan hanya 5 hari
        if (
          !dailyData.some((entry) => entry.date === dateString) &&
          dailyData.length < 5
        ) {
          dailyData.push({ date: dateString, temp });
        }
      })
    );

    dailyData.forEach(({ date, temp }) => console.log(`${date}: ${temp}°C`));
  } catch (error) {
    console.error("Error fetching weather forecast:", error.message);
  }
};

getWeatherForecast("Jakarta");
