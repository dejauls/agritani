/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './brosur.html', './produk.html',
     './artikel.html', './detail-artikel.html', './produkdetail.html', './kontak.html', './implementasi.html', './linkt.html',
     './artikel/**/*.html', './*.html'
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
