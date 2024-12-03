# Dokumentasi dan Cara Penginstalan Penggunaan

## 1. Meng-clone Repository

Untuk memulai, Anda perlu meng-clone repository ke komputer. Gunakan perintah berikut di terminal atau command prompt:

```
git clone <URL_REPO>
```

Gantilah <URL_REPO> dengan URL repository yang sesuai.

## 2. Masuk ke Direktori Proyek

Setelah berhasil meng-clone repository, masuk ke dalam direktori proyek:

```
cd nama-direktori
```

Gantilah nama-direktori dengan nama folder proyek.

## 3. Menginstal Dependensi

Proyek ini menggunakan Node.js dan membutuhkan beberapa dependensi untuk berjalan, seperti node-fetch dan paket lainnya. Untuk menginstalnya, jalankan perintah berikut:

```
npm install
```

Perintah ini akan menginstal semua dependensi yang tercantum dalam file package.json.

## 4. Menyiapkan File .env

Proyek ini menggunakan environment variables untuk menyimpan API key secara aman. Anda perlu membuat file .env di root folder proyek dengan konten seperti berikut:

```
OPENWEATHER_API_KEY=<API_KEY_ANDA>
```

Gantilah <API_KEY_ANDA> dengan API key yang Anda dapatkan dari OpenWeather.

## 5. Menjalankan Program

Setelah semua dependensi terinstal dan file .env sudah diatur, Anda dapat menjalankan program cuaca dengan perintah berikut:

```
node display-weather.js
```

Program akan menampilkan prakiraan cuaca untuk kota yang Anda tentukan dalam kode (misalnya "Jakarta").
