/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './brosur.html', './produk.html',
     './artikel.html', './detail-artikel.html', './produkdetail.html', './kontak.html', './implementasi.html', './linkt.html',
     './apakah-pupuk-aman-untuk-sayuran-yuk-cari-tahu.html', './tips-pemupukan-efektif-untuk-meningkatkan-hasil-panen.html',
     './peran-pupuk-NPK-dalam-meningkatkan-produktivitas-lahan-pertanian.html', './panduan-memilih-pupuk-yang-tepat-untuk-tanaman-padi-dan-palawija.html'
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
