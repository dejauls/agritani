/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './brosur.html', './produk.html',
     './artikel.html', './detail-artikel.html', './produkdetail.html', './kontak.html',
     './pupuk-terbaik-untuk-hasil-panen-yang-optimal-di-Sumatera-Utara.html', './apakah-pupuk-aman-untuk-sayuran.html', './tes.html'
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#273913',
        'greeno': '#008000',
        'putih': '#fffef4',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
